'use client';

import { useEffect, useRef } from 'react';

// Fixed page chrome for the homepage: grain overlay, cursor glow, scroll bar.
// The glow lerps toward the cursor via transform only (never left/top) and is
// disabled under prefers-reduced-motion.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function GlobalChrome() {
  const barRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const glow = glowRef.current;
    let raf = 0;
    let mx: number | null = null;
    let my = 0;
    let gx: number | null = null;
    let gy = 0;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (glow && mx != null) {
        gx = gx == null ? mx : gx + (mx - gx) * 0.07;
        gy = gy == null ? my : gy + (my - gy) * 0.07;
        glow.style.transform = `translate(${gx - 300}px, ${gy - 300}px)`;
      }
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    if (!reduce) {
      window.addEventListener('mousemove', onMove);
      loop();
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] opacity-[0.05]"
        style={{ backgroundImage: GRAIN }}
      />
      {/* Cursor glow (pointer devices only) */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[600px] w-[600px] rounded-full md:block"
        style={{
          background:
            'radial-gradient(circle, rgba(111,91,245,.13), transparent 65%)',
        }}
      />
      {/* Scroll progress */}
      <div aria-hidden className="fixed inset-x-0 top-0 z-[80] h-0.5">
        <div ref={barRef} className="h-full w-0 bg-accent" />
      </div>
    </>
  );
}
