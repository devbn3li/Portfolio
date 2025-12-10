'use client';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  } as const;

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 bg-black text-white text-lg md:text-xl py-5 px-6 md:px-20 flex justify-between items-center shadow-lg transition-all duration-300 ease-in-out ${scrolling ? "bg-opacity-70 backdrop-blur-md" : "bg-opacity-0"
        }`}
    >
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-bold bg-[#111111] py-1 px-2 cursor-pointer rounded-md text-xl md:text-3xl text-opacity-70 hover:text-opacity-100 transition-all duration-300"
      >
        <Link href="/">
          M<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-3xl">.</span>
        </Link>
      </motion.h1>

      {/* Center Navigation Links */}
      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6 md:gap-10">
        {navLinks.map((link, index) => (
          <motion.li
            key={link.href}
            className="relative group"
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={link.href}
              className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300"
            >
              {link.label}
            </Link>
            <motion.span
              className="block h-0.5 bg-[rgb(100_108_255_/_var(--tw-text-opacity))] absolute left-0 bottom-0"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </motion.li>
        ))}
      </ul>

      {/* CV Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/cv">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(100, 108, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-[rgb(100_108_255)] text-white font-semibold rounded-lg text-base transition-all duration-300"
          >
            CV
          </motion.button>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
