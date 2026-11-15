import Logo from './Logo';
import { NAV_LINKS, SITE } from './data';

// Fixed, blurred top nav.
export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[70] flex items-center justify-between border-b border-mist/[0.06] bg-petrol/70 px-6 py-[18px] backdrop-blur-[14px] md:px-10">
      {/* Between md and lg the five links leave no room for the wordmark. */}
      <Logo wordmarkClassName="md:hidden lg:inline" />

      <div className="flex items-center gap-6 text-xs tracking-[0.12em] md:gap-8">
        <div className="hidden items-center gap-6 md:flex md:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-mist/70 no-underline transition-colors duration-200 hover:text-peach focus-visible:text-peach"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={SITE.cvPdf}
          download
          className="rounded-full bg-peach px-[18px] py-2 font-extrabold text-petrol no-underline transition-colors duration-200 hover:bg-peach/90"
        >
          CV <span aria-hidden>↓</span>
        </a>
      </div>
    </nav>
  );
}
