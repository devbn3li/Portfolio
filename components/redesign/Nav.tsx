import Link from 'next/link';
import { NAV_LINKS, SITE } from './data';

// Fixed, blurred top nav for the homepage redesign.
export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[70] flex items-center justify-between border-b border-white/[0.06] bg-ink/70 px-6 py-[18px] backdrop-blur-[14px] md:px-10">
      <Link
        href="#top"
        className="font-archivo text-[22px] font-extrabold text-paper no-underline"
        aria-label="Back to top"
      >
        m<span className="text-accent">.</span>
      </Link>

      <div className="flex items-center gap-6 font-mono text-xs tracking-[0.12em] md:gap-8">
        <div className="hidden items-center gap-6 md:flex md:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-paper-dim no-underline transition-colors duration-200 hover:text-paper focus-visible:text-paper focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Link
          href={SITE.cvUrl}
          className="rounded-full bg-paper px-[18px] py-2 font-medium text-ink no-underline transition-colors duration-200 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          CV <span aria-hidden>↓</span>
        </Link>
      </div>
    </nav>
  );
}
