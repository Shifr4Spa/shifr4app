"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Sling as Hamburger } from "hamburger-react"; // Importa el componente de la librería

interface NavbarAgrodProps {
  menuOptions: { id: string; label: string }[];
}

const NavbarAgrod: React.FC<NavbarAgrodProps> = ({ menuOptions }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="mx-auto absolute w-full z-10">
      <div className="container py-6 flex justify-between items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm hidden lg:flex text-gray-300">
            Para una consulta gratuita
          </span>
          <button className="items-center justify-center text-sm hidden lg:flex font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-8 px-5 py-6 bg-[#971e24] text-white border-r-0">
            LLAMA A: +1 123 456 7890
          </button>

          {/* Mobile Menu (Hamburger Menu) */}
          <div className="lg:hidden relative">
            {/* Hamburger Menu Icon */}
            <Hamburger toggled={isMobileMenuOpen} toggle={toggleMobileMenu} />

            {/* Mobile Menu Content */}
            <div
              className={`transition-transform duration-300 ease-in-out transform absolute top-full right-0 w-64 bg-black shadow-lg rounded-b-xl ${
                isMobileMenuOpen ? "max-h-screen" : "max-h-0"
              } overflow-hidden`}
            >
              <nav className="flex flex-col py-4 px-4">
                {menuOptions.map((option, idx) => (
                  <Link
                    key={idx}
                    className="text-white hover:text-[#971e24] uppercase mt-2 font-semibold"
                    href={`/${option.id}`}
                  >
                    {option.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full z-10 border-b-[1.3px] border-gray-500"></div>

      <div className="bg-transparent">
        <div className="container py-4 flex justify-between items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static">
          <div className="text-[#971e24] lg:ml-0 sm:ml-2"></div>

          {/* Desktop Menu */}
          <nav className="space-x-4 py-5 hidden lg:flex">
            {menuOptions.map((option, idx) => (
              <Link
                key={idx}
                className="text-white hover:text-[#971e24] uppercase"
                href={`/${option.id}`}
              >
                {option.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarAgrod;