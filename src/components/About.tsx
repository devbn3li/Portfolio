import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 mt-20">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-4xl text-white md:text-5xl font-black">
          About<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-7xl">.</span>
        </h2>
        <div className="flex justify-between items-center">
        <p className="mt-6 text-white w-1/2 text-lg md:text-xl">
          Hey, I&apos;m Mohamed! 21 years old, Egyptian Frontend Engineer. I have a passion for web development and love to create websites and web applications that are fast, responsive, and accessible. I have experience working with modern web technologies like Next.js, React.js, TypeScript, and Tailwind CSS. I am always eager to learn new things and improve my skills. I am currently looking for new opportunities to work on exciting projects and collaborate with talented people.
        </p>
          <Image 
            src="/images/me-at-seamless.jpg"
            alt="Mohamed Ali"
            width={300}
            height={450}
            className="rounded-lg mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default About;