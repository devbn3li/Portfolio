import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SpaceBackground from "../components/ShootingStars";
import Footer from "../components/Footer";

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
    <div className="relative bg-transparent font-inter">
      <SpaceBackground />
      <Nav />
      <div className="relative z-10 pt-16">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
