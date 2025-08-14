import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Monitor,
  Truck,
  Clock,
  Smartphone,
  FileText,
  Boxes,
  Armchair,
  Printer,
  Folder,
  LayoutGrid,
  Users,
  Briefcase,
  Building2,
  Stethoscope,
  User,
  MapPin,
} from "lucide-react";

export default function OfficeShiftingVijayawada() {
  const features = [
    {
      icon: Monitor,
      title: "Safe Handling of IT Equipment",
      desc: "Secure relocation of desktops, laptops, and monitors.",
    },
    {
      icon: Truck,
      title: "Right Vehicle for the Load",
      desc: "Mini trucks or medium carriers based on your requirements.",
    },
    {
      icon: Clock,
      title: "Flexible Time Slots",
      desc: "Pickup scheduling that suits your business hours.",
    },
    {
      icon: Smartphone,
      title: "Live Tracking",
      desc: "Track your shipment in real time with instant updates.",
    },
    {
      icon: FileText,
      title: "GST Invoices",
      desc: "Digital invoices for all corporate accounts.",
    },
    {
      icon: Boxes,
      title: "Coordinated Loading & Unloading",
      desc: "Efficient handling of furniture, files, and office supplies.",
    },
  ];

  const whatWeMove = [
    { icon: Armchair, label: "Office chairs, tables, cabinets" },
    { icon: Monitor, label: "Desktops, laptops, monitors" },
    { icon: Printer, label: "Printers, routers, modems" },
    { icon: Folder, label: "Files, stationery, boxed documents" },
    { icon: LayoutGrid, label: "Partitions, whiteboards, and more" },
  ];

  const whoFor = [
    { icon: Building2, label: "Coworking spaces shifting to new buildings" },
    { icon: Briefcase, label: "Marketing & IT agencies relocating teams" },
    { icon: Stethoscope, label: "Clinics, service centers, and shops" },
    {
      icon: User,
      label: "Freelancers or solopreneurs shifting to new offices",
    },
  ];

  const processSteps = [
    {
      icon: Smartphone,
      text: "Visit the app or website and select 'Office Shifting'",
    },
    { icon: MapPin, text: "Choose pickup and destination addresses" },
    { icon: Boxes, text: "Enter estimated number of items or boxes" },
    { icon: Truck, text: "Choose vehicle size (based on your inventory)" },
    { icon: Clock, text: "Confirm time slot & book instantly" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-neutral-50 text-gray-900">
      {/* Hero */}
      <section className="px-6 lg:px-20 pt-32 pb-24 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Office Shifting Services in{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Vijayawada
          </span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mt-6 text-lg max-w-2xl text-gray-600"
        >
          Professional and efficient office shifting services tailored for
          startups, SMEs, and enterprises. From furniture to IT equipment, we
          relocate your office securely and without disrupting your workflow.
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
          Why Choose Our Service?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
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

      {/* What We Move */}
      <section className="px-6 lg:px-20 py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          What We Move
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

      {/* Who Is It For */}
      <section className="px-6 lg:px-20 py-20 bg-neutral-50">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        >
          Who Is It For?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whoFor.map((item, idx) => (
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
          How to Book an Office Shift
        </motion.h2>
        
                 {/* Process Steps Grid */}
         <div className="max-w-5xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {processSteps.map((step, idx) => (
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
                         <step.icon className="w-5 h-5" />
                       </div>
                     </div>
                   
                   {/* Step Content */}
                   <div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                       Step {idx + 1}
                     </h3>
                     <p className="text-gray-600 leading-relaxed text-sm">
                       {step.text}
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
          Make Your Office Move Stress-Free
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="mb-8 max-w-2xl mx-auto text-lg text-orange-100"
        >
          Book office shifting services in Vijayawada today and relocate without
          disrupting your business.
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
