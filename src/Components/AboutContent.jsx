import { CheckCircle, Smartphone, MapPin, Users, Truck, Package, Eye, UserCheck, Clock, PlusCircle, Globe, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Smartphone, title: "Instant Booking", desc: "Schedule a delivery in a few taps—no calls, no back and forth." },
  { icon: Eye, title: "Upfront Pricing", desc: "Know what you'll pay before you confirm." },
  { icon: UserCheck, title: "Verified Drivers", desc: "Reliable professionals who navigate Vijayawada's lanes with ease." },
  { icon: MapPin, title: "Live Tracking", desc: "Follow your driver in real time through the app." },
  { icon: PlusCircle, title: "Add Helpers or Packing", desc: "Optional support when you need it most." },
];

const whoWeServe = [
  "A shop owner delivering to customers",
  "A household shifting appliances",
  "A trader dispatching goods across town",
  "A business managing daily dispatches",
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        
        {/* About Traul Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-3 bg-orange-100 rounded-full text-orange-700 font-medium text-sm mb-6">
            Our Journey
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            About <span className="text-orange-500">Traul</span>
          </h1>
          <div className="max-w-4xl mx-auto space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
            <p>
              At Traul, we're building a smarter way to move goods—starting with the vibrant city of Vijayawada.
            </p>
            <p>
              Every day, shopkeepers, households, and traders struggle to find reliable mini truck or tempo services. Prices fluctuate, drivers are hard to reach, and delays are common. We knew there had to be a better way.
            </p>
            <p>
              So we created <span className="font-semibold text-orange-500">Traul</span> — a mobile-first logistics platform that lets you book 2-wheelers or mini trucks instantly, with transparent pricing, live tracking, and local driver-partners who understand your routes.
            </p>
            <p className="text-xl font-medium text-gray-800">
              We're not just moving goods. We're moving the entire logistics experience forward — one delivery at a time.
            </p>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-6">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">What Makes Us Different</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 md:p-8 border border-gray-100 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <f.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-green-100 rounded-full text-green-700 font-medium text-sm mb-6">
            Future Vision
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">🌍 Our Vision</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              To build the most reliable, affordable, and tech-driven logistics platform for India's next billion — starting from Tier 2 cities like Vijayawada.
            </p>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Who We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-purple-100 rounded-full text-purple-700 font-medium text-sm mb-6">
            Our Customers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">💼 Who We Serve</h2>
          <p className="text-lg text-gray-700 mb-8">Whether you're:</p>
          <div className="max-w-2xl mx-auto">
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {whoWeServe.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-gray-700 text-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-lg font-medium text-gray-800 mt-8">Traul is built for you.</p>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Our First Stop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-red-100 rounded-full text-red-700 font-medium text-sm mb-6">
            Current Focus
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">📍 Our First Stop: Vijayawada</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              We've launched in Vijayawada and are quickly expanding to serve every corner—from One Town to Gannavaram. More cities coming soon.
            </p>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>

        {/* Join the Movement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-6 py-3 bg-orange-100 rounded-full text-orange-700 font-medium text-sm mb-6">
            Get Started
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">📲 Join the Movement</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Download the Traul app, book your first ride, and see how easy local logistics can be.
            </p>
            <p className="text-xl font-medium text-gray-800">
              We're just getting started — and we're excited to have you with us.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
