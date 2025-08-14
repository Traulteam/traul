import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router";
import { motion } from "framer-motion";
import {
  Truck,
  MapPin,
  Clock,
  Shield,
  Users,
  Package,
  Route,
  Phone,
  Download,
  ArrowRight,
  Building2,
  Wrench,
  Home,
  Plane,
  Train,
} from "lucide-react";

import bike from '/bik-01.svg'

function VijayawadaBookingPage() {
  const location = useLocation();
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .fade-in-animate {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
      }

      .fade-in-animate.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .stagger-1 { transition-delay: 0.1s; }
      .stagger-2 { transition-delay: 0.2s; }
      .stagger-3 { transition-delay: 0.3s; }
      .stagger-4 { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  // Handle anchor link scrolling when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [location.hash]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const vehicles = [
    {
      name: "2-Wheeler & Mini Truck",
      capacity: "up to ~800 kg",
      price: "₹200+",
      ideal: "Fast deliveries and medium loads",
      icon: "🛵",
      description: "Book 2-wheeler & mini truck in seconds. Fast, affordable, and trackable delivery services across Vijayawada and beyond.",
    },
    {
      name: "Three-Wheeler",
      capacity: "up to ~500 kg",
      price: "₹150+",
      ideal: "Market runs and small loads",
      icon: "🛺",
      description: "Perfect for fast, city-wide deliveries of lightweight items. Ideal for businesses needing quick dispatch of parcels.",
    },
    {
      name: "Mini Truck",
      capacity: "700-800 kg",
      price: "₹270+",
      ideal: "Medium consignments",
      icon: "🚚",
      description: "Reliable and spacious enough for moderate loads. Perfect for shops, construction sites, and home shifting needs.",
    },
    {
      name: "Extended Pickup (8 ft)",
      capacity: "up to ~1.25 tonnes",
      price: "₹320+",
      ideal: "Household items, small office moves",
      icon: "🚛",
      description: "A strong and versatile choice for heavier deliveries. Ideal for B2B, hardware dealers, or shifting large loads.",
    },
    {
      name: "Large Pickup (12-14 ft)",
      capacity: "2-3 tonnes",
      price: "₹550+",
      ideal: "Bulkier goods and heavier loads",
      icon: "🚚",
      description: "Traul's biggest carrier, ideal for large and heavy shipments over longer distances. Used by wholesalers and manufacturers.",
    },
  ];

  const areas = [
    "One Town",
    "Benz Circle",
    "Governorpet",
    "Auto Nagar",
    "Gollapudi",
    "Satyanarayanapuram",
    "Eluru Road",
    "Kankipadu",
    "Gannavaram",
    "Gunadala",
    "Patamata",
  ];

  const routes = [
    {
      route: "One Town ↔ Benz Circle",
      description: "Busy commercial corridor",
      icon: Building2,
    },
    {
      route: "Governorpet ↔ Auto Nagar",
      description: "Ideal for traders and mechanics",
      icon: Wrench,
    },
    {
      route: "Gollapudi ↔ Eluru Road",
      description: "Connecting residential and wholesale zones",
      icon: Home,
    },
    {
      route: "Gannavaram Airport ↔ City Centre",
      description: "Airport pickups and deliveries",
      icon: Plane,
    },
    {
      route: "Vijayawada Railway Station ↔ Anywhere",
      description: "Last-mile transport for travellers",
      icon: Train,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Transparent Pricing",
      description: "See the cost upfront, so you can budget easily",
    },
    {
      icon: Users,
      title: "Local Verified Drivers",
      description:
        "Our driver-partners navigate busy streets and tight lanes with ease",
    },
    {
      icon: MapPin,
      title: "Live Tracking & Support",
      description: "Follow your vehicle on the map and reach us anytime",
    },
    {
      icon: Package,
      title: "Optional Helpers & Packaging",
      description: "Add manpower or boxes when you need them",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Day or night, we've got vehicles ready",
    },
  ];

  const bookingSteps = [
    {
      step: 1,
      title: "Open the Traul app",
      description: "Choose 'Book a Truck' from the main menu",
    },
    {
      step: 2,
      title: "Enter addresses",
      description: "Add pickup & drop locations; include stops if needed",
    },
    {
      step: 3,
      title: "Select vehicle",
      description: "Choose based on your load size and requirements",
    },
    {
      step: 4,
      title: "Get instant pricing",
      description: "See the cost upfront with no hidden charges",
    },
    {
      step: 5,
      title: "Confirm & track",
      description: "Book your ride and track your driver in real-time",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
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
              <MapPin className="w-4 h-4" />
              Vijayawada City
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold mb-6 px-2">
              Mini Truck Booking in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Vijayawada
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 px-4">
              Moving goods around Vijayawada shouldn't be a headache. With Traul,
              you can book a mini truck or tempo in a couple of taps and get your
              delivery sorted—whether you're a shop owner in Governorpet or a
              household shifting furniture across town.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact-us"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:w-5" />
                </Link>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download App
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section
        id="vehicle-options"
        ref={addToRefs}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2">
              Vehicle <span className="text-orange-500">Options</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Choose the right vehicle for your needs, from small market runs to
              heavy-duty transport
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center sm:justify-start">
                    {vehicle.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{vehicle.name}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">{vehicle.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div className="bg-blue-500/10 p-3 sm:p-4 rounded-lg border border-blue-500/20">
                        <p className="text-blue-400 text-xs sm:text-sm font-medium mb-1">Capacity</p>
                        <p className="text-white font-bold text-sm sm:text-base">{vehicle.capacity}</p>
                      </div>
                      <div className="bg-orange-500/10 p-3 sm:p-4 rounded-lg border border-orange-500/20">
                        <p className="text-orange-400 text-xs sm:text-sm font-medium mb-1">Price starts from</p>
                        <p className="text-white font-bold text-sm sm:text-lg">{vehicle.price}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-white font-semibold mb-2 text-sm sm:text-base">Perfect for:</p>
                      <p className="text-gray-400 text-sm sm:text-base">{vehicle.ideal}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section
        ref={addToRefs}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              Areas We <span className="text-orange-500">Serve</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We cover all major areas in Vijayawada and surrounding regions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-transparent hover:border-orange-200 group"
              >
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{area}</p>
              </motion.div>
            ))}
          </div>
          
                     <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             viewport={{ once: true }}
             className="text-center text-gray-600 mt-8 px-4 text-sm sm:text-base"
           >
             We're continually adding more neighbourhoods based on demand
           </motion.p>
        </div>
      </section>

      {/* Popular Routes */}
      <section
        ref={addToRefs}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              Popular <span className="text-orange-500">Routes</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Frequently traveled routes with optimized delivery times
            </p>
          </motion.div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
             {routes.map((route, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -5 }}
                 className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 group"
               >
                 <route.icon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                 <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{route.route}</h3>
                 <p className="text-gray-600 text-sm sm:text-base">{route.description}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* How to Book */}
      <section
        ref={addToRefs}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-orange-500 to-red-500 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
              How to <span className="text-orange-100">Book</span>
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto px-4">
              Get your vehicle booked in just 5 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                                 <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-orange-500 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   {step.step}
                 </div>
                 <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-orange-100">{step.title}</h3>
                 <p className="text-orange-200 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Traul Features */}
      <section
        ref={addToRefs}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              Why Choose <span className="text-orange-500">Traul?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Experience the difference with our comprehensive service features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 sm:w-14 sm:h-14 text-orange-500 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section
        ref={addToRefs}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
              More Than Local <span className="text-orange-500">Delivery</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive transport solutions for all your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Truck,
                title: "Intercity Transport",
                description: "Need to send goods to Guntur or Krishna district? We've got you covered with reliable intercity transport services.",
              },
              {
                icon: Package,
                title: "Packers & Movers",
                description: "Moving home? Our partner teams can handle the packing, loading and unloading with professional care.",
              },
              {
                icon: Users,
                title: "Business Deliveries",
                description: "Ideal for e-commerce sellers, retailers and wholesalers who need regular dispatches and reliable logistics.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-orange-100"
              >
                <service.icon className="w-12 h-12 sm:w-14 sm:h-14 text-orange-500 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={addToRefs}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-900 to-black text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Move?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 px-4">
              Whether you're transporting shop inventory, shifting appliances, or
              running a small business, Traul makes goods transport in Vijayawada
              simple and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/download"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:w-5" />
                  Download Traul App
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact-us"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default VijayawadaBookingPage;
