import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import AnimatedSection from './ui/AnimatedSection';

const projects = [
  {
    id: 1,
    title: 'Moviezone',
    description: 'Moviezone is a movie streaming platform built with Next.js and TypeScript. It features a modern and responsive design, with a focus on user experience and performance.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/images/projects/moviezone.png',
    liveUrl: 'https://moviezone-inky.vercel.app',
    githubUrl: 'https://github.com/devbn3li/movies-frontend',
    featured: true,
  },
  {
    id: 2,
    title: 'Amanoon',
    description: 'Modern admin dashboard for e-commerce with real-time sales tracking, inventory management, and beautiful data visualizations.',
    tags: ['React.js', 'Redux', 'Chart.js', 'Node.js'],
    image: '/images/projects/amanoon.png',
    liveUrl: 'https://amanoon.vercel.app/',
    githubUrl: 'https://github.com/devbn3li/market-place-frontend',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js featuring smooth animations, dark theme, and responsive design.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: '/images/projects/portfolio.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'Collaborative task management application with drag-and-drop, real-time updates, and team collaboration features.',
    tags: ['React.js', 'Firebase', 'Tailwind CSS'],
    image: '/images/projects/taskapp.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const Projects = () => {
  return (
    <AnimatedSection>
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-4xl text-white md:text-5xl font-black mb-4">
            Projects<span className="text-[rgb(100_108_255)] font-black text-7xl">.</span>
          </h2>
          <p className="text-white/70 text-lg mb-12">
            Some of my recent work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${project.featured ? 'md:col-span-2' : ''
                  }`}
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-64 bg-gradient-to-br from-[rgb(100_108_255_/_0.2)] to-neutral-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-400 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title} project`}
                      width={500}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[rgb(100_108_255)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="text-white/50 hover:text-[rgb(100_108_255)] hover:scale-110 transition-all"
                      >
                        <FiGithub className="text-xl" aria-hidden="true" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} live website`}
                        className="text-white/50 hover:text-[rgb(100_108_255)] hover:scale-110 transition-all"
                      >
                        <FiExternalLink className="text-xl" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-[rgb(100_108_255_/_0.1)] text-[rgb(100_108_255)] border border-[rgb(100_108_255_/_0.2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(100, 108, 255, 0.1) 0%, transparent 70%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
