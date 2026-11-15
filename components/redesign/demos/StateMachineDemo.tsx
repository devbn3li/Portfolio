'use client';

import { useEffect, useRef, useState } from 'react';
import DemoCard from './DemoCard';

type Order = 'idle' | 'loading' | 'success';

const STEPS: { key: Order; label: string }[] = [
  { key: 'idle', label: 'IDLE' },
  { key: 'loading', label: 'LOADING' },
  { key: 'success', label: 'SUCCESS' },
];

const BUTTON: Record<Order, { label: string; cls: string }> = {
  idle: { label: 'Deploy to production', cls: 'bg-peach text-petrol' },
  loading: { label: 'Deploying…', cls: 'bg-abyss text-mist' },
  success: { label: 'Live ✓', cls: 'bg-success text-petrol' },
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
      <div className="flex min-h-[240px] flex-1 flex-col items-center justify-center gap-[22px] rounded-xl border border-mist/[0.06] bg-petrol">
        <div className="flex gap-2 text-[10px] tracking-[0.1em]">
          {STEPS.map((step) => {
            const on = step.key === order;
            return (
              <span
                key={step.key}
                className={`rounded-full border px-[10px] py-1 transition-all duration-300 ${
                  on
                    ? 'border-peach bg-peach text-petrol'
                    : 'border-mist/[0.12] text-mist/70'
                }`}
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
          className={`inline-flex items-center gap-[10px] rounded-full border-0 text-[15px] font-extrabold transition-transform duration-150 hover:scale-[1.04] disabled:hover:scale-100 ${btn.cls}`}
          style={{
            padding: '15px 32px',
            cursor: order === 'idle' ? 'pointer' : 'default',
          }}
        >
          {order === 'loading' && (
            <span
              aria-hidden
              className="rd-spin inline-block h-[14px] w-[14px] rounded-full border-2 border-mist/30 border-t-mist"
              style={{
                animation: 'rd-spin .7s linear infinite',
              }}
            />
          )}
          {btn.label}
        </button>

        <div className="h-[3px] w-[180px] overflow-hidden rounded-full bg-mist/[0.08]">
          <div
            style={{
              height: '100%',
              borderRadius: 999,
              background:
                order === 'success'
                  ? 'rgb(var(--success))'
                  : 'rgb(var(--peach))',
              width: order === 'idle' ? '0%' : '100%',
              transition:
                order === 'loading'
                  ? 'width 1.4s linear'
                  : 'width .3s, background .3s',
            }}
          />
        </div>

        <div className="text-[11px] tracking-[0.12em] text-mist/70">
          PRESS IT. EVERY STATE IS DESIGNED
        </div>
      </div>
      <p className="m-0 text-[13px] text-mist">
        Loading, success, disabled, back to idle. Good UI is a state machine
        with no dead ends.
      </p>
    </DemoCard>
  );
}
