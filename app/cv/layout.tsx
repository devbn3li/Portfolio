import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'CV of Mohamed Ali, frontend engineer in Cairo. 2+ years building fast, accessible web apps with React, Next.js and TypeScript.',
  alternates: { canonical: '/cv' },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
