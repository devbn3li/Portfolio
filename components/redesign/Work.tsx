import Reveal from './Reveal';
import WorkImage from './WorkImage';
import { FEATURED_WORK, SMALL_WORK, type WorkItem } from './data';

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-peach/[0.12] px-3 py-[5px] text-[11px] tracking-[0.08em] text-peach">
      {children}
    </span>
  );
}

function FeatureRow({ item, reversed }: { item: WorkItem; reversed?: boolean }) {
  const media = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-mist/10">
      <WorkImage src={item.image} alt={item.alt} title={item.title} />
    </div>
  );

  const text = (
    <div>
      <div className="flex items-baseline gap-4">
        <span className="text-[13px] text-mist/70">{item.n}</span>
        <h3 className="m-0 text-[32px] font-extrabold">
          {item.title}
        </h3>
      </div>
      <p className="mb-5 mt-4 text-mist">{item.copy}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-peach no-underline hover:text-sky"
          >
            View {item.title} live site <span aria-hidden>↗</span>
          </a>
        )}
        {item.githubUrl && (
          <a
            href={item.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist no-underline hover:text-sky"
          >
            {item.title} on GitHub <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <Reveal
      className={`grid items-center gap-8 md:gap-14 ${
        reversed ? 'md:grid-cols-[.85fr_1.15fr]' : 'md:grid-cols-[1.15fr_.85fr]'
      }`}
    >
      {reversed ? (
        <>
          <div className="md:order-2">{media}</div>
          <div className="md:order-1">{text}</div>
        </>
      ) : (
        <>
          {media}
          {text}
        </>
      )}
    </Reveal>
  );
}

function SmallCard({ item }: { item: WorkItem }) {
  return (
    <Reveal className="group rounded-[18px] border border-mist/[0.08] bg-abyss p-6 transition-[transform,border-color] duration-[250ms] hover:-translate-y-1 hover:border-peach/50">
      <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl">
        <WorkImage src={item.image} alt={item.alt} title={item.title} />
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-xs text-mist/70">{item.n}</span>
        <h3 className="m-0 text-[22px] font-extrabold">{item.title}</h3>
      </div>
      <p className="mb-4 mt-[10px] text-[15px] text-mist">{item.copy}</p>
      <div className="flex items-center gap-2">
        {item.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        {item.githubUrl && (
          <a
            href={item.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-mist no-underline hover:text-sky"
          >
            GitHub <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative z-[2] mx-auto w-full max-w-[1240px] px-6 pt-20 md:px-10 md:pt-[140px]"
    >
      <Reveal className="text-[13px] tracking-[0.14em] text-peach">
        04 / SELECTED WORK
      </Reveal>
      <Reveal
        as="h2"
        id="work-heading"
        delay={80}
        className="mb-14 mt-7 text-[clamp(30px,3.6vw,48px)] font-extrabold tracking-[-0.02em]"
      >
        Built, shipped, used.
      </Reveal>

      <div className="flex flex-col gap-16 md:gap-24">
        <FeatureRow item={FEATURED_WORK[0]} />
        <FeatureRow item={FEATURED_WORK[1]} reversed />
        <div className="grid gap-5 md:grid-cols-2">
          {SMALL_WORK.map((item) => (
            <SmallCard key={item.n} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
