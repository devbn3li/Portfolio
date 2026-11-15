import { HERO_COPY, MARQUEE, SITE } from './data';

const REVEAL_EASE = 'cubic-bezier(.22,1,.36,1)';

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
      <div className="mx-auto w-full max-w-[1240px] px-6 pt-[120px] md:px-10 md:pt-[140px]">
        {SITE.availableBadge && (
          <div
            className="rd-fade-up inline-flex max-w-full items-center gap-[10px] rounded-full border border-mist/[0.14] px-4 py-2 text-[11px] tracking-[0.1em] text-mist sm:text-xs"
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
          className="rd-fade-up mb-2 mt-9 text-[13px] tracking-[0.14em] text-peach"
          style={{ animation: `rd-fade-up .8s .25s ${REVEAL_EASE} both` }}
        >
          MOHAMED ALI · FRONTEND ENGINEER
        </div>

        <h1 className="m-0 text-[clamp(40px,7vw,104px)] font-extrabold uppercase leading-[1.1] tracking-[-0.02em]">
          <span className="block overflow-hidden">
            <span
              className="rd-hero-up inline-block"
              style={{ animation: `rd-hero-up .9s .35s ${REVEAL_EASE} both` }}
            >
              Interfaces
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="rd-hero-up inline-block text-petrol"
              style={{
                // Stroke painted under a petrol fill: only the outer half of
                // the 4px stroke shows, which hides the overlapping inner
                // contours a variable font would otherwise reveal.
                WebkitTextStroke: '4px rgb(var(--peach) / .85)',
                paintOrder: 'stroke fill',
                animation: `rd-hero-up .9s .5s ${REVEAL_EASE} both`,
              }}
            >
              that feel
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="rd-hero-up inline-block text-peach"
              style={{ animation: `rd-hero-up .9s .65s ${REVEAL_EASE} both` }}
            >
              alive.
            </span>
          </span>
        </h1>

        <div
          className="rd-fade-up mt-10 flex flex-wrap items-end justify-between gap-7"
          style={{ animation: `rd-fade-up .8s .85s ${REVEAL_EASE} both` }}
        >
          <p className="m-0 max-w-[460px] text-mist">{paragraph}</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-[14px]">
            <a
              href={cta.href}
              className="w-full rounded-full bg-peach px-[30px] py-[15px] text-center font-extrabold text-petrol no-underline transition-[transform,background-color] duration-200 hover:-translate-y-[3px] hover:bg-peach/90 sm:w-auto"
            >
              {cta.label}
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border border-peach px-[30px] py-[15px] text-center font-extrabold text-peach no-underline transition-[transform,background-color] duration-200 hover:-translate-y-[3px] hover:bg-peach/10 sm:w-auto"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="mt-[72px] overflow-hidden border-y border-mist/[0.08] py-4">
        <div
          className="rd-marquee flex w-max text-sm tracking-[0.18em] text-mist/70"
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
