import GlobalChrome from '../components/redesign/GlobalChrome';
import Nav from '../components/redesign/Nav';
import Hero from '../components/redesign/Hero';
import About from '../components/redesign/About';
import Services from '../components/redesign/Services';
import Proof from '../components/redesign/Proof';
import Work from '../components/redesign/Work';
import Contact from '../components/redesign/Contact';
import Footer from '../components/redesign/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink font-grotesk text-[17px] leading-[1.6] text-paper">
      <GlobalChrome />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Proof />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
