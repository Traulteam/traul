import React from "react";

const ScrollingBanner = () => {
  const services = [
    "DELIVERY",
    "TRACKING",
    "SHIPPING",
    "DELIVERY",
    "TRACKING",
    "SHIPPING",
  ];

  return (
    <div className="bg-black py-12 overflow-hidden whitespace-nowrap">
      <div className="animate-scroll flex items-center">
        {/* First set of items */}
        {services.map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-2xl md:text-3xl font-bold mx-8">
              {service}
            </span>
            <span className="text-white text-4xl mx-7">✦</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {services.map((service, index) => (
          <div key={`duplicate-${index}`} className="flex items-center">
            <span className="text-white text-2xl md:text-3xl font-bold mx-8">
              {service}
            </span>
            <span className="text-white text-2xl mx-8">✦</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;
