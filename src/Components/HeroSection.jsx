import React from "react";
import { motion } from "framer-motion";
import hero from "/hero1.png";

function HeroSection() {
  return (
    <div className="relative min-h-screen flex justify-center overflow-hidden">
      {/* Hero Image */}
      <img
        src={hero}
        alt="Delivery logistics hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl w-full">
        <motion.h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight tracking-tight mt-30 lg:mt-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Your Trusted Partner for{" "}
          <span className="text-black">Local & Outstation</span> Goods Transport
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg md:text-lg lg:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto mb-0 text-justify lg:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Book 2-wheeler & mini truck in seconds. Fast, affordable, and
          trackable delivery services across{" "}
          <span className="text-black font-semibold">
            Vijaywada, Guntur, Bhimavaram
          </span>
          , and beyond.
        </motion.p>
      </div>
    </div>
  );
}

export default HeroSection;
