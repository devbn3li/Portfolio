import '../public/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CalendlyWidget from '../components/CalendlyWidget';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Mohamed Ali - Frontend Engineer',
  description: 'Frontend portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen bg-bg font-sans`}>
        {children}
        <CalendlyWidget />
      </body>
    </html>
  )
}