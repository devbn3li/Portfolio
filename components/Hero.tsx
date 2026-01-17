'use client';

import { motion } from 'framer-motion';
import Link from "next/link";

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  } as const;

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(100, 108, 255, 0.5)',
    },
    tap: { scale: 0.95 },
  } as const;

  return (
    <div className="relative min-h-[90vh] mt-5">
      {/* Hero Section */}
      <motion.section
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-white z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl px-5">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-8xl font-black"
          >
            Hey, I&rsquo;m Mohamed
            <span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-7xl">.</span>
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl text-[rgb(100_108_255_/_var(--tw-text-opacity))] mt-4"
          >
            I&apos;m a <span className="font-bold">Frontend Engineer</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-opacity-80"
          >
            Passionate about transforming designs into seamless web experiences! With 2+ years of hands-on experience, I specialize in crafting beautiful, responsive interfaces using React.js and Tailwind CSS. Think of me as your Digital Creator 🎨 and Coding Enthusiast 🚀 - ready to build something amazing or guide you through the process!
          </motion.p>
          <Link href="#contact">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Navigate to contact section"
              className="pointer-events-auto mt-8 px-6 py-3 bg-[rgb(100_108_255_/_var(--tw-text-opacity))] text-white font-semibold rounded-lg hover:bg-[rgb(85,64,210)] transition-colors duration-300"
            >
              Contact me
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
