import Link from 'next/link';

// Brand lockup: the mark (same paths as brand/mark-on-dark.svg, coloured via
// tokens) followed by the "devbn3li" wordmark as real, indexable text.
// `wordmarkClassName` lets a caller hide the wordmark where space is tight;
// `href` lets a page point the logo at its own top anchor.
export default function Logo({
  wordmarkClassName = '',
  href = '/#top',
}: {
  wordmarkClassName?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Mohamed Ali (devbn3li), home"
      className="inline-flex shrink-0 items-center gap-[10px] rounded-md no-underline"
    >
      <svg
        viewBox="0 0 160 160"
        width="32"
        height="32"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M34 114 V50 L64 94 L94 50 L124 114"
          className="stroke-brand"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M84 92 H106"
          className="stroke-accent"
          strokeWidth="13"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`text-[22px] font-extrabold leading-none tracking-[-0.02em] text-brand ${wordmarkClassName}`}
      >
        <span className="text-muted">dev</span>bn
        <span className="text-accent">3</span>li
      </span>
    </Link>
  );
}
