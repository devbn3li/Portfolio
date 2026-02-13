import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PxRemConverter from '@/components/tools/PxRemConverter';

export const metadata: Metadata = {
  title: 'PX to REM Converter',
  description:
    'Free online PX to REM converter tool. Convert pixel values to REM units instantly with a customizable base font size.',
  keywords: [
    'PX to REM',
    'pixel to rem',
    'CSS converter',
    'frontend tools',
    'web development',
  ],
};

export default function PxConverterPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-28">
        {/* Back link */}
        <Link
          href="/tools"
          className="mb-8 inline-flex items-center gap-2 text-white/50 transition-colors hover:text-brand"
        >
          <FiArrowLeft />
          <span>Back to Tools</span>
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-black text-white md:text-4xl">
            PX to REM Converter
            <span className="text-5xl font-black text-brand">.</span>
          </h1>
          <p className="mt-3 text-white/60">
            Convert pixel values to REM units and vice versa. Adjust the base
            font size to match your project&apos;s root font size.
          </p>
        </div>

        <PxRemConverter />
      </main>
      <Footer />
    </div>
  );
}
