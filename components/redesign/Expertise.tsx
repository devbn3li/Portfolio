import Reveal from './Reveal';
import ExpertiseVisual from './ExpertiseVisual';
import { EXPERTISE } from './data';

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative z-[2] mx-auto w-full max-w-[1320px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-muted">
        02 / EXPERTISE
      </Reveal>

      <Reveal
        as="h2"
        id="expertise-heading"
        delay={80}
        className="mb-0 mt-7 text-[clamp(30px,3.6vw,48px)]"
      >
        What teams bring me in for.
      </Reveal>

      {/* Hairline grid: 1px gap over a light bg shows through as rules */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-body/[0.09] bg-body/[0.09] sm:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((item, i) => (
          <Reveal
            key={item.n}
            delay={i * 60}
            className="ex-card bg-surface p-6 md:p-7"
          >
            <ExpertiseVisual kind={item.visual} />
            <div className="text-xs tabular-nums text-muted">{item.n}</div>
            <h3 className="mb-[10px] mt-3 text-[21px]">{item.title}</h3>
            <p className="m-0 text-[15px] text-body">{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
