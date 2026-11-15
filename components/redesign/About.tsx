import Reveal from './Reveal';

const DETAILS = [
  { label: 'BASED IN', value: 'Cairo, Egypt (GMT+2)' },
  { label: 'WORKS WITH', value: 'Remote teams in London, Jordan and the US' },
  { label: 'CORE STACK', value: 'React, Next.js, TypeScript, React Native, Node.js' },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-brand">
        03 / ABOUT
      </Reveal>

      <div className="mt-7 grid gap-12 md:grid-cols-[1.2fr_.8fr] md:gap-16">
        <div>
          <Reveal
            as="h2"
            id="about-heading"
            delay={80}
            className="m-0 mb-6 text-[clamp(30px,3.6vw,48px)]"
          >
            Strongest on the frontend, responsible for the whole product.
          </Reveal>
          <Reveal as="p" delay={160} className="m-0 mb-[18px] max-w-[560px] text-body">
            I&apos;m Mohamed, known online as devbn3li, a software engineer
            based in Cairo who has worked remotely with teams in London,
            Jordan and the US. Currently at <span className="text-heading">SustainGRC</span>,
            where I am the primary point of responsibility for the
            portal&apos;s frontend quality and performance.
          </Reveal>
          <Reveal as="p" delay={220} className="m-0 max-w-[560px] text-body">
            I care about the last 10%: the easing curve on a dropdown, the
            skeleton state nobody notices, the tab order everyone benefits
            from. Fast, responsive, accessible. In that order, all three.
          </Reveal>
        </div>

        <Reveal
          delay={200}
          className="self-start border-body/10 md:border-l md:pl-10"
        >
          <dl className="m-0 flex flex-col gap-7">
            {DETAILS.map((d) => (
              <div key={d.label}>
                <dt className="text-xs tracking-[0.14em] text-muted">
                  {d.label}
                </dt>
                <dd className="m-0 mt-1 font-extrabold text-heading">{d.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
