import React, { useState, useEffect, useCallback } from "react";
import logo from "/logo-png.png";
import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Check if current page is one of the policy pages that should have white background
  const isPolicyPage = [
    "/privacy",
    "/terms",
    "/refund",
    "/cancel",
    "/disclaimer",
    "/about-us",
    "/vijayawada",
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

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Close menu on window resize (desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
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
          
          {/* Vijayawada Dropdown */}
          <div className="dropdown-container relative">
            <div className="flex items-center gap-1">
              <Link
                to="/vijayawada"
                className="hover:font-semibold text-sm lg:text-base text-black transition-all duration-200"
              >
                Vijayawada
              </Link>
              <button
                onClick={toggleDropdown}
                className="p-1 hover:bg-gray-100 rounded transition-all duration-200"
              >
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
            </div>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <Link
                  to="/vijayawada/office-shifting"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Office Shifting Services
                </Link>
                <Link
                  to="/vijayawada/appliance-moving"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Appliance Moving Services
                </Link>
                <Link
                  to="/vijayawada/furniture-transport"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Furniture Transport Services
                </Link>
                <Link
                  to="/vijayawada/house-shifting"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  House Shifting Services
                </Link>
                <Link
                  to="/vijayawada/mini-truck-booking"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Mini Truck Booking
                </Link>
                <Link
                  to="/vijayawada/parcel-delivery"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Parcel Delivery Services
                </Link>
              </div>
            )}
          </div>
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
          
          {/* Mobile Vijayawada Services */}
          <div className="space-y-2">
            <div className="text-base font-medium text-gray-900 py-2 border-b border-gray-100">
              Vijayawada Services
            </div>
            <div className="pl-4 space-y-2">
              <Link
                to="/vijayawada/office-shifting"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
              >
                Office Shifting Services
              </Link>
              <Link
                to="/vijayawada/appliance-moving"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
              >
                Appliance Moving Services
              </Link>
              <Link
                to="/vijayawada/furniture-transport"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
              >
                Furniture Transport Services
              </Link>
              <Link
                to="/vijayawada/house-shifting"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
              >
                House Shifting Services
              </Link>
              <Link
                to="/vijayawada/mini-truck-booking"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
              >
                Mini Truck Booking
              </Link>
              <Link
                to="/vijayawada/parcel-delivery"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
              >
                Parcel Delivery Services
              </Link>
            </div>
          </div>
          
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
