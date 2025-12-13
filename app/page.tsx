import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-[#09090b] font-inter">
      <Nav />
      <div className="pt-16">
        <Hero />
        <About />
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