import { useEffect, useRef } from "react";
import { Package, Shield, Headphones, Clock } from "lucide-react";

function DeliveryLogistics() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Real-Time Tracking",
      description:
        "Track your delivery from pickup to drop-off with live GPS updates",
      icon: Package,
      iconColor: "text-blue-600",
      backgroundColor: "bg-blue-50",
      category: "tracking",
    },
    {
      id: 2,
      title: "Verified Drivers",
      description:
        "All drivers undergo background verification and vehicle inspection",
      icon: Shield,
      iconColor: "text-red-500",
      backgroundColor: "bg-red-50",
      category: "security",
    },
    {
      id: 3,
      title: "24/7 Support",
      description:
        "Local support in Telugu and English wherever you need assistance",
      icon: Headphones,
      iconColor: "text-green-600",
      backgroundColor: "bg-green-50",
      category: "support",
    },
    {
      id: 4,
      title: "Same-day Delivery",
      description:
        "Fast delivery with most local trips complete within 1-2 hours",
      icon: Clock,
      iconColor: "text-purple-600",
      backgroundColor: "bg-purple-50",
      category: "speed",
    },
  ];

  useEffect(() => {
    // Add CSS styles to document head
    const style = document.createElement("style");
    style.textContent = `
      .fade-up-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .fade-up-animate.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .fade-left-animate {
        opacity: 0;
        transform: translateX(-40px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .fade-left-animate.visible {
        opacity: 1;
        transform: translateX(0);
      }

      .fade-right-animate {
        opacity: 0;
        transform: translateX(40px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .fade-right-animate.visible {
        opacity: 1;
        transform: translateX(0);
      }

      .card-hover-animate {
        transition: all 0.3s ease;
      }

      .card-hover-animate:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }

      .icon-bounce-animate:hover {
        animation: bounceIcon 0.6s ease-in-out;
      }

      @keyframes bounceIcon {
        0%, 20%, 53%, 80%, 100% {
          transform: translate3d(0,0,0);
        }
        40%, 43% {
          transform: translate3d(0, -8px, 0);
        }
        70% {
          transform: translate3d(0, -4px, 0);
        }
        90% {
          transform: translate3d(0, -2px, 0);
        }
      }
    `;
    document.head.appendChild(style);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe header elements
    if (headerRef.current) {
      const titleElement = headerRef.current.querySelector(".title-animate");
      const descElement = headerRef.current.querySelector(".desc-animate");
      if (titleElement) observer.observe(titleElement);
      if (descElement) observer.observe(descElement);
    }

    // Observe cards
    if (cardsRef.current) {
      const cardElements = cardsRef.current.querySelectorAll(".card-animate");
      cardElements.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-20 lg:py-24 xl:py-30">
      {/* Header Section */}
      <div
        ref={headerRef}
        className="flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between mb-16"
      >
        <h2 className="title-animate fade-left-animate text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight font-bold">
          <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            How <span className="text-orange-500">Traul</span>
          </span>
          Works
        </h2>

        <div className="desc-animate fade-right-animate lg:ml-10 flex flex-col items-start">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Simple, Fast and Transparent - get <br />
            your goods delivered in 5 easy steps <br />
            Quickly
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="card-animate fade-up-animate bg-white p-8 rounded-2xl shadow-sm card-hover-animate"
            >
              {/* Icon */}
              <div
                className={`${card.backgroundColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 icon-bounce-animate`}
              >
                <IconComponent className={`w-8 h-8 ${card.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeliveryLogistics;
