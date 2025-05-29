import React from "react";
import { motion } from "framer-motion";
import star from "/container.svg";
import CircularText from "./CircularText";

function HeroSection() {
  // Animation variants for staggered text appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const starVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const circularTextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <div className="relative w-full">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-20 lg:py-24 xl:py-30 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-30 justify-between">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] leading-none font-bold heading"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
            variants={itemVariants}
          >
            <span className="text-black">More Than Just</span>
            <motion.img
              src={star}
              alt=""
              className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16"
              variants={starVariants}
              whileHover={{
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            />
          </motion.span>

          <motion.span variants={itemVariants}>
            A{" "}
            <span className="text-orange-500 relative">
              Logistic
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-orange-200 opacity-50"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
              ></motion.span>
            </span>{" "}
            <span className="text-orange-500">Shipment</span>
          </motion.span>
        </motion.h1>

        {/* Animated Description Section */}
        <motion.div
          className="lg:ml-10 flex flex-col items-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            className="text-base sm:text-lg md:text-[20px] text-gray-800 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-orange-500 font-semibold">Traul</span> will
            deliver your package <br />
            <span className="text-orange-600">quickly</span> and{" "}
            <span className="text-orange-600">safely</span> than any other{" "}
            <br />
            shipping agency
          </motion.p>

          <motion.div
            className="mt-6 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              className="w-12 h-0.5 bg-orange-500"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8, delay: 1.2 }}
            ></motion.div>
            <span className="text-sm text-orange-600 font-medium uppercase tracking-wider">
              Premium Logistics
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Circular Text */}
      <motion.div
        className="hidden lg:inline-block overflow-hidden rounded-full p-5 right-[10%] absolute top-[64%] mt-7"
        variants={circularTextVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <CircularText
          text="PREMIUM*LOGISTICS*DELIVERY*"
          onHover="speedUp"
          spinDuration={0}
          className="custom-class bg-gradient-to-r from-orange-500 to-orange-600"
        />
      </motion.div>
    </div>
  );
}

export default HeroSection;
