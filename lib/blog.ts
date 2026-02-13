export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string[];
}

const posts: BlogPost[] = [
  {
    slug: 'react-server-components-guide',
    title: 'Understanding React Server Components',
    description:
      'A deep dive into React Server Components (RSC) and how they change the way we think about frontend architecture in Next.js.',
    date: '2026-02-13',
    tags: ['React', 'Next.js', 'Architecture'],
    readingTime: '8 min read',
    content: [
      'React Server Components (RSC) represent a fundamental shift in how we build React applications. Unlike traditional client-side rendering, RSC allows components to run exclusively on the server, reducing the JavaScript bundle sent to the client.',
      '## Why Server Components Matter',
      'The main advantage of Server Components is **zero bundle size impact**. Since these components never run in the browser, their code stays on the server. This means you can freely use large libraries for data fetching, markdown parsing, or even database queries without affecting your client-side bundle.',
      '## How Next.js Uses RSC',
      'In the Next.js App Router, every component is a Server Component by default. You only opt into Client Components when you need interactivity (useState, useEffect, event handlers). This is a key architectural decision that promotes better performance out of the box.',
      '## Practical Example',
      'Consider a blog page that fetches posts from a database. With Server Components, the data fetching happens at build time or request time on the server. The HTML is sent to the client already rendered — no loading spinners, no client-side data fetching.',
      '## Key Takeaways',
      '- Server Components reduce bundle size significantly\n- Use Client Components only when you need browser APIs or interactivity\n- Data fetching in Server Components is simpler and more performant\n- The mental model is: Server by default, Client when needed',
    ],
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS for Scalable UI',
    description:
      'Best practices for organizing Tailwind CSS classes in large-scale projects, including design systems, custom themes, and component patterns.',
    date: '2026-01-20',
    tags: ['CSS', 'Tailwind', 'Design System'],
    readingTime: '6 min read',
    content: [
      'Tailwind CSS has become the go-to utility framework for modern web development. But as your project grows, managing thousands of utility classes can become overwhelming without a proper strategy.',
      '## The Custom Theme Approach',
      'Instead of using hardcoded colors like `bg-blue-500`, define your brand colors in `tailwind.config.js`. This creates a single source of truth for your design tokens and makes it trivial to update your entire color scheme.',
      '## Component Extraction',
      'When you find yourself repeating the same set of classes across multiple elements, it\'s time to extract a component. In React, this is natural — create a `Button`, `Card`, or `Badge` component that encapsulates the styling.',
      '## Responsive Design Strategy',
      'Tailwind\'s responsive prefixes (sm:, md:, lg:) work mobile-first. Start with the mobile layout and progressively enhance. This ensures your core experience works on every device.',
      '## Dark Mode',
      'Use Tailwind\'s `dark:` variant for dark mode support. The key is consistency — every color decision should have a dark mode counterpart defined in your theme.',
      '## Key Takeaways',
      '- Define brand colors in your config, not inline\n- Extract repeated patterns into components\n- Design mobile-first with responsive breakpoints\n- Plan dark mode from the start, not as an afterthought',
    ],
  },
  {
    slug: 'optimizing-nextjs-performance',
    title: 'How I Reduced Load Time from 60s to 3s',
    description:
      'A real-world case study on how I optimized a large Next.js portal with 25+ systems, tackling slow load times, legacy code, and poor architecture.',
    date: '2026-01-05',
    tags: ['Next.js', 'Performance', 'Case Study'],
    readingTime: '10 min read',
    content: [
      'When I joined SustainGRC, the main portal had a 60+ second initial load time. It was built with outdated patterns, bundled everything at once, and had no code splitting. Here\'s how I fixed it.',
      '## The Problem',
      'The portal had 25+ systems all loaded eagerly on the initial page. No lazy loading, no route-based code splitting, and hundreds of unused dependencies were included in the bundle.',
      '## Step 1: Audit and Measure',
      'Before optimizing, I measured everything using Lighthouse, Web Vitals, and Chrome DevTools. The bundle analyzer revealed that 70% of the JavaScript was unused on the initial page load.',
      '## Step 2: Route-Based Code Splitting',
      'I restructured the app to use Next.js dynamic imports. Each system became its own route with lazy-loaded components. This alone cut the initial bundle by 60%.',
      '## Step 3: State Management Cleanup',
      'The previous implementation stored everything in a global state, causing unnecessary re-renders across the entire app. I moved to a more granular approach with Zustand stores scoped to each system.',
      '## Step 4: Modern UI Component Library',
      'I replaced the legacy UI components with a consistent, modern design system using Tailwind CSS. This eliminated duplicate styles and reduced the CSS bundle by 40%.',
      '## Results',
      '- Initial load time: 60s → 3s\n- Bundle size: reduced by 75%\n- Lighthouse Performance score: 35 → 92\n- User complaints about speed: eliminated\n\nThis experience taught me that performance optimization is not about clever tricks — it\'s about making good architectural decisions from the start.',
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug);
}
