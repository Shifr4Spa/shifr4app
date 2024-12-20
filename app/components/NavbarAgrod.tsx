"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Sling as Hamburger } from "hamburger-react";

interface NavbarAgrodProps {
  menuOptions: { id: string; label: string }[];
}

const NavbarAgrod: React.FC<NavbarAgrodProps> = ({ menuOptions }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="bg-transparent navbarShifra">
        <div className="container py-4 flex justify-between items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static">
          <div className="text-[#971e24] lg:ml-0 sm:ml-2">
            <div className="flex items-center space-x-4">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h5
                  style={{
                    fontWeight: 700,
                  }}
                >
                  <img src="./logoblanco.png" alt="logo" width="170" />
                </h5>
              </div>
            </div>
          </div>

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

          {/* Mobile Menu (Hamburger Menu) */}
          <div className="lg:hidden relative z-50">
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={toggleMobileMenu}
              color="white"
            />
            <div
              className={`fixed inset-0 bg-[#FA8072] transition-transform transform ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-white"
              >
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
              </button>
              <nav className="flex flex-col items-center justify-center h-full space-y-4">
                {menuOptions.map((option, idx) => (
                  <Link
                    key={idx}
                    className="text-white hover:text-[#971e24] uppercase text-2xl font-semibold"
                    href={`/${option.id}`}
                    onClick={handleLinkClick}
                  >
                    {option.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarAgrod;
