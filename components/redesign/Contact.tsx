'use client';

import { useRef, useState } from 'react';
import Reveal from './Reveal';
import { SITE } from './data';

type Send = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'rounded-[10px] border border-mist/[0.12] bg-petrol px-[14px] py-[13px] text-[15px] text-mist focus-visible:border-sky';

const labelClass =
  'flex flex-col gap-2 text-[11px] tracking-[0.1em] text-mist/70';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [send, setSend] = useState<Send>('idle');
  const [error, setError] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (send === 'sending' || send === 'sent') return;

    if (!name.trim() || !email.trim() || !msg.trim()) {
      setSend('error');
      setError('Please fill in your name, email, and a short message.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setSend('error');
      setError('That email address does not look right.');
      return;
    }

    setError('');
    setSend('sending');
    // NOTE: simulation. Wire to a route handler / Resend / Formspree here.
    timer.current = setTimeout(() => setSend('sent'), 1100);
  };

  const button: Record<Send, { label: string; cls: string }> = {
    idle: { label: 'Send message', cls: 'bg-peach text-petrol' },
    error: { label: 'Send message', cls: 'bg-peach text-petrol' },
    sending: { label: 'Sending…', cls: 'bg-peach text-petrol' },
    sent: { label: 'Sent ✓', cls: 'bg-success text-petrol' },
  };
  const btn = button[send];
  const hint =
    send === 'sent' ? "I'LL REPLY WITHIN 24H" : 'OR JUST EMAIL ME DIRECTLY';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pb-20 pt-24 text-center md:px-10 md:pt-[160px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-peach">
        05 / CONTACT
      </Reveal>
      <Reveal
        as="h2"
        id="contact-heading"
        delay={80}
        className="mb-3 mt-7 text-[clamp(40px,6.5vw,88px)] font-extrabold uppercase leading-[1.1] tracking-[-0.02em]"
      >
        Let&apos;s build
        <br />
        something <span className="text-sky">alive.</span>
      </Reveal>
      <Reveal as="p" delay={140} className="mx-auto max-w-[440px] text-mist">
        Have a project, a role, or just an idea? My inbox is open and I usually
        reply within 24 hours.
      </Reveal>

      <Reveal delay={200} className="mt-10">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-block max-w-full break-words rounded-full border border-peach px-5 py-4 text-[clamp(13px,2.2vw,22px)] text-peach no-underline transition-[transform,border-color,background-color] duration-[250ms] hover:-translate-y-[3px] hover:bg-peach/10 sm:px-9 sm:py-[18px]"
        >
          {SITE.email} <span aria-hidden>↗</span>
        </a>
      </Reveal>

      <Reveal
        delay={240}
        className="mx-auto mt-14 max-w-[620px] rounded-[20px] border border-mist/[0.08] bg-abyss p-8 text-left"
      >
        <form onSubmit={submit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              YOUR NAME
              <input
                type="text"
                autoComplete="name"
                placeholder="Ada Lovelace"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </label>
            <label className={labelClass}>
              EMAIL
              <input
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </label>
          </div>
          <label className={`${labelClass} mt-4`}>
            MESSAGE
            <textarea
              rows={4}
              placeholder="Tell me what you're building..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className={`${inputClass} resize-y`}
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={send === 'sending' || send === 'sent'}
              aria-busy={send === 'sending'}
              className={`rounded-full border-0 px-[30px] py-[14px] text-[15px] font-extrabold transition-[transform,background-color,color] duration-200 hover:-translate-y-[2px] disabled:hover:translate-y-0 ${btn.cls}`}
              style={{
                cursor:
                  send === 'sending' || send === 'sent' ? 'default' : 'pointer',
              }}
            >
              {btn.label}
            </button>
            <span className="text-[11px] tracking-[0.1em] text-mist/70">
              {hint}
            </span>
          </div>

          <p
            aria-live="polite"
            className={`mt-3 min-h-[18px] text-[11px] tracking-[0.08em] ${
              send === 'error' ? 'text-peach' : 'text-success'
            }`}
          >
            {send === 'error' && error}
            {send === 'sent' && 'Thanks. Your message is on its way.'}
          </p>
        </form>
      </Reveal>

      <Reveal
        delay={260}
        className="mt-9 flex justify-center gap-7 text-[13px] tracking-[0.1em]"
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
            className="text-mist no-underline hover:text-sky"
          >
            {s.label} <span aria-hidden>↗</span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
