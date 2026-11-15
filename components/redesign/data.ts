// Config + content for the portfolio (devbn3li.app).
// Kept as data so copy and links live in one place. Every claim here was
// supplied or confirmed by the owner; do not add numbers or roles to it.

export type Audience = 'recruiters' | 'clients';

export const SITE = {
  // Swaps the hero paragraph + primary CTA.
  audience: 'recruiters' as Audience,
  availableBadge: true,
  email: 'muhammed.ali.hissein@gmail.com',
  location: 'Cairo, Egypt',
  social: {
    github: 'https://github.com/devbn3li',
    linkedin: 'https://linkedin.com/in/devbn3li',
    twitter: 'https://twitter.com/devbn3lii',
  },
};

export const HERO_COPY: Record<Audience, { paragraph: string; cta: { label: string; href: string } }> = {
  recruiters: {
    paragraph:
      'I led the refactor of a 25+ system React portal, cutting load time from over a minute to a few seconds. I also build backends, an ad system, Stripe payments and automation.',
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
  'EXPRESS',
  'MONGODB',
  'STRIPE',
  'WEBSOCKETS',
  'DOCKER',
  'AZURE',
  'CI/CD',
];

// Absolute (`/#…`) so the nav works from any route, not just the homepage.
// Contact is not listed here: it is the filled button at the end of the nav.
export const NAV_LINKS = [
  { href: '/#experience', label: 'EXPERIENCE' },
  { href: '/#expertise', label: 'EXPERTISE' },
  { href: '/#about', label: 'ABOUT' },
];

export const STATS = [
  { value: '25+', label: 'SYSTEMS IN ONE PORTAL, REFACTORED' },
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

// Roles, newest first.
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

// Each area is backed by something in EXPERIENCE above. `visual` picks the
// illustration in ExpertiseVisual (it plays while the card is hovered).
export const EXPERTISE: {
  n: string;
  title: string;
  desc: string;
  visual: 'codebase' | 'performance' | 'ui' | 'devices' | 'api' | 'pipeline';
}[] = [
  {
    n: '01',
    title: 'Large React codebases',
    desc: 'Untangling a multi-system portal into a clear, modern Next.js architecture.',
    visual: 'codebase',
  },
  {
    n: '02',
    title: 'Performance',
    desc: 'A 60+ second initial load brought down to a few seconds.',
    visual: 'performance',
  },
  {
    n: '03',
    title: 'Consistent UI at scale',
    desc: 'One consistent UI across all systems, replacing outdated and unmaintainable components.',
    visual: 'ui',
  },
  {
    n: '04',
    title: 'Web and mobile',
    desc: 'The same product on both: React Native and Expo, plus Next.js.',
    visual: 'devices',
  },
  {
    n: '05',
    title: 'Backend and APIs',
    desc: 'APIs and data models in Node, Express and MongoDB, with Stripe for payments, including an ad system.',
    visual: 'api',
  },
  {
    n: '06',
    title: 'Automation and delivery',
    desc: 'Tests, Docker and mobile builds, scheduled jobs, and error monitoring in production.',
    visual: 'pipeline',
  },
];
