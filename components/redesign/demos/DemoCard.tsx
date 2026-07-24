// Shared shell for the Proof-of-Skill demos: header row (title + category tag)
// over a bordered surface card.
export default function DemoCard({
  title,
  tag,
  children,
}: {
  title: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[18px] rounded-[18px] border border-white/[0.08] bg-surface p-[26px]">
      <div className="flex justify-between font-mono text-[11px] tracking-[0.12em] text-paper-dim">
        <span>{title}</span>
        <span className="text-accent">{tag}</span>
      </div>
      {children}
    </div>
  );
}
