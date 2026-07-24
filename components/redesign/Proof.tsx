import Reveal from './Reveal';
import { FULL_KIT } from './data';
import TokenDemo from './demos/TokenDemo';
import PhysicsDemo from './demos/PhysicsDemo';
import StateMachineDemo from './demos/StateMachineDemo';
import PerformanceDemo from './demos/PerformanceDemo';

export default function Proof() {
  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="font-mono text-[13px] tracking-[0.14em] text-accent">
        03 / PROOF OF SKILL
      </Reveal>

      <Reveal
        delay={80}
        className="mt-7 flex flex-wrap items-end justify-between gap-5"
      >
        <h2
          id="proof-heading"
          className="m-0 font-archivo text-[clamp(30px,3.6vw,48px)] font-extrabold tracking-[-0.01em]"
        >
          Don&apos;t take my word for it.
        </h2>
        <p className="m-0 max-w-[380px] text-[15px] text-paper-muted">
          Every widget below is live and running on this page: plain React
          state, no libraries. Go ahead, poke them.
        </p>
      </Reveal>

      <div className="mt-12 grid items-start gap-5 md:grid-cols-2">
        <Reveal>
          <TokenDemo />
        </Reveal>
        <Reveal delay={120}>
          <PhysicsDemo />
        </Reveal>
        <Reveal delay={240}>
          <StateMachineDemo />
        </Reveal>
        <Reveal delay={360}>
          <PerformanceDemo />
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-7 flex flex-wrap items-center gap-2">
        <span className="mr-2 font-mono text-[11px] tracking-[0.12em] text-paper-dim">
          FULL KIT <span aria-hidden>→</span>
        </span>
        {FULL_KIT.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/10 px-[14px] py-[6px] text-[13px] text-paper-muted"
          >
            {tool}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
