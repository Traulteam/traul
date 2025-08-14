import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Truck,
  Box,
  Clock,
  MapPin,
  Smartphone,
  FileText,
  Home,
  Refrigerator,
  WashingMachine,
  Tv,
  Utensils,
  Luggage,
  ArrowRight,
  Shield,
  Package,
  AirVent,
  Microwave,
  Disc,
  Battery,
  Store,
  Gift,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ApplianceMovingVijayawada() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set meta title and description
    document.title = "Appliance Moving in Vijayawada – Fridge, AC, TV, Washing Machine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Need to shift appliances? Get quick and safe delivery of fridges, washing machines, ACs, TVs, and more anywhere in Vijayawada. Same-day service available.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Need to shift appliances? Get quick and safe delivery of fridges, washing machines, ACs, TVs, and more anywhere in Vijayawada. Same-day service available.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Safe Handling for Heavy & Fragile Appliances",
      desc: "Trained staff for secure relocation of expensive appliances.",
    },
    {
      icon: Truck,
      title: "Mini Trucks with Shock-Absorbing Space",
      desc: "Suitable vehicles for safe transport within Vijayawada.",
    },
    {
      icon: Package,
      title: "Secured Loading with Straps and Pads",
      desc: "Prevents movement and damage during transit.",
    },
    {
      icon: Clock,
      title: "Same-Day Delivery Available",
      desc: "Fast turnaround for urgent appliance moves.",
    },
    {
      icon: Smartphone,
      title: "Real-Time Tracking via App",
      desc: "Monitor your delivery progress live.",
    },
    {
      icon: FileText,
      title: "Digital Invoice & Transparent Pricing",
      desc: "No hidden charges, GST billing available.",
    },
  ];

  const appliances = [
    { icon: Refrigerator, label: "Refrigerators" },
    { icon: WashingMachine, label: "Washing Machines" },
    { icon: Tv, label: "Televisions" },
    { icon: AirVent, label: "Air Conditioners" },
    { icon: Microwave, label: "Microwave Ovens" },
    { icon: Disc, label: "Dishwashers" },
    { icon: Battery, label: "Inverters & Batteries" },
  ];

  const useCases = [
    { icon: Home, label: "Shifting appliances during house relocation" },
    { icon: Store, label: "Transporting newly purchased appliances" },
    { icon: Wrench, label: "Sending appliances to service centers" },
    { icon: Gift, label: "Donating or gifting appliances" },
  ];

  const steps = [
    "Open Traul app or website",
    "Select 'Appliance Moving'",
    "Enter pickup and delivery locations",
    "Choose your appliance type and quantity",
    "Get an instant quote and confirm booking",
    "Track your delivery live",
  ];

  return (
    <div className="bg-neutral-50 text-gray-900">
      {/* Hero */}
      <section className="px-6 lg:px-20 pt-32 pb-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-300/20 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200/20 to-red-300/20 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
        
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-orange-600 font-medium">Professional Appliance Moving</span>
          </motion.div>
          
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Safe & Secure{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Appliance Moving
            </span>
            <br />
            in{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Vijayawada
            </span>
          </motion.h1>
          
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-8 text-xl max-w-4xl text-gray-600 leading-relaxed"
          >
            Professional appliance moving services for refrigerators, washing machines, 
            air conditioners, televisions, and more. Our trained team ensures safe, 
            damage-free transport of your valuable electronics and household appliances.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Damage Protection</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Same Day Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Smartphone className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Live Tracking</span>
            </div>
          </motion.div>
        </div>
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
          Why Traul for Appliance Moving?
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

      {/* Appliances We Move */}
      <section className="px-6 lg:px-20 py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Appliances We Move
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {appliances.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className="flex flex-col items-center text-center p-6 bg-neutral-100 rounded-xl hover:bg-neutral-200 transition"
            >
              <item.icon className="w-8 h-8 text-orange-500 mb-3" />
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
          Use Cases
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

      {/* Booking Steps Process */}
      <section className="px-6 lg:px-20 py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          How to Book Appliance Moving
        </motion.h2>
        
        {/* Process Steps Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
                className="group"
              >
                {/* Step Card */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Step Number Badge and Icon Container */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Step Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full group-hover:scale-105 transition-transform duration-300">
                      {idx + 1}
                    </div>
                    
                    {/* Step Icon */}
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-lg">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      Step {idx + 1}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step}
                    </p>
                  </div>
                  
                  {/* Subtle accent line */}
                  <div className="mt-4 pt-3 border-t border-gray-100 group-hover:border-orange-200 transition-colors duration-300"></div>
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
          Book Appliance Moving Now
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="mb-8 max-w-2xl mx-auto text-lg text-orange-100"
        >
          Don’t risk damaging your valuable appliances. Let us take care of your
          delivery safely and quickly.
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
