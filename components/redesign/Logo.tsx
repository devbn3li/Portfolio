import Link from 'next/link';

// Brand lockup: the mark (same paths as brand/mark-on-dark.svg, coloured via
// tokens) followed by the "devbn3li" wordmark as real, indexable text.
// `wordmarkClassName` lets a caller hide the wordmark where space is tight.
export default function Logo({
  wordmarkClassName = '',
}: {
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/#top"
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
          className="stroke-peach"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M84 92 H106"
          className="stroke-sky"
          strokeWidth="13"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`text-[22px] font-extrabold leading-none tracking-[-0.02em] text-peach ${wordmarkClassName}`}
      >
        <span className="opacity-[0.55]">dev</span>bn
        <span className="text-sky">3</span>li
      </span>
    </Link>
  );
}
