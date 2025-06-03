import React from "react";
import { motion } from "framer-motion";
import phone from "/phone.jpeg";

const MobileTrackingSection = () => {
  return (
    <div
      className="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      id="mobile-tracking-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Image placeholder */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-[600px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
              <img
                src={phone}
                alt=""
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                You Can <span className="text-orange-500">Track</span> Your{" "}
                <br /> Packages in Real Time
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                By using the GoCargo mobile application, you can track your
                package quickly, easily and in real time whenever and wherever
                you are
              </motion.p>

              <motion.button
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTrackingSection;
