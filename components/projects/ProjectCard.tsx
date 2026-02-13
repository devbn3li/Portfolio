import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 ${project.featured ? 'md:col-span-2' : ''
        }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand/20 to-neutral-900 md:h-64">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title} project`}
            width={500}
            height={300}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand">
              {project.title}
            </h3>
          </Link>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="text-white/50 transition-all hover:scale-110 hover:text-brand"
            >
              <FiGithub className="text-xl" aria-hidden="true" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live website`}
              className="text-white/50 transition-all hover:scale-110 hover:text-brand"
            >
              <FiExternalLink className="text-xl" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-white/60">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs text-brand"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Case Study link */}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm text-brand opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          View Case Study
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Hover glow effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at center, rgba(100, 108, 255, 0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default ProjectCard;
