// Config + content for the portfolio redesign (devbn3li.app).
// Kept as data so copy and links live in one place.

export type Audience = 'recruiters' | 'clients';

export const SITE = {
  // Swaps the hero paragraph + primary CTA. See the handoff `audience` prop.
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
      'Frontend engineer with 2+ years turning designs into fast, accessible product UI using React, Next.js, and TypeScript. Currently building at Sustaingrc.',
    cta: { label: 'View my work', href: '#work' },
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
  'TAILWIND CSS',
  'REDUX',
  'NODE.JS',
  'REACT NATIVE',
  'FIGMA',
  'DOCKER',
  'MONGODB',
  'GIT',
  'AZURE',
];

// Absolute (`/#…`) so the nav works from any route, not just the homepage.
export const NAV_LINKS = [
  { href: '/#about', label: 'ABOUT' },
  { href: '/#services', label: 'SERVICES' },
  { href: '/#proof', label: 'PROOF' },
  { href: '/#work', label: 'WORK' },
  { href: '/#contact', label: 'CONTACT' },
];

export const SERVICES = [
  {
    n: '01',
    title: 'Web Development',
    desc: 'Modern, fast, scalable web apps built to survive their own roadmap.',
    stack: 'REACT · NEXT.JS · TYPESCRIPT',
  },
  {
    n: '02',
    title: 'Responsive Design',
    desc: 'Mobile-first layouts that hold up on a 320px phone and a 4K monitor.',
    stack: 'TAILWIND · CSS GRID · FLUID TYPE',
  },
  {
    n: '03',
    title: 'UI/UX Implementation',
    desc: 'Figma files turned into interfaces that match the mock and beat the spec.',
    stack: 'FIGMA · A11Y · DESIGN TOKENS',
  },
  {
    n: '04',
    title: 'Performance & SEO',
    desc: 'Core Web Vitals in the green, metadata done right, and pages search engines can actually read.',
    stack: 'LIGHTHOUSE · SSR · STRUCTURED DATA',
  },
  {
    n: '05',
    title: 'Code Refactoring',
    desc: 'Legacy codebases made readable, testable, and safe to change again.',
    stack: 'CLEAN ARCHITECTURE · TESTS',
  },
  {
    n: '06',
    title: 'API Integration',
    desc: 'REST, GraphQL, and third-party services wired up with real error states.',
    stack: 'REST · GRAPHQL · REACT QUERY',
  },
];

export const FULL_KIT = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'React Native',
  'Redux',
  'Node.js',
  'MongoDB',
  'Docker',
  'Azure',
  'Figma',
  'Git',
  'Jira',
];

export type WorkItem = {
  n: string;
  title: string;
  copy: string;
  tags: string[];
  image: string | null;
  alt: string;
  liveUrl: string | null;
  githubUrl: string | null;
};

export const FEATURED_WORK: WorkItem[] = [
  {
    n: '01',
    title: 'Moviezone',
    copy: 'A movie streaming platform with search, detail pages, and a responsive browsing experience. Server-rendered for speed, typed end to end.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'REST API'],
    image: '/images/projects/moviezone.png',
    alt: 'Moviezone homepage showing the featured film hero and category rows',
    liveUrl: 'https://moviezone-inky.vercel.app',
    githubUrl: 'https://github.com/devbn3li/movies-frontend',
  },
  {
    n: '02',
    title: 'Amanoon',
    copy: 'E-commerce admin dashboard with real-time sales tracking, inventory management, and data visualizations that stay readable at scale.',
    tags: ['REACT', 'REDUX', 'CHART.JS', 'NODE.JS'],
    image: '/images/projects/amanoon.png',
    alt: 'Amanoon admin dashboard showing sales charts and inventory tables',
    liveUrl: 'https://amanoon.vercel.app',
    githubUrl: 'https://github.com/devbn3li/market-place-frontend',
  },
];

export const SMALL_WORK: WorkItem[] = [
  {
    n: '03',
    title: 'Task Management App',
    copy: 'Collaborative tasks with drag-and-drop, real-time updates, and team features.',
    tags: ['REACT', 'FIREBASE'],
    image: null,
    alt: 'Task Management App board with draggable task columns',
    liveUrl: null,
    githubUrl: 'https://github.com/devbn3li',
  },
  {
    n: '04',
    title: 'Portfolio v1',
    copy: 'The site you came from: smooth animations, dark theme, fully responsive.',
    tags: ['NEXT.JS', 'FRAMER MOTION'],
    image: null,
    alt: 'Portfolio v1 hero with a space-themed animated background',
    liveUrl: 'https://devbn3li.vercel.app',
    githubUrl: 'https://github.com/devbn3li/Portfolio',
  },
];
