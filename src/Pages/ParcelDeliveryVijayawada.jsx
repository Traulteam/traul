import React, { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  Clock,
  MapPin,
  FileText,
  Smartphone,
  CheckCircle,
  Building,
  Home,
  ShoppingBag,
  Users,
  Truck,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ParcelDeliveryVijayawada() {
  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    {
      icon: Package,
      title: "Same-Day Delivery",
      desc: "Across Vijayawada within hours",
    },
    {
      icon: Clock,
      title: "Quick Pickup",
      desc: "Within 30–60 minutes",
    },
    {
      icon: Smartphone,
      title: "Real-Time Tracking",
      desc: "Track your parcel live",
    },
    {
      icon: FileText,
      title: "Digital Invoicing",
      desc: "Instant receipts and invoices",
    },
    {
      icon: MapPin,
      title: "City-Wide Coverage",
      desc: "All major areas of Vijayawada",
    },
    {
      icon: CheckCircle,
      title: "Return Support",
      desc: "Exchange and return deliveries",
    },
  ];

  const parcelTypes = [
    {
      icon: FileText,
      title: "Office Documents",
      subtitle: "Contracts & Papers",
      desc: "Secure delivery of important documents",
    },
    {
      icon: Package,
      title: "Food Items",
      subtitle: "Perishables",
      desc: "Quick delivery of food parcels",
    },
    {
      icon: CheckCircle,
      title: "Medicines",
      subtitle: "Medical Kits",
      desc: "Urgent medicine delivery",
    },
    {
      icon: ShoppingBag,
      title: "Online Orders",
      subtitle: "eCommerce Returns",
      desc: "Package pickup and delivery",
    },
    {
      icon: Home,
      title: "Gifts",
      subtitle: "Personal Parcels",
      desc: "Special delivery for gifts",
    },
    {
      icon: Building,
      title: "Boutique Orders",
      subtitle: "Clothing Deliveries",
      desc: "Fashion and clothing parcels",
    },
  ];

  const userTypes = [
    { icon: Building, label: "Retail Shops and Wholesalers" },
    { icon: ShoppingBag, label: "Online Sellers (Instagram/Facebook)" },
    { icon: CheckCircle, label: "Doctors, Clinics, and Pharmacies" },
    { icon: Users, label: "Corporate Offices" },
    { icon: Home, label: "Students and Families" },
  ];

  const serviceAreas = [
    "Benz Circle",
    "Governorpet",
    "Krishna Lanka",
    "Patamata",
    "Moghalrajpuram",
    "One Town",
    "Auto Nagar",
    "Gollapudi",
    "Poranki",
    "Labbipet",
  ];

  const steps = [
    "Visit the Traul website or open the app",
    "Choose 'Parcel Delivery'",
    "Enter pickup and drop locations",
    "Mention parcel type and weight",
    "Confirm and pay online",
    "Track your delivery in real-time",
  ];

  const faqs = [
    {
      question: "What's the delivery time for parcels?",
      answer: "Most deliveries are completed within 2–4 hours based on distance and area.",
    },
    {
      question: "Is there a weight or size limit?",
      answer: "Yes. We support parcels up to 20 kg with standard dimensions. Larger loads may require mini truck booking.",
    },
    {
      question: "Do you offer return pickups?",
      answer: "Yes, return/exchange delivery is supported for sellers.",
    },
    {
      question: "Are fragile parcels handled carefully?",
      answer: "Yes. Please mark fragile items clearly and use appropriate packaging.",
    },
    {
      question: "Can I track my parcel live?",
      answer: "Absolutely. Every delivery is tracked via the Traul app.",
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
          Parcel Delivery in{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Vijayawada
          </span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mt-6 text-lg max-w-4xl text-gray-600"
        >
          Need to send a package across Vijayawada today? Traul offers fast and dependable parcel delivery services that are perfect for small businesses, online sellers, and individuals. Whether it's documents, food parcels, medical items, or eCommerce orders, our city-wide fleet ensures timely doorstep delivery anywhere in Vijayawada.
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mt-4 text-lg max-w-4xl text-gray-600"
        >
          With Traul, you avoid courier delays and last-minute delivery stress. Our local delivery model ensures pickup and drop within hours—even on the same day.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Same-Day Delivery
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Real-Time Tracking
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            City-Wide Coverage
          </div>
        </motion.div>
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
          Why Traul for Parcel Delivery in Vijayawada?
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

      {/* Parcel Types */}
      <section className="px-6 lg:px-20 py-20 bg-neutral-50">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        >
          What Kind of Parcels Can You Send?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {parcelTypes.map((parcel, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-400 to-red-400 text-white mb-4 mx-auto">
                <parcel.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-1">{parcel.title}</h3>
              <p className="text-orange-600 font-medium mb-3">{parcel.subtitle}</p>
              <p className="text-gray-600">{parcel.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* User Types */}
      <section className="px-6 lg:px-20 py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        >
          Who Uses Traul Parcel Delivery?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userTypes.map((item, idx) => (
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
              <span className="text-gray-700">{item.label}</span>
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
          Areas We Cover in Vijayawada
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-center text-gray-600 mb-10 max-w-3xl mx-auto"
        >
          Whether you need a parcel delivered to a home, business, or service center—we've got it covered.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-3">
          {serviceAreas.map((area, idx) => (
            <motion.span
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
              className="px-4 py-2 bg-neutral-100 rounded-full shadow text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors"
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
          How to Book Parcel Delivery with Traul
        </motion.h2>
        
        {/* Mobile: Cards in grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
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
            {/* Central Timeline Line */}
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
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-red-500 text-white font-bold text-lg shadow-lg absolute left-1/2 transform -translate-x-1/2 z-10">
                  {idx + 1}
                </div>
                
                {/* Content Card */}
                <div className={`relative bg-gradient-to-br from-white via-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:w-5/12 ${
                  idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  {/* Decorative Background Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-xl"></div>
                  
                  {/* Step Number Badge */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full mb-4 relative z-10">
                    {idx + 1}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Step {idx + 1}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg relative z-10">{step}</p>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Header */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                FAQ: Parcel Delivery in Vijayawada
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Have More Questions About Parcel Delivery Services?
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Contact Us
              </Link>
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
          Book Parcel Delivery Now
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="mb-8 max-w-2xl mx-auto text-lg text-orange-100"
        >
          Deliver parcels anywhere in Vijayawada within hours. Use Traul's parcel delivery service for speed, reliability, and full control over your logistics. Book now and relax—we'll take it from here.
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
