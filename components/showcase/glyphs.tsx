// Every arrow, tick and chevron in the showcase is drawn here as inline SVG in
// currentColor: the Alexandria subset in use has no arrow glyphs.
//
// Stroke weights follow the diagram rule: 1px for structure, 2px for emphasis.
// State glyphs keep those weights at any size (non-scaling strokes), so a
// 16px tick and a 56px tick are drawn with the same pen. The text arrow is
// the exception: it is sized in em and scales with the type around it.

type GlyphProps = { className?: string };

const HIDDEN = { 'aria-hidden': true, focusable: false } as const;
const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;
const PEN = { vectorEffect: 'non-scaling-stroke' } as const;

/** Arrow between a before value and an after value. Size it in em. */
export function ArrowGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 12" className={className} {...HIDDEN} {...STROKE} strokeWidth={1.5}>
      <path d="M1 6h21M17.5 1.5 22 6l-4.5 4.5" />
    </svg>
  );
}

/** Solid arrowhead for the end of a connector, pointing right. */
export function TipGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 6 7" className={className} {...HIDDEN}>
      <path d="M0 0 6 3.5 0 7z" fill="currentColor" />
    </svg>
  );
}

/** Bare tick. */
export function TickGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...HIDDEN} {...STROKE} strokeWidth={2}>
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" {...PEN} />
    </svg>
  );
}

/** Done: a ring with a tick. */
export function DoneGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...HIDDEN} {...STROKE}>
      <circle cx="8" cy="8" r="7" strokeWidth={1} {...PEN} />
      <path d="M4.9 8.3 7.1 10.4 11.1 5.9" strokeWidth={2} {...PEN} />
    </svg>
  );
}

/** Waiting: a dashed ring. */
export function WaitGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...HIDDEN} {...STROKE}>
      <circle cx="8" cy="8" r="7" strokeWidth={1} strokeDasharray="2.4 2.5" {...PEN} />
    </svg>
  );
}

/** Scheduled: a clock face. */
export function ClockGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...HIDDEN} {...STROKE} strokeWidth={1}>
      <circle cx="8" cy="8" r="7" {...PEN} />
      <path d="M8 4.5V8l2.5 1.5" {...PEN} />
    </svg>
  );
}

/** Running: three quarters of a ring. CSS turns it once per step. */
export function SpinGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...HIDDEN} {...STROKE} strokeWidth={2}>
      <path d="M8 1.5A6.5 6.5 0 1 1 1.5 8" {...PEN} />
    </svg>
  );
}

export function PlayGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...HIDDEN}>
      <path d="M4.5 2.6v10.8L13.3 8z" fill="currentColor" />
    </svg>
  );
}

export function StopGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...HIDDEN}>
      <rect x="3.5" y="3.5" width="9" height="9" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function CopyGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...HIDDEN} {...STROKE} strokeWidth={1}>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" {...PEN} />
      <path
        d="M10.5 5.5V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5"
        {...PEN}
      />
    </svg>
  );
}

/** Handle on top of the schedule playhead. */
export function HandleGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 10 10" className={className} {...HIDDEN}>
      <path d="M1 0h8v5.5L5 10 1 5.5z" fill="currentColor" />
    </svg>
  );
}
