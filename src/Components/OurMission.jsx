import { motion } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";

function OurMission() {
  const missionPoints = [
    {
      icon: Target,
      title: "Clear Vision",
      description: "To become the most trusted logistics platform in India"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make prioritizes customer satisfaction"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Leveraging technology to solve real-world logistics challenges"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
              <span className="flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-4">
                Our <span className="text-orange-500">Mission</span>
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center lg:text-left">
                At Traul, our mission is to simplify logistics for businesses and
                individuals. We provide a seamless, reliable, and affordable
                platform to connect you with the right vehicles for your delivery
                needs.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed text-center lg:text-left">
                We believe that efficient logistics should be accessible to everyone, 
                from small businesses to large enterprises. Our technology-driven 
                approach ensures transparency, reliability, and cost-effectiveness 
                in every delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="flex-1 w-full lg:max-w-md"
          >
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
              <div className="space-y-6 sm:space-y-8">
                {missionPoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 sm:gap-4 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                          {point.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
