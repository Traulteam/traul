import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Clock,
  Smartphone,
  FileText,
  Wrench,
  Sofa,
  BedDouble,
  Table,
  Armchair,
  BookOpen,
  Gift,
  Home,
  Store,
  Recycle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function FurnitureTransportVijayawada() {
  const features = [
    {
      icon: Sofa,
      title: "Handles All Furniture Types",
      desc: "Sofas, beds, wardrobes, shelves, tables and more.",
    },
    {
      icon: Package,
      title: "Safe Loading & Strapping",
      desc: "Prevents shifting or damage during transit.",
    },
    {
      icon: Truck,
      title: "Appropriate Vehicles",
      desc: "Mini trucks matched to your furniture size & quantity.",
    },
    {
      icon: Smartphone,
      title: "Live Tracking",
      desc: "Track your load in real time.",
    },
    {
      icon: FileText,
      title: "Instant Invoice",
      desc: "Transparent pricing with tax invoice.",
    },
    {
      icon: Wrench,
      title: "Support for Dismantled Items",
      desc: "We can carry pre-packed or dismantled furniture.",
    },
  ];

  const furnitureTypes = [
    { icon: Sofa, label: "Single/double/triple-seater sofas" },
    { icon: BedDouble, label: "King/queen size beds and cots" },
    { icon: Table, label: "Dining sets, coffee tables" },
    { icon: Armchair, label: "Office chairs, desks, cabinets" },
    { icon: BookOpen, label: "Cupboards, book racks, shoe stands" },
  ];

  const useCases = [
    { icon: Store, label: "Delivering store-bought furniture to home" },
    { icon: Home, label: "Shifting household furniture to a new place" },
    {
      icon: Recycle,
      label: "Sending second-hand furniture to another location",
    },
    { icon: Gift, label: "Donating furniture to NGOs or relatives" },
  ];

  const steps = [
    "Open Traul app or website",
    "Choose 'Furniture Transport'",
    "Select pickup and drop address",
    "Choose type and size of vehicle",
    "Confirm booking and track live",
  ];

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
          Furniture Transport in{" "}
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
          Need to move a sofa, bed, or dining table across Vijayawada? We
          provide fast, safe, and affordable transport services for all types of
          furniture.
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
          Why Traul for Furniture Transport?
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

      {/* Furniture Types */}
      <section className="px-6 lg:px-20 py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Types of Furniture We Transport
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {furnitureTypes.map((item, idx) => (
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

      {/* Use Cases */}
      <section className="px-6 lg:px-20 py-20 bg-neutral-50">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        >
          Service Use Cases
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

      {/* Booking Steps Timeline */}
      <section className="px-6 lg:px-20 py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          Booking Process Timeline
        </motion.h2>
        
        {/* Mobile: Cards in grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-xl"></div>
              
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full mb-4 relative z-10">
                {idx + 1}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">
                Step {idx + 1}
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">{step}</p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop: Original Timeline */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-red-400 transform -translate-x-1/2"></div>

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-red-500 text-white font-bold text-lg shadow-lg absolute left-1/2 transform -translate-x-1/2 z-10">
                  {idx + 1}
                </div>

                {/* Content */}
                <div
                  className={`md:w-5/12 ${
                    idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="bg-gradient-to-br from-white via-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-xl"></div>

                    {/* Step number badge */}
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full mb-4 relative z-10">
                      {idx + 1}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                      Step {idx + 1}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                      {step}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
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
          Book Furniture Transport Now
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="mb-8 max-w-2xl mx-auto text-lg text-orange-100"
        >
          Avoid the headache of moving furniture yourself. Let Traul handle it
          with professional care and city-wide coverage.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/contact-us"
            className="px-8 py-3 rounded-full bg-white text-orange-600 font-semibold shadow-lg inline-block"
          >
            Book Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
