import React, { useEffect } from "react";

function Refund() {
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
              Refund Policy
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Policy Content */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 max-w-4xl text-left">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  This Refund Policy governs the circumstances under which refunds may be granted for services provided by Traul through its platform, and sets forth the rights and obligations of both users (customers and businesses) and drivers. By using the services provided by Traul, you agree to the terms outlined in this policy.
                </p>
              </div>

              {/* Refund Eligibility */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Eligibility</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1. Cancellation by Traul</h3>
                    <p className="text-gray-300 leading-relaxed">
                      In the event that Traul or the assigned driver cancels a booking due to unavailability, system errors, or any other reasons attributable to Traul, the user will be eligible for a full refund of the amount paid for the booking.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2. Service Failure</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If the delivery or service is not completed due to reasons caused by Traul or the assigned driver, including failure to deliver on the agreed-upon terms, the user shall be entitled to a full refund.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">3. Delayed Pickup or Delivery</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If the driver fails to arrive at the designated pickup location within the agreed time, exceeding the grace period set by Traul, the user may be entitled to a refund or compensation, as determined by Traul.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">4. Overcharged Amounts</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If the user is incorrectly charged due to a billing error or other issues related to the calculation of the fare, the user is entitled to a refund of the overcharged amount.
                    </p>
                  </div>
                </div>
              </div>

              {/* Non-Refundable Situations */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Non-Refundable Situations</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1. User Cancellations after Driver Arrival</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If the user cancels the booking after the driver has arrived at the pickup location, no refund will be issued, except under exceptional circumstances as determined by Traul.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2. Completed Service with No Reported Issues</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If the user makes a return request or seeks a refund after the service has been fully completed without reporting any issues at the time of delivery, no refund will be granted.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">3. Force Majeure Events</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Traul will not be held liable for delays or service failures caused by force majeure events such as traffic, weather conditions, natural disasters, or any other events beyond the control of Traul or the driver. In such cases, no refund will be issued.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cancellation & Refund Timelines */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Cancellation & Refund Timelines</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1. For Users (Customers & Businesses)</h3>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">•</span> <strong>Cancellations before Dispatch:</strong> If the user cancels the booking before the vehicle has been assigned, a full refund will be processed.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">•</span> <strong>Cancellations after Driver Assignment:</strong> If the user cancels the booking after the driver has been assigned, a partial refund will be issued, with a deduction to account for the inconvenience caused to the driver.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">•</span> <strong>Cancellations after Pickup Completion:</strong> No refund will be issued once the pickup has been completed, except in special cases where Traul determines that a refund is warranted.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2. For Drivers</h3>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">•</span> <strong>Driver Cancellation:</strong> If a driver cancels a confirmed booking without providing a valid reason, Traul reserves the right to apply penalties, which may include deactivation of the driver's account or other disciplinary actions.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">•</span> <strong>Driver Arrival at Pickup Point:</strong> If the driver arrives at the pickup location and the user cancels the service, the driver may be entitled to compensation for their time and effort, as determined by Traul.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund Processing Timeline */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Processing Timeline</h2>
                <p className="text-gray-300 leading-relaxed">
                  Refunds shall be processed within 5 to 7 business days from the date the refund request is approved, depending on the user's payment method and the processing time of the financial institution involved.
                </p>
              </div>

              {/* Disputes over Refund Decisions */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Disputes over Refund Decisions</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    If a user disagrees with the refund decision made by Traul, they may file a formal dispute by contacting Traul customer support through the available channels on the platform.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The dispute will be reviewed by Traul's dedicated support team, and additional documentation may be requested from the user to support their case.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Traul reserves the right to make the final decision on all refund disputes after thorough review.
                  </p>
                </div>
              </div>

              {/* General Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">General Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  This Refund Policy may be amended or updated from time to time by Traul. Any changes will be effective immediately upon posting on the platform. The terms outlined in this policy are governed by the laws of the jurisdiction in which Traul operates, and any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  For any questions or concerns regarding refunds or cancellations, users may contact Traul customer support through the available channels on the platform.
                </p>
              </div>
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
              Fair & Transparent
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our refund policy ensures fair treatment for all users while maintaining transparency in our service delivery and cancellation processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Refund;
