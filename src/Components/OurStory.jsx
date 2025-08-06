import { useEffect, useRef } from "react";
import { Truck, Users, MapPin, Award } from "lucide-react";

function OurStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .fade-in-animate {
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }

      .fade-in-animate.visible {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 fade-in-animate"
    >
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight font-bold">
              <span className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
                Our <span className="text-orange-500">Story</span>
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Founded with the goal of making logistics accessible to everyone,
              Traul started as a small idea to connect local businesses with
              delivery drivers.
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
              Today, we have grown into a comprehensive logistics platform,
              serving thousands of customers and empowering drivers to earn
              more. Our commitment to innovation and customer satisfaction
              continues to drive us forward.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    Fast Delivery
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    Team Work
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    Wide Coverage
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    Excellence
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
