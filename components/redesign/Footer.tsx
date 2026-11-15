import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative z-[2] flex flex-col items-center justify-between gap-4 border-t border-mist/[0.07] bg-abyss px-6 py-7 text-center text-xs tracking-[0.1em] text-mist/70 sm:flex-row sm:text-left md:px-10">
      <Logo />
      <span>© 2026 MOHAMED ALI</span>
      <span>CAIRO, EGYPT · GMT+2</span>
      <a href="#top" className="text-mist no-underline hover:text-sky">
        BACK TO TOP <span aria-hidden>↑</span>
      </a>
    </footer>
  );
}
