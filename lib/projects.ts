export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
}

const projects: Project[] = [
  {
    slug: 'moviezone',
    title: 'Moviezone',
    description:
      'A fully functional movie and TV show streaming platform with modern UI, infinite scroll, and real-time search.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/images/projects/moviezone.png',
    liveUrl: 'https://moviezone-inky.vercel.app',
    githubUrl: 'https://github.com/devbn3li/movies-frontend',
    featured: true,
    challenge:
      'Building a performant streaming platform that handles thousands of movies and series data while maintaining fast load times and smooth user experience.',
    solution:
      'Implemented infinite scroll for pagination, server-side rendering for SEO, and optimized image loading with Next.js Image component. Used efficient caching strategies and lazy loading to minimize network requests.',
    features: [
      'Infinite scroll with skeleton loading',
      'Server-side rendering for SEO optimization',
      'Real-time search with debouncing',
      'Season and episode navigation for TV series',
      'Responsive design with mobile-first approach',
      'Dynamic sitemap generation for better indexing',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'REST API',
      'Node.js',
      'MongoDB',
    ],
  },
  {
    slug: 'amanoon',
    title: 'Amanoon',
    description:
      'Modern e-commerce admin dashboard with real-time sales tracking, inventory management, and beautiful data visualizations.',
    tags: ['React.js', 'Redux', 'Chart.js', 'Node.js'],
    image: '/images/projects/amanoon.png',
    liveUrl: 'https://amanoon.vercel.app/',
    githubUrl: 'https://github.com/devbn3li/market-place-frontend',
    featured: true,
    challenge:
      'Creating an intuitive admin dashboard that presents complex sales and inventory data in an easy-to-understand format with real-time updates.',
    solution:
      'Designed a clean dashboard layout with Chart.js for data visualization, Redux for global state management, and implemented real-time data syncing with WebSocket connections.',
    features: [
      'Interactive sales charts and graphs',
      'Real-time inventory tracking',
      'Order management system',
      'User role-based access control',
      'Responsive data tables with filtering and sorting',
      'Export reports as PDF and CSV',
    ],
    stack: ['React.js', 'Redux', 'Chart.js', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with Next.js featuring smooth animations, space-themed background, dark theme, and responsive design.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: '/images/projects/portfolio.jpg',
    liveUrl: 'https://devbn3li.vercel.app',
    githubUrl: 'https://github.com/devbn3li/Portfolio',
    featured: false,
    challenge:
      'Building a portfolio that stands out with unique animations and a memorable visual identity while maintaining performance and accessibility.',
    solution:
      'Created a space-themed design with custom shooting star animations, used Framer Motion for smooth section transitions, and implemented lazy loading for below-the-fold content.',
    features: [
      'Custom space background with shooting stars',
      'Smooth scroll-based animations',
      'Dynamic CV page with timeline design',
      'Blog system with technical articles',
      'Developer tools section',
      'SEO optimized with dynamic sitemap',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
