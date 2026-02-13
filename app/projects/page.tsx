import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web development projects. Case studies featuring React, Next.js, and TypeScript applications.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main className="mx-auto max-w-5xl px-5 pb-20 pt-28">
        <PageHeader
          title="Projects"
          description="Case studies and showcases of my recent work."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
