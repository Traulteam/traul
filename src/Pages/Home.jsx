import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import ScrollingBanner from "../Components/Home/ScrollingBanner";
import delivery from "/delivery2.png";
import DeliveryLogistics from "../Components/Home/DeliveryLogistics";
import VehiclesShowCase from "../Components/Home/VehiclesShowCase";
import MobileTrackingSection from "../Components/Home/MobileTrackingSection";

function Home() {
  return (
    <div className="">
      <HeroSection />
      <img src={delivery} alt="" className="" />
      {/* <div className="bg-gray-900 p-10 w-full absolute mb-10"></div> */}
      <ScrollingBanner />
      <DeliveryLogistics />
      <VehiclesShowCase />
      <MobileTrackingSection />
    </div>
  );
}

export default Home;
