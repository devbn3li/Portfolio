import Reveal from './Reveal';
import { EXPERIENCE, STATS } from './data';

// The centrepiece of the homepage: headline numbers, then every role with
// what was actually done in it. Content comes from the CV via data.ts.
export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-peach">
        01 / EXPERIENCE
      </Reveal>

      <Reveal
        as="h2"
        id="experience-heading"
        delay={80}
        className="mb-0 mt-7 max-w-[760px] text-[clamp(30px,3.6vw,48px)]"
      >
        Production work, for real companies, with results I can point to.
      </Reveal>

      <Reveal
        delay={140}
        className="mt-10 grid gap-8 border-y border-mist/[0.09] py-8 sm:grid-cols-3"
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-peach">
              {stat.value}
            </div>
            <div className="mt-2 text-xs tracking-[0.12em] text-mist/70">
              {stat.label}
            </div>
          </div>
        ))}
      </Reveal>

      <div className="mt-14 flex flex-col gap-14">
        {EXPERIENCE.map((role) => (
          <Reveal
            key={role.title + role.period}
            className="grid gap-5 md:grid-cols-[.34fr_.66fr] md:gap-12"
          >
            <div>
              <div className="flex items-center gap-[10px] text-xs tracking-[0.1em] text-peach">
                {role.current && (
                  <span
                    aria-hidden
                    className="rd-pulse h-2 w-2 shrink-0 rounded-full bg-success"
                    style={{ animation: 'rd-pulse 2s infinite' }}
                  />
                )}
                {role.period.toUpperCase()}
              </div>
              <a
                href={role.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[22px] font-extrabold leading-[1.1] tracking-[-0.02em] text-peach no-underline hover:text-sky"
              >
                {role.company} <span aria-hidden>↗</span>
              </a>
              <div className="mt-1 text-[15px] text-mist/70">
                {role.location}
              </div>
            </div>

            <div>
              <h3 className="m-0 text-[22px]">{role.title}</h3>
              <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-mist">
                    <span aria-hidden className="text-peach">
                      ·
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
