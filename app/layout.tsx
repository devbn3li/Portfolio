import '../public/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap', // Prevent FOIT (Flash of Invisible Text)
  preload: true,
});

export const metadata: Metadata = {
  title: 'Mohamed Ali - Frontend Engineer',
  description: 'Egyptian Software Engineer specializing in frontend development with React.js, Next.js, and TypeScript. Building fast, responsive, and accessible web applications.',
  keywords: ['Frontend Developer', 'React.js', 'Next.js', 'TypeScript', 'Web Developer', 'Egypt', 'Mohamed Ali'],
  authors: [{ name: 'Mohamed Ali' }],
  creator: 'Mohamed Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mohamed Ali - Frontend Engineer',
    description: 'Egyptian Software Engineer specializing in frontend development with React.js, Next.js, and TypeScript.',
    siteName: 'Mohamed Ali Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Ali - Frontend Engineer',
    description: 'Egyptian Software Engineer specializing in frontend development with React.js, Next.js, and TypeScript.',
    creator: '@devbn3lii',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohamed Ali',
    jobTitle: 'Frontend Engineer',
    url: 'https://devbn3li.netlify.app/',
    sameAs: [
      'https://github.com/devbn3li',
      'https://linkedin.com/in/devbn3li',
      'https://twitter.com/devbn3lii',
    ],
    knowsAbout: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Frontend Development'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Egypt',
      addressLocality: 'Cairo',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen bg-[#09090b] font-sans`}>
        {children}
      </body>
    </html>
  )
}