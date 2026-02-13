'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/tools', label: 'Tools' },
];

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-black px-4 py-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out md:px-20 md:py-5 md:text-xl ${scrolling ? 'bg-opacity-70 backdrop-blur-md' : 'bg-opacity-0'
          }`}
      >
        {/* Logo */}
        <h1 className="z-50 cursor-pointer rounded-md bg-[#111111] px-2 py-1 text-xl font-bold text-opacity-70 transition-all duration-300 hover:text-opacity-100 md:text-3xl">
          <Link href="/">
            <Image src="/logo.png" alt="M Logo" width={40} height={40} />
          </Link>
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-6 md:flex md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                className={`transition-all duration-300 ${pathname === link.href ||
                    pathname.startsWith(link.href + '/')
                    ? 'text-brand'
                    : 'text-white text-opacity-70 hover:text-opacity-100'
                  }`}
              >
                {link.label}
              </Link>
              <span
                className={`absolute bottom-0 left-0 block h-0.5 bg-brand transition-all duration-300 ${pathname === link.href ||
                    pathname.startsWith(link.href + '/')
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                  }`}
              />
            </li>
          ))}
        </ul>

        {/* Desktop CV Button */}
        <div className="hidden md:block">
          <Link href="/cv">
            <button className="rounded-lg bg-brand px-5 py-2 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(100,108,255,0.5)] active:scale-95">
              CV
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 px-6 pt-24 backdrop-blur-lg transition-all duration-300 md:hidden ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className="border-b border-neutral-800 pb-4 transition-all duration-300"
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen
                  ? 'translateX(0)'
                  : 'translateX(-20px)',
              }}
            >
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center gap-3 text-2xl transition-colors ${pathname === link.href
                    ? 'text-brand'
                    : 'text-white/80 hover:text-brand'
                  }`}
              >
                <span className="h-2 w-2 rounded-full bg-brand" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CV Button */}
        <div
          className="mt-8 transition-all duration-300"
          style={{
            transitionDelay: mobileMenuOpen ? '200ms' : '0ms',
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen
              ? 'translateX(0)'
              : 'translateX(-20px)',
          }}
        >
          <Link href="/cv" onClick={handleLinkClick}>
            <button className="w-full rounded-lg bg-brand py-4 text-lg font-semibold text-white">
              View CV
            </button>
          </Link>
        </div>

        {/* Decorative element */}
        <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-9xl font-black text-white/10">
          M.
        </div>
      </div>
    </>
  );
};

export default Nav;
