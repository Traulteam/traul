import React from "react";

function AboutHero() {
  return (
    <div
      className="relative h-64 md:h-80 bg-cover bg-center"
      style={{ backgroundImage: "url('/delivery.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          About Traul
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl">
          Revolutionizing logistics with technology, one delivery at a time.
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
