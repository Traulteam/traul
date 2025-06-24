import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does traul offer?",
      answer:
        "Traul provides instant and scheduled goods transport services using 2-wheelers and mini trucks for both local and outstation deliveries across Andhra Pradesh.",
    },
    {
      question: "Do you support same-day delivery?",
      answer:
        "Yes, absolutely! Most local deliveries are completed within 1-2 hours of booking, making us perfect for urgent transport needs.",
    },
    {
      question: "⁠Can I track my delivery in real-time?",
      answer:
        "Yes, you can track your driver's location and delivery status in real-time through our app with live GPS updates and notifications.",
    },
    {
      question: "What types of goods can I transport?",
      answer:
        "We transport all legal and safe goods including groceries, appliances, furniture, electronics, agricultural products, documents, and business inventory.",
    },
    {
      question: "Are your drivers background-verified?",
      answer:
        "Yes, all our drivers undergo comprehensive background verification, ID checks, vehicle inspection, and professional onboarding before joining our platform.",
    },
    {
      question: "Do you provide intercity/outstation services?",
      answer:
        "Yes, we cover trips up to 200 km radius from your pickup location, connecting Vijayawada, Guntur, Bhimavaram, and surrounding areas..",
    },
    {
      question: "Can I schedule deliveries for later?",
      answer:
        "Absolutely! Traul supports advance scheduling for both business and personal deliveries, allowing you to plan your logistics ahead of time.",
    },
    {
      question: "How is pricing calculated?",
      answer:
        "Our transparent pricing is based on distance, vehicle type, and optional waiting time. You'll see the exact estimate before confirming your booking",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Header */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              FAQ: Find Answers to Your Queries and Explore Common Solutions
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Have a More Question About the Logistics Services
            </p>
            <Link to={"/contact-us"}>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Let us Know
              </button>
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
  );
};

export default FAQ;
