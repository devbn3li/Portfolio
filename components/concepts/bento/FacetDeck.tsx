'use client';

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent,
} from 'react';
import {
  MorphScene,
  PipelineScene,
  RequestScene,
  ScheduleScene,
  type SceneProps,
} from '@/components/showcase';
import { FACETS, type FacetId } from '@/components/showcase/content';
import { TILE, cx } from './ui';

const SCENES: Record<FacetId, ComponentType<SceneProps>> = {
  frontend: MorphScene,
  fullstack: RequestScene,
  delivery: PipelineScene,
  automation: ScheduleScene,
};

// The showcase: one facet on the stage as a full scene, the other three as
// previews beside it. Real tabs (fixed order, arrow keys); the previews are
// plain buttons that select a facet and hand focus to its tab. Nothing changes
// the selection except the visitor.
//
// Renders two grid items (the stage tile and the preview row) so the parent
// grid can place them: pass each its grid classes.
export default function FacetDeck({
  stageClassName,
  previewsClassName,
}: {
  stageClassName?: string;
  previewsClassName?: string;
}) {
  const [selected, setSelected] = useState<FacetId>('frontend');
  const tabs = useRef<Partial<Record<FacetId, HTMLButtonElement | null>>>({});
  const focusNext = useRef(false);

  useEffect(() => {
    if (!focusNext.current) return;
    focusNext.current = false;
    tabs.current[selected]?.focus();
  }, [selected]);

  const select = (id: FacetId, moveFocus: boolean) => {
    focusNext.current = moveFocus;
    setSelected(id);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = FACETS.findIndex((f) => f.id === selected);
    const last = FACETS.length - 1;
    const next =
      event.key === 'ArrowRight' || event.key === 'ArrowDown'
        ? index === last
          ? 0
          : index + 1
        : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
          ? index === 0
            ? last
            : index - 1
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : -1;
    if (next < 0) return;
    event.preventDefault();
    select(FACETS[next].id, true);
  };

  return (
    <>
      <section
        aria-labelledby="deck-heading"
        className={cx(TILE, 'flex min-w-0 flex-col p-4 sm:p-5', stageClassName)}
      >
        <h2 id="deck-heading" className="sr-only">
          What I do
        </h2>

        <div
          role="tablist"
          aria-label="Sides of the work"
          onKeyDown={onKeyDown}
          className="grid shrink-0 grid-cols-2 gap-1 rounded-[10px] bg-body/[0.06] p-1 sm:grid-cols-4"
        >
          {FACETS.map((facet) => {
            const active = facet.id === selected;
            return (
              <button
                key={facet.id}
                ref={(el) => {
                  tabs.current[facet.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${facet.id}`}
                aria-selected={active}
                aria-controls={`panel-${facet.id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => select(facet.id, false)}
                className={cx(
                  'relative h-10 rounded-md px-2 text-sm font-extrabold leading-none transition-colors duration-150 motion-reduce:transition-none',
                  active
                    ? 'bg-surface text-heading'
                    : 'text-body hover:text-heading',
                )}
              >
                {facet.name}
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* All four panels share one cell, so the stage never changes size. */}
        <div className="mt-4 grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)]">
          {FACETS.map((facet) => {
            const active = facet.id === selected;
            const Scene = SCENES[facet.id];
            return (
              <div
                key={facet.id}
                role="tabpanel"
                id={`panel-${facet.id}`}
                aria-labelledby={`tab-${facet.id}`}
                inert={!active}
                className={cx(
                  'col-start-1 row-start-1 h-full min-h-0 min-w-0',
                  // opacity as well as visibility: some scene parts set
                  // visibility themselves and would otherwise show through.
                  !active && 'pointer-events-none invisible opacity-0',
                )}
              >
                <Scene className="h-full" />
              </div>
            );
          })}
        </div>
      </section>

      <div
        className={cx('grid min-w-0 gap-3 sm:grid-cols-3', previewsClassName)}
      >
        {FACETS.filter((facet) => facet.id !== selected).map((facet) => {
          const Scene = SCENES[facet.id];
          return (
            <button
              key={facet.id}
              type="button"
              aria-label={`Show ${facet.name} on the main stage`}
              onClick={() => select(facet.id, true)}
              className={cx(
                TILE,
                'flex min-h-0 min-w-0 flex-col gap-1 p-4 text-left transition-colors duration-150 hover:border-muted motion-reduce:transition-none',
              )}
            >
              <span className="block text-base font-extrabold leading-tight text-heading">
                {facet.name}
              </span>
              <span className="block text-[13px] leading-snug text-muted">
                {facet.fact}
              </span>
              <span className="mt-2 hidden min-h-0 flex-1 sm:block">
                <Scene controls={false} caption={false} className="h-full" />
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
