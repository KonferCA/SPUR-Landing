import { SpurLogo } from "@assets";
import React from "react";
/*
 *
 * @description Navbar component
 * @props {void}
 *
 */
const Navbar: React.FC = () => {
  return (
    <header className="fixed flex w-full items-center justify-between px-10 py-6 z-50">
      {/* Directories */}
      <div className="flex gap-x-5 ">
        <a>Our Story</a>
        <a>Resources</a>
        <a>News</a>
        <a>Partners</a>
      </div>
      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={SpurLogo} className="w-8" alt="" />
      </div>
      {/* Buttons */}
      <div className="flex gap-x-5">
        <button className="button-gradient">Investor Portal</button>
        <button className="button-gradient">Let's talk</button>
      </div>
    </header>
  );
};

export { Navbar };
