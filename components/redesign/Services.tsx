import Reveal from './Reveal';
import { SERVICES } from './data';

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-peach">
        02 / SERVICES
      </Reveal>

      <Reveal
        delay={80}
        className="mt-7 flex flex-wrap items-end justify-between gap-5"
      >
        <h2
          id="services-heading"
          className="m-0 text-[clamp(30px,3.6vw,48px)] font-extrabold tracking-[-0.02em]"
        >
          What I can do for you.
        </h2>
        <p className="m-0 max-w-[380px] text-[15px] text-mist">
          Six things I get hired for, and the stack I reach for when I do.
        </p>
      </Reveal>

      {/* Hairline grid: 1px gap over a light bg shows through as rules */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-mist/[0.09] bg-mist/[0.09] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.n}
            delay={(i % 3) * 60}
            className="group bg-abyss p-8 transition-colors duration-300 hover:bg-petrol"
          >
            <div className="text-xs text-peach">{service.n}</div>
            <h3 className="mb-[10px] mt-[14px] text-[21px] font-extrabold">
              {service.title}
            </h3>
            <p className="mb-4 text-[15px] text-mist">{service.desc}</p>
            <div className="text-[11px] tracking-[0.08em] text-mist/70">
              {service.stack}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
