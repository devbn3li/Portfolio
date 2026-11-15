// Config + content for the portfolio (devbn3li.app).
// Kept as data so copy and links live in one place. Every claim here comes
// from the CV; do not add numbers or roles that are not in it.

export type Audience = 'recruiters' | 'clients';

export const SITE = {
  // Swaps the hero paragraph + primary CTA.
  audience: 'recruiters' as Audience,
  availableBadge: true,
  email: 'muhammed.ali.hissein@gmail.com',
  cvUrl: '/cv',
  cvPdf: '/Mohamed-Ali-Hussein-CV.pdf',
  location: 'Cairo, EG (GMT+2)',
  social: {
    github: 'https://github.com/devbn3li',
    linkedin: 'https://linkedin.com/in/devbn3li',
    twitter: 'https://twitter.com/devbn3lii',
  },
};

export const HERO_COPY: Record<Audience, { paragraph: string; cta: { label: string; href: string } }> = {
  recruiters: {
    paragraph:
      'Frontend engineer who rebuilds large React and Next.js products so they load fast and stay maintainable. I led the refactor of a 25+ system portal, cutting its initial load from over a minute to a few seconds.',
    cta: { label: 'See my experience', href: '#experience' },
  },
  clients: {
    paragraph:
      'I help startups and teams ship polished web products, from Figma file to production. Fast, accessible, and built to last.',
    cta: { label: 'Start a project', href: '#contact' },
  },
};

export const MARQUEE = [
  'REACT.JS',
  'NEXT.JS',
  'TYPESCRIPT',
  'REACT NATIVE',
  'TAILWIND CSS',
  'REDUX',
  'NODE.JS',
  'WEBSOCKETS',
  'AZURE',
  'CI/CD',
];

// Absolute (`/#…`) so the nav works from any route, not just the homepage.
export const NAV_LINKS = [
  { href: '/#experience', label: 'EXPERIENCE' },
  { href: '/#expertise', label: 'EXPERTISE' },
  { href: '/#about', label: 'ABOUT' },
  { href: '/#contact', label: 'CONTACT' },
];

export const STATS = [
  { value: '25+', label: 'SYSTEMS IN ONE PORTAL, REFACTORED' },
  { value: '60s+', label: 'INITIAL LOAD, CUT TO A FEW SECONDS' },
  { value: 'Remote', label: 'WITH TEAMS IN LONDON, JORDAN AND THE US' },
];

export type Role = {
  title: string;
  company: string;
  companyLink: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

// Shared by the homepage Experience section and the /cv page.
export const EXPERIENCE: Role[] = [
  {
    title: 'Frontend Developer',
    company: 'SustainGRC',
    companyLink: 'https://www.sustaingrc.com',
    location: 'Remote | London',
    period: '03/2025 – Present',
    current: true,
    points: [
      'Led a full refactor of a large, multi-system React portal (25+ systems) that previously suffered from slow load times, outdated architecture, and inconsistent UI.',
      'Rebuilt the frontend architecture using modern Next.js patterns, optimized state management, and cleaned up legacy code, reducing initial load time from 60+ seconds to a few seconds.',
      'Designed and implemented a consistent, modern UI/UX across all systems, replacing outdated and unmaintainable components.',
      "Took ownership of major product decisions and cross-team coordination, acting as the primary point of responsibility for the portal's frontend quality and performance which contributed to bringing new clients to the platform.",
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Actus Go',
    companyLink: 'https://actusgo.com',
    location: 'Remote | Jordan',
    period: '08/2024 – 03/2025',
    points: [
      'Developed the Super Application using React Native and Expo Go, and Next.js for the website.',
      'Collaborated with cross-functional teams to ensure seamless integration and functionality.',
    ],
  },
  {
    title: 'Intern Frontend Developer',
    company: 'SustainGRC',
    companyLink: 'https://www.sustaingrc.com',
    location: 'Remote | London',
    period: '01/2024 – 06/2024',
    points: [
      "Designed and developed the company's official website from scratch, creating a faster, more modern, and fully responsive online presence.",
    ],
  },
];

// Each area is backed by something in EXPERIENCE above.
export const EXPERTISE = [
  {
    n: '01',
    title: 'Large React codebases',
    desc: 'Refactoring multi-system portals onto modern Next.js patterns: clearer architecture, leaner state management, legacy code removed.',
    stack: 'NEXT.JS · REACT · TYPESCRIPT',
  },
  {
    n: '02',
    title: 'Performance',
    desc: 'Finding what makes an app slow and fixing it at the architecture level. One portal went from a 60+ second initial load to a few seconds.',
    stack: 'LOAD TIME · STATE · RENDERING',
  },
  {
    n: '03',
    title: 'Consistent UI at scale',
    desc: 'One coherent interface across many systems, built from maintainable components instead of one-off screens.',
    stack: 'COMPONENTS · TAILWIND · ACCESSIBILITY',
  },
  {
    n: '04',
    title: 'Web and mobile',
    desc: 'Shipping the same product on both: React Native and Expo for the app, Next.js for the website.',
    stack: 'REACT NATIVE · EXPO · NEXT.JS',
  },
];
