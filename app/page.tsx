import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SpaceBackground from "../components/ShootingStars";

// Lazy load components that are below the fold
import dynamic from 'next/dynamic';
const About = dynamic(() => import('../components/About'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Services = dynamic(() => import('../components/Services'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Skills = dynamic(() => import('../components/Skills'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function Home() {
  return (
    <div className="bg-transparent font-inter relative">
      <SpaceBackground />
      <Nav />
      <div className="pt-16 relative z-10">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-white/50 border-t border-neutral-800 relative z-10">
        <p>© {new Date().getFullYear()} Mohamed Ali. All rights reserved.</p>
      </footer>
    </div>
  );
}