import React, { useEffect, useState } from "react";
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black text-white text-lg md:text-2xl py-5 px-10 md:px-20 flex justify-between items-center shadow-lg transition-all duration-300 ease-in-out ${scrolling ? "bg-opacity-70" : "bg-opacity-0"
        }`}
    >
      <h1 className="font-bold bg-[#111111] py-1 px-2 cursor-pointer rounded-md text-xl md:text-3xl text-opacity-70 hover:text-opacity-100 transition-all duration-300">
        <Link
          href="/">
          M<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-3xl">.</span>
        </Link>
      </h1>
      <ul className="flex gap-6 md:gap-10">
        <li className="relative group">
          <Link
            href="#about"
            className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300"
          >
            About
          </Link>
          <span className="block h-0.5 bg-[rgb(100_108_255_/_var(--tw-text-opacity))] absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </li>
        <li className="relative group">
          <Link
            href="#work"
            className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300"
          >
            Work
          </Link>
          <span className="block h-0.5 bg-[rgb(100_108_255_/_var(--tw-text-opacity))] absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </li>
        <li className="relative group">
          <Link
            href="#contact"
            className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300"
          >
            Contact
          </Link>
          <span className="block h-0.5 bg-[rgb(100_108_255_/_var(--tw-text-opacity))] absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
