import React from "react";
import { motion } from "framer-motion";

import scooty from "/asset4.png";
import threeWheeler from "/asset3.png";
import tataAce from "/asset2.png";
import pickup from "/asset5.png";
import pickup2 from "/asset6.png";
import eicher from "/asset1.png";

const DeliveryMethodsSection = () => {
  const transportServices = [
    {
      title: "2-Wheeler Delivery",
      subtitle:
        "Perfect for fast, city-wide deliveries of lightweight items. Ideal for businesses needing quick dispatch of parcels with real-time tracking.",
      capacity: "Up to 20kg - 30kg",
      deliveryTime: "Rs. 50",
      perfectFor: [
        "Documents & Parcels",
        "Food Delivery",
        "Pharma Supplies",
        "Small Electronics",
      ],
      icon: scooty,
    },
    {
      title: "3-Wheeler Cargo",
      subtitle:
        "Compact and agile, this 3-wheeler is great for urban areas and narrow roads. Ideal for small businesses and retail deliveries across short distances.",
      capacity: "400 – 500 kg",
      deliveryTime: "Rs. 230",
      perfectFor: ["Packaged goods", "Groceries", "Hardware items"],
      icon: threeWheeler,
    },
    {
      title: "Tata Ace / Chota Hathi",
      subtitle:
        "Reliable and spacious enough for moderate loads. The Tata Ace is perfect for shops, construction sites, and home shifting needs within city limits.",
      capacity: "700 – 750 kg",
      deliveryTime: "Rs. 270",
      perfectFor: ["Furniture", "Construction Materials", "Shop Stock"],
      icon: tataAce,
    },
    {
      title: "Pickup 8ft",
      subtitle:
        "A strong and versatile choice for heavier deliveries. Ideal for B2B, hardware dealers, or shifting large loads across neighborhoods or towns.",
      capacity: "1000 – 1200 kg",
      deliveryTime: "Rs. 320",
      perfectFor: ["Cement Bags", "Home Shifting", "Shop Relocation"],
      icon: pickup,
    },
    {
      title: "Pickup 9ft",
      subtitle:
        "Spacious and sturdy for high-volume or medium-distance goods movement. Suits both commercial and semi-industrial logistics within and across cities.",
      capacity: "1500 – 1700 kg",
      deliveryTime: "Rs. 400",
      perfectFor: ["Retail Supply", "Heavy Appliances", "Carton Loads"],
      icon: pickup2,
    },
    {
      title: "Eicher 14ft",
      subtitle:
        "Traul's biggest carrier, ideal for large and heavy shipments over longer distances. Used by wholesalers, warehouses, event planners, and manufacturers.",
      capacity: "2000 – 3000 kg",
      deliveryTime: "Rs. 550",
      perfectFor: [
        "Bulk Wholesale Goods",
        "Event Equipment",
        "Long-Distance Supply",
      ],
      icon: eicher,
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

  // Animation variants for each service card
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

  // Animation variants for icon (scale up)
  const iconVariants = {
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

  // Animation variants for content (slide in from right)
  const contentVariants = {
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

  return (
    <div className="bg-black text-white pt-16 pb-16">
      <div className="w-full mx-auto">
        {/* Transport Services Cards */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {transportServices.map((service, index) => (
            <motion.div
              key={index}
              className={`pb-10 ${
                index < transportServices.length - 1
                  ? "border-b border-gray-700 mb-20"
                  : "mb-8"
              }`}
              variants={cardVariants}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
                {/* Left side - Title & Subtitle */}
                <motion.div className="lg:w-1/3" variants={titleVariants}>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-400">{service.subtitle}</p>
                </motion.div>

                {/* Middle section - Icon */}
                <motion.div
                  className="lg:w-1/3 flex justify-center"
                  variants={iconVariants}
                >
                  <motion.div
                    className="w-full max-w-lg h-32 overflow-hidden bg-gradient-to-r flex items-center justify-center shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* <span className="text-6xl">{service.icon}</span> */}
                    <img src={service.icon} alt="" className="w-40" />
                  </motion.div>
                </motion.div>

                {/* Right side - Service Details */}
                <motion.div className="lg:w-1/3" variants={contentVariants}>
                  <div className="space-y-4">
                    {/* Capacity and Delivery Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-blue-500/10 p-4 rounded-lg">
                        <p className="text-blue-400 text-sm font-medium mb-1">
                          Capacity
                        </p>
                        <p className="text-white font-bold">
                          {service.capacity}
                        </p>
                      </div>
                      <div className="bg-orange-500/10 p-4 rounded-lg">
                        <p className="text-orange-400 text-sm font-medium mb-1">
                          Price starts from
                        </p>
                        <p className="text-white font-bold">
                          {service.deliveryTime}
                        </p>
                      </div>
                    </div>

                    {/* Perfect For Section */}
                    <div>
                      <p className="text-white font-semibold mb-3">
                        Perfect for:
                      </p>
                      <div className="space-y-2">
                        {service.perfectFor.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            <p className="text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Orange accent dot */}
                  <motion.div
                    className="mt-6 flex items-center gap-3"
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
      </div>
    </div>
  );
};

export default DeliveryMethodsSection;
