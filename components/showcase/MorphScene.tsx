'use client';

import { useEffect, useRef, useState, type FormEvent, type TransitionEvent } from 'react';
import './showcase.css';
import { MORPH, PAIRS } from './content';
import { ArrowGlyph } from './glyphs';
import { BUTTON, FIELD_LABEL, cx, facet, vars, type SceneProps } from './scene';

const FACET = facet('frontend');

// Deterministic integer hash to [0, 1). No Math.random: the server and the
// client must render the same markup.
function seeded(index: number, salt: number) {
  let h = Math.imul(index + 1, 0x9e3779b1) ^ Math.imul(salt + 1, 0x85ebca6b);
  h ^= h >>> 15;
  h = Math.imul(h, 0x2c1b3c6d);
  h ^= h >>> 12;
  h = Math.imul(h, 0x297a2d39);
  h ^= h >>> 15;
  return (h >>> 0) / 4294967296;
}

const RADII = ['0px', '2px', '7px', '13px'] as const;
const HEADERS = [0.16, 0.26, 0.38, 0.5] as const;
const SHAPES = ['top', 'top', 'top', 'top', 'side', 'foot', 'mid'] as const;
const TONES = 5;

const pick = <T,>(list: readonly T[], roll: number) => list[Math.floor(roll * list.length)];
// Never close to zero: every tile is visibly off before the refactor.
const spread = (roll: number, min: number, max: number) =>
  (roll < 0.5 ? -1 : 1) * (min + Math.abs(roll * 2 - 1) * (max - min));

// The "before" of every tile: where it sits, and what its window looks like.
const TILES = Array.from({ length: MORPH.tiles }, (_, i) => {
  const roll = (salt: number) => seeded(i, salt);
  return {
    tile: vars({
      '--i': i,
      '--tx': `${Math.round(spread(roll(1), 3, 13))}px`,
      '--ty': `${Math.round(spread(roll(2), 2, 10))}px`,
      '--r': `${Math.round(spread(roll(3), 4, 16))}deg`,
      '--s': (0.74 + roll(4) * 0.4).toFixed(2),
    }),
    face: vars({
      '--shw-br': pick(RADII, roll(5)),
      '--shw-hh': pick(HEADERS, roll(6)),
      '--shw-w1': `${Math.round(40 + roll(7) * 50)}%`,
      '--shw-w2': `${Math.round(24 + roll(8) * 50)}%`,
    }),
    look: `shw-tone-${Math.floor(roll(9) * TONES)} shw-shape-${pick(SHAPES, roll(10))}`,
  };
});

const BEFORE = 'Before the refactor';
const AFTER = 'After the refactor';
const valueText = (percent: number) =>
  percent <= 0 ? BEFORE : percent >= 100 ? AFTER : `${Math.round(percent)}% refactored`;

const DIAGRAM_LABEL = `${FACET.title}. ${MORPH.tiles} tiles stand for ${MORPH.countLabel}: mismatched before the refactor, identical after it.`;

/**
 * Frontend facet: the portal refactor. 28 mismatched windows settle into one
 * system. A single registered property, --shw-p (0 before, 1 after), drives
 * every tile, both faces and the drawn slider.
 */
export function MorphScene({ className, controls = true, caption = true }: SceneProps) {
  const rootRef = useRef<HTMLElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const pending = useRef('');
  const timer = useRef(0);
  const [status, setStatus] = useState('');

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Dragging and arrow keys: write the value straight to the root. No React
  // state per frame, and no transition, so the tiles follow the thumb.
  const onScrub = (event: FormEvent<HTMLInputElement>) => {
    const root = rootRef.current;
    if (!root) return;
    const percent = Number(event.currentTarget.value);
    root.dataset.touched = ''; // stops the CSS intro, which would outrank the inline value
    delete root.dataset.glide;
    root.style.setProperty('--shw-p', String(percent / 100));
    event.currentTarget.setAttribute('aria-valuetext', valueText(percent));
    pending.current = '';
  };

  // Before and After: the same property, moved by a CSS transition.
  const glide = (target: 0 | 1) => {
    const root = rootRef.current;
    if (!root) return;
    const text = valueText(target * 100);
    const from = Number(getComputedStyle(root).getPropertyValue('--shw-p'));
    root.dataset.touched = '';
    root.dataset.glide = '';
    root.style.setProperty('--shw-p', String(target));

    const input = rangeRef.current;
    if (input) {
      input.value = String(target * 100);
      input.setAttribute('aria-valuetext', text);
    }

    window.clearTimeout(timer.current);
    setStatus('');
    const moves =
      Math.abs(from - target) > 0.001 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (moves) {
      pending.current = text; // announced when the glide ends
    } else {
      pending.current = '';
      timer.current = window.setTimeout(() => setStatus(text), 60);
    }
  };

  const onTransitionEnd = (event: TransitionEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== '--shw-p') return;
    if (!pending.current) return;
    setStatus(pending.current);
    pending.current = '';
  };

  return (
    <figure
      ref={rootRef}
      className={cx('shw shw-scene shw-morph', className)}
      onTransitionEnd={onTransitionEnd}
    >
      <div className="shw-stage">
        <div className="shw-morph-body">
          <div role="img" aria-label={DIAGRAM_LABEL} className="shw-tiles">
            {TILES.map((t, i) => (
              <span key={i} className="shw-tile" style={t.tile}>
                <span className={cx('shw-face shw-face-old', t.look)} style={t.face}>
                  <span className="shw-bar" />
                  <span className="shw-rows">
                    <span className="shw-row" />
                    <span className="shw-row" />
                  </span>
                </span>
                <span className="shw-face shw-face-new">
                  <span className="shw-bar" />
                  <span className="shw-rows">
                    <span className="shw-row" />
                    <span className="shw-row" />
                  </span>
                </span>
              </span>
            ))}
          </div>

          <div className="shw-readout">
            <p className="shw-count">{MORPH.countLabel}</p>
            <dl className="shw-pairs">
              {PAIRS.map((pair) => (
                <div key={pair.label} className="shw-pair">
                  <dt className={cx('shw-pair-label', FIELD_LABEL)}>{pair.label}</dt>
                  <dd className="shw-pair-values">
                    <span className="sr-only">from </span>
                    <s className="text-muted">{pair.before}</s>
                    <span className="whitespace-nowrap">
                      <span className="sr-only">to </span>
                      <ArrowGlyph className="mr-[0.45em] inline-block h-[0.6em] w-[1.2em] align-[0.02em] text-muted" />
                      <b className="font-extrabold text-heading">{pair.after}</b>
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {controls && (
        <div className="shw-controls shw-scrub">
          <button type="button" className={BUTTON} onClick={() => glide(0)}>
            Before
          </button>
          <span className="shw-range">
            <input
              ref={rangeRef}
              type="range"
              min={0}
              max={100}
              step={1}
              defaultValue={100}
              aria-label="Refactor progress"
              aria-valuetext={AFTER}
              className="shw-range-input"
              onInput={onScrub}
            />
            <span className="shw-range-track" aria-hidden="true" />
            <span className="shw-range-fill" aria-hidden="true" />
            <span className="shw-range-thumb" aria-hidden="true">
              <span />
            </span>
          </span>
          <button type="button" className={BUTTON} onClick={() => glide(1)}>
            After
          </button>
          <span role="status" className="sr-only">
            {status}
          </span>
        </div>
      )}

      {caption && <figcaption className="shw-caption">{FACET.caption}</figcaption>}
    </figure>
  );
}
