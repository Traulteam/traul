import React, { useEffect } from "react";
import ScrollingBanner from "../Components/Home/ScrollingBanner";
import DeliveryLogistics from "../Components/Home/DeliveryLogistics";
import VehiclesShowCase from "../Components/Home/VehiclesShowCase";
import MobileTrackingSection from "../Components/Home/MobileTrackingSection";
import HeroSection from "../Components/HeroSection";
import FAQ from "../Components/FAQ";
import RecentBlogs from "../Components/Home/RecentBlogs";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <HeroSection />
      <ScrollingBanner />
      <VehiclesShowCase />
      <MobileTrackingSection />
      <FAQ />
      <DeliveryLogistics />
      <RecentBlogs />
    </div>
  );
}

export default Home;
