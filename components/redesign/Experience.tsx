import Reveal from './Reveal';
import RoleAccordion from './RoleAccordion';
import { ResultPair } from '@/components/showcase';
import { EXPERIENCE, STATS } from './data';

// Headline numbers, then each role as an expandable row. Content comes from
// data.ts.
export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-[2] mx-auto w-full max-w-[1320px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-muted">
        01 / EXPERIENCE
      </Reveal>

      <Reveal
        as="h2"
        id="experience-heading"
        delay={80}
        className="mb-0 mt-7 max-w-[760px] text-[clamp(30px,3.6vw,48px)]"
      >
        Production work, with results I can point to.
      </Reveal>

      <Reveal
        delay={140}
        className="mt-10 grid items-end gap-8 border-y border-body/[0.09] py-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-16"
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-[clamp(40px,4.6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-heading">
              {stat.value}
            </div>
            <div className="mt-2 text-xs tracking-[0.12em] text-muted">
              {stat.label}
            </div>
          </div>
        ))}
        <ResultPair className="text-[clamp(28px,3.6vw,52px)]" />
      </Reveal>

      <Reveal delay={200} className="mt-14">
        <RoleAccordion roles={EXPERIENCE} />
      </Reveal>
    </section>
  );
}
