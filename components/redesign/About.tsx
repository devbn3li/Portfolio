import Reveal from './Reveal';

const STATS = [
  { value: '2+', label: 'YEARS SHIPPING' },
  { value: '16', label: 'TOOLS IN THE KIT' },
  { value: '∞', label: 'PIXELS OBSESSED OVER' },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="font-mono text-[13px] tracking-[0.14em] text-accent">
        01 / ABOUT
      </Reveal>

      <div className="mt-7 grid gap-12 md:grid-cols-[1.2fr_.8fr] md:gap-16">
        <div>
          <Reveal
            as="h2"
            id="about-heading"
            delay={80}
            className="m-0 mb-6 font-archivo text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.1] tracking-[-0.01em]"
          >
            I turn designs into products people actually enjoy using.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="m-0 mb-[18px] max-w-[560px] text-paper-muted"
          >
            I&apos;m Mohamed, a 22-year-old frontend engineer from Egypt. I care
            about the last 10%: the easing curve on a dropdown, the skeleton
            state nobody notices, the tab order everyone benefits from. Fast,
            responsive, accessible. In that order, all three.
          </Reveal>
          <Reveal as="p" delay={220} className="m-0 max-w-[560px] text-paper-muted">
            Currently a Frontend Engineer at{' '}
            <span className="text-paper">Sustaingrc</span> and a Computer Science
            student at the{' '}
            <span className="text-paper">University of the People</span>.
          </Reveal>

          <Reveal delay={280} className="mt-11 flex flex-wrap gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-archivo text-[40px] font-extrabold text-accent">
                  {stat.value}
                </div>
                <div className="font-mono text-xs tracking-[0.12em] text-paper-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={200}
          className="self-start border-white/10 md:border-l md:pl-10"
        >
          <div className="mb-6 font-mono text-xs tracking-[0.14em] text-paper-dim">
            EXPERIENCE
          </div>
          <div className="mb-7">
            <div className="font-mono text-xs text-accent">SINCE 2024</div>
            <div className="mt-1 font-semibold">Frontend Engineer</div>
            <div className="text-[15px] text-paper-muted">Sustaingrc</div>
          </div>
          <div className="mb-7">
            <div className="font-mono text-xs text-accent">SINCE 2023</div>
            <div className="mt-1 font-semibold">B.Sc. Computer Science</div>
            <div className="text-[15px] text-paper-muted">
              University of the People
            </div>
          </div>

          <div className="mb-4 mt-9 font-mono text-xs tracking-[0.14em] text-paper-dim">
            BEYOND CODE
          </div>
          <div className="flex flex-col gap-[10px] text-[15px] text-paper-muted">
            <div>Writing about frontend on my blog</div>
            <div>Building small tools for developers</div>
            <div>Reviewing PRs and mentoring juniors</div>
            <div>Always learning something new</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
