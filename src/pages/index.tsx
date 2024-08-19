import Head from 'next/head';
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[#09090b] font-poppins">
      <Head>
        <title>Mohamed Ali - Frontend Engineer</title>
      </Head>
      <Nav />
      <div className="pt-16">
        <Hero />
      </div>
    </div>
  );
}
