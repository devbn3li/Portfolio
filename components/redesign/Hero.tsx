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
            className="rd-fade-up inline-flex items-center gap-[10px] rounded-full border border-white/[0.14] px-4 py-2 font-mono text-xs tracking-[0.1em] text-paper-muted"
            style={{ animation: `rd-fade-up .8s .1s ${REVEAL_EASE} both` }}
          >
            <span
              className="rd-pulse h-2 w-2 rounded-full bg-success"
              style={{ animation: 'rd-pulse 2s infinite' }}
            />
            OPEN FOR OPPORTUNITIES · {SITE.location}
          </div>
        )}

        <div
          className="rd-fade-up mb-2 mt-9 font-mono text-[13px] tracking-[0.14em] text-accent"
          style={{ animation: `rd-fade-up .8s .25s ${REVEAL_EASE} both` }}
        >
          MOHAMED ALI · FRONTEND ENGINEER
        </div>

        <h1 className="m-0 font-archivo text-[clamp(40px,7vw,104px)] font-extrabold uppercase leading-[0.96] tracking-[-0.02em]">
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
              className="rd-hero-up inline-block text-transparent"
              style={{
                WebkitTextStroke: '2px rgba(236,235,228,.85)',
                animation: `rd-hero-up .9s .5s ${REVEAL_EASE} both`,
              }}
            >
              that feel
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="rd-hero-up inline-block text-accent"
              style={{ animation: `rd-hero-up .9s .65s ${REVEAL_EASE} both` }}
            >
              alive<span className="text-paper">.</span>
            </span>
          </span>
        </h1>

        <div
          className="rd-fade-up mt-10 flex flex-wrap items-end justify-between gap-7"
          style={{ animation: `rd-fade-up .8s .85s ${REVEAL_EASE} both` }}
        >
          <p className="m-0 max-w-[460px] text-paper-muted">{paragraph}</p>
          <div className="flex gap-[14px]">
            <a
              href={cta.href}
              className="rounded-full bg-accent px-[30px] py-[15px] font-semibold text-white no-underline transition-[transform,background-color] duration-200 hover:-translate-y-[3px] hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {cta.label}
            </a>
            <a
              href="#proof"
              className="rounded-full border border-white/20 px-[30px] py-[15px] font-medium text-paper no-underline transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Try the live demos <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="mt-[72px] overflow-hidden border-y border-white/[0.08] py-4">
        <div
          className="rd-marquee flex w-max font-mono text-sm tracking-[0.18em] text-paper-dim"
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
