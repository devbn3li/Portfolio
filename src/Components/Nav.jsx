import React from "react";

const Nav = () => {
  return (
    <div className="shadow-md">
      <div className="flex mx-[5%] justify-between h-[70px] items-center">
        <div className="font-bold text-xl">
          Mohamed Ali
        </div>
        <div className="w-[70%]">
          <nav className="text-xl font-bold gap-10">
            <ul className="flex justify-evenly">
              <li className="hover:text-blue-600 duration-300 border-b-2">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;