import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '@/lib/projects';

interface ProjectCaseStudyProps {
  project: Project;
}

const ProjectCaseStudy = ({ project }: ProjectCaseStudyProps) => {
  return (
    <div className="space-y-10">
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(100,108,255,0.5)] active:scale-95"
        >
          <FiExternalLink />
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-2.5 font-semibold text-white transition-all hover:border-brand/50 hover:bg-brand/10"
        >
          <FiGithub />
          Source Code
        </a>
      </div>

      {/* Challenge */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-white">The Challenge</h2>
        <p className="leading-relaxed text-white/70">{project.challenge}</p>
      </section>

      {/* Solution */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-white">The Solution</h2>
        <p className="leading-relaxed text-white/70">{project.solution}</p>
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-white">Key Features</h2>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {project.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
              <span className="text-sm text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-medium text-brand"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectCaseStudy;
