import React from "react";
import { Package, Percent, Headphones } from "lucide-react";

function DeliveryLogistics() {
  const cards = [
    {
      id: 1,
      title: "Always Protected Your Packages",
      description:
        "We will guarantee the safety of your packages from the time the goods are delivered to their destination",
      icon: Package,
      iconColor: "text-blue-600",
      backgroundColor: "bg-blue-50",
      category: "security",
    },
    {
      id: 2,
      title: "You Can Live Tracking Your Packages",
      description:
        "You can monitor and track your goods easily, precisely and in real time anywhere and anytime",
      icon: Percent,
      iconColor: "text-red-500",
      backgroundColor: "bg-red-50",
      category: "tracking",
    },
    {
      id: 3,
      title: "Our Customer Service Will Be There For You 24/7",
      description:
        "We provide customer service that will serve you if you have a problem with your packages",
      icon: Headphones,
      iconColor: "text-green-600",
      backgroundColor: "bg-green-50",
      category: "support",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-20 lg:py-24 xl:py-30">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight font-bold">
          <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            Deliver Your <span className="text-orange-500">Logistic</span>
          </span>
          Safely and Quickly
        </h1>

        <div className="lg:ml-10 flex flex-col items-start">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            This is the reason why you should use our <br />
            services instead of using other shipping <br />
            agency
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div
                className={`${card.backgroundColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
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
