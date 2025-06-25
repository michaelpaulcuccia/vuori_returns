"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import NavLink from "./NavLink";

const links = [
  { name: "MEN'S", route: "/mens" },
  { name: "WOMEN'S", route: "/womens" },
  { name: "ABOUT", route: "/about" },
  { name: "ACCOUNT", route: "/account" },
];

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex flex-col items-center mt-4 relative">
      {/* Top Row */}
      <div className="w-full flex flex-row items-center justify-center px-4">
        {/* Hamburger Icon (mobile only) */}
        <button
          className="absolute left-4 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <FiMenu size={32} />
        </button>

        <Image
          src="/images/logo.jpg"
          alt="Logo"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </div>

      {/* Mobile Links */}
      <div
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          flex-col items-center space-y-3 mt-4
          ${
            menuOpen
              ? "flex border-t border-gray-300 border-b-4 border-b-gray-400"
              : "hidden"
          }
          lg:hidden
          w-full py-4
        `}
      >
        {links.map((link) => (
          <NavLink
            key={link.name}
            name={link.name}
            route={link.route}
            target="_blank"
          />
        ))}
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex flex-row items-center justify-center space-x-8 mt-4">
        {links.map((link) => (
          <NavLink key={link.name} name={link.name} route={link.route} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
