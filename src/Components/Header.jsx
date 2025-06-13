import React, { useState, useEffect, useCallback } from "react";
import logo from "/logo-png.png";
import { Link, useLocation } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isPrivacyPage = location.pathname === "/privacy";

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const scrollToMobileSection = useCallback(() => {
    const element = document.getElementById("mobile-tracking-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close menu after scroll
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu on window resize (desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerBg =
    isScrolled || isPrivacyPage
      ? "bg-white text-black shadow-sm"
      : "bg-transparent text-white";

  const menuLineColor = isScrolled || isPrivacyPage ? "bg-black" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full ${headerBg} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Traul Logo" className="w-20 rounded-md" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
          <Link
            to="/contact-us"
            className="hover:font-semibold text-sm lg:text-base"
          >
            For Enterprise
          </Link>
          <Link
            to="/contact-us"
            className="hover:font-semibold text-sm lg:text-base"
          >
            For Delivery
          </Link>
        </nav>

        {/* Download Button */}
        <div className="hidden md:block">
          <button
            onClick={scrollToMobileSection}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm lg:text-base"
          >
            Download App
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
        >
          <span
            className={`w-6 h-0.5 rounded ${menuLineColor} transform transition-all ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 rounded ${menuLineColor} transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 rounded ${menuLineColor} transform transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white text-black transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          <Link
            to="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm"
          >
            For Enterprise
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm"
          >
            For Delivery
          </Link>
          <button
            onClick={scrollToMobileSection}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm w-fit"
          >
            Download App
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
