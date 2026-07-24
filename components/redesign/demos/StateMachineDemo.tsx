'use client';

import { useEffect, useRef, useState } from 'react';
import DemoCard from './DemoCard';

type Order = 'idle' | 'loading' | 'success';

const STEPS: { key: Order; label: string }[] = [
  { key: 'idle', label: 'IDLE' },
  { key: 'loading', label: 'LOADING' },
  { key: 'success', label: 'SUCCESS' },
];

const BUTTON: Record<Order, { label: string; bg: string; color: string }> = {
  idle: { label: 'Deploy to production', bg: '#6f5bf5', color: '#fff' },
  loading: { label: 'Deploying…', bg: '#232330', color: '#fff' },
  success: { label: 'Live ✓', bg: '#3ddc97', color: '#0a0a0e' },
};

// Demo 3 — State machine. idle -> loading(1400ms) -> success(1800ms) -> idle.
// Re-clicks are ignored while busy.
export default function StateMachineDemo() {
  const [order, setOrder] = useState<Order>('idle');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
    if (order !== 'idle') return;
    setOrder('loading');
    timers.current.push(
      setTimeout(() => {
        setOrder('success');
        timers.current.push(setTimeout(() => setOrder('idle'), 1800));
      }, 1400)
    );
  };

  const btn = BUTTON[order];

  return (
    <DemoCard title="STATE MACHINE" tag="UX STATES">
      <div className="flex min-h-[240px] flex-1 flex-col items-center justify-center gap-[22px] rounded-xl border border-white/[0.06] bg-ink">
        <div className="flex gap-2 font-mono text-[10px] tracking-[0.1em]">
          {STEPS.map((step) => {
            const on = step.key === order;
            return (
              <span
                key={step.key}
                className="rounded-full border px-[10px] py-1 transition-all duration-300"
                style={
                  on
                    ? {
                        color: '#0a0a0e',
                        background: '#6f5bf5',
                        borderColor: '#6f5bf5',
                      }
                    : { color: '#55545e', borderColor: 'rgba(255,255,255,.12)' }
                }
              >
                {step.label}
              </span>
            );
          })}
        </div>

        <button
          type="button"
          onClick={run}
          disabled={order !== 'idle'}
          aria-busy={order === 'loading'}
          className="inline-flex items-center gap-[10px] rounded-full border-0 font-grotesk text-[15px] font-semibold transition-transform duration-150 hover:scale-[1.04] disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          style={{
            background: btn.bg,
            color: btn.color,
            padding: '15px 32px',
            cursor: order === 'idle' ? 'pointer' : 'default',
          }}
        >
          {order === 'loading' && (
            <span
              aria-hidden
              className="inline-block h-[14px] w-[14px] rounded-full"
              style={{
                border: '2px solid rgba(255,255,255,.3)',
                borderTopColor: '#fff',
                animation: 'rd-spin .7s linear infinite',
              }}
            />
          )}
          {btn.label}
        </button>

        <div className="h-[3px] w-[180px] overflow-hidden rounded-full bg-white/[0.08]">
          <div
            style={{
              height: '100%',
              borderRadius: 999,
              background: order === 'success' ? '#3ddc97' : '#6f5bf5',
              width: order === 'idle' ? '0%' : '100%',
              transition:
                order === 'loading'
                  ? 'width 1.4s linear'
                  : 'width .3s, background .3s',
            }}
          />
        </div>

        <div className="font-mono text-[11px] tracking-[0.12em] text-paper-dim">
          PRESS IT. EVERY STATE IS DESIGNED
        </div>
      </div>
      <p className="m-0 text-[13px] text-paper-muted">
        Loading, success, disabled, back to idle. Good UI is a state machine
        with no dead ends.
      </p>
    </DemoCard>
  );
}
