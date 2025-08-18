import React from "react";
import { Smartphone } from "lucide-react";

const MobileTrackingSection = () => {
  // Previous phone images for backgrounds
  const androidPhone = "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=600&fit=crop";
  const iPhone = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop";

  return (
    <div
      className="bg-gradient-to-br from-gray-50 overflow-hidden to-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
      id="mobile-tracking-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Left side - Side by Side Phones */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center max-w-full">
              {/* Android Phone */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6">
                <div className="w-32 h-64 xs:w-36 xs:h-72 sm:w-44 sm:h-88 md:w-52 md:h-[420px] lg:w-60 lg:h-[480px] xl:w-64 xl:h-[520px] bg-gradient-to-br from-green-100 to-green-200 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] flex items-center justify-center shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 relative">
                  {/* Android phone has more rounded corners and slightly different proportions */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-1 sm:p-1.5 md:p-2">
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center p-2 relative overflow-hidden">
                      {/* Clear background image */}
                      <img
                        src={androidPhone}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[2rem] opacity-80"
                      />
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-2 left-2 w-8 h-8 border-2 border-blue-200 rounded-full"></div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 border-2 border-green-200 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-blue-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* Android brand highlight */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-500 rounded-full opacity-60"></div>
                  {/* Phone highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem]"></div>
                </div>

                {/* Android Download Button */}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.Traul.tookanCustomer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-900 text-white px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-medium flex items-center justify-center gap-1 sm:gap-2 md:gap-3 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-xs sm:text-sm md:text-base w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-none"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-green-500 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-xs text-gray-300 hidden sm:hidden md:block lg:block">
                      Get it on
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold truncate">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>

              {/* iPhone */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6">
                <div className="w-32 h-64 xs:w-36 xs:h-72 sm:w-44 sm:h-88 md:w-52 md:h-[420px] lg:w-60 lg:h-[480px] xl:w-64 xl:h-[520px] bg-gradient-to-br from-gray-100 to-gray-300 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] flex items-center justify-center shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 relative border-4 border-gray-300">
                  {/* iPhone has more rectangular shape with rounded corners and distinctive notch */}
                  <div className="w-full h-full bg-black rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[2.75rem] lg:rounded-[3.25rem] p-1 sm:p-1.5 md:p-2 relative">
                    {/* iPhone notch */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full z-10"></div>
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] flex items-center justify-center p-2 relative overflow-hidden">
                      {/* Clear background image */}
                      <img
                        src={iPhone}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] opacity-80"
                      />
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-2 left-2 w-8 h-8 border-2 border-blue-200 rounded-full"></div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 border-2 border-purple-200 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-blue-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* iPhone home indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></div>
                  {/* Phone highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem]"></div>
                </div>

                {/* iOS Download Button */}
                <a 
                  href="https://apps.apple.com/in/app/traul-customer/id6744353195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-medium flex items-center justify-center gap-1 sm:gap-2 md:gap-3 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-xs sm:text-sm md:text-base w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-none"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-xs text-blue-100 hidden sm:hidden md:block lg:block">
                      Download on the
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold truncate">
                      App Store
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-orange-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium">
                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                Mobile Application
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Track Your Packages{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Anywhere
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Anytime
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience seamless package tracking with the Traul mobile app.
                Get real-time updates, delivery notifications, and complete
                control over your shipments right from your smartphone.
              </p>

              {/* Features list - Fixed alignment */}
              <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 left-25 lg:left-0 relative ">
                {[
                  "Real-time tracking",
                  "Push notifications",
                  "Delivery history",
                  "Easy scheduling",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* App Store Instructions */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-100 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 justify-center lg:justify-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                    <path d="M5 5h4v4H5V5zm10 0h4v4h-4V5zM5 15h4v4H5v-4zm10 0h4v4h-4v-4z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  Quick Download
                </h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center lg:text-left">
                Click the download buttons above to instantly download
                the Traul app from your device's app store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTrackingSection;
