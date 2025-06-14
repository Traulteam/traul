import React from "react";

function Refund() {
  const handleDownloadPDF = () => {
    // Create a sample PDF download link
    // In a real application, this would link to your actual privacy policy PDF
    const link = document.createElement("a");
    link.href = "/refundpolicy.docx"; // Replace with actual PDF URL
    link.download = "refundpolicy.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-black min-h-screen py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
          {/* Title Section */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Terms and Conditions
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-xl lg:text-2xl leading-relaxed text-justify max-w-3xl">
            Please Read Our Terms and Conditions Your use of our services is
            subject to the terms outlined in our comprehensive Terms and
            Conditions. Download and review the full document to understand your
            rights, responsibilities, and the rules governing your use of our
            website and services.
          </p>

          {/* Download Button */}
          <div>
            <button
              onClick={handleDownloadPDF}
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/30"
            >
              <svg
                className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Privacy Policy PDF
              <span className="ml-2">→</span>
            </button>
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
              Secure & Transparent
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our privacy policy is regularly updated to reflect current
              practices and regulations. Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Refund;
