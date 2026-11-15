import WorkShowcase from './WorkShowcase';
import { HERO_COPY, MARQUEE, SITE } from './data';

const REVEAL_EASE = 'cubic-bezier(.22,1,.36,1)';

// The headline flows as one balanced paragraph at every width; each part fades
// in on its own (opacity only, so text never shifts).
const HEADLINE: { text: string; accent?: boolean; nowrap?: boolean }[][] = [
  [{ text: 'Frontend-first', nowrap: true }, { text: ' software engineer.' }],
  [{ text: 'I ship the' }],
  [{ text: 'whole product', accent: true }, { text: ': UI, API' }],
  [{ text: 'and pipeline.' }],
];

// Full-viewport hero. Animations are pure CSS (no JS gate) so the LCP headline
// paints server-side and just animates in.
export default function Hero() {
  const { paragraph, cta } = HERO_COPY[SITE.audience];
  const marqueeRun = MARQUEE.join(' ✦ ') + ' ✦';

  return (
    <header
      id="top"
      className="relative z-[2] flex min-h-[min(100svh,900px)] flex-col justify-center pt-[88px]"
    >
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-6 pt-2 md:px-10 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="min-w-0">
          {SITE.availableBadge && (
            <div
              className="rd-fade-up inline-flex max-w-full items-center gap-[10px] rounded-full border border-body/[0.14] px-4 py-2 text-[11px] tracking-[0.1em] text-body sm:text-xs"
              style={{ animation: `rd-fade-up .8s .1s ${REVEAL_EASE} both` }}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-success"
              />
              <span className="min-w-0">
                OPEN FOR OPPORTUNITIES
                <span className="hidden sm:inline"> · {SITE.location}</span>
              </span>
            </div>
          )}

          <div
            className="rd-fade-up mb-3 mt-6 text-[13px] tracking-[0.14em] text-muted"
            style={{ animation: `rd-fade-up .8s .25s ${REVEAL_EASE} both` }}
          >
            MOHAMED ALI · SOFTWARE ENGINEER
          </div>

          <h1 className="m-0 text-[clamp(32px,3.2vw,46px)] leading-[1.1] tracking-[-0.03em] [text-wrap:balance]">
            {HEADLINE.map((line, i) => (
              <span key={i}>
                <span
                  className="rd-hero-up"
                  style={{
                    animation: `rd-hero-up .9s ${0.35 + i * 0.12}s ${REVEAL_EASE} both`,
                  }}
                >
                  {line.map((part) => (
                    <span
                      key={part.text}
                      className={part.accent ? 'text-accent' : part.nowrap ? 'whitespace-nowrap' : undefined}
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
            <p className="mb-0 mt-5 max-w-[540px] text-body">{paragraph}</p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-[14px]">
              <a
                href={cta.href}
                className="w-full rounded-full bg-brand px-[30px] py-[15px] text-center font-extrabold text-onbrand no-underline transition-[transform,background-color] duration-200 hover:-translate-y-[3px] hover:brightness-110 sm:w-auto"
              >
                {cta.label}
              </a>
              <a
                href="#contact"
                className="w-full rounded-full border border-muted px-[30px] py-[15px] text-center font-extrabold text-heading no-underline transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-heading sm:w-auto"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <WorkShowcase />
      </div>

      {/* Tech marquee */}
      <div className="mt-10 overflow-hidden border-y border-body/[0.08] py-4">
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
