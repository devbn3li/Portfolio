// Every word of factual content for the homepage, in one place.
//
// Rule for anyone building UI on top of this: use these strings as they are.
// Do not add numbers, tools, employers, dates or claims that are not here.
// Short interface labels (button text, aria labels) may be written freely.
//
// Sources: the owner's own statements. The Delivery and Automation facts are
// from TrailUp, his own trip-booking product. The ad system is mentioned once,
// generically, and the company it was built for is never named.

export const IDENTITY = {
  name: 'Mohamed Ali',
  handle: 'devbn3li',
  // The h1. Keep "Frontend-first" from breaking at the hyphen (nowrap span).
  headline: 'Frontend-first software engineer.',
  deck: 'I ship the whole product: UI, API and pipeline.',
  proof:
    'At SustainGRC I led the refactor of a 25+ system React portal and cut its initial load from over a minute to a few seconds.',
  breadth:
    'I build the rest too: Node APIs, Stripe payments, tests, Docker builds and scheduled jobs.',
  // Must appear once in visible body copy (the handle is the search term).
  handleLine: "I'm Mohamed, known online as devbn3li.",
  now: 'Frontend Developer at SustainGRC',
  owns: "Primary point of responsibility for the portal's frontend quality and performance",
  city: 'Cairo, Egypt',
  // Use with Intl to show live local time. Never print a fixed GMT offset:
  // Egypt observes summer time.
  timeZone: 'Africa/Cairo',
  remote: 'Remote, with teams in London, Jordan and the US',
  availability: 'Open for opportunities',
} as const;

export const CONTACT = {
  email: 'muhammed.ali.hissein@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/devbn3li' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/devbn3li' },
    { label: 'Twitter', href: 'https://twitter.com/devbn3lii' },
  ],
} as const;

// The headline result, always shown as a pair: the old value, then the new.
export const RESULT = {
  label: 'Initial load, SustainGRC portal',
  before: '60s+',
  after: 'a few seconds',
  // For the real-time comparison only. The "after" lane must finish within a
  // few seconds, but no duration is ever printed for it: the owner's figure is
  // "a few seconds", not a number.
  beforeSeconds: 60,
} as const;

// What changed in the portal refactor. Both sides are always printed.
export const PAIRS = [
  { label: 'Architecture', before: 'Legacy', after: 'Modern Next.js' },
  { label: 'UI', before: 'Inconsistent', after: 'One system' },
  { label: 'Initial load', before: RESULT.before, after: RESULT.after },
] as const;

export type FacetId = 'frontend' | 'fullstack' | 'delivery' | 'automation';

// The four sides of the work. `fact` is the one line shown beside the name.
export const FACETS: readonly {
  id: FacetId;
  name: string;
  fact: string;
  title: string;
  caption: string;
}[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    fact: '25+ systems, one consistent UI',
    title: 'One portal, 25+ systems',
    caption: 'SustainGRC portal refactor. Illustration, not to scale.',
  },
  {
    id: 'fullstack',
    name: 'Full-stack',
    fact: 'Node, Express, MongoDB, Stripe',
    title: 'One request, end to end',
    caption: 'Across products I build end to end, including an ad system.',
  },
  {
    id: 'delivery',
    name: 'Delivery',
    fact: 'Tests, Docker, EAS builds, Sentry',
    title: 'From commit to production',
    caption: 'From TrailUp, a trip-booking product I build.',
  },
  {
    id: 'automation',
    name: 'Automation',
    fact: 'Cron jobs, email and push',
    title: 'Jobs that run themselves',
    caption: 'From TrailUp, a trip-booking product I build.',
  },
];

// Frontend scene: 28 tiles stand for the "25+ systems".
export const MORPH = { tiles: 28, countLabel: '25+ systems' } as const;

// Full-stack scene: the API sits in the middle; the rest are what it talks to.
export const REQUEST = {
  clients: [
    { name: 'Web', detail: 'React, Next.js' },
    { name: 'Mobile', detail: 'React Native, Expo' },
  ],
  api: { name: 'API', detail: 'Node, Express' },
  services: [
    { name: 'Data', detail: 'MongoDB' },
    { name: 'Payments', detail: 'Stripe' },
    { name: 'Notifications', detail: 'Email, push' },
  ],
} as const;

// Delivery scene: four steps, always in this order.
export const PIPELINE = [
  { name: 'Test', detail: 'Unit + integration' },
  { name: 'Build', detail: 'Docker, EAS' },
  { name: 'Deploy', detail: 'Production' },
  { name: 'Monitor', detail: 'Sentry' },
] as const;

// Automation scene: scheduled jobs. No times of day are known; show none.
export const JOBS = [
  { name: 'Expire unpaid bookings', detail: 'Cron job' },
  { name: 'Send trip reminders', detail: 'Cron job' },
  { name: 'Notify by email and push', detail: 'On each run' },
] as const;

// "I lead projects", in his own words. One strip, four cells.
export const OWNERSHIP = [
  { verb: 'Led', line: 'the full refactor of a 25+ system React portal' },
  { verb: 'Owned', line: 'major product decisions and cross-team coordination' },
  { verb: 'Responsible', line: "for the portal's frontend quality and performance" },
  { verb: 'Contributed', line: 'to bringing new clients to the platform' },
] as const;

// A role row: the verb, a short phrase shown at rest, and the full line
// revealed on demand (when it says more than the short phrase).
export type RoleRow = { verb: string; short: string; line: string };

export type Role = {
  id: string;
  company: string;
  companyUrl: string;
  title: string;
  location: string;
  period: string;
  current: boolean;
  // What he did, as the row's headline. The job title is secondary.
  headline: string;
  rows: RoleRow[];
};

// Roles, newest first.
export const ROLES: readonly Role[] = [
  {
    id: 'sustaingrc',
    company: 'SustainGRC',
    companyUrl: 'https://www.sustaingrc.com',
    title: 'Frontend Developer',
    location: 'Remote, London',
    period: '03/2025 to Present',
    current: true,
    headline: 'Led the refactor of a 25+ system React portal.',
    rows: [
      {
        verb: 'Led',
        short: 'A full refactor of a 25+ system React portal',
        line: 'A full refactor of a large, multi-system React portal (25+ systems) that suffered from slow load times, outdated architecture and inconsistent UI.',
      },
      {
        verb: 'Rebuilt',
        short: 'The frontend architecture, on modern Next.js patterns',
        line: 'The frontend architecture on modern Next.js patterns, with leaner state management and the legacy code cleaned up. Initial load went from 60+ seconds to a few seconds.',
      },
      {
        verb: 'Designed',
        short: 'One consistent UI across all systems',
        line: 'One consistent, modern UI across all systems, replacing outdated and unmaintainable components.',
      },
      {
        verb: 'Owned',
        short: 'Major product decisions and cross-team coordination',
        line: "Major product decisions and cross-team coordination, as the primary point of responsibility for the portal's frontend quality and performance.",
      },
      {
        verb: 'Result',
        short: 'Contributed to bringing new clients to the platform',
        line: 'Contributed to bringing new clients to the platform',
      },
    ],
  },
  {
    id: 'actusgo',
    company: 'Actus Go',
    companyUrl: 'https://actusgo.com',
    title: 'Frontend Engineer',
    location: 'Remote, Jordan',
    period: '08/2024 to 03/2025',
    current: false,
    headline: 'Built a React Native and Expo super app and its Next.js website.',
    rows: [
      {
        verb: 'Built',
        short: 'The super app in React Native and Expo, and the website in Next.js',
        line: 'The super app in React Native and Expo, and the website in Next.js',
      },
      {
        verb: 'Worked with',
        short: 'Cross-functional teams, on integration and functionality',
        line: 'Cross-functional teams, on integration and functionality',
      },
    ],
  },
  {
    id: 'sustaingrc-intern',
    company: 'SustainGRC',
    companyUrl: 'https://www.sustaingrc.com',
    title: 'Intern Frontend Developer',
    location: 'Remote, London',
    period: '01/2024 to 06/2024',
    current: false,
    headline: "Designed and developed the company's official website from scratch.",
    rows: [
      {
        verb: 'Built',
        short: "The company's official website, from scratch",
        line: "The company's official website from scratch: faster, more modern and fully responsive.",
      },
    ],
  },
];

// The stack, by layer. `facet` ties each group to a showcase facet.
export const STACK: readonly {
  layer: string;
  facet: FacetId;
  items: readonly string[];
}[] = [
  {
    layer: 'Interface',
    facet: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  { layer: 'Mobile', facet: 'frontend', items: ['React Native', 'Expo'] },
  {
    layer: 'API and data',
    facet: 'fullstack',
    items: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'WebSockets'],
  },
  {
    layer: 'Delivery',
    facet: 'delivery',
    items: ['Unit and integration tests', 'Docker', 'EAS builds', 'Sentry', 'Azure', 'CI/CD'],
  },
  {
    layer: 'Automation',
    facet: 'automation',
    items: ['Cron jobs', 'Email and push notifications'],
  },
];

// Section anchors every layout should expose, in this order.
export const SECTIONS = [
  { id: 'top', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
] as const;
