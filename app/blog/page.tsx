import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import BlogCard from '@/components/blog/BlogCard';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technical articles and tutorials about frontend development, React, Next.js, and modern web technologies.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main className="mx-auto max-w-5xl px-5 pb-20 pt-28">
        <PageHeader
          title="Blog"
          description="Technical articles, tutorials, and insights from my journey as a frontend engineer."
        />

        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
