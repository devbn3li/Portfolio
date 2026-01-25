import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] mt-5">
      {/* Hero Section */}
      <section
        className="absolute inset-0 flex items-center justify-center text-white z-10"
      >
        <div className="max-w-5xl px-5">
          <h1
            className="text-4xl md:text-8xl font-black animate-fade-in-up"
          >
            Hey, I&rsquo;m Mohamed
            <span className="text-[rgb(100_108_255)] font-black text-7xl">.</span>
          </h1>
          <h2
            className="text-2xl md:text-4xl text-[rgb(100_108_255)] mt-4 animate-fade-in-up animation-delay-100"
          >
            I&apos;m a <span className="font-bold">Frontend Engineer</span>
          </h2>
          <p
            className="mt-6 text-lg md:text-xl text-white/80 animate-fade-in-up animation-delay-200"
          >
            Passionate about transforming designs into seamless web experiences! With 2+ years of hands-on experience, I specialize in crafting beautiful, responsive interfaces using React.js and Tailwind CSS. Think of me as your Digital Creator 🎨 and Coding Enthusiast 🚀 - ready to build something amazing or guide you through the process!
          </p>
          <Link href="#contact">
            <button
              aria-label="Navigate to contact section"
              className="mt-8 px-6 py-3 bg-[rgb(100_108_255)] text-white font-semibold rounded-lg hover:bg-[rgb(85,64,210)] hover:scale-105 hover:shadow-[0_0_30px_rgba(100,108,255,0.5)] active:scale-95 transition-all duration-300 animate-fade-in-up animation-delay-300"
            >
              Contact me
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
