'use client';

import { useEffect, useRef, useState, type ComponentType, type KeyboardEvent } from 'react';
import {
  MorphScene,
  PipelineScene,
  RequestScene,
  ScheduleScene,
  type SceneProps,
} from '@/components/showcase';
import { FACETS, type FacetId } from '@/components/showcase/content';

const SCENES: Record<FacetId, ComponentType<SceneProps>> = {
  frontend: MorphScene,
  fullstack: RequestScene,
  delivery: PipelineScene,
  automation: ScheduleScene,
};

// Hero visual: four sides of the work, one tab each. Real tabs (fixed order,
// arrow keys). All four panels are rendered and stacked in one cell, so the
// card never changes size and every scene is in the server HTML. Nothing
// changes the selected tab except the visitor.
export default function WorkShowcase() {
  const [selected, setSelected] = useState<FacetId>('frontend');
  const tabs = useRef<Partial<Record<FacetId, HTMLButtonElement | null>>>({});
  const moveFocus = useRef(false);

  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    tabs.current[selected]?.focus();
  }, [selected]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = FACETS.findIndex((f) => f.id === selected);
    const last = FACETS.length - 1;
    const next =
      event.key === 'ArrowRight'
        ? (index + 1) % FACETS.length
        : event.key === 'ArrowLeft'
          ? (index + last) % FACETS.length
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : -1;
    if (next < 0) return;
    event.preventDefault();
    moveFocus.current = true;
    setSelected(FACETS[next].id);
  };

  return (
    <div
      className="rd-fade-up min-w-0 rounded-[18px] border border-body/[0.12] bg-surface p-4 sm:p-5"
      style={{ animation: 'rd-fade-up .8s .6s cubic-bezier(.22,1,.36,1) both' }}
    >
      <div
        role="tablist"
        aria-label="Sides of the work"
        onKeyDown={onKeyDown}
        className="grid grid-cols-2 gap-1.5 sm:grid-cols-4"
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
              id={`work-tab-${facet.id}`}
              aria-selected={active}
              aria-controls={`work-panel-${facet.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setSelected(facet.id)}
              className={`h-10 rounded-full border px-3 text-[13px] font-extrabold transition-colors duration-200 motion-reduce:transition-none ${
                active
                  ? 'border-brand bg-brand text-onbrand'
                  : 'border-muted text-body hover:text-heading'
              }`}
            >
              {facet.name}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid h-[min(420px,calc(100svh-260px))] min-h-[340px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] max-sm:h-auto">
        {FACETS.map((facet) => {
          const active = facet.id === selected;
          const Scene = SCENES[facet.id];
          return (
            <div
              key={facet.id}
              role="tabpanel"
              id={`work-panel-${facet.id}`}
              aria-labelledby={`work-tab-${facet.id}`}
              inert={!active}
              className={`col-start-1 row-start-1 h-full min-h-0 min-w-0 ${
                active ? '' : 'pointer-events-none invisible opacity-0'
              }`}
            >
              <Scene className="h-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
