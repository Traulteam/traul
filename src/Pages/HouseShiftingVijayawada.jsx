import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Truck,
  Box,
  Clock,
  MapPin,
  Smartphone,
  FileText,
  BedDouble,
  Sofa,
  Table,
  Refrigerator,
  WashingMachine,
  Tv,
  Utensils,
  Luggage,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HouseShiftingVijayawada() {
  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    {
      icon: Home,
      title: "Tailored for Local Moves",
      desc: "Within-city relocation specialists",
    },
    {
      icon: Truck,
      title: "Wide Vehicle Range",
      desc: "From small tempos to larger carriers",
    },
    {
      icon: Box,
      title: "Safe Transport",
      desc: "Fragile and heavy items handled with care",
    },
    { icon: Clock, title: "On-Time Service", desc: "We value your time" },
    {
      icon: MapPin,
      title: "City-Wide Coverage",
      desc: "Every major colony and residential area",
    },
    {
      icon: Smartphone,
      title: "Live Tracking",
      desc: "Know where your goods are in real time",
    },
    {
      icon: FileText,
      title: "Digital Invoice",
      desc: "Instant billing for clarity",
    },
  ];

  const useCases = [
    { icon: Home, label: "Family home relocation" },
    { icon: Luggage, label: "Student hostel shifting" },
    { icon: Box, label: "Individual shifting to/from rental apartments" },
    { icon: Sofa, label: "Moving household appliances & furniture" },
  ];

  const whatWeMove = [
    { icon: BedDouble, label: "Beds, mattresses, sofas, dining tables" },
    { icon: Refrigerator, label: "Refrigerators, washing machines, TVs" },
    {
      icon: Utensils,
      label: "Kitchen utensils, storage containers, wardrobes",
    },
    { icon: Luggage, label: "Packed boxes, suitcases, electronics" },
  ];

  const serviceAreas = [
    "Patamata",
    "Moghalrajpuram",
    "Labbipet",
    "Benz Circle",
    "Bhavanipuram",
    "Gollapudi",
    "Poranki",
    "Enikepadu",
    "Governorpet",
    "K P Nagar",
  ];

  const steps = [
    "Visit the Traul app or website",
    "Select 'House Shifting' option",
    "Choose your pickup and drop address",
    "Select vehicle type based on household size",
    "Confirm booking and track vehicle live",
  ];

  const faqs = [
    {
      question: "Do you provide packing services?",
      answer:
        "Currently, we provide vehicle and transport. If packing is needed, we can connect you with third-party helpers.",
    },
    {
      question: "What size of truck is suitable for a 2BHK move?",
      answer:
        "A medium-sized closed-body mini truck is generally ideal. Our app helps you choose the right vehicle.",
    },
    {
      question: "Can I schedule a move for a later date?",
      answer: "Yes, Traul allows advance booking for house shifting jobs.",
    },
    {
      question: "Are your drivers trained to handle household goods?",
      answer: "Yes, we assign drivers experienced in domestic relocations.",
    },
    {
      question: "What if there are stairs or no elevator?",
      answer:
        "You may need to arrange manual labour separately, but our driver will assist with loading/unloading to vehicle.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-neutral-50 text-gray-900">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
        >
          House Shifting Services in{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Vijayawada
          </span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mt-6 text-lg max-w-3xl text-gray-600"
        >
          Planning to shift your house in Vijayawada? Traul offers reliable and
          professional house shifting services to make your move smooth, safe,
          and stress-free.
        </motion.p>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 lg:px-20 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-14"
        >
          Why Choose Traul for House Shifting in Vijayawada?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-400 to-red-400 text-white mb-5">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 lg:px-20 py-20 bg-neutral-50">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        >
          House Shifting Use Cases
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-400 to-red-400 text-white mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-gray-700">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Move */}
      <section className="px-6 lg:px-20 py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          What Can You Move with Traul?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeMove.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className="flex items-center gap-4 p-5 bg-neutral-100 rounded-xl hover:bg-neutral-200 transition"
            >
              <item.icon className="w-6 h-6 text-orange-500" />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="px-6 lg:px-20 py-20 bg-neutral-50">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        >
          Service Areas Covered
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3">
          {serviceAreas.map((area, idx) => (
            <motion.span
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className="px-4 py-2 bg-white rounded-full shadow text-sm"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Booking Steps Timeline */}
      <section className="px-6 lg:px-20 py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        >
          How to Book House Shifting
        </motion.h2>
        <div className="max-w-6xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-red-400 hidden md:block transform -translate-x-1/2"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className={`flex flex-col md:flex-row items-center mb-16 md:mb-8 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-red-500 text-white font-bold text-lg shadow-lg relative z-10 mx-auto md:mx-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                {idx + 1}
              </div>

              {/* Content Card */}
              <div
                className={`relative bg-gradient-to-br from-white via-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:w-5/12 ${
                  idx % 2 === 0 ? "md:ml-8" : "md:mr-8"
                }`}
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-xl"></div>

                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full mb-4 relative z-10">
                  {idx + 1}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  Step {idx + 1}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                  {step}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
              </div>

              {/* Mobile Connecting Line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-orange-400 to-red-400 md:hidden"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Header */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                FAQ: Find Answers to Your House Shifting Queries
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Have More Questions About House Shifting Services?
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Contact Us
              </button>
            </div>

            {/* Right Side - FAQ Items */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-orange-500/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/30 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="text-white font-medium text-lg pr-4 transition-colors duration-200">
                      {faq.question}
                    </span>
                    <motion.div
                      className="flex-shrink-0"
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="px-6 pb-6"
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent mb-4"></div>
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-24 bg-gradient-to-br from-orange-500 to-red-500 text-white text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Book Your House Shift Now
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="mb-8 max-w-2xl mx-auto text-lg text-orange-100"
        >
          No more shifting stress. Traul makes local house relocation in
          Vijayawada quick, affordable, and efficient.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-full bg-white text-orange-600 font-semibold shadow-lg"
        >
          Book Now
        </motion.button>
      </section>
    </div>
  );
}
