'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { palettes } from '@/lib/brand';
import { CONCEPTS } from './registry';

const STORE_KEY = 'lab:palette';
const CHANGE_EVENT = 'lab:palette-change';

// The pinned palette lives in localStorage and is read through
// useSyncExternalStore, so the server render ("Auto") and the first client
// render agree, and other tabs stay in sync.
const subscribe = (onChange: () => void) => {
  window.addEventListener('storage', onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
};
const readPinned = () => {
  try {
    return window.localStorage.getItem(STORE_KEY) ?? '';
  } catch {
    return '';
  }
};
const writePinned = (name: string) => {
  try {
    window.localStorage.setItem(STORE_KEY, name);
  } catch {
    /* storage unavailable: the choice just will not persist */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

// Floating control for the design lab: switch layout and colours
// independently. "Auto" uses the palette each layout was designed for. The
// chosen palette is applied to the page's [data-lab-root] element.
export default function LabBar() {
  const pathname = usePathname();
  const stored = useSyncExternalStore(subscribe, readPinned, () => '');
  const [open, setOpen] = useState(true);

  const pinned = palettes[stored] ? stored : '';
  const concept = CONCEPTS.find((c) => pathname === `/lab/${c.id}`);
  const effective = pinned || concept?.palette;

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-lab-root]');
    if (root && effective) root.dataset.palette = effective;
  }, [effective, pathname]);

  const pill = (active: boolean) =>
    `rounded-full border px-3 py-[6px] font-extrabold no-underline transition-colors duration-200 ${
      active
        ? 'border-brand bg-brand text-onbrand'
        : 'border-body/20 text-body hover:text-heading'
    }`;

  return (
    <div
      data-lab-bar
      className="pointer-events-none fixed inset-x-0 bottom-3 z-[200] flex justify-center px-3 text-[11px] tracking-[0.06em]"
    >
      <div className="pointer-events-auto flex max-w-full flex-col gap-2 rounded-2xl border border-body/20 bg-surface/95 p-3 shadow-[0_10px_40px_rgb(0_0_0/0.45)] backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/lab"
            className="font-extrabold tracking-[0.14em] text-brand no-underline"
          >
            DESIGN LAB
          </Link>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-body/20 px-3 py-1 text-body hover:text-heading"
          >
            {open ? 'Hide' : 'Show'}
          </button>
        </div>

        {open && (
          <>
            <div className="flex flex-wrap items-center gap-[6px]">
              <span className="w-[62px] text-muted">LAYOUT</span>
              {CONCEPTS.map((c) => (
                <Link
                  key={c.id}
                  href={`/lab/${c.id}`}
                  aria-current={concept?.id === c.id ? 'page' : undefined}
                  className={pill(concept?.id === c.id)}
                >
                  {c.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-[6px]">
              <span className="w-[62px] text-muted">COLOURS</span>
              <button
                type="button"
                aria-pressed={!pinned}
                onClick={() => writePinned('')}
                className={pill(!pinned)}
              >
                Auto
              </button>
              {Object.entries(palettes).map(([name, p]) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={pinned === name}
                  onClick={() => writePinned(name)}
                  title={p.label}
                  className={`${pill(pinned === name)} inline-flex items-center gap-2`}
                >
                  {/* Swatches take their colours from the palette's own
                      variables (data-palette), not inline styles, which
                      browser extensions rewrite before hydration. */}
                  <span
                    aria-hidden
                    data-palette={name}
                    className="inline-flex overflow-hidden rounded-full border border-muted"
                  >
                    <span className="h-3 w-3 bg-page" />
                    <span className="h-3 w-3 bg-brand" />
                    <span className="h-3 w-3 bg-accent" />
                  </span>
                  {name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
