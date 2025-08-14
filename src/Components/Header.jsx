import React, { useState, useEffect, useCallback } from "react";
import logo from "/logo-png.png";
import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
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
    setIsServicesDropdownOpen(false);
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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-5 flex items-center relative">
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick} className="flex-shrink-0 z-10">
          <img src={logo} alt="Traul Logo" className="w-20" />
        </Link>

        {/* Desktop Nav - Absolutely centered */}
        <nav className="hidden md:flex items-center justify-center gap-6 absolute left-1/2 transform -translate-x-1/2">
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
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <span className="hover:font-semibold text-sm lg:text-base text-black cursor-pointer">
                Services
              </span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${
                  isServicesDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </div>
            
            {isServicesDropdownOpen && (
              <>
                {/* Transparent bridge to prevent hover gap */}
                <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/vijayawada/office-shifting"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                  >
                    Office Shifting Services
                  </Link>
                  <Link
                    to="/vijayawada/appliance-moving"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                  >
                    Appliance Moving Services
                  </Link>
                  <Link
                    to="/vijayawada/furniture-transport"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                  >
                    Furniture Transport Services
                  </Link>
                  <Link
                    to="/vijayawada/house-shifting"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                  >
                    House Shifting Services
                  </Link>
                  <Link
                    to="/vijayawada/mini-truck-booking"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                  >
                    Mini Truck Booking
                  </Link>
                  <Link
                    to="/vijayawada/parcel-delivery"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                  >
                    Parcel Delivery Services
                  </Link>
                </div>
              </>
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
            to="/booking"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm"
          >
            Vijayawada
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm cursor-pointer">
                Services
              </span>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="flex items-center justify-center w-4 h-4 hover:bg-gray-100 rounded transition-colors"
              >
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
            </div>
            
            {isServicesDropdownOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <Link
                  to="/vijayawada/office-shifting"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Office Shifting Services
                </Link>
                <Link
                  to="/vijayawada/appliance-moving"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Appliance Moving Services
                </Link>
                <Link
                  to="/vijayawada/furniture-transport"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Furniture Transport Services
                </Link>
                <Link
                  to="/vijayawada/house-shifting"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  House Shifting Services
                </Link>
                <Link
                  to="/vijayawada/mini-truck-booking"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Mini Truck Booking
                </Link>
                <Link
                  to="/vijayawada/parcel-delivery"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesDropdownOpen(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Parcel Delivery Services
                </Link>
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-3">
            <Link
              to="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white text-sm w-fit transition-colors duration-200 text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/download"
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm w-fit transition-colors duration-200 text-center"
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
