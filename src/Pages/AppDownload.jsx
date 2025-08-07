import React from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Smartphone, 
  CheckCircle, 
  MapPin, 
  Users, 
  Truck, 
  Package, 
  Eye, 
  UserCheck, 
  PlusCircle, 
  CreditCard,
  ArrowRight,
  Play,
  Apple,
  Rocket,
  Target,
  Globe,
  Building2,
  Home,
  ShoppingBag,
  Briefcase,
  ListOrdered
} from "lucide-react";

const whyTraulFeatures = [
  { icon: Smartphone, title: "Instant Booking", desc: "Book a 2-wheeler or mini truck in seconds — no calls, no delays." },
  { icon: Eye, title: "Upfront Pricing", desc: "Get a clear estimate before you confirm. What you see is what you pay." },
  { icon: MapPin, title: "Live Tracking", desc: "Track your vehicle in real time from pickup to delivery." },
  { icon: UserCheck, title: "Verified Drivers", desc: "Reliable, local driver-partners trained for urban deliveries." },
  { icon: PlusCircle, title: "Add-on Services", desc: "Need help loading? Or packing material? Add services as you go." },
  { icon: CreditCard, title: "Multiple Payment Options", desc: "Cash, UPI, card — pay your way, every time." },
];

const whoCanUse = [
  { icon: Building2, title: "Small Business Owners", desc: "Fast delivery for goods, inventory, or equipment" },
  { icon: Home, title: "Families & Individuals", desc: "Move furniture, groceries, or appliances" },
  { icon: ShoppingBag, title: "Retailers & Traders", desc: "Reliable transport for bulk shipments" },
  { icon: Briefcase, title: "Enterprises", desc: "Scalable last-mile delivery for regular operations" },
];

const gettingStartedSteps = [
  "Download the Traul App using the links below",
  "Enter Pickup & Drop Location",
  "Choose Vehicle Type (2-Wheeler or Mini Truck)",
  "Add Helpers or Packing (if needed)",
  "Track Your Driver Live — and relax!",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AppDownload() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
        <div className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/30">
              Get Started
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
              <Download className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-4" />
              <br />
              Download the <span className="text-orange-200 drop-shadow-lg">Traul</span> App
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light px-2">
              Your goods. Your city. Just a few taps away.
            </p>
            
            <div className="flex justify-center">
              <div className="w-12 sm:w-16 h-1 bg-orange-300 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="max-w-3xl sm:max-w-4xl mx-auto space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <p>
              Traul is transforming how India moves — starting with Vijayawada. Whether you're a shopkeeper fulfilling customer orders, a household shifting appliances, or a trader moving stock between godowns — Traul brings convenience, speed, and transparency to your fingertips.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
              No more calling random drivers. No more price guessing. No more waiting without updates.<br className="hidden sm:block" />
              Just book, track, and deliver — all within one seamless app.
            </p>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Why Traul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 rounded-full text-blue-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 flex items-center justify-center gap-2 sm:gap-3">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-500" />
            Why Traul?
          </h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {whyTraulFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg sm:rounded-xl p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Where Are We Available */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-100 rounded-full text-green-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            Coverage Area
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-500" />
            Where Are We Available?
          </h2>
          <div className="max-w-2xl sm:max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-3 sm:mb-4">
              We've launched first in Vijayawada, and are expanding rapidly across other Tier 2 and Tier 3 cities in India.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
              From Benz Circle to Gannavaram — we cover it all.
            </p>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Who Can Use Traul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-purple-100 rounded-full text-purple-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            For Everyone
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
            <Package className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-500" />
            Who Can Use Traul?
          </h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {whoCanUse.map((user, index) => (
              <motion.div
                key={user.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg sm:rounded-xl p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300">
                    <user.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{user.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{user.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 mt-6 sm:mt-8">
            Whether it's a 1 km parcel drop or a city-wide delivery, Traul is built for you.
          </p>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-orange-100 rounded-full text-orange-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            Quick Start
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 flex items-center justify-center gap-2 sm:gap-3">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-500" />
            Getting Started is Easy:
          </h2>
          
          <div className="max-w-2xl sm:max-w-3xl mx-auto">
            <motion.ol 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 text-left"
            >
              {gettingStartedSteps.map((step, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg text-gray-700"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 text-xs sm:text-sm">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-red-100 rounded-full text-red-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            Download Now
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 flex items-center justify-center gap-2 sm:gap-3">
            <Download className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-red-500" />
            Download Now:
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-sm sm:text-lg font-semibold">Google Play</div>
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm sm:text-lg font-semibold">App Store</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
