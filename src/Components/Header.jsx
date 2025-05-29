import React, { useState } from "react";
import logo from "/logo-svg.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white px-4 sm:px-6 lg:px-12">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Traul Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-24 lg:h-24 rounded-md"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <p className="font-medium cursor-pointer hover:font-bold transition-all text-sm lg:text-base">
            For Enterprise
          </p>
          <p className="font-medium cursor-pointer hover:font-bold transition-all text-sm lg:text-base">
            For Delivery
          </p>
        </nav>

        {/* Desktop Support Button */}
        <button className="hidden md:block bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg cursor-pointer text-sm lg:text-base hover:bg-gray-800 transition-colors">
          Support
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-48 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col space-y-4 pb-4 pt-2">
          <p className="font-medium cursor-pointer hover:font-bold transition-all text-sm">
            For Enterprise
          </p>
          <p className="font-medium cursor-pointer hover:font-bold transition-all text-sm">
            For Delivery
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer text-sm hover:bg-gray-800 transition-colors w-fit">
            Support
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
