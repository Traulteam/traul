import React, { useState, useEffect, useCallback } from "react";
import logo from "/logo-png.png";
import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";

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
    "/download",
         "/vijayawada/office-shifting",
     "/vijayawada/appliance-moving",
     "/vijayawada/furniture-transport",
           "/vijayawada/house-shifting",
      "/vijayawada/mini-truck-booking",
      "/vijayawada/parcel-delivery",
  ].includes(location.pathname);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-5 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick} className="flex-shrink-0 z-10">
          <img src={logo} alt="Traul Logo" className="w-20" />
        </Link>

        {/* Desktop Nav - Absolutely centered */}
        <nav className="hidden md:flex items-center justify-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className="hover:font-semibold text-sm lg:text-base text-black"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:font-semibold text-sm lg:text-base text-black"
          >
            About Us
          </Link>
          
          <Link
            to="/booking"
            className="hover:font-semibold text-sm lg:text-base text-black"
          >
            Vijayawada
          </Link>
        </nav>

        {/* Download and Contact Buttons - Pushed to far right */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-auto z-10">
          <Link
            to="/download"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm lg:text-base transition-colors duration-200"
          >
            Download App
          </Link>
          <Link
            to="/contact-us"
            className="border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white text-sm lg:text-base transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 ml-auto pr-2"
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
        className={`md:hidden absolute top-full left-0 right-0 bg-white text-black border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 space-y-6">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-base font-medium text-gray-900 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className="text-base font-medium text-gray-900 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
          >
            About Us
          </Link>
          
          <Link
            to="/booking"
            onClick={() => setIsMenuOpen(false)}
            className="text-base font-medium text-gray-900 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
          >
            Vijayawada
          </Link>
          
          <div className="flex flex-col gap-4 pt-4">
            <Link
              to="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 text-base font-medium transition-all duration-200 text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/download"
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 text-base font-medium transition-all duration-200 text-center"
            >
              Download App
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
