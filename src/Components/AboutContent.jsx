import { CheckCircle, Smartphone, MapPin, Users, Truck, Package, Eye, UserCheck, Clock, PlusCircle, Globe, Target, Heart, Rocket, Building2, Home, ShoppingBag, Briefcase, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Smartphone, title: "Instant Booking", desc: "Schedule a delivery in a few taps—no calls, no back and forth." },
  { icon: Eye, title: "Upfront Pricing", desc: "Know what you'll pay before you confirm." },
  { icon: UserCheck, title: "Verified Drivers", desc: "Reliable professionals who navigate Vijayawada's lanes with ease." },
  { icon: MapPin, title: "Live Tracking", desc: "Follow your driver in real time through the app." },
  { icon: PlusCircle, title: "Add Helpers or Packing", desc: "Optional support when you need it most." },
  { icon: CreditCard, title: "Multiple Payment Options", desc: "Cash, UPI, card — pay your way, every time." },
];

const whoWeServe = [
  { icon: Building2, title: "Shop Owners", desc: "Delivering to customers" },
  { icon: Home, title: "Households", desc: "Shifting appliances" },
  { icon: ShoppingBag, title: "Traders", desc: "Dispatching goods across town" },
  { icon: Briefcase, title: "Businesses", desc: "Managing daily dispatches" },
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

export default function AboutContent() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* About Traul Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-orange-100 rounded-full text-orange-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              About <span className="text-orange-500">Traul</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                At Traul, we're building a smarter way to move goods—starting with the vibrant city of Vijayawada.
              </p>
              <p>
                Every day, shopkeepers, households, and traders struggle to find reliable mini truck or tempo services. Prices fluctuate, drivers are hard to reach, and delays are common. We knew there had to be a better way.
              </p>
              <p>
                So we created <span className="font-semibold text-orange-500">Traul</span> — a mobile-first logistics platform that lets you book 2-wheelers or mini trucks instantly, with transparent pricing, live tracking, and local driver-partners who understand your routes.
              </p>
              <p className="text-lg sm:text-xl font-medium text-gray-800">
                We're not just moving goods. We're moving the entire logistics experience forward — one delivery at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2">
              What Makes Us <span className="text-orange-500">Different</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Experience the difference with our comprehensive features designed for modern logistics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
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

      {/* Our Vision Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              Our <span className="text-orange-500">Vision</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              To build the most reliable, affordable, and tech-driven logistics platform for India's next billion
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
                Starting from Tier 2 cities like Vijayawada
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                We're expanding rapidly to serve every corner of India, bringing modern logistics to where it's needed most.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              Who We <span className="text-orange-500">Serve</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Whether you're a shop owner, household, trader, or business — Traul is built for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {whoWeServe.map((user, index) => (
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

      {/* Our First Stop Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              Our First Stop: <span className="text-orange-500">Vijayawada</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We've launched in Vijayawada and are quickly expanding to serve every corner
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
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                From One Town to Gannavaram
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                More cities coming soon. We're just getting started — and we're excited to have you with us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2">
              Join the <span className="text-orange-500">Movement</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Download the Traul app, book your first ride, and see how easy local logistics can be
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 md:p-12 rounded-2xl border border-gray-700 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                We're just getting started
              </h3>
              <p className="text-base sm:text-lg text-gray-300">
                And we're excited to have you with us. Experience the future of logistics today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
