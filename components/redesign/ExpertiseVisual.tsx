import type { CSSProperties } from 'react';

export type VisualKind =
  | 'codebase'
  | 'performance'
  | 'ui'
  | 'devices'
  | 'api'
  | 'pipeline';

// Small looping illustrations for the Expertise cards. Pure CSS (keyframes in
// globals.css), no client JS. Each one's resting style is the "after" state,
// so reduced-motion users simply see the tidy result.
const vars = (v: Record<string, string>) => v as CSSProperties;

const BLOCKS = [
  { x: '-14px', y: '10px', r: '-18deg' },
  { x: '18px', y: '-8px', r: '12deg' },
  { x: '-6px', y: '16px', r: '24deg' },
  { x: '20px', y: '6px', r: '-10deg' },
  { x: '-18px', y: '-12px', r: '16deg' },
  { x: '8px', y: '14px', r: '-22deg' },
  { x: '-10px', y: '-16px', r: '8deg' },
  { x: '16px', y: '12px', r: '-14deg' },
  { x: '-20px', y: '4px', r: '20deg' },
];

const PILLS = [
  { br: '0px', w: '62%', bg: 'rgb(var(--body) / .3)' },
  { br: '999px', w: '100%', bg: 'rgb(var(--accent) / .3)' },
  { br: '2px', w: '78%', bg: 'rgb(var(--brand) / .45)' },
  { br: '16px', w: '48%', bg: 'rgb(var(--accent) / .2)' },
  { br: '0px', w: '90%', bg: 'rgb(var(--body) / .18)' },
  { br: '999px', w: '66%', bg: 'rgb(var(--brand) / .3)' },
];

export default function ExpertiseVisual({ kind }: { kind: VisualKind }) {
  return (
    <div
      aria-hidden
      className="mb-7 grid h-[136px] place-items-center overflow-hidden rounded-xl border border-body/[0.06] bg-page p-4"
    >
      {kind === 'codebase' && (
        <div className="grid w-full max-w-[280px] grid-cols-3 gap-2">
          {BLOCKS.map((b, i) => (
            <span
              key={i}
              className="ex-tidy h-7 rounded-[6px] border border-brand/40 bg-brand/[0.16]"
              style={vars({ '--x': b.x, '--y': b.y, '--r': b.r })}
            />
          ))}
        </div>
      )}

      {kind === 'performance' && (
        <div className="flex w-full max-w-[320px] flex-col gap-4 text-xs tracking-[0.12em] text-muted">
          <div>
            <div className="mb-2">BEFORE</div>
            <div className="h-[6px] overflow-hidden rounded-full bg-body/10">
              <div className="ex-slow h-full origin-left rounded-full bg-body/40" />
            </div>
          </div>
          <div>
            <div className="mb-2 text-brand">AFTER</div>
            <div className="h-[6px] overflow-hidden rounded-full bg-body/10">
              <div className="ex-fast h-full origin-left rounded-full bg-brand" />
            </div>
          </div>
        </div>
      )}

      {kind === 'ui' && (
        <div className="grid w-full max-w-[300px] grid-cols-3 gap-x-3 gap-y-4">
          {PILLS.map((p, i) => (
            <span key={i} className="flex justify-center">
              <span
                className="ex-uniform block h-7"
                style={vars({ '--br': p.br, '--w': p.w, '--bg': p.bg })}
              />
            </span>
          ))}
        </div>
      )}

      {kind === 'devices' && (
        <div className="flex h-full w-full max-w-[320px] justify-center">
          <div className="ex-device flex flex-wrap content-start gap-[6px] overflow-hidden rounded-[10px] border border-body/25 p-2">
            <span className="h-3 w-full rounded-[4px] bg-brand/30" />
            <span className="h-5 flex-[1_1_80px] rounded-[4px] bg-body/[0.16]" />
            <span className="h-5 flex-[1_1_80px] rounded-[4px] bg-body/[0.16]" />
            <span className="h-5 flex-[1_1_80px] rounded-[4px] bg-body/[0.16]" />
          </div>
        </div>
      )}

      {kind === 'api' && (
        <div className="relative flex w-full max-w-[300px] items-center">
          <div className="absolute inset-x-[14%] top-1/2 h-px bg-body/20">
            <span className="sc-travel absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-accent" />
          </div>
          <div className="relative grid w-full grid-cols-3 gap-3 text-center text-xs font-extrabold tracking-[0.1em] text-brand">
            {['UI', 'API', 'DB'].map((label, i) => (
              <span
                key={label}
                className="sc-node rounded-[8px] border border-body/20 bg-page py-3"
                style={{ animationDelay: `${i * 1.05}s` }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      )}

      {kind === 'pipeline' && (
        <div className="flex w-full max-w-[300px] flex-col gap-3 text-xs tracking-[0.12em] text-muted">
          {['TEST', 'BUILD', 'SHIP'].map((step, i) => (
            <div key={step} className="grid grid-cols-[44px_1fr_14px] items-center gap-3">
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
      )}
    </div>
  );
}
