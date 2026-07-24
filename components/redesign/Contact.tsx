'use client';

import { useRef, useState } from 'react';
import Reveal from './Reveal';
import { SITE } from './data';

type Send = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'rounded-[10px] border border-white/[0.12] bg-ink px-[14px] py-[13px] font-grotesk text-[15px] text-paper outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/60';

const labelClass =
  'flex flex-col gap-2 font-mono text-[11px] tracking-[0.1em] text-paper-dim';

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

  const button: Record<Send, { label: string; bg: string; color: string }> = {
    idle: { label: 'Send message', bg: '#6f5bf5', color: '#fff' },
    error: { label: 'Send message', bg: '#6f5bf5', color: '#fff' },
    sending: { label: 'Sending…', bg: '#6f5bf5', color: '#fff' },
    sent: { label: 'Sent ✓', bg: '#3ddc97', color: '#0a0a0e' },
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
      <Reveal className="font-mono text-[13px] tracking-[0.14em] text-accent">
        05 / CONTACT
      </Reveal>
      <Reveal
        as="h2"
        id="contact-heading"
        delay={80}
        className="mb-3 mt-7 font-archivo text-[clamp(40px,6.5vw,88px)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]"
      >
        Let&apos;s build
        <br />
        something <span className="text-accent">alive.</span>
      </Reveal>
      <Reveal as="p" delay={140} className="mx-auto max-w-[440px] text-paper-muted">
        Have a project, a role, or just an idea? My inbox is open and I usually
        reply within 24 hours.
      </Reveal>

      <Reveal delay={200} className="mt-10">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-block max-w-full break-words rounded-full border border-white/20 px-5 py-4 font-mono text-[clamp(13px,2.2vw,22px)] text-paper no-underline transition-[transform,border-color,background-color] duration-[250ms] hover:-translate-y-[3px] hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-9 sm:py-[18px]"
        >
          {SITE.email} <span aria-hidden>↗</span>
        </a>
      </Reveal>

      <Reveal
        delay={240}
        className="mx-auto mt-14 max-w-[620px] rounded-[20px] border border-white/[0.08] bg-surface p-8 text-left"
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
              className="rounded-full border-0 px-[30px] py-[14px] font-grotesk text-[15px] font-semibold transition-[transform,background-color,color] duration-200 hover:-translate-y-[2px] disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              style={{
                background: btn.bg,
                color: btn.color,
                cursor:
                  send === 'sending' || send === 'sent' ? 'default' : 'pointer',
              }}
            >
              {btn.label}
            </button>
            <span className="font-mono text-[11px] tracking-[0.1em] text-paper-dim">
              {hint}
            </span>
          </div>

          <p
            aria-live="polite"
            className={`mt-3 min-h-[18px] font-mono text-[11px] tracking-[0.08em] ${
              send === 'error' ? 'text-[#f0a45b]' : 'text-success'
            }`}
          >
            {send === 'error' && error}
            {send === 'sent' && 'Thanks. Your message is on its way.'}
          </p>
        </form>
      </Reveal>

      <Reveal
        delay={260}
        className="mt-9 flex justify-center gap-7 font-mono text-[13px] tracking-[0.1em]"
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
            className="text-paper-muted no-underline hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {s.label} <span aria-hidden>↗</span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
