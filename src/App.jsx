import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactPage from "./Pages/ContactPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsCondition from "./Pages/TermsCondition";
import Refund from "./Pages/Refund";
import Cancellation from "./Pages/Cancellation";
import Disclaimer from "./Pages/Disclaimer";
import About from "./Pages/About";
import VijayawadaBookingPage from "./Pages/VijayawadaBookingPage";
import AppDownload from "./Pages/AppDownload";
import OfficeShiftingVijayawada from "./Pages/OfficeShiftingVijayawada";
import ApplianceMovingVijayawada from "./Pages/ApplianceMovingVijayawada";
import FurnitureTransportVijayawada from "./Pages/FurnitureTransportVijayawada";
import HouseShiftingVijayawada from "./Pages/HouseShiftingVijayawada";
import MiniTruckBookingVijayawada from "./Pages/MiniTruckBookingVijayawada";
import ParcelDeliveryVijayawada from "./Pages/ParcelDeliveryVijayawada";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/cancel" element={<Cancellation />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/vijayawada" element={<VijayawadaBookingPage />} />
          <Route path="/download" element={<AppDownload />} />
          <Route path="/vijayawada/office-shifting" element={<OfficeShiftingVijayawada />} />
          <Route path="/vijayawada/appliance-moving" element={<ApplianceMovingVijayawada />} />
          <Route path="/vijayawada/furniture-transport" element={<FurnitureTransportVijayawada />} />
                             <Route path="/vijayawada/house-shifting" element={<HouseShiftingVijayawada />} />
                   <Route path="/vijayawada/mini-truck-booking" element={<MiniTruckBookingVijayawada />} />
                   <Route path="/vijayawada/parcel-delivery" element={<ParcelDeliveryVijayawada />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
