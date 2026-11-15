import type { CSSProperties } from 'react';
import { FACETS, type FacetId } from './content';

/** Props shared by the four scenes. */
export type SceneProps = {
  className?: string;
  /** Render the scene's Run button or scrubber. Default true. */
  controls?: boolean;
  /** Render the facet's caption under the diagram. Default true. */
  caption?: boolean;
};

export const cx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(' ');

/** Inline custom properties, typed. */
export const vars = (values: Record<`--${string}`, string | number>) =>
  values as CSSProperties;

export function facet(id: FacetId) {
  const found = FACETS.find((f) => f.id === id);
  if (!found) throw new Error(`Unknown facet: ${id}`);
  return found;
}

/** "A, B and C" */
export const listOf = (items: readonly string[]) =>
  items.length < 2
    ? items.join('')
    : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

/** "Name (detail)" */
export const named = (item: { name: string; detail: string }) =>
  `${item.name} (${item.detail})`;

// One outline button for every control in the showcase: 40px high, 8px radius,
// a border in muted (3:1 on page and on surface), heading-colour label.
export const BUTTON =
  'inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-muted px-4 text-[13px] font-extrabold leading-none text-heading transition-colors duration-150 hover:border-heading active:translate-y-px';

// The one field-label style: 12px, uppercase, 0.1em, muted.
export const FIELD_LABEL = 'text-xs uppercase leading-[1.3] tracking-[0.1em] text-muted';
