import { motion } from "framer-motion";
import { Truck, Users, MapPin, Award, TrendingUp, Heart } from "lucide-react";

function OurStory() {
  const milestones = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Lightning-fast logistics across the city",
      color: "bg-orange-500",
    },
    {
      icon: Users,
      title: "Team Work",
      description: "Collaborative approach to success",
      color: "bg-blue-500",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Extensive network across regions",
      color: "bg-green-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning service quality",
      color: "bg-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Consistent expansion and improvement",
      color: "bg-red-500",
    },
    {
      icon: Heart,
      title: "Care",
      description: "Customer-centric approach",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center lg:text-left mb-10 lg:mb-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold mb-6 sm:mb-8 text-center lg:text-left">
              <span className="flex flex-col sm:flex-row items-center lg:justify-start gap-2 sm:gap-4">
                Our <span className="text-orange-500">Story</span>
              </span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center lg:text-left">
                Founded with the goal of making logistics accessible to everyone,
                Traul started as a small idea to connect local businesses with
                delivery drivers in Vijayawada.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed text-center lg:text-left">
                Today, we have grown into a comprehensive logistics platform,
                serving thousands of customers and empowering drivers to earn
                more. Our commitment to innovation and customer satisfaction
                continues to drive us forward.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed text-center lg:text-left">
                From humble beginnings to becoming a trusted name in transportation, 
                our journey has been marked by continuous learning, adaptation, 
                and an unwavering focus on delivering value to our community.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="lg:mt-0"
          >
            <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-orange-200/50">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className={`${milestone.color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2 leading-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center">
                        {milestone.description}
                      </p>
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

export default OurStory;
