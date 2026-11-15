import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  CairoClock,
  CopyEmail,
  LoadRace,
  ResultPair,
  SCENE_BY_FACET,
} from '@/components/showcase';
import type { FacetId } from '@/components/showcase/content';

export const metadata: Metadata = { title: 'Showcase scenes' };

// `id` names the screenshots; `facet` picks the scene, as a layout would.
const SCENES: { id: string; name: string; facet: FacetId }[] = [
  { id: 'morph', name: 'MorphScene', facet: 'frontend' },
  { id: 'request', name: 'RequestScene', facet: 'fullstack' },
  { id: 'pipeline', name: 'PipelineScene', facet: 'delivery' },
  { id: 'schedule', name: 'ScheduleScene', facet: 'automation' },
];

// The three placements the layouts will use. Heights apply from tablet width
// up; on phones every panel is full width and as tall as its scene wants.
const FULL = 'w-full max-w-[840px] rounded-[14px] bg-surface p-4 sm:p-6 md:h-[380px]';
const SHORT = 'w-full max-w-[840px] rounded-[14px] bg-surface p-4 sm:px-6 sm:py-5 md:h-[240px]';
// On the page colour, so both backgrounds are covered.
const COMPACT =
  'w-full rounded-[14px] border border-body/15 bg-page p-4 sm:h-[200px] sm:w-[280px]';

function Shot({
  label,
  shot,
  className,
  place,
  children,
}: {
  label: string;
  shot: string;
  className: string;
  place?: string;
  children: ReactNode;
}) {
  return (
    <div className={place ? `min-w-0 ${place}` : 'min-w-0'}>
      <p className="mb-2 mt-0 text-[13px] text-muted">{label}</p>
      <div data-shot={shot} className={className}>
        {children}
      </div>
    </div>
  );
}

// Every showcase component on its own, so each can be checked in isolation
// and under any palette (the lab bar at the bottom switches colours).
export default function ScenesLab() {
  return (
    <div
      data-lab-root
      data-palette="signal"
      className="min-h-screen bg-page pb-40 text-[15px] leading-[1.5] text-body"
    >
      <main className="mx-auto w-full max-w-[1240px] px-4 pt-12 sm:px-8 md:pt-16">
        <h1 className="m-0 text-[clamp(28px,4vw,44px)]">Showcase scenes</h1>
        <p className="mb-0 mt-3 max-w-[620px] text-muted">
          Every showcase component on its own, at the sizes the layouts will use: a full stage,
          a wide and short stage, and a compact tile.
        </p>

        {SCENES.map(({ id, name, facet }) => {
          const Scene = SCENE_BY_FACET[facet];
          return (
            <section key={id} className="mt-14">
              <h2 className="m-0 text-[22px]">{name}</h2>
              <div className="mt-5 grid gap-6 xl:grid-cols-[minmax(0,840px)_280px] xl:items-start">
                <Shot label="Full stage" shot={`${id}-full`} className={FULL}>
                  <Scene />
                </Shot>
                <Shot
                  label="Wide and short stage"
                  shot={`${id}-short`}
                  className={SHORT}
                  place="xl:col-start-1 xl:row-start-2"
                >
                  <Scene />
                </Shot>
                <Shot
                  label="Compact tile, no controls"
                  shot={`${id}-compact`}
                  className={COMPACT}
                  place="xl:col-start-2 xl:row-start-1"
                >
                  <Scene controls={false} />
                </Shot>
              </div>
            </section>
          );
        })}

        <section className="mt-14">
          <h2 className="m-0 text-[22px]">ResultPair</h2>
          <p className="mb-2 mt-5 text-[13px] text-muted">Display size</p>
          <div data-shot="result-large" className="text-[clamp(32px,7.2vw,104px)]">
            <ResultPair />
          </div>
          <p className="mb-2 mt-8 text-[13px] text-muted">Small size</p>
          <div data-shot="result-small" className="w-fit max-w-full text-[20px]">
            <ResultPair />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="m-0 text-[22px]">LoadRace</h2>
          <div
            data-shot="race"
            className="mt-5 w-full max-w-[560px] rounded-[14px] bg-surface p-4 sm:p-5"
          >
            <LoadRace />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="m-0 text-[22px]">CopyEmail</h2>
          <div data-shot="copy" className="mt-5 w-fit">
            <CopyEmail />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="m-0 text-[22px]">CairoClock</h2>
          <div data-shot="clock" className="mt-5 w-fit rounded-[14px] bg-surface p-5">
            <CairoClock />
          </div>
        </section>
      </main>
    </div>
  );
}
