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
  metadataBase: new URL('https://devbn3li.vercel.app'),
  title: {
    default: 'Mohamed Ali | Frontend Engineer',
    template: '%s | Mohamed Ali',
  },
  description:
    'Frontend Engineer specializing in React.js, Next.js, and TypeScript. Building fast, scalable web applications and intuitive user interfaces.',
  keywords: [
    'Frontend Developer',
    'React.js',
    'Next.js',
    'TypeScript',
    'Web Developer',
    'Egypt',
    'Mohamed Ali',
    'Portfolio',
    'Blog',
  ],
  authors: [{ name: 'Mohamed Ali', url: 'https://devbn3li.vercel.app' }],
  creator: 'Mohamed Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devbn3li.vercel.app',
    title: 'Mohamed Ali | Frontend Engineer',
    description:
      'Frontend Engineer specializing in React.js, Next.js, and TypeScript. Building fast, scalable web applications.',
    siteName: 'Mohamed Ali Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohamed Ali - Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Ali | Frontend Engineer',
    description:
      'Frontend Engineer specializing in React.js, Next.js, and TypeScript.',
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
    jobTitle: 'Frontend Engineer',
    url: 'https://devbn3li.vercel.app',
    sameAs: [
      'https://github.com/devbn3li',
      'https://linkedin.com/in/devbn3li',
      'https://twitter.com/devbn3lii',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Frontend Development',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Egypt',
      addressLocality: 'Cairo',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
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
