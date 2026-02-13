interface BlogContentProps {
  content: string[];
}

const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <div className="prose-custom space-y-6">
      {content.map((block, index) => {
        // H2 headings
        if (block.startsWith('## ')) {
          return (
            <h2
              key={index}
              className="mt-10 text-2xl font-bold text-white"
            >
              {block.replace('## ', '')}
            </h2>
          );
        }

        // H3 headings
        if (block.startsWith('### ')) {
          return (
            <h3
              key={index}
              className="mt-8 text-xl font-semibold text-white"
            >
              {block.replace('### ', '')}
            </h3>
          );
        }

        // List items (lines starting with -)
        if (block.includes('\n-')) {
          const items = block.split('\n').filter((line) => line.startsWith('-'));
          return (
            <ul key={index} className="space-y-2 pl-4">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-white/70 leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item.replace(/^- /, '')}</span>
                </li>
              ))}
            </ul>
          );
        }

        // Regular paragraph — handle **bold** and `code`
        return (
          <p
            key={index}
            className="leading-relaxed text-white/70"
            dangerouslySetInnerHTML={{
              __html: block
                .replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="font-semibold text-white">$1</strong>'
                )
                .replace(
                  /`(.*?)`/g,
                  '<code class="rounded bg-neutral-800 px-1.5 py-0.5 text-sm text-brand">$1</code>'
                ),
            }}
          />
        );
      })}
    </div>
  );
};

export default BlogContent;
