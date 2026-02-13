import type { Metadata } from 'next';
import { FiTool, FiType } from 'react-icons/fi';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ToolCard from '@/components/tools/ToolCard';

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'Free developer tools built by Mohamed Ali. PX to REM converter and more utilities for frontend developers.',
};

const tools = [
  {
    title: 'PX to REM Converter',
    description:
      'Convert pixel values to REM units and vice versa. Includes a quick reference table for common sizes.',
    href: '/tools/px-converter',
    icon: FiType,
    color: '#646cff',
  },
  {
    title: 'More Coming Soon',
    description:
      'More developer tools are on the way. CSS generators, color palettes, and more.',
    href: '/tools',
    icon: FiTool,
    color: '#06B6D4',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-28">
        <PageHeader
          title="Tools"
          description="Free developer tools I've built to make frontend development easier."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
