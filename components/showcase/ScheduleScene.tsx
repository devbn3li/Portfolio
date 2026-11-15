'use client';

import './showcase.css';
import { JOBS } from './content';
import { ClockGlyph, DoneGlyph, HandleGlyph, PlayGlyph } from './glyphs';
import { BUTTON, cx, facet, listOf, named, vars, type SceneProps } from './scene';
import { useRun } from './useRun';

const FACET = facet('automation');

// Plain marks along the ruler: no times, no numbers. Every fourth is longer,
// and each long one has a grid line under it.
const TICKS = Array.from({ length: 25 }, (_, i) => i);
const GRID = TICKS.filter((i) => i % 4 === 0);

const DIAGRAM_LABEL = `${FACET.title}. A timeline with one mark for each scheduled job: ${listOf(
  JOBS.map(named)
)}. Every job has run.`;

// One segment of the playhead. Every row carries one; the rows touch.
function Playhead({ grip = false }: { grip?: boolean }) {
  return (
    <span className="shw-head">
      <span className="shw-head-line" />
      {grip && <HandleGlyph className="shw-head-grip" />}
    </span>
  );
}

/**
 * Automation facet: scheduled jobs on a timeline. At rest the playhead is
 * parked at the end and every job has run. "Run schedule" sweeps it once from
 * left to right; a job fires as the playhead crosses its mark. The mark's
 * position and that moment both come from the job's --i.
 */
export function ScheduleScene({ className, controls = true, caption = true }: SceneProps) {
  const { ref, status, run, onAnimationEnd } = useRun<HTMLElement>('Every job ran');

  return (
    <figure
      ref={ref}
      className={cx('shw shw-scene shw-schedule', className)}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="shw-stage">
        <div role="img" aria-label={DIAGRAM_LABEL} className="shw-sched">
          <span className="shw-sched-row shw-ruler">
            <span className="shw-lane">
              <span className="shw-ticks">
                {TICKS.map((i) => (
                  <span key={i} />
                ))}
              </span>
            </span>
            <Playhead grip />
          </span>

          {JOBS.map((job, i) => (
            <span key={job.name} className="shw-sched-row shw-job" style={vars({ '--i': i })}>
              <span className="shw-job-label">
                <span className="shw-job-name">{job.name}</span>
                <span className="shw-job-detail">{job.detail}</span>
              </span>
              <span className="shw-lane">
                <span className="shw-grid">
                  {GRID.map((g) => (
                    <span key={g} />
                  ))}
                </span>
                <span className="shw-lane-band" />
                <span className="shw-mark" />
              </span>
              <span className="shw-job-state">
                <span className="shw-st shw-st-glyph">
                  <span className="shw-is-wait">
                    <ClockGlyph className="shw-glyph" />
                  </span>
                  <span className="shw-is-done">
                    <DoneGlyph className="shw-glyph" />
                  </span>
                </span>
                <span className="shw-st shw-job-word">
                  <span className="shw-is-wait">Scheduled</span>
                  <span className="shw-is-done">Ran</span>
                </span>
              </span>
              <Playhead />
              <span className="shw-ring" />
            </span>
          ))}
        </div>
      </div>

      {controls && (
        <div className="shw-controls">
          <button type="button" className={cx(BUTTON, 'shw-run')} onClick={run}>
            <PlayGlyph className="h-3 w-3" />
            Run schedule
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
