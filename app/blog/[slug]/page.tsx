import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogContent from '@/components/blog/BlogContent';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-28">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-white/50 transition-colors hover:text-brand"
        >
          <FiArrowLeft />
          <span>Back to Blog</span>
        </Link>

        {/* Post header */}
        <header className="mb-10">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs text-brand"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 text-3xl font-black text-white md:text-4xl">
            {post.title}
          </h1>

          <p className="mb-6 text-lg text-white/60">{post.description}</p>

          <div className="flex items-center gap-4 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="text-brand" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock className="text-brand" />
              {post.readingTime}
            </span>
          </div>

          <div className="mt-6 h-px bg-neutral-800" />
        </header>

        {/* Post content */}
        <BlogContent content={post.content} />

        {/* Post footer */}
        <div className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-center">
          <p className="mb-2 text-white/60">Enjoyed this article?</p>
          <p className="text-sm text-white/40">
            Follow me on{' '}
            <a
              href="https://twitter.com/devbn3lii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-300"
            >
              Twitter
            </a>{' '}
            or{' '}
            <a
              href="https://linkedin.com/in/devbn3li"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-300"
            >
              LinkedIn
            </a>{' '}
            for more content.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
