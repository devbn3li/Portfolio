import Reveal from './Reveal';
import { CopyEmail } from '@/components/showcase';
import { SITE } from './data';

// Email and social links only. The old form was a simulation that showed
// "sent" without sending anything, so it was removed until it is wired to a
// real mail service.
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-[2] mx-auto w-full max-w-[1320px] px-6 pb-24 pt-24 text-center md:px-10 md:pt-[160px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-muted">
        04 / CONTACT
      </Reveal>
      <Reveal
        as="h2"
        id="contact-heading"
        delay={80}
        className="mx-auto mb-3 mt-7 max-w-[820px] text-[clamp(34px,4.8vw,64px)] [text-wrap:balance]"
      >
        Hiring for frontend or full-stack? Let&apos;s talk.
      </Reveal>
      <Reveal as="p" delay={140} className="mx-auto max-w-[440px] text-body">
        Have a project, a role, or just an idea? My inbox is open.
      </Reveal>

      <Reveal delay={200} className="mt-10">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-block max-w-full break-words text-[clamp(20px,3vw,36px)] font-extrabold tracking-[-0.02em] text-heading underline decoration-body/40 decoration-2 underline-offset-[6px] transition-colors duration-200 hover:decoration-brand"
        >
          {SITE.email}
        </a>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex h-12 items-center rounded-full bg-brand px-7 font-extrabold text-onbrand no-underline transition-[filter] duration-200 hover:brightness-110"
          >
            Email me
          </a>
          <CopyEmail />
        </div>
      </Reveal>

      <Reveal
        delay={260}
        className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-2 text-[13px] tracking-[0.1em]"
      >
        {[
          { label: 'GITHUB', href: SITE.social.github },
          { label: 'LINKEDIN', href: SITE.social.linkedin },
          { label: 'TWITTER', href: SITE.social.twitter },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center text-body no-underline hover:text-heading"
          >
            {s.label} <span aria-hidden>↗</span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
