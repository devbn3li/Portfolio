import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-black text-white text-lg md:text-2xl py-5 px-10 md:px-20 flex justify-between items-center shadow-lg">
      <h1 className="font-bold text-xl md:text-3xl text-opacity-70 hover:text-opacity-100 transition-all duration-300">
        Mohamed Ali
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
