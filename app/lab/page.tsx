import Link from 'next/link';
import { CONCEPTS } from '@/components/lab/registry';
import { palettes } from '@/lib/brand';

// Lab index: every concept and every palette. Open a concept, then use the
// floating bar to try any palette on it.
export default function LabIndex() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1100px] px-6 pb-48 pt-16 text-body md:px-10">
      <p className="m-0 text-[13px] tracking-[0.14em] text-brand">DESIGN LAB</p>
      <h1 className="m-0 mt-4 text-[clamp(30px,4vw,52px)]">
        Pick a layout, then try the colours on it.
      </h1>
      <p className="mb-0 mt-5 max-w-[640px]">
        Each layout is a full, working homepage with the real content. The bar at
        the bottom switches layout and colours independently, on any of them.
      </p>

      <h2 className="mb-0 mt-14 text-[22px]">Layouts</h2>
      <ul className="m-0 mt-5 grid list-none gap-4 p-0 sm:grid-cols-2">
        {CONCEPTS.map((c) => (
          <li key={c.id}>
            <Link
              href={`/lab/${c.id}`}
              className="block h-full rounded-2xl border border-body/15 bg-surface p-6 no-underline transition-colors duration-200 hover:border-brand"
            >
              <span className="block text-[20px] font-extrabold text-heading">
                {c.name}
              </span>
              <span className="mt-2 block text-[15px] text-body">{c.blurb}</span>
              <span className="mt-4 block text-xs tracking-[0.1em] text-muted">
                DESIGNED FOR: {c.palette.toUpperCase()}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-0 mt-14 text-[22px]">Colours</h2>
      <ul className="m-0 mt-5 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(palettes).map(([name, p]) => (
          <li
            key={name}
            data-palette={name}
            className="rounded-2xl border border-body/15 bg-page p-5"
          >
            <span className="block text-[18px] font-extrabold text-heading">
              {name}
            </span>
            <span className="mt-1 block text-[13px] text-muted">{p.label}</span>
            <span className="mt-4 block text-[15px] text-body">
              Body text on the page background, with an{' '}
              <span className="text-accent">accent</span>.
            </span>
            <span className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand px-4 py-2 text-[13px] font-extrabold text-onbrand">
                Primary
              </span>
              <span className="rounded-full border border-brand px-4 py-2 text-[13px] font-extrabold text-brand">
                Secondary
              </span>
              <span className="rounded-lg bg-surface px-3 py-2 text-[12px] text-body">
                surface
              </span>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
