import React, { useState, useEffect, useCallback } from "react";
import logo from "/logo-png.png";
import { Link, useLocation } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if current page is one of the policy pages that should have white background
  const isPolicyPage = [
    "/privacy",
    "/terms",
    "/refund",
    "/cancel",
    "/disclaimer",
    "/about-us",
    "/booking",
  ].includes(location.pathname);

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

  // Handle logo click - scroll to top and navigate to home
  const handleLogoClick = useCallback(() => {
    // Always scroll to top when logo is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock for mobile menu - REMOVED THE PROBLEMATIC CODE
  // The mobile menu will handle its own scrolling within the container

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
    isScrolled || isPolicyPage
      ? "bg-white text-black shadow-sm"
      : "bg-transparent text-white";

  const menuLineColor = isScrolled || isPolicyPage ? "bg-black" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full ${headerBg} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Traul Logo" className="w-20" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
          <Link
            to="/about-us"
            className="hover:font-semibold text-sm lg:text-base text-black"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:font-semibold text-sm lg:text-base text-black"
          >
            For Enterprise
          </Link>
          <Link
            to="/contact-us"
            className="hover:font-semibold text-sm lg:text-base text-black"
          >
            For Delivery
          </Link>
          <Link
            to="/booking"
            className="hover:font-semibold text-sm lg:text-base text-black"
          >
            Booking
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
        className={`md:hidden bg-white text-black transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          <Link
            to="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm"
          >
            About Us
          </Link>
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
