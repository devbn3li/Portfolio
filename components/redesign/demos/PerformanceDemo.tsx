'use client';

import { useEffect, useId, useRef, useState } from 'react';
import DemoCard from './DemoCard';

type Particle = { x: number; y: number; d: number; s: number; o: number };

// Demo 4 — 60 fps under load. A fixed seed of 400 particles (never regenerated
// on slider change, or they would teleport). FPS is written via a ref, never
// React state, so the page does not re-render twice a second. Mounted lazily
// via IntersectionObserver so it never competes with LCP.
export default function PerformanceDemo() {
  const [count, setCount] = useState(80);
  const [seed, setSeed] = useState<Particle[] | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const fpsRef = useRef<HTMLSpanElement>(null);
  const uid = useId();

  // Lazy activate + generate the seed once the panel scrolls into view.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeed((prev) =>
              prev ??
              Array.from({ length: 400 }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                d: 3 + Math.random() * 8,
                s: 2 + Math.random() * 5,
                o: Math.random() * 6,
              }))
            );
            io.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // FPS meter: count rAF ticks, divide by elapsed every 500ms, clamp to 60.
  useEffect(() => {
    if (!seed) return;
    let raf = 0;
    let frames = 0;
    let last = performance.now();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      frames += 1;
    };
    raf = requestAnimationFrame(tick);
    const iv = setInterval(() => {
      const now = performance.now();
      const fps = Math.min(60, Math.round((frames * 1000) / (now - last))) || 60;
      if (fpsRef.current) fpsRef.current.textContent = String(fps);
      frames = 0;
      last = now;
    }, 500);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(iv);
    };
  }, [seed]);

  return (
    <DemoCard title="60 FPS UNDER LOAD" tag="PERFORMANCE">
      <div
        ref={wrapRef}
        aria-hidden
        className="relative min-h-[240px] flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-ink"
      >
        {seed?.slice(0, count).map((p, i) => (
          <span
            key={i}
            className="rd-float"
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.d,
              height: p.d,
              borderRadius: '50%',
              background: i % 5 === 0 ? '#6f5bf5' : 'rgba(236,235,228,.25)',
              willChange: 'transform',
              animation: `rd-float ${p.s}s ${-p.o}s ease-in-out infinite alternate`,
            }}
          />
        ))}
        <div className="absolute right-3 top-[10px] rounded-md bg-ink/70 px-2 py-[3px] font-mono text-xs text-success">
          <span ref={fpsRef}>60</span> FPS
        </div>
      </div>

      <label
        htmlFor={`${uid}-p`}
        className="flex items-center gap-[10px] font-mono text-[11px] text-paper-muted"
      >
        PARTICLES
        <span className="min-w-[32px] text-right text-paper">{count}</span>
        <input
          id={`${uid}-p`}
          type="range"
          min={20}
          max={400}
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          aria-label={`Particles ${count}`}
          className="flex-1 accent-accent"
        />
      </label>
      <p className="m-0 text-[13px] text-paper-muted">
        Crank it to 400. GPU-composited transforms keep the frame rate pinned
        while the rest of the page stays interactive.
      </p>
    </DemoCard>
  );
}
