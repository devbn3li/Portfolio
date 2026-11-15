'use client';

import { useEffect, useRef, useState } from 'react';

type View = 'frontend' | 'fullstack' | 'delivery' | 'automation';
type Mode = 'before' | 'after';

const EASE = 'cubic-bezier(.22,1,.36,1)';
const ROTATE_MS = 6500;

const VIEWS: { key: View; label: string }[] = [
  { key: 'frontend', label: 'FRONTEND' },
  { key: 'fullstack', label: 'FULL-STACK' },
  { key: 'delivery', label: 'DELIVERY' },
  { key: 'automation', label: 'AUTOMATION' },
];

/* ---------------------------- Frontend view ---------------------------- */

const TILE_COUNT = 28; // "25+ systems"

// Integer hash so server and client produce identical "random" values.
const rnd = (i: number, seed: number) =>
  ((Math.imul(i + 1, 2654435761) ^ Math.imul(seed + 7, 40503)) >>> 0) % 1000 / 1000;

const RADII = ['0px', '3px', '12px', '999px'];
const FILLS = [
  'rgb(var(--body) / .18)',
  'rgb(var(--accent) / .22)',
  'rgb(var(--brand) / .3)',
  'rgb(var(--body) / .07)',
];

const TILES = Array.from({ length: TILE_COUNT }, (_, i) => ({
  transform: `translate(${Math.round(rnd(i, 1) * 16 - 8)}px, ${Math.round(
    rnd(i, 2) * 16 - 8
  )}px) rotate(${Math.round(rnd(i, 3) * 32 - 16)}deg) scale(${(
    0.7 +
    rnd(i, 4) * 0.45
  ).toFixed(2)})`,
  borderRadius: RADII[Math.floor(rnd(i, 5) * RADII.length)],
  backgroundColor: FILLS[Math.floor(rnd(i, 6) * FILLS.length)],
}));

function FrontendStage({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  const after = mode === 'after';
  return (
    <div className="relative h-full">
      <div aria-hidden className="grid h-full grid-cols-7 grid-rows-4 gap-[6px]">
        {TILES.map((tile, i) => (
          <span
            key={i}
            className="border motion-reduce:!transition-none"
            style={{
              transform: after ? 'none' : tile.transform,
              borderRadius: after ? '5px' : tile.borderRadius,
              backgroundColor: after ? 'rgb(var(--brand) / .22)' : tile.backgroundColor,
              borderColor: after ? 'rgb(var(--brand) / .5)' : 'transparent',
              transition: `transform .8s ${EASE} ${i * 14}ms, border-radius .8s ${EASE} ${
                i * 14
              }ms, background-color .8s ${i * 14}ms, border-color .8s ${i * 14}ms`,
            }}
          />
        ))}
      </div>
      <div
        role="group"
        aria-label="Show the portal before or after the refactor"
        className="absolute bottom-0 right-0 flex rounded-full border border-body/[0.14] bg-surface p-[3px] text-[10px] tracking-[0.1em]"
      >
        {(['before', 'after'] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-full px-[10px] py-1 font-extrabold transition-colors duration-300 motion-reduce:transition-none ${
              mode === m ? 'bg-brand text-onbrand' : 'text-muted hover:text-heading'
            }`}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- Full-stack view --------------------------- */

const FLOW = [
  { label: 'UI', sub: 'Web + mobile' },
  { label: 'API', sub: 'Node' },
  { label: 'DATA', sub: 'Database' },
  { label: 'PAY', sub: 'Stripe' },
];

function FullstackStage() {
  return (
    <div aria-hidden className="relative flex h-full items-center">
      <div className="absolute inset-x-[10%] top-1/2 h-px bg-body/20">
        <span className="sc-travel absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-accent" />
      </div>
      <div className="relative grid w-full grid-cols-4 gap-2">
        {FLOW.map((node, i) => (
          <div
            key={node.label}
            className="sc-node flex flex-col items-center gap-1 rounded-[10px] border border-body/20 bg-page px-1 py-3"
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <span className="text-[11px] font-extrabold tracking-[0.1em] text-brand">
              {node.label}
            </span>
            <span className="text-[10px] text-muted">{node.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Delivery view ---------------------------- */

const STEPS = ['TEST', 'BUILD', 'DEPLOY', 'MONITOR'];

function DeliveryStage() {
  return (
    <div aria-hidden className="flex h-full flex-col justify-center gap-[10px]">
      {STEPS.map((step, i) => (
        <div
          key={step}
          className="grid grid-cols-[64px_1fr_16px] items-center gap-3 text-[10px] tracking-[0.12em] text-muted"
        >
          <span>{step}</span>
          <span className="h-[6px] overflow-hidden rounded-full bg-body/10">
            <span
              className="sc-fill block h-full origin-left rounded-full bg-brand"
              style={{ animationDelay: `${i * 0.9}s` }}
            />
          </span>
          <span
            className="sc-check text-[12px] text-success"
            style={{ animationDelay: `${i * 0.9}s` }}
          >
            ✓
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------- Automation view --------------------------- */

const JOBS = ['Expire unpaid bookings', 'Send trip reminders', 'Email and push alerts'];

function AutomationStage() {
  return (
    <div aria-hidden className="flex h-full items-center gap-5">
      <div className="relative grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full border border-body/25">
        <span className="sc-hand absolute left-1/2 top-1/2 h-[28px] w-[2px] origin-top -translate-x-1/2 rounded-full bg-brand" />
        <span className="h-[6px] w-[6px] rounded-full bg-brand" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {JOBS.map((job, i) => (
          <div
            key={job}
            className="sc-node flex items-center gap-2 rounded-[8px] border border-body/20 px-3 py-[7px] text-[11px] text-body"
            style={{ animationDelay: `${i * 1.05}s` }}
          >
            <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-success" />
            <span className="truncate">{job}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- Shell -------------------------------- */

const TRAILUP = 'From TrailUp, a trip-booking product I build.';

const INFO: Record<
  View,
  { title: string; caption: string; metrics: { label: string; value: string; before?: string }[] }
> = {
  frontend: {
    title: 'ONE PORTAL · 25+ SYSTEMS',
    caption: 'SustainGRC portal refactor. Illustration, not to scale.',
    metrics: [
      { label: 'ARCHITECTURE', before: 'Legacy', value: 'Modern Next.js' },
      { label: 'UI', before: 'Inconsistent', value: 'One system' },
      { label: 'INITIAL LOAD', before: '60s+', value: 'A few seconds' },
    ],
  },
  fullstack: {
    title: 'ONE REQUEST, END TO END',
    caption: 'Across products I build end to end, including an ad system.',
    metrics: [
      { label: 'CLIENT', value: 'React, React Native' },
      { label: 'SERVER', value: 'Node, Express' },
      { label: 'PAYMENTS', value: 'Stripe' },
    ],
  },
  delivery: {
    title: 'FROM COMMIT TO PRODUCTION',
    caption: TRAILUP,
    metrics: [
      { label: 'TESTS', value: 'Unit + integration' },
      { label: 'BUILDS', value: 'Docker, EAS' },
      { label: 'MONITORING', value: 'Sentry' },
    ],
  },
  automation: {
    title: 'JOBS THAT RUN THEMSELVES',
    caption: TRAILUP,
    metrics: [
      { label: 'SCHEDULED', value: 'Cron jobs' },
      { label: 'HANDLES', value: 'Expiry, reminders' },
      { label: 'NOTIFIES', value: 'Email, push' },
    ],
  },
};

// Hero visual: four sides of the work, one tab each. Rotates on its own until
// the visitor picks a tab; pauses while hovered or focused.
export default function WorkShowcase() {
  const [view, setView] = useState<View>('frontend');
  const [mode, setMode] = useState<Mode>('before');
  const [auto, setAuto] = useState(true);
  const paused = useRef(false);

  // The frontend view always opens "before" and settles into "after".
  useEffect(() => {
    if (view !== 'frontend') return;
    const t = setTimeout(() => setMode('after'), 1500);
    return () => clearTimeout(t);
  }, [view]);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const iv = setInterval(() => {
      if (paused.current || document.hidden) return;
      setView((v) => {
        const next = VIEWS[(VIEWS.findIndex((x) => x.key === v) + 1) % VIEWS.length].key;
        if (next === 'frontend') setMode('before');
        return next;
      });
    }, ROTATE_MS);
    return () => clearInterval(iv);
  }, [auto]);

  const pick = (next: View) => {
    setAuto(false);
    if (next === 'frontend' && view !== 'frontend') setMode('before');
    setView(next);
  };

  const info = INFO[view];
  const settled = view !== 'frontend' || mode === 'after';

  return (
    <div
      className="rd-fade-up min-w-0 rounded-[18px] border border-body/[0.08] bg-surface p-5 sm:p-6"
      style={{ animation: `rd-fade-up .8s .6s ${EASE} both` }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div
        role="group"
        aria-label="What to show"
        className="flex flex-wrap gap-1 text-[10.5px] tracking-[0.1em]"
      >
        {VIEWS.map((v) => (
          <button
            key={v.key}
            type="button"
            aria-pressed={view === v.key}
            onClick={() => pick(v.key)}
            className={`rounded-full border px-3 py-[6px] font-extrabold transition-colors duration-300 motion-reduce:transition-none ${
              view === v.key
                ? 'border-brand bg-brand text-onbrand'
                : 'border-body/[0.14] text-muted hover:text-heading'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className="mt-5 text-[11px] tracking-[0.12em] text-muted">
        {info.title}
      </div>

      <div className="mt-3 aspect-[5/3] rounded-xl border border-body/[0.06] bg-page p-4">
        {/* key restarts each view's CSS animation when it is shown again */}
        <div key={view} className="sc-in h-full">
          {view === 'frontend' && <FrontendStage mode={mode} setMode={setMode} />}
          {view === 'fullstack' && <FullstackStage />}
          {view === 'delivery' && <DeliveryStage />}
          {view === 'automation' && <AutomationStage />}
        </div>
      </div>

      <dl aria-live="polite" className="m-0 mt-4 grid grid-cols-3 gap-3">
        {info.metrics.map((metric) => (
          <div key={metric.label}>
            <dt className="text-[10px] tracking-[0.12em] text-muted">
              {metric.label}
            </dt>
            <dd
              className={`m-0 mt-1 text-[13px] font-extrabold leading-[1.25] transition-colors duration-500 motion-reduce:transition-none ${
                settled ? 'text-brand' : 'text-body'
              }`}
            >
              {settled ? metric.value : metric.before}
            </dd>
          </div>
        ))}
      </dl>

      <p className="m-0 mt-4 text-[11px] text-muted">{info.caption}</p>
    </div>
  );
}
