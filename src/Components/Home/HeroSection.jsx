import React from "react";
import star from "/container.svg";
import CircularText from "./CircularText";

function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-20 lg:py-24 xl:py-30 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-30 justify-between">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] leading-none font-bold heading">
          <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <span className="text-gray-800">More Than Just</span>
            <img
              src={star}
              alt=""
              className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 "
            />
          </span>
          A{" "}
          <span className="text-orange-500 relative">
            Logistic
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-200 opacity-50"></span>
          </span>{" "}
          <span className="text-orange-500">Shipment</span>
        </h1>

        <div className="lg:ml-10 flex flex-col items-start">
          <p className="text-base sm:text-lg md:text-[20px] text-gray-800 leading-relaxed">
            <span className="text-orange-500 font-semibold">Traul</span> will
            deliver your package <br />
            <span className="text-orange-600">quickly</span> and{" "}
            <span className="text-orange-600">safely</span> than any other{" "}
            <br />
            shipping agency
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-0.5 bg-orange-500"></div>
            <span className="text-sm text-orange-600 font-medium uppercase tracking-wider">
              Premium Logistics
            </span>
          </div>
        </div>
      </div>

      <div className="hidden  lg:inline-block  overflow-hidden rounded-full p-5 right-[10%] absolute top-[64%] mt-7 shadow-lg ">
        <CircularText
          text="PREMIUM*LOGISTICS*DELIVERY*"
          onHover="speedUp"
          spinDuration={0}
          className="custom-class bg-gradient-to-r from-orange-500 to-orange-600"
        />
      </div>
    </div>
  );
}

export default HeroSection;
