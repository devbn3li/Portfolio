import Image from 'next/image';

// Project thumbnail. Falls back to a labelled placeholder when no screenshot
// exists yet (the handoff ships no assets for two of the four projects).
export default function WorkImage({
  src,
  alt,
  title,
  priority,
}: {
  src: string | null;
  alt: string;
  title: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 700px"
        priority={priority}
        className="object-cover"
      />
    );
  }
  return (
    <div className="grid h-full w-full place-items-center bg-surface-alt">
      <span className="font-mono text-[11px] tracking-[0.12em] text-paper-dim">
        {title.toUpperCase()}
      </span>
    </div>
  );
}
