import Reveal from './Reveal';
import { EXPERTISE } from './data';

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-peach">
        02 / EXPERTISE
      </Reveal>

      <Reveal
        delay={80}
        className="mt-7 flex flex-wrap items-end justify-between gap-5"
      >
        <h2
          id="expertise-heading"
          className="m-0 text-[clamp(30px,3.6vw,48px)]"
        >
          What teams bring me in for.
        </h2>
        <p className="m-0 max-w-[380px] text-[15px] text-mist">
          Four things I have done in production, not a list of tools.
        </p>
      </Reveal>

      {/* Hairline grid: 1px gap over a light bg shows through as rules */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-mist/[0.09] bg-mist/[0.09] sm:grid-cols-2">
        {EXPERTISE.map((item, i) => (
          <Reveal
            key={item.n}
            delay={(i % 2) * 60}
            className="bg-abyss p-8 transition-colors duration-300 hover:bg-petrol md:p-10"
          >
            <div className="text-xs text-peach">{item.n}</div>
            <h3 className="mb-[10px] mt-[14px] text-[24px]">{item.title}</h3>
            <p className="mb-5 text-mist">{item.desc}</p>
            <div className="text-[11px] tracking-[0.08em] text-mist/70">
              {item.stack}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
