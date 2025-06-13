import React from "react";
import { Smartphone } from "lucide-react";

const MobileTrackingSection = () => {
  // Mock phone images - replace with your actual images
  const phone1 =
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=600&fit=crop";
  const phone2 =
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop";

  return (
    <div
      className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
      id="mobile-tracking-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          {/* Left side - Side by Side Phones */}
          <div className="w-full lg:w-1/2 flex justify-center overflow-hidden">
            <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center max-w-full">
              {/* First Phone */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6 flex-1 min-w-0">
                <div className="w-36 h-72 xs:w-40 xs:h-80 sm:w-48 sm:h-96 md:w-56 md:h-[450px] lg:w-64 lg:h-[520px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 relative max-w-full">
                  <div className="w-full h-full bg-black rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-1 sm:p-1.5 md:p-2">
                    <img
                      src={phone1}
                      alt="GoCargo App Interface"
                      className="object-cover w-full h-full rounded-[0.75rem] sm:rounded-[1rem] md:rounded-[1.5rem]"
                    />
                  </div>
                  {/* Phone highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem]"></div>
                </div>

                {/* Android Download Button */}
                <button className="group bg-gray-900 text-white px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-medium flex items-center justify-center gap-1 sm:gap-2 md:gap-3 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-xs sm:text-sm md:text-base w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-none">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-green-500 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8505 12 7.8505s-3.5902.3934-5.1367 1.0258L4.841 5.3735a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2494.8995 12.8027.8995 15.7646v.2449c0 .1633.1321.2954.2954.2954h21.6092c.1633 0 .2954-.1321.2954-.2954v-.2449c0-2.9619-1.7105-5.5152-5.2209-6.5351" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-xs text-gray-300 hidden md:block">
                      Download for
                    </div>
                    <div className="text-xs sm:text-sm md:text-lg font-semibold truncate">
                      Android
                    </div>
                  </div>
                </button>
              </div>

              {/* Second Phone */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6 flex-1 min-w-0">
                <div className="w-36 h-72 xs:w-40 xs:h-80 sm:w-48 sm:h-96 md:w-56 md:h-[450px] lg:w-64 lg:h-[520px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 relative max-w-full">
                  <div className="w-full h-full bg-black rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-1 sm:p-1.5 md:p-2">
                    <img
                      src={phone2}
                      alt="GoCargo Tracking Interface"
                      className="object-cover w-full h-full rounded-[0.75rem] sm:rounded-[1rem] md:rounded-[1.5rem]"
                    />
                  </div>
                  {/* Phone highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem]"></div>
                </div>

                {/* iOS Download Button */}
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-medium flex items-center justify-center gap-1 sm:gap-2 md:gap-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-xs sm:text-sm md:text-base w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-none">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white/20 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-xs text-blue-100 hidden md:block">
                      Download for
                    </div>
                    <div className="text-xs sm:text-sm md:text-lg font-semibold truncate">
                      iOS
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium">
                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                Mobile Application
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Track Your Packages{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Anywhere
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Anytime
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience seamless package tracking with the GoCargo mobile
                app. Get real-time updates, delivery notifications, and complete
                control over your shipments right from your smartphone.
              </p>

              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
                {[
                  "Real-time tracking",
                  "Push notifications",
                  "Delivery history",
                  "Easy scheduling",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* QR Code Instructions */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-100 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                    <path d="M5 5h4v4H5V5zm10 0h4v4h-4V5zM5 15h4v4H5v-4zm10 0h4v4h-4v-4z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Quick Download
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 text-center lg:text-left">
                Scan the QR codes with your phone camera to instantly download
                the GoCargo app from your device's app store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTrackingSection;
