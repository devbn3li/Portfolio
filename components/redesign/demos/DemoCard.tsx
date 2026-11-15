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
    <div className="flex flex-col gap-[18px] rounded-[18px] border border-mist/[0.08] bg-abyss p-[26px]">
      <div className="flex flex-wrap justify-between gap-x-3 gap-y-1 text-[11px] tracking-[0.12em] text-mist/70">
        <span>{title}</span>
        <span className="text-peach">{tag}</span>
      </div>
      {children}
    </div>
  );
}
