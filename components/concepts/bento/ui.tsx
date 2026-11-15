import type { ReactNode } from 'react';

// Shared furniture for the bento layout: tiles, buttons, links, labels, icons.

export const cx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(' ');

// A tile: one step lighter than the page, a hairline, 16px corners.
export const TILE = 'rounded-2xl border border-body/[0.12] bg-surface';

// The one filled button on a screen. Always "Email me".
export const BTN_PRIMARY =
  'inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-[15px] font-extrabold leading-none text-onbrand no-underline transition-[filter] duration-150 hover:brightness-110 active:translate-y-px motion-reduce:transition-none';

// Every other button: neutral outline, heading-colour label.
export const BTN_OUTLINE =
  'inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-muted px-5 text-[15px] leading-none text-heading no-underline transition-colors duration-150 hover:border-heading active:translate-y-px motion-reduce:transition-none';

// Text links: heading colour, always underlined.
export const LINK =
  'text-heading underline decoration-body/40 decoration-1 underline-offset-4 transition-colors duration-150 hover:decoration-brand hover:decoration-2 motion-reduce:transition-none';

// The one field-label style. Only next to a value.
export const FIELD_LABEL =
  'text-xs uppercase leading-[1.3] tracking-[0.1em] text-muted';

export function Tile({
  as: Tag = 'div',
  className,
  children,
  id,
}: {
  as?: 'div' | 'section' | 'article' | 'li';
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <Tag id={id} className={cx(TILE, className)}>
      {children}
    </Tag>
  );
}

// The Alexandria subset has no arrow glyphs, so every mark is drawn.
const svg = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const ArrowOut = ({ className }: { className?: string }) => (
  <svg {...svg} className={className}>
    <path d="M5 11 11 5M6 5h5v5" />
  </svg>
);

export const ArrowDown = ({ className }: { className?: string }) => (
  <svg {...svg} className={className}>
    <path d="M8 3v10M4 9l4 4 4-4" />
  </svg>
);

export const ArrowUp = ({ className }: { className?: string }) => (
  <svg {...svg} className={className}>
    <path d="M8 13V3M4 7l4-4 4 4" />
  </svg>
);

export const Plus = ({ className }: { className?: string }) => (
  <svg {...svg} className={className}>
    <path d="M8 3v10M3 8h10" />
  </svg>
);
