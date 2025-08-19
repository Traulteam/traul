import React, { useEffect } from "react";

function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-black min-h-screen py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
          {/* Title Section */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Disclaimer Policy
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Policy Content */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 max-w-4xl text-left">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                By accessing and using the Traul website, mobile applications, and services (collectively, "Traul Apps"), you acknowledge that the information provided is for general informational purposes only, and while we strive to ensure the accuracy and reliability of the content, we make no guarantees regarding its completeness or suitability.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                The services are provided "as is" and "as available," with no warranties, express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement. Traul is not liable for any damages, losses, or expenses arising from the use of the platform, including direct, indirect, incidental, or consequential damages.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                The content on the Traul Apps does not constitute professional advice, and you should seek appropriate professional guidance when necessary. Traul acts solely as an intermediary platform connecting users with service providers. We are not responsible for any delivery failures, service interruptions, or issues arising from the actions or omissions of service providers using the platform.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                Traul is not responsible for third-party content or services linked from the platform, and your use of such links is at your own risk. We reserve the right to update or modify this Disclaimer Policy at any time without prior notice, and any changes will be effective immediately upon posting.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                This policy is governed by the laws of the jurisdiction in which Traul operates, and any disputes will be subject to the exclusive jurisdiction of the courts in that jurisdiction. By using the Traul Apps, you agree to the terms outlined in this Disclaimer Policy.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                Users are responsible for providing accurate and complete information when using the Traul Apps. Traul is not liable for any issues, delays, or failures resulting from incorrect or incomplete information provided by users.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                If you do not agree with the Policy, please refrain from using the platform. For any questions or concerns, please contact us via the support page of the Traul Apps.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 max-w-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">
              Important Notice
            </h3>
            <p className="text-gray-300 leading-relaxed">
              This disclaimer policy outlines the terms and conditions for using Traul's services. Please read carefully before proceeding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;
