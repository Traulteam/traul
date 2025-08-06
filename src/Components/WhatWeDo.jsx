import { motion } from "framer-motion";
import { Truck, Users, Handshake, Shield, Clock, Globe } from "lucide-react";

function WhatWeDo() {
  const cards = [
    {
      id: 1,
      title: "Fast & Reliable",
      description:
        "Our network of verified drivers ensures your goods are delivered quickly and safely to their destination with real-time tracking.",
      icon: Truck,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      id: 2,
      title: "For Everyone",
      description:
        "From small personal items to large enterprise logistics, our platform is designed to cater to all delivery needs and budgets.",
      icon: Users,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
    },
    {
      id: 3,
      title: "Trusted Partnerships",
      description:
        "We build strong relationships with our drivers and customers, fostering a community built on trust and mutual success.",
      icon: Handshake,
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
    },
    {
      id: 4,
      title: "Secure & Safe",
      description:
        "Your goods are protected with comprehensive insurance coverage and secure handling throughout the delivery process.",
      icon: Shield,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      id: 5,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support ensures you're never alone. Get help whenever you need it, day or night.",
      icon: Clock,
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
    },
    {
      id: 6,
      title: "Wide Coverage",
      description:
        "Extensive network covering multiple cities and routes, making us your go-to partner for all transportation needs.",
      icon: Globe,
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold mb-4 sm:mb-6 md:mb-8">
            <span className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              What <span className="text-orange-500">We Do</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-2">
            We leverage cutting-edge technology to provide on-demand delivery services, 
            making it easier than ever to move goods efficiently and reliably.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${card.bgGradient} p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 group`}
              >
                <div className={`bg-gradient-to-r ${card.gradient} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
