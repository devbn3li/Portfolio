import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjectCaseStudy from '@/components/projects/ProjectCaseStudy';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-28">
        {/* Back link */}
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-white/50 transition-colors hover:text-brand"
        >
          <FiArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Project Hero */}
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs text-brand"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 text-3xl font-black text-white md:text-4xl">
            {project.title}
          </h1>

          <p className="text-lg text-white/60">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-neutral-800">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Case Study Content */}
        <ProjectCaseStudy project={project} />
      </main>
      <Footer />
    </div>
  );
}
