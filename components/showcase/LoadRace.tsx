'use client';

import { useState, type AnimationEvent } from 'react';
import './showcase.css';
import { RESULT } from './content';
import { DoneGlyph, PlayGlyph, StopGlyph } from './glyphs';
import { BUTTON, cx, vars } from './scene';

// ILLUSTRATIVE ONLY. The owner's figure for the refactored portal is "a few
// seconds", not a number. This constant decides how long the After lane takes
// to fill and, on the shared time scale, how long its bar is. It must never
// be printed, announced or put in a label.
const AFTER_ILLUSTRATIVE_SECONDS = 3;

const LANES = [
  { id: 'before', name: 'Before', value: RESULT.before },
  { id: 'after', name: 'After', value: RESULT.after },
] as const;

const DIAGRAM_LABEL = `${RESULT.label}. ${LANES.map((lane) => `${lane.name}: ${lane.value}`).join(
  '. '
)}.`;

const TIMING = vars({
  '--shw-before': `${RESULT.beforeSeconds}s`,
  '--shw-after': `${AFTER_ILLUSTRATIVE_SECONDS}s`,
  '--shw-after-share': AFTER_ILLUSTRATIVE_SECONDS / RESULT.beforeSeconds,
});

/**
 * The headline result as two lanes on one time scale. At rest it is a static
 * chart: Before is a full neutral bar, After a short brand one. "Run both in
 * real time" refills both at the same true rate: After is done within a few
 * seconds, Before crawls for RESULT.beforeSeconds. No counter, no digits other
 * than the two values from content.
 */
export function LoadRace({ className }: { className?: string }) {
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState('');

  const toggle = () => {
    setStatus('');
    setRunning((value) => !value);
  };

  // Each fill reports when it is full; the Before lane ends the run.
  const onAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName !== 'shw-grow') return;
    const lane = LANES.find((item) => item.id === (event.target as HTMLElement).dataset.lane);
    if (!lane) return;
    setStatus(`${lane.name}: loaded`);
    if (lane.id === 'before') setRunning(false);
  };

  return (
    <div
      className={cx('shw shw-race', className)}
      style={TIMING}
      data-run={running ? '' : undefined}
      onAnimationEnd={onAnimationEnd}
    >
      <div role="img" aria-label={DIAGRAM_LABEL} className="shw-race-lanes">
        {LANES.map((lane) => (
          <div key={lane.id} className="shw-race-lane">
            <span className="shw-race-name text-[13px] leading-[1.3] text-muted">{lane.name}</span>
            <span className="shw-race-track">
              <span className="shw-race-fill" data-lane={lane.id} />
            </span>
            <span
              className={cx(
                'shw-race-value text-[13px] leading-[1.3] tabular-nums',
                lane.id === 'after' ? 'font-extrabold text-heading' : 'text-body'
              )}
            >
              {lane.value}
            </span>
            {/* Both lanes end up loaded, so a finished run is the rest state.
                Only the After lane is lit: Before stays neutral throughout. */}
            <span
              className={cx(
                'shw-race-state inline-flex items-center gap-[5px] text-xs leading-[1.3]',
                lane.id === 'after' ? 'text-success' : 'text-muted'
              )}
              data-lane={lane.id}
            >
              <DoneGlyph className="shw-glyph" />
              Loaded
            </span>
          </div>
        ))}
      </div>

      {/* Real time means motion: with reduced motion the chart stays static
          and the button is not rendered at all. */}
      <div className="mt-4 motion-reduce:hidden">
        <button type="button" className={BUTTON} onClick={toggle}>
          {/* Both labels share one cell, so the button keeps its width. */}
          <span className="grid">
            <span
              className={cx(
                'col-start-1 row-start-1 inline-flex items-center justify-center gap-2',
                running && 'invisible'
              )}
            >
              <PlayGlyph className="h-3 w-3" />
              Run both in real time
            </span>
            <span
              className={cx(
                'col-start-1 row-start-1 inline-flex items-center justify-center gap-2',
                !running && 'invisible'
              )}
            >
              <StopGlyph className="h-3 w-3" />
              Stop
            </span>
          </span>
        </button>
      </div>

      <span role="status" className="sr-only">
        {status}
      </span>
    </div>
  );
}
