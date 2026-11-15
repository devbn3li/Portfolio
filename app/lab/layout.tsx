import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LabBar from '@/components/lab/LabBar';

// Local design lab: alternative homepage concepts and palettes, side by side.
// Never indexed, and not served at all in production builds.
export const metadata: Metadata = {
  title: 'Design lab',
  robots: { index: false, follow: false },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <>
      {children}
      <LabBar />
    </>
  );
}
