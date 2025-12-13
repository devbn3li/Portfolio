'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 bg-black text-white text-lg md:text-xl py-4 md:py-5 px-4 md:px-20 flex justify-between items-center shadow-lg transition-all duration-300 ease-in-out ${scrolling ? "bg-opacity-70 backdrop-blur-md" : "bg-opacity-0"
          }`}
      >
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold bg-[#111111] py-1 px-2 cursor-pointer rounded-md text-xl md:text-3xl text-opacity-70 hover:text-opacity-100 transition-all duration-300 z-50"
        >
          <Link href="/">
            M<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-3xl">.</span>
          </Link>
        </motion.h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 md:gap-10">
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

        {/* Desktop CV Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden md:block"
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

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden pt-24 px-6"
          >
            <motion.ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={mobileItemVariants}
                  className="border-b border-neutral-800 pb-4"
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-2xl text-white/80 hover:text-[rgb(100_108_255)] transition-colors flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[rgb(100_108_255)]" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile CV Button */}
            <motion.div
              variants={mobileItemVariants}
              className="mt-8"
            >
              <Link href="/cv" onClick={handleLinkClick}>
                <button className="w-full py-4 bg-[rgb(100_108_255)] text-white font-semibold rounded-lg text-lg">
                  View CV
                </button>
              </Link>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-9xl font-black text-white pointer-events-none"
            >
              M.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
