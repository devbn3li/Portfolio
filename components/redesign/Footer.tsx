import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-body/[0.07] bg-surface">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-7 text-center text-xs tracking-[0.1em] text-muted sm:flex-row sm:text-left md:px-10">
        <Logo />
        <span>© 2026 MOHAMED ALI</span>
        <span>CAIRO, EGYPT</span>
        <a
          href="#top"
          className="inline-flex min-h-10 items-center text-body no-underline hover:text-heading"
        >
          BACK TO TOP <span aria-hidden>↑</span>
        </a>
      </div>
    </footer>
  );
}
