'use client';

import { useEffect, useState } from "react";
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

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-black text-white text-lg md:text-xl py-4 md:py-5 px-4 md:px-20 flex justify-between items-center shadow-lg transition-all duration-300 ease-in-out ${scrolling ? "bg-opacity-70 backdrop-blur-md" : "bg-opacity-0"
          }`}
      >
        {/* Logo */}
        <h1 className="font-bold bg-[#111111] py-1 px-2 cursor-pointer rounded-md text-xl md:text-3xl text-opacity-70 hover:text-opacity-100 transition-all duration-300 z-50">
          <Link href="/">
            M<span className="text-[rgb(100_108_255)] font-black text-3xl">.</span>
          </Link>
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 md:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative group"
            >
              <Link
                href={link.href}
                className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300"
              >
                {link.label}
              </Link>
              <span className="block h-0.5 bg-[rgb(100_108_255)] absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* Desktop CV Button */}
        <div className="hidden md:block">
          <Link href="/cv">
            <button className="px-5 py-2 bg-[rgb(100_108_255)] text-white font-semibold rounded-lg text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(100,108,255,0.5)] active:scale-95">
              CV
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden pt-24 px-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className="border-b border-neutral-800 pb-4 transition-all duration-300"
              style={{ 
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
              }}
            >
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl text-white/80 hover:text-[rgb(100_108_255)] transition-colors flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[rgb(100_108_255)]" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CV Button */}
        <div
          className="mt-8 transition-all duration-300"
          style={{ 
            transitionDelay: mobileMenuOpen ? '250ms' : '0ms',
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
          }}
        >
          <Link href="/cv" onClick={handleLinkClick}>
            <button className="w-full py-4 bg-[rgb(100_108_255)] text-white font-semibold rounded-lg text-lg">
              View CV
            </button>
          </Link>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-9xl font-black text-white/10 pointer-events-none"
        >
          M.
        </div>
      </div>
    </>
  );
};

export default Nav;
