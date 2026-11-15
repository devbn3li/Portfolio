import GlobalChrome from '@/components/redesign/GlobalChrome';
import Nav from '@/components/redesign/Nav';
import Hero from '@/components/redesign/Hero';
import Experience from '@/components/redesign/Experience';
import Expertise from '@/components/redesign/Expertise';
import About from '@/components/redesign/About';
import Contact from '@/components/redesign/Contact';
import Footer from '@/components/redesign/Footer';

// The live homepage inside the lab, so any palette can be tried on it.
export default function CurrentInLab() {
  return (
    <div
      data-lab-root
      data-palette="lapis"
      className="relative min-h-screen overflow-x-hidden bg-page pb-40 text-[17px] leading-[1.6] text-body"
    >
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
