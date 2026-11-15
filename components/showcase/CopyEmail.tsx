'use client';

import { useEffect, useState } from 'react';
import { CONTACT } from './content';
import { CopyGlyph, TickGlyph } from './glyphs';
import { BUTTON, cx } from './scene';

const COPIED_FOR_MS = 2000;

/**
 * "Copy address": writes the email address to the clipboard, says "Copied"
 * for two seconds and announces it. If the clipboard is unavailable or the
 * browser refuses, nothing happens.
 */
export function CopyEmail({ className }: { className?: string }) {
  // Counts successful copies, so a second press restarts the two seconds.
  const [copies, setCopies] = useState(0);
  const [shown, setShown] = useState(0);
  const copied = copies > shown;

  useEffect(() => {
    if (copies === 0) return;
    const timer = window.setTimeout(() => setShown(copies), COPIED_FOR_MS);
    return () => window.clearTimeout(timer);
  }, [copies]);

  const copy = async () => {
    try {
      if (!navigator.clipboard) return;
      await navigator.clipboard.writeText(CONTACT.email);
      setCopies((count) => count + 1);
    } catch {
      /* denied or unavailable: fail quietly */
    }
  };

  return (
    <span className={cx('inline-flex', className)}>
      <button type="button" className={cx(BUTTON, 'w-full')} onClick={copy}>
        {/* Both labels share one cell, so the button keeps its width. */}
        <span className="grid">
          <span
            className={cx(
              'col-start-1 row-start-1 inline-flex items-center justify-center gap-2',
              copied && 'invisible'
            )}
          >
            <CopyGlyph className="h-4 w-4" />
            Copy address
          </span>
          <span
            className={cx(
              'col-start-1 row-start-1 inline-flex items-center justify-center gap-2',
              !copied && 'invisible'
            )}
          >
            <TickGlyph className="h-4 w-4 text-success" />
            Copied
          </span>
        </span>
      </button>
      <span role="status" className="sr-only">
        {copied ? 'Address copied' : ''}
      </span>
    </span>
  );
}
