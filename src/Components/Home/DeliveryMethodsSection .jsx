import React from "react";
import { motion } from "framer-motion";

const DeliveryMethodsSection = () => {
  const deliveryMethods = [
    {
      title: "Air Freight",
      description:
        "Air freight is another term for air cargo that is, the shipment of goods through an air carrier.",
      image:
        "https://images.unsplash.com/photo-1674146923401-59583a5689e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlbGl2ZXJ5JTIwdG9wJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Road Freight",
      description:
        "Road Freight is the physical process of transporting cargo by road using motor vehicles.",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sea Freight",
      description:
        "Sea Freight is a method of transporting large amounts of goods using carrier ships.",
      image:
        "https://media.istockphoto.com/id/618610658/photo/delivery-men-unloading-cardboard-boxes-from-truck-on-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=KaWC5GmAR5T00C2Wts37f8rS_MTiBn14BkP68W4eIRg=",
    },
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for each delivery method card
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for title (slide in from left)
  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for image (scale up)
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  // Animation variants for description (slide in from right)
  const descriptionVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  // Animation variants for accent elements
  const accentVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Animation variants for bottom section
  const bottomVariants = {
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

  return (
    <div className="bg-black text-white pt-16">
      <div className="w-full mx-auto">
        {/* Delivery Methods Cards */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {deliveryMethods.map((method, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-700 pb-10 last:border-b-0 mb-20"
              variants={cardVariants}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
                {/* Left side - Title */}
                <motion.div className="lg:w-1/3" variants={titleVariants}>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    {method.title}
                  </h3>
                </motion.div>

                {/* Middle section - Image */}
                <motion.div
                  className="lg:w-1/3 flex justify-center"
                  variants={imageVariants}
                >
                  <motion.div
                    className="w-full max-w-sm h-32 overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <img src={method.image} alt="" className="object-fit" />
                  </motion.div>
                </motion.div>

                {/* Right side - Description */}
                <motion.div className="lg:w-1/3" variants={descriptionVariants}>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Orange accent dot */}
                  <motion.div
                    className="mt-4 flex items-center gap-3"
                    variants={accentVariants}
                  >
                    <motion.div
                      className="w-3 h-3 bg-orange-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div
                      className="w-8 h-0.5 bg-orange-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "2rem" }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative elements */}
        <motion.div
          className="mt-16 flex justify-end"
          variants={bottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-gray-700"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#f97316",
                transition: { duration: 0.3 },
              }}
            >
              <svg
                className="w-6 h-6 text-white"
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
            </motion.div>
            <span className="text-white font-medium">Know More</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryMethodsSection;
