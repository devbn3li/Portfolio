'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-black px-4 py-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out md:px-20 md:py-5 md:text-xl ${
        scrolling ? 'bg-opacity-70 backdrop-blur-md' : 'bg-opacity-0'
      }`}
    >
      {/* Logo */}
      <h1 className="z-50 cursor-pointer rounded-md bg-[#111111] px-2 py-1 text-xl font-bold text-opacity-70 transition-all duration-300 hover:text-opacity-100 md:text-3xl">
        <Link href="/">
          <Image src="/logo.png" alt="M Logo" width={40} height={40} />
        </Link>
      </h1>

      {/* CV Button */}
      <Link href="/cv">
        <button className="rounded-lg bg-brand px-5 py-2 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(100,108,255,0.5)] active:scale-95">
          CV
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
