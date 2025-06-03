import React from "react";
import ScrollingBanner from "../Components/Home/ScrollingBanner";
import DeliveryLogistics from "../Components/Home/DeliveryLogistics";
import VehiclesShowCase from "../Components/Home/VehiclesShowCase";
import MobileTrackingSection from "../Components/Home/MobileTrackingSection";
import HeroSection from "../Components/HeroSection";

function Home() {
  return (
    <div className="">
      <HeroSection />
      <ScrollingBanner />
      <VehiclesShowCase />
      <MobileTrackingSection />
      <DeliveryLogistics />
    </div>
  );
}

export default Home;
