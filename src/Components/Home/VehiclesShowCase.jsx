import React from "react";
import DeliveryMethodsSection from "./DeliveryMethodsSection ";

function VehiclesShowCase() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-20 lg:py-24 xl:py-30 bg-black">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight font-bold text-white">
          <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            Our<span className="text-orange-500">Transport</span>
          </span>
          Service
        </h1>

        <div className="lg:ml-10 flex flex-col items-start text-white">
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
            From Documents to heavy goods- we've <br />
            got the right vehicle for every delivery <br />
            need
          </p>
        </div>
      </div>
      <DeliveryMethodsSection />
    </div>
  );
}

export default VehiclesShowCase;
