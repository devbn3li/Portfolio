export default function Footer() {
  return (
    <footer className="relative z-[2] flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] px-6 py-7 text-center font-mono text-xs tracking-[0.1em] text-paper-dim sm:flex-row sm:text-left md:px-10">
      <span>© 2026 MOHAMED ALI</span>
      <span>CAIRO, EGYPT · GMT+2</span>
      <a
        href="#top"
        className="text-paper-muted no-underline hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        BACK TO TOP <span aria-hidden>↑</span>
      </a>
    </footer>
  );
}
