import '../public/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Archivo, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
});

const grotesk = Space_Grotesk({
  variable: '--font-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devbn3li.app'),
  title: {
    default: 'Mohamed Ali | Frontend Engineer',
    template: '%s | Mohamed Ali',
  },
  description:
    'Frontend engineer in Cairo building fast, accessible web apps with React, Next.js and TypeScript. 2+ years shipping production UI.',
  keywords: [
    'Frontend Engineer',
    'Frontend Developer',
    'React developer',
    'Next.js developer',
    'TypeScript',
    'Web Developer',
    'Cairo',
    'Egypt',
    'Freelance',
    'Mohamed Ali',
  ],
  authors: [{ name: 'Mohamed Ali', url: 'https://devbn3li.app' }],
  creator: 'Mohamed Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devbn3li.app',
    title: 'Mohamed Ali | Frontend Engineer',
    description:
      'Frontend engineer in Cairo building fast, accessible web apps with React, Next.js and TypeScript.',
    siteName: 'Mohamed Ali',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohamed Ali, Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Ali | Frontend Engineer',
    description:
      'Frontend engineer in Cairo building fast, accessible web apps with React, Next.js and TypeScript.',
    images: ['/og-image.png'],
    creator: '@devbn3lii',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0e',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohamed Ali',
    alternateName: 'Mohamed Ali Hussein',
    jobTitle: 'Frontend Engineer',
    url: 'https://devbn3li.app',
    email: 'mailto:muhammed.ali.hissein@gmail.com',
    image: 'https://devbn3li.app/og-image.png',
    sameAs: [
      'https://github.com/devbn3li',
      'https://linkedin.com/in/devbn3li',
      'https://twitter.com/devbn3lii',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Sustaingrc',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of the People',
    },
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'React Native',
      'Redux',
      'Node.js',
      'Frontend Development',
      'Web Performance',
      'Accessibility',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressLocality: 'Cairo',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${archivo.variable} ${grotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-bg font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
