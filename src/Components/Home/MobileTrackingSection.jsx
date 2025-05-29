import React from "react";

const MobileTrackingSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Image placeholder */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-[600px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-orange-700 font-medium">
                  Phone Image Placeholder
                </p>
                <p className="text-orange-600 text-sm mt-2">
                  Replace with your phone mockup
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                You Can <span className="text-orange-500">Track</span> Your
                <br />
                Packages in Real Time
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                By using the GoCargo mobile application, you can track your
                package quickly, easily and in real time whenever and wherever
                you are
              </p>

              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 hover:bg-gray-800 transition-colors">
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTrackingSection;
