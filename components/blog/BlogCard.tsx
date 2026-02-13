import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_0_30px_rgba(100,108,255,0.1)]">
      <Link href={`/blog/${post.slug}`}>
        <div className="mb-3 flex items-center gap-3 text-sm text-white/40">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <h2 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand">
          {post.title}
        </h2>

        <p className="mb-4 text-sm leading-relaxed text-white/60">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs text-brand"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
