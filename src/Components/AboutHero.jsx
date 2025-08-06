import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Award } from "lucide-react";

function AboutHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  const stats = [
    { icon: Users, value: "10K+", label: "Happy Customers" },
    { icon: MapPin, value: "50+", label: "Cities Covered" },
    { icon: Award, value: "99%", label: "Success Rate" },
  ];

  return (
    <div className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/delivery.jpg"
          alt="About Traul"
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: imageLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            About <span className="text-orange-400">Traul</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed text-gray-200 px-4">
            Revolutionizing logistics with technology, one delivery at a time. 
            We connect businesses and individuals with reliable transportation solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: imageLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto px-2"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20"
              >
                <div className="flex flex-col items-center">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-orange-400 mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-300 text-center leading-tight">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHero;
