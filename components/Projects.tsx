'use client';

import { motion } from 'framer-motion';
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
    image: '/images/projects/ecommerce.jpg',
    liveUrl: 'https://amanoon.vercel.app/',
    githubUrl: '#',
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  } as const;

  return (
    <AnimatedSection>
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-white md:text-5xl font-black mb-4"
          >
            Projects<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-7xl">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg mb-12"
          >
            Some of my recent work
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden ${project.featured ? 'md:col-span-2' : ''
                  }`}
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-64 bg-gradient-to-br from-[rgb(100_108_255_/_0.2)] to-neutral-900 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[rgb(100_108_255)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        whileHover={{ scale: 1.2, color: 'rgb(100 108 255)' }}
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        <FiGithub className="text-xl" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target='_blank'
                        whileHover={{ scale: 1.2, color: 'rgb(100 108 255)' }}
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        <FiExternalLink className="text-xl" />
                      </motion.a>
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
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(100, 108, 255, 0.1) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
