import type { Metadata } from 'next';
import GlobalChrome from '../components/redesign/GlobalChrome';
import Nav from '../components/redesign/Nav';
import Hero from '../components/redesign/Hero';
import Experience from '../components/redesign/Experience';
import Expertise from '../components/redesign/Expertise';
import About from '../components/redesign/About';
import Contact from '../components/redesign/Contact';
import Footer from '../components/redesign/Footer';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-petrol text-[17px] leading-[1.6] text-mist">
      <GlobalChrome />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
