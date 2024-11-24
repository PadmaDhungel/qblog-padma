import React, { useState } from "react";
import { NavLink, Link } from "react-router";

import menu from "../assets/menu.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/posts/sort=recent", label: "Recent" },
    { to: "/posts?sort=trending", label: "Trending" },
    { to: "/posts?sort=popular", label: "Popular" },
    { to: "/about", label: "About" },
  ];

  const NavLinks = ({ isMobile, closeMenu }) => {
    return (
      <>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            className="flex gap-1 items-center text-center"
            to={to}
            onClick={isMobile ? closeMenu : undefined}
          >
            {label}
          </NavLink>
        ))}
        <NavLink to="" onClick={isMobile ? closeMenu : undefined}>
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white ml-16 md:mt-0">
            Login
          </button>
        </NavLink>
      </>
    );
  };

  return (
    <header className="w-full h-16 md:h-20 flex justify-between items-center">
      {/* logo */}
      <Link to="/" className="flex">
        <span className="font-bold text-2xl text-cyan-900">Q-Blog</span>
      </Link>

      {/* mobile menu --md-768px below */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : <img src={menu} />}
        </div>
        {open && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
            onClick={() => setOpen(false)} // Close the menu when overlay is clicked
          ></div>
        )}
        <nav
          className={`w-full h-screen flex flex-col items-center justify-start gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out z-20 ${
            open ? "-right-0 block" : "-right-full hidden"
          }`}
        >
          <NavLinks isMobile closeMenu={() => setOpen(false)} />
        </nav>
      </div>

      {/* desktop menu flex above 768 */}
      <nav className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <NavLinks isMobile={false} closeMenu={() => {}} />
      </nav>
    </header>
  );
};

export default Navbar;
