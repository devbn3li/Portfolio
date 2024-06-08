import React from "react";

const Nav = () => {
  return (
    <div className="mx-[5%]">
      <div className="flex justify-between">
        <div className="font-bold text-xl p-5">
          Mohamed Ali
        </div>
        <div className="w-[70%] py-5">
          <nav className="text-xl font-bold gap-10">
            <ul className="flex justify-evenly">
              <li>
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