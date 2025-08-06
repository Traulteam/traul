import { useEffect, useRef } from "react";
import { FaShippingFast, FaUsers, FaHandshake } from "react-icons/fa";

function WhatWeDo() {
  const cardsRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Fast & Reliable",
      description:
        "Our network of drivers ensures your goods are delivered quickly and safely to their destination.",
      icon: FaShippingFast,
      iconColor: "text-blue-600",
      backgroundColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "For Everyone",
      description:
        "From small personal items to large enterprise logistics, our platform is designed to cater to all needs.",
      icon: FaUsers,
      iconColor: "text-red-500",
      backgroundColor: "bg-red-50",
    },
    {
      id: 3,
      title: "Trusted Partnerships",
      description:
        "We build strong relationships with our drivers and customers, fostering a community built on trust.",
      icon: FaHandshake,
      iconColor: "text-green-600",
      backgroundColor: "bg-green-50",
    },
  ];

  useEffect(() => {
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
    <section className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight font-bold">
          <span className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            What <span className="text-orange-500">We Do</span>
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          We leverage technology to provide on-demand delivery services, making
          it easier than ever to move goods.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="card-animate fade-up-animate bg-white p-8 rounded-2xl shadow-sm card-hover-animate"
            >
              <div
                className={`${card.backgroundColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 icon-bounce-animate`}
              >
                <IconComponent className={`w-8 h-8 ${card.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhatWeDo;
