import React from "react";
// import { Link } from "react-router";
const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Facebook",
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 4.267c.956 0 1.731.775 1.731 1.732s-.775 1.731-1.731 1.731-1.732-.774-1.732-1.731.776-1.732 1.732-1.732zm7.44 1.732a1.732 1.732 0 11-3.464 0 1.732 1.732 0 013.464 0zm1.155 2.676c.329 0 .595.266.595.595v9.312c0 .329-.266.595-.595.595H6.954a.595.595 0 01-.595-.595V8.27c0-.329.266-.595.595-.595h9.09z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "#",
    },
  ];

  const quickLinks = [
    { label: "2-Wheeler Delivery", href: "#" },
    { label: "Mini Truck Transport", href: "#" },
    { label: "Local Delivery", href: "#" },
    { label: "Outstation Transport", href: "#" },
    { label: "Scheduled Bookings", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer
      className="bg-gradient-to-b from-gray-900 to-black text-white"
      role="contentinfo"
    >
      <div className="max-full mx-auto px-4 sm:px-6 lg:px-24">
        {/* Main footer content */}
        <div className="py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Traul
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed max-w-md">
                  Redefining last-mile logistics for Bharat. Your trusted
                  partner for fast, affordable, and trackable goods transport
                  across Andhra Pradesh.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  2-Wheeler Delivery
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Mini Truck Transport
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Local Delivery
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Outstation Transport
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Scheduled Bookings
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Traul. All rights reserved. Redefining Last-Mile Logistics
              for Bharat.
            </p>
            <nav className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
