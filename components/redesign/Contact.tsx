import Reveal from './Reveal';
import { SITE } from './data';

// Email and social links only. The old form was a simulation that showed
// "sent" without sending anything, so it was removed until it is wired to a
// real mail service.
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pb-24 pt-24 text-center md:px-10 md:pt-[160px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-brand">
        04 / CONTACT
      </Reveal>
      <Reveal
        as="h2"
        id="contact-heading"
        delay={80}
        className="mb-3 mt-7 text-[clamp(40px,6.5vw,88px)] uppercase"
      >
        Let&apos;s build
        <br />
        something <span className="text-accent">alive.</span>
      </Reveal>
      <Reveal as="p" delay={140} className="mx-auto max-w-[440px] text-body">
        Have a project, a role, or just an idea? My inbox is open and I usually
        reply within 24 hours.
      </Reveal>

      <Reveal delay={200} className="mt-10">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-block max-w-full break-words rounded-full border border-brand px-5 py-4 text-[clamp(13px,2.2vw,22px)] text-brand no-underline transition-[transform,background-color] duration-[250ms] hover:-translate-y-[3px] hover:bg-brand/10 sm:px-9 sm:py-[18px]"
        >
          {SITE.email} <span aria-hidden>↗</span>
        </a>
      </Reveal>

      <Reveal
        delay={260}
        className="mt-10 flex justify-center gap-7 text-[13px] tracking-[0.1em]"
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
            className="text-body no-underline hover:text-accent"
          >
            {s.label} <span aria-hidden>↗</span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
