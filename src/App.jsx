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
          <Route path="/booking" element={<VijayawadaBookingPage />} />
          <Route path="/download" element={<AppDownload />} />
          <Route path="/vijayawada/office-shifting" element={<OfficeShiftingVijayawada />} />
          <Route path="/vijayawada/appliance-moving" element={<ApplianceMovingVijayawada />} />
          <Route path="/vijayawada/furniture-transport" element={<FurnitureTransportVijayawada />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
