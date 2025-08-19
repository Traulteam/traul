import React, { useEffect } from "react";

function Cancellation() {
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
              Cancellation Policy
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Policy Content */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 max-w-4xl text-left">
            <div className="space-y-8">
              {/* Customer Cancellation Policy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Customer Cancellation Policy</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.1 Free Cancellations</h3>
                    <p className="text-gray-300 leading-relaxed">
                      A customer may cancel their booking without incurring any cancellation fees under the following circumstances:
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-2">
                      <span className="text-orange-400">1.1.1</span> If the booking is cancelled prior to the assignment of a driver, the customer will receive a full refund.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.2 Partial Refund or Cancellation Charges</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If the customer cancels their booking in the following scenarios, a partial refund may be issued, subject to the deduction of applicable cancellation charges:
                    </p>
                    <div className="mt-2 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.2.1</span> If the booking is cancelled after a driver has been assigned but before the scheduled pickup time.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.2.2</span> If the cancellation occurs after the driver has arrived at the pickup location, a cancellation charge will be applied to compensate the driver for time and fuel expenses.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.3 No Refunds</h3>
                    <p className="text-gray-300 leading-relaxed">
                      No refunds will be provided under the following conditions:
                    </p>
                    <div className="mt-2 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.3.1</span> If the cancellation occurs after the commencement of the trip.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.3.2</span> If the cancellation is due to the customer providing incorrect booking details, such as an incorrect address or incorrect vehicle selection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Driver Cancellation Policy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Driver Cancellation Policy</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2.1 Driver-Initiated Cancellations</h3>
                    <p className="text-gray-300 leading-relaxed">
                      In the event that a driver must cancel an assigned trip due to an emergency or other legitimate reasons, the driver must immediately notify Traul support. Cancellation will be subject to Traul's review and approval.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2.2 Frequent Driver Cancellations</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Drivers who cancel bookings repeatedly without providing valid reasons may face penalties, which may include temporary suspension or removal from the platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2.3 Driver No-Show</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If a driver fails to arrive at the designated pickup point without a valid reason, the customer will be entitled to a full refund. In addition, the customer will be given priority to book another driver.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2.4 Cancellations Due to System Errors</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If a booking is cancelled due to system errors or technical malfunctions, Traul will review the case individually. If the cancellation is verified to be a result of a system error, the customer will be entitled to a full refund or a rebooking without additional charges, depending on the circumstances.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2.5 Cancellations Due to Force Majeure</h3>
                    <p className="text-gray-300 leading-relaxed">
                      In the event of force majeure events such as natural disasters, pandemics, political unrest, or other unforeseen circumstances beyond Traul's control, cancellations may occur without penalties. Refunds or rebookings in such cases will be processed at Traul's discretion, considering the specific circumstances.
                    </p>
                  </div>
                </div>
              </div>

              {/* General Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. General Terms</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">3.1 Cancellation Timeframes</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Cancellation eligibility and applicable charges will be determined based on the time of cancellation as recorded by Traul's system.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">3.2 Refund Processing</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Refunds, where applicable, will be processed in accordance with Traul's standard refund procedures and may take several business days to appear in the customer's account, depending on the payment method used.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">3.3 Modification of Policy</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Traul reserves the right to amend, update, or modify this cancellation policy at any time. Any such changes will be communicated to customers and drivers and will apply to future bookings and assignments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For any questions or concerns regarding cancellations, customers or drivers should contact Traul support through our official channels.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.0 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">
              Transparent & Fair
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our cancellation policy is designed to be fair for both customers and drivers, ensuring transparency in all transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cancellation;
