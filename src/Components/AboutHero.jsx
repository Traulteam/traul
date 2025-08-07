import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
            <MapPin className="w-4 h-4" />
            Our Story
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold mb-6 px-2">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Traul
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 px-4">
            Building a smarter way to move goods, starting with{" "}
            <span className="text-orange-400 font-semibold">Vijayawada</span>. 
            We're revolutionizing logistics with technology, one delivery at a time.
          </p>

          <div className="flex justify-center">
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
