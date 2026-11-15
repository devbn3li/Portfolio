import '../public/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Alexandria } from 'next/font/google';
import { palette, paletteCss } from '@/lib/brand';

// One family for the whole site, Latin and Arabic. Two weights only.
// `subsets` only controls preloading: the Arabic files are still declared and
// load on demand if Arabic text is ever added.
const alexandria = Alexandria({
  variable: '--font-alexandria',
  subsets: ['latin'],
  weight: ['400', '800'],
  display: 'swap',
});

const SITE_URL = 'https://devbn3li.app';
const TITLE = 'Mohamed Ali (devbn3li) | Frontend Engineer';
const DESCRIPTION =
  'Mohamed Ali, known online as devbn3li, is a frontend engineer in Cairo building fast, accessible web apps with React, Next.js and TypeScript. Led the refactor of a 25+ system portal.';
const SHORT_DESCRIPTION =
  'Mohamed Ali (devbn3li) is a frontend engineer in Cairo building fast, accessible web apps with React, Next.js and TypeScript.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Mohamed Ali (devbn3li)',
  },
  description: DESCRIPTION,
  authors: [{ name: 'Mohamed Ali', url: SITE_URL }],
  creator: 'Mohamed Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: TITLE,
    description: SHORT_DESCRIPTION,
    siteName: 'Mohamed Ali (devbn3li)',
    // og:image and its alt come from app/opengraph-image.tsx (file convention).
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SHORT_DESCRIPTION,
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
  themeColor: palette.page,
  colorScheme: palette.scheme,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Mohamed Ali',
    alternateName: ['devbn3li', 'Mohamed Ali Hussein'],
    jobTitle: 'Frontend Engineer',
    url: SITE_URL,
    email: 'mailto:muhammed.ali.hissein@gmail.com',
    image: `${SITE_URL}/images/me/me.jpg`,
    sameAs: [
      'https://github.com/devbn3li',
      'https://linkedin.com/in/devbn3li',
      'https://twitter.com/devbn3lii',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'SustainGRC',
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
      addressLocality: 'Cairo',
      addressCountry: 'EG',
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Mohamed Ali',
    alternateName: 'devbn3li',
    description: SHORT_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en-US',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* The site is already dark and its colours are deliberate: ask the
            Dark Reader extension not to recolour it. */}
        <meta name="darkreader-lock" />
        {/* Colour roles from brand/palettes.json. Outside production every
            palette is exposed too, for the local design lab at /lab. */}
        <style
          dangerouslySetInnerHTML={{
            __html: paletteCss(process.env.NODE_ENV !== 'production'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([person, website]) }}
        />
      </head>
      <body
        className={`${alexandria.variable} min-h-screen bg-page font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
