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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
