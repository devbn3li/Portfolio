import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 mt-20">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-4xl text-white md:text-5xl font-black">
          About<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-7xl">.</span>
        </h2>
        <div className="mt-6 text-white text-lg md:text-xl">
          <p>
            Hey, I&apos;m Mohamed! 22 years old, Egyptian Software Engineer specialize in the frontend. I have a passion for web development and love to create websites and web applications that are fast, responsive, and accessible. I have experience working with modern web technologies like Next.js, React.js, TypeScript, and Tailwind CSS. I am always eager to learn new things and improve my skills. I am currently looking for new opportunities to work on exciting projects and collaborate with talented people.
          </p>
          <p className="mt-10">
            I am currently a Frontend Engineer at Sustaingrc and a Computer Science student at University of the People
          </p>
        </div>
        <div className="mt-6">
          <h3 className=" flex items-center text-xl text-[rgb(99,106,250)] gap-4">Reach me <FaArrowRight /></h3>
        </div>
      </div>
    </section>
  );
};

export default About;