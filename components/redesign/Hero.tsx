import WorkShowcase from './WorkShowcase';
import { HERO_COPY, MARQUEE, SITE } from './data';

const REVEAL_EASE = 'cubic-bezier(.22,1,.36,1)';

// Four controlled lines on desktop (beside the visual); below lg the same
// spans flow inline and wrap naturally.
const HEADLINE: { text: string; accent?: boolean }[][] = [
  [{ text: 'Frontend-first software' }],
  [{ text: 'engineer. I ship the' }],
  [{ text: 'whole product', accent: true }, { text: ': UI, API' }],
  [{ text: 'and pipeline.' }],
];

// Full-viewport hero. Animations are pure CSS (no JS gate) so the LCP headline
// paints server-side and just animates in.
export default function Hero() {
  const { paragraph, cta } = HERO_COPY[SITE.audience];
  const marqueeRun = MARQUEE.map((t) => `${t} ✦`).join(' ') + ' ✦';

  return (
    <header
      id="top"
      className="relative z-[2] flex min-h-screen flex-col justify-end"
    >
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-6 pt-[100px] md:px-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
        <div className="min-w-0">
          {SITE.availableBadge && (
            <div
              className="rd-fade-up inline-flex max-w-full items-center gap-[10px] rounded-full border border-body/[0.14] px-4 py-2 text-[11px] tracking-[0.1em] text-body sm:text-xs"
              style={{ animation: `rd-fade-up .8s .1s ${REVEAL_EASE} both` }}
            >
              <span
                className="rd-pulse h-2 w-2 shrink-0 rounded-full bg-success"
                style={{ animation: 'rd-pulse 2s infinite' }}
              />
              <span className="min-w-0">
                OPEN FOR OPPORTUNITIES
                <span className="hidden sm:inline"> · {SITE.location}</span>
              </span>
            </div>
          )}

          <div
            className="rd-fade-up mb-4 mt-8 text-[13px] tracking-[0.14em] text-brand"
            style={{ animation: `rd-fade-up .8s .25s ${REVEAL_EASE} both` }}
          >
            MOHAMED ALI · SOFTWARE ENGINEER
          </div>

          <h1 className="m-0 text-[clamp(32px,3.7vw,50px)] leading-[1.12] tracking-[-0.03em]">
            {HEADLINE.map((line, i) => (
              <span key={i} className="lg:block lg:overflow-hidden">
                <span
                  className="rd-hero-up lg:inline-block"
                  style={{
                    animation: `rd-hero-up .9s ${0.35 + i * 0.12}s ${REVEAL_EASE} both`,
                  }}
                >
                  {line.map((part) => (
                    <span
                      key={part.text}
                      className={part.accent ? 'text-accent' : undefined}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>{' '}
              </span>
            ))}
          </h1>

          <div
            className="rd-fade-up"
            style={{ animation: `rd-fade-up .8s .85s ${REVEAL_EASE} both` }}
          >
            <p className="mb-0 mt-6 max-w-[540px] text-body">{paragraph}</p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-[14px]">
              <a
                href={cta.href}
                className="w-full rounded-full bg-brand px-[30px] py-[15px] text-center font-extrabold text-onbrand no-underline transition-[transform,background-color] duration-200 hover:-translate-y-[3px] hover:bg-brand/90 sm:w-auto"
              >
                {cta.label}
              </a>
              <a
                href="#contact"
                className="w-full rounded-full border border-brand px-[30px] py-[15px] text-center font-extrabold text-brand no-underline transition-[transform,background-color] duration-200 hover:-translate-y-[3px] hover:bg-brand/10 sm:w-auto"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <WorkShowcase />
      </div>

      {/* Tech marquee */}
      <div className="mt-12 overflow-hidden border-y border-body/[0.08] py-4">
        <div
          className="rd-marquee flex w-max text-sm tracking-[0.18em] text-muted"
          style={{ animation: 'rd-marquee 30s linear infinite' }}
        >
          <span className="whitespace-nowrap pr-12">{marqueeRun}</span>
          <span className="whitespace-nowrap pr-12" aria-hidden>
            {marqueeRun}
          </span>
        </div>
      </div>
    </header>
  );
}
