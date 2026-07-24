'use client';

import { useRef, useState } from 'react';
import DemoCard from './DemoCard';

const DOT = {
  position: 'absolute' as const,
  width: 34,
  height: 34,
  margin: '-17px 0 0 -17px',
  borderRadius: '50%',
  pointerEvents: 'none' as const,
};

// Demo 2 — Spring physics. Click sets a target; the ball overshoots via a
// >1 cubic-bezier control point and a slower ghost ring trails behind.
export default function PhysicsDemo() {
  const [pos, setPos] = useState({ x: 50, y: 42 });
  const padRef = useRef<HTMLDivElement>(null);

  const move = (clientX: number, clientY: number) => {
    const el = padRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: ((clientX - r.left) / r.width) * 100,
      y: ((clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <DemoCard title="SPRING PHYSICS" tag="MOTION">
      <div
        ref={padRef}
        role="button"
        tabIndex={0}
        aria-label="Click or press Enter to fling the ball to a new spot and watch it overshoot"
        onClick={(e) => move(e.clientX, e.clientY)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const el = padRef.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            move(r.left + Math.random() * r.width, r.top + Math.random() * r.height);
          }
        }}
        className="relative min-h-[240px] flex-1 cursor-crosshair overflow-hidden rounded-xl border border-white/[0.06] bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,.07) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      >
        <div
          style={{
            ...DOT,
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            border: '1px solid rgba(111,91,245,.45)',
            transition:
              'left 1.1s cubic-bezier(.3,1.5,.5,1), top 1.1s cubic-bezier(.3,1.5,.5,1)',
          }}
        />
        <div
          style={{
            ...DOT,
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            background: '#6f5bf5',
            boxShadow: '0 6px 24px rgba(111,91,245,.5)',
            transition:
              'left .7s cubic-bezier(.3,1.6,.5,1), top .7s cubic-bezier(.3,1.6,.5,1)',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-3 text-center font-mono text-[11px] tracking-[0.12em] text-paper-dim">
          CLICK ANYWHERE. WATCH THE OVERSHOOT
        </div>
      </div>
      <p className="m-0 text-[13px] text-paper-muted">
        One transition, one custom cubic-bezier. Motion that feels physical
        doesn&apos;t need a library.
      </p>
    </DemoCard>
  );
}
