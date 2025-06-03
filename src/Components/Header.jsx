import React, { useState, useEffect } from "react";
import logo from "/logo-png.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToMobileSection = () => {
    const element = document.getElementById("mobile-tracking-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Traul Logo"
            className="w-8 sm:w-8 lg:w-20 rounded-md"
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
        <button
          onClick={scrollToMobileSection}
          className="hidden md:block bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg cursor-pointer text-sm lg:text-base hover:bg-gray-800 transition-colors"
        >
          Download App
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
          <button
            onClick={scrollToMobileSection}
            className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer text-sm hover:bg-gray-800 transition-colors w-fit"
          >
            Download App
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
