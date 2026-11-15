'use client';

import { Fragment } from 'react';
import './showcase.css';
import { PIPELINE } from './content';
import { DoneGlyph, PlayGlyph, SpinGlyph, TipGlyph, WaitGlyph } from './glyphs';
import { BUTTON, cx, facet, named, vars, type SceneProps } from './scene';
import { useRun } from './useRun';

const FACET = facet('delivery');

const DIAGRAM_LABEL = `${FACET.title}. ${PIPELINE.map(named).join(', then ')}. Every step passed.`;

/**
 * Delivery facet: the four pipeline steps, in order. At rest every step has
 * passed. "Run pipeline" queues them all, then runs and passes each in turn;
 * a step's place in the order is its --i, and CSS derives every delay from it.
 */
export function PipelineScene({ className, controls = true, caption = true }: SceneProps) {
  const { ref, status, run, onAnimationEnd } = useRun<HTMLElement>('Pipeline passed');

  return (
    <figure
      ref={ref}
      className={cx('shw shw-scene shw-pipeline', className)}
      style={vars({ '--shw-steps': PIPELINE.length })}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="shw-stage">
        <div role="img" aria-label={DIAGRAM_LABEL} className="shw-pipe">
          {PIPELINE.map((step, i) => (
            <Fragment key={step.name}>
              {i > 0 && (
                // The link out of the previous step: it shares that step's index.
                <span className="shw-link" style={vars({ '--i': i - 1 })}>
                  <span className="shw-link-line">
                    <span className="shw-hop">
                      <span className="shw-dot" />
                    </span>
                  </span>
                  <TipGlyph className="shw-link-tip" />
                </span>
              )}
              <span className="shw-step" style={vars({ '--i': i })}>
                <span className="shw-st shw-st-glyph shw-step-glyph">
                  <span className="shw-is-wait">
                    <WaitGlyph className="shw-glyph" />
                  </span>
                  <span className="shw-is-run">
                    <SpinGlyph className="shw-glyph shw-spin" />
                  </span>
                  <span className="shw-is-done">
                    <DoneGlyph className="shw-glyph" />
                  </span>
                </span>
                <span className="shw-st shw-step-word">
                  <span className="shw-is-wait">Queued</span>
                  <span className="shw-is-run">Running</span>
                  <span className="shw-is-done">Passed</span>
                </span>
                <span className="shw-step-name">{step.name}</span>
                <span className="shw-step-detail">{step.detail}</span>
                <span className="shw-step-bar">
                  <span className="shw-is-run shw-bar-run" />
                  <span className="shw-is-done shw-bar-done" />
                </span>
                <span className="shw-ring" />
              </span>
            </Fragment>
          ))}
        </div>
      </div>

      {controls && (
        <div className="shw-controls">
          <button type="button" className={cx(BUTTON, 'shw-run')} onClick={run}>
            <PlayGlyph className="h-3 w-3" />
            Run pipeline
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
