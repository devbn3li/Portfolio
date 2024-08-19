import React from "react";
import Tile from "./ui/Tile";
import Link from "next/link";

const Hero = () => {
  const tiles = new Array(220).fill(1, 0, 220);

  return (
    <div className="relative min-h-[85vh] mt-5">
      {/* Tiles Container */}
      <div className="absolute inset-0 w-full h-full flex flex-wrap justify-center items-center z-0 overflow-visible">
        {tiles.map((tile, index) => (
          <Tile key={`tile-${index}-${tile}`} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="max-w-5xl px-5">
          <h1 className="text-4xl md:text-8xl font-black">
            Hey, I&rsquo;m Mohamed<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-7xl">.</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-[rgb(100_108_255_/_var(--tw-text-opacity))] mt-4">
            I&apos;m a <span className="font-bold">Frontend Engineer</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-opacity-80">
            Passionate about transforming designs into seamless web experiences! With 2+ years of hands-on experience, I specialize in crafting beautiful, responsive interfaces using React.js and Tailwind CSS. Think of me as your Digital Creator 🎨 and Coding Enthusiast 🚀 - ready to build something amazing or guide you through the process!
          </p>
          <button className="mt-8 px-6 py-3 bg-[rgb(100_108_255_/_var(--tw-text-opacity))] text-black font-semibold rounded hover:bg-[rgb(85,64,210)] transition-all duration-300">
            <Link
            href="#contact">
              Contact me
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
