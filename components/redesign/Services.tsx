import Reveal from './Reveal';
import { SERVICES } from './data';

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="font-mono text-[13px] tracking-[0.14em] text-accent">
        02 / SERVICES
      </Reveal>

      <Reveal
        delay={80}
        className="mt-7 flex flex-wrap items-end justify-between gap-5"
      >
        <h2
          id="services-heading"
          className="m-0 font-archivo text-[clamp(30px,3.6vw,48px)] font-extrabold tracking-[-0.01em]"
        >
          What I can do for you.
        </h2>
        <p className="m-0 max-w-[380px] text-[15px] text-paper-muted">
          Six things I get hired for, and the stack I reach for when I do.
        </p>
      </Reveal>

      {/* Hairline grid: 1px gap over a light bg shows through as rules */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.n}
            delay={(i % 3) * 60}
            className="group bg-surface-alt p-8 transition-colors duration-300 hover:bg-surface-hover"
          >
            <div className="font-mono text-xs text-accent">{service.n}</div>
            <h3 className="mb-[10px] mt-[14px] font-archivo text-[21px] font-bold">
              {service.title}
            </h3>
            <p className="mb-4 text-[15px] text-paper-muted">{service.desc}</p>
            <div className="font-mono text-[11px] tracking-[0.08em] text-paper-dim">
              {service.stack}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
