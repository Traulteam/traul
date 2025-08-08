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

// Play Store Logo Component
const PlayStoreLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

// App Store Logo Component
const AppStoreLogo = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
  </svg>
);

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
              <Download className="w-4 h-4" />
              Get Started
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold mb-6 px-2">
              Download the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Traul
              </span>{" "}
              App
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 px-4">
              Your goods. Your city. Just a few taps away. Transform how you move goods in Vijayawada with our mobile-first logistics platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto"
              >
                <PlayStoreLogo className="w-5 h-5 sm:w-6 sm:h-6" />
                Google Play
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
              >
                <AppStoreLogo className="w-5 h-5 sm:w-6 sm:h-6" />
                App Store
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
                About <span className="text-orange-500">Traul</span>
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Traul is transforming how India moves — starting with Vijayawada. Whether you're a shopkeeper fulfilling customer orders, a household shifting appliances, or a trader moving stock between godowns — Traul brings convenience, speed, and transparency to your fingertips.
                </p>
                <p className="text-lg sm:text-xl font-medium text-gray-800">
                  No more calling random drivers. No more price guessing. No more waiting without updates.<br className="hidden sm:block" />
                  Just book, track, and deliver — all within one seamless app.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
                             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="/Delivery5.png" 
                   alt="Traul delivery service" 
                   className="w-full h-auto object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
               </div>
                             <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                 <Smartphone className="w-8 h-8 text-orange-500" />
               </div>
               <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                 <Truck className="w-8 h-8 text-orange-500" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Traul Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2">
              Why <span className="text-orange-500">Traul</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Experience the difference with our comprehensive features designed for modern logistics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyTraulFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Are We Available Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              Where Are We <span className="text-orange-500">Available</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We've launched first in Vijayawada, and are expanding rapidly across other Tier 2 and Tier 3 cities in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-red-50 p-6 sm:p-8 md:p-12 rounded-2xl border border-orange-200 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                From Benz Circle to Gannavaram — we cover it all.
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                Currently serving Vijayawada with plans to expand to more cities soon.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Can Use Traul Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              Who Can Use <span className="text-orange-500">Traul</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Whether it's a 1 km parcel drop or a city-wide delivery, Traul is built for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {whoCanUse.map((user, index) => (
              <motion.div
                key={user.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300">
                    <user.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{user.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{user.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
                Getting Started is <span className="text-orange-500">Easy</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Follow these simple steps to start using Traul for all your delivery needs
              </p>

              <div className="space-y-4 sm:space-y-6">
                <motion.ol 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4 sm:space-y-6"
                >
                  {gettingStartedSteps.map((step, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-4 sm:gap-6 bg-gradient-to-r from-gray-50 to-orange-50 p-4 sm:p-6 rounded-xl border border-orange-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-lg">
                        {index + 1}
                      </div>
                      <span className="text-base sm:text-lg text-gray-800 font-medium">{step}</span>
                    </motion.li>
                  ))}
                </motion.ol>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
                             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="/Delivery3.png" 
                   alt="Traul app interface" 
                   className="w-full h-auto object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
               </div>
                             <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                 <Download className="w-8 h-8 text-orange-500" />
               </div>
               <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                 <MapPin className="w-8 h-8 text-orange-500" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2">
              Download <span className="text-orange-500">Now</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Get the Traul app and start experiencing hassle-free logistics today
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 w-full sm:w-auto"
            >
              <PlayStoreLogo className="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="text-left">
                <div className="text-xs text-orange-200">GET IT ON</div>
                <div className="text-base sm:text-lg font-bold">Google Play</div>
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 w-full sm:w-auto"
            >
              <AppStoreLogo className="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="text-left">
                <div className="text-xs text-orange-200">Download on the</div>
                <div className="text-base sm:text-lg font-bold">App Store</div>
              </div>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
