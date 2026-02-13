import Link from 'next/link';
import type { IconType } from 'react-icons';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  color: string;
}

const ToolCard = ({ title, description, href, icon: Icon, color }: ToolCardProps) => {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_0_30px_rgba(100,108,255,0.1)]">
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at center, ${color}10 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div
          className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${color}15`,
            border: `1px solid ${color}30`,
          }}
        >
          <Icon className="text-xl" style={{ color }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-brand">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            {description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="relative z-10 mt-4 flex items-center gap-1 text-sm text-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span>Try it</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
