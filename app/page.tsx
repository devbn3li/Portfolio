import dynamic from 'next/dynamic';
import Nav from "../components/Nav";
import Hero from "../components/Hero";

// Lazy load components that are below the fold
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
const ShootingStars = dynamic(() => import('../components/ShootingStars'), {
  loading: () => null,
});

export default function Home() {
  return (
    <div className="bg-[#09090b] font-inter relative">
      <ShootingStars />
      <Nav />
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-white/50 border-t border-neutral-800">
        <p>© {new Date().getFullYear()} Mohamed Ali. All rights reserved.</p>
      </footer>
    </div>
  );
}