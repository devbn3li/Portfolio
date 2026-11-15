import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative z-[2] flex flex-col items-center justify-between gap-4 border-t border-body/[0.07] bg-surface px-6 py-7 text-center text-xs tracking-[0.1em] text-muted sm:flex-row sm:text-left md:px-10">
      <Logo />
      <span>© 2026 MOHAMED ALI</span>
      <span>CAIRO, EGYPT · GMT+2</span>
      <a href="#top" className="text-body no-underline hover:text-accent">
        BACK TO TOP <span aria-hidden>↑</span>
      </a>
    </footer>
  );
}
