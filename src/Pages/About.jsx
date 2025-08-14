import React, { useEffect } from "react";
import AboutHero from "../Components/AboutHero";
import AboutContent from "../Components/AboutContent";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AboutHero />
      <AboutContent />
    </div>
  );
}

export default About;
