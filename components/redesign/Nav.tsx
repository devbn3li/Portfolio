import Link from 'next/link';
import Logo from './Logo';
import { NAV_LINKS } from './data';

// Fixed, blurred top nav. Contact is the one filled action; it is also the
// only link shown on small screens.
export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[70] flex items-center justify-between border-b border-body/[0.06] bg-page/70 px-6 py-[18px] backdrop-blur-[14px] md:px-10">
      <Logo />

      <div className="flex items-center gap-6 text-xs tracking-[0.12em] md:gap-8">
        <div className="hidden items-center gap-6 md:flex md:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted no-underline transition-colors duration-200 hover:text-heading focus-visible:text-heading"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Link
          href="/#contact"
          className="rounded-full bg-brand px-[18px] py-2 font-extrabold text-onbrand no-underline transition-colors duration-200 hover:bg-brand/90"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
