import { useEffect, useRef } from "react";

function OurMission() {
  const headerRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .fade-left-animate {
        opacity: 0;
        transform: translateX(-40px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .fade-left-animate.visible {
        opacity: 1;
        transform: translateX(0);
      }

      .fade-right-animate {
        opacity: 0;
        transform: translateX(40px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .fade-right-animate.visible {
        opacity: 1;
        transform: translateX(0);
      }
    `;
    document.head.appendChild(style);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      const titleElement = headerRef.current.querySelector(".title-animate");
      const descElement = headerRef.current.querySelector(".desc-animate");
      if (titleElement) observer.observe(titleElement);
      if (descElement) observer.observe(descElement);
    }

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      ref={headerRef}
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
        <h1 className="title-animate fade-left-animate text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight font-bold">
          <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            Our <span className="text-orange-500">Mission</span>
          </span>
        </h1>

        <div className="desc-animate fade-right-animate lg:ml-10 flex flex-col items-start">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            At Traul, our mission is to simplify logistics for businesses and
            individuals. We provide a seamless, reliable, and affordable
            platform to connect you with the right vehicles for your delivery
            needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
