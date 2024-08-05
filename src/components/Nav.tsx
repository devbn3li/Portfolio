import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="text-white text-2xl p-5 flex justify-evenly">
      <h1 className="">Mohamed Ali</h1>
      <ul className="gap-4 flex ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;