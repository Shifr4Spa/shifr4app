"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

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
            <button
              onClick={toggleMobileMenu}
              className="text-white relative z-10 transition-opacity duration-300"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>

            {/* Mobile Menu Content */}
            <div
              className={`transition-transform duration-300 ease-in-out transform absolute ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full hidden"
              }  text-white absolute top-0 right-0 h-full pt-16 pr-4`}
            >
              {/* <ul className="flex flex-col space-y-2 w-full h-full bg-white relative">
                <li key={1}>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li key={2}>
                  <a href="#" className="text-white">
                    About
                  </a>
                </li>
                <li key={3}>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul> */}
              <nav
                className="flex flex-col py-8 w-full left-0 relative bg-white p-16 shadow-lg rounded-xl nav-menu flex-1"
                style={{
                  padding: "26px",
                  width: "280px",
                  maxWidth: "100%",
                }}
              >
                {/* <span className="text-black">Menú</span>
                <hr /> */}
                {menuOptions.map((option, idx) => (
                  <Link
                    key={idx}
                    className="text-black hover:text-[#971e24] uppercase mt-2 font-semibold"
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
