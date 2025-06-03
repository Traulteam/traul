import React from "react";
import { motion } from "framer-motion";
import hero from "/hero1.png";

function HeroSection() {
  return (
    <div className="">
      <img src={hero} alt="" className="" />

      <div className="absolute inset-0 lg:-top-[20%] flex items-center justify-center">
        <div className="text-center text-black px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-medium mb-4 sm:mb-6 leading-tight sm:whitespace-nowrap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            More Than Just A Shipment
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl opacity-90 lg:px-20 leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Traul will deliver your package quickly and safely than any other
            shipping agency
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
