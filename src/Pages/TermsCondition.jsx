import React, { useEffect } from "react";

function TermsCondition() {
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
              Terms and Conditions
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Policy Content */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 max-w-5xl text-left">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center border-b border-gray-700 pb-6">
                <h2 className="text-3xl font-bold text-white mb-2">TRAUL TERMS AND CONDITIONS</h2>
              </div>

              {/* Introduction */}
              <div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  These Customer Terms and Conditions ("Agreement") govern the provision of transportation and logistics services ("Services") provided by Traul to you, the Customer ("Consignor/Sender/Customer"), who has chosen to use Traul's services for transportation, delivery, and other related activities. By accessing or using the services, you agree to be bound by these terms and conditions. If you do not agree to these terms, you must discontinue the use of the services and uninstall the Traul application from your mobile device.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  This Agreement applies to all services provided by Traul, including but not limited to:
                </p>
                <div className="ml-4 mt-2 space-y-1">
                  <p className="text-gray-300 leading-relaxed">a. Goods Transport by Road;</p>
                  <p className="text-gray-300 leading-relaxed">b. All India Courier;</p>
                  <p className="text-gray-300 leading-relaxed">c. Packers and Movers.</p>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  If you choose any of the services provided by Traul, you are also subject to any additional specific terms and conditions related to that service.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.1</h3>
                    <p className="text-gray-300 leading-relaxed">
                      By accessing and using Traul's services, you acknowledge and accept these Terms and Conditions, which shall apply each time you engage Traul's services. These terms may be amended or updated by Traul from time to time, and your continued use of the services after such changes constitutes your acceptance of the updated Terms and Conditions. You are responsible for reviewing these terms periodically.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.2</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If at any point you do not agree with any of the provisions of this Agreement, you must immediately stop using the services provided by Traul and uninstall the application.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.3</h3>
                    <p className="text-gray-300 leading-relaxed">
                      These Terms are governed by the provisions of the Information Technology Act, 2000 ("IT Act"), and applicable rules, regulations, and amendments thereunder.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Availability */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Service Availability</h2>
                <p className="text-gray-300 leading-relaxed">
                  Traul offers various types of services, including transportation of goods, courier services, and packers and movers. These services are available through the Traul application, and by selecting a service, you agree to the applicable terms and conditions associated with it.
                </p>
              </div>

              {/* Customer's Obligations */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Customer's Obligations</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  You, as the Consignor, represent and warrant that:
                </p>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">a.</span> You are the rightful owner or authorized agent of the goods you are sending, and you have the legal right and authority to enter into this Agreement.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">b.</span> The goods you are sending are legally owned or in your lawful possession, and you are authorized to deal with them as outlined in this Agreement.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">c.</span> You agree to indemnify and hold Traul harmless against any claims, damages, losses, or liabilities arising from your failure to comply with this obligation.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">d.</span> You are responsible for ensuring the accuracy of the consignment details, including the description, quantity, value, and destination of the goods, as submitted through the Traul application.
                  </p>
                </div>
              </div>

              {/* Privacy and Data Protection */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Privacy and Data Protection</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">4.1</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, Traul is committed to safeguarding your personal information. By using Traul's services, you consent to the collection, use, and disclosure of your personal data as outlined in the Privacy Policy, which forms part of these Terms and Conditions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">4.2</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Traul collects personal data, including but not limited to your name, address, contact details, and consignment details for the purpose of providing the Services. We will not share your personal data with third parties unless required by law or for the execution of services contracted with you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">4.3</h3>
                    <p className="text-gray-300 leading-relaxed">
                      For more details on how your data is handled, please refer to the Privacy Policy section within the application.
                    </p>
                  </div>
                </div>
              </div>

              {/* Electronic Transactions and Record */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Electronic Transactions and Record</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">5.1</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You acknowledge and agree that by using Traul's services, you consent to the electronic delivery of records and information, including notices, agreements, and other communications related to the Services. These electronic records are governed by the provisions of the Information Technology Act, 2000, and applicable rules, including those related to electronic contracts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">5.2</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Traul's application and website may also store data related to transactions. These records will serve as evidence of your engagement with the services and the terms you have agreed to.
                    </p>
                  </div>
                </div>
              </div>

              {/* Packaging and Delivery */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Packaging and Delivery</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">6.1 Packaging Instructions</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      You agree to ensure that the goods are properly packaged for transportation. Traul recommends the following packaging guidelines:
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">a.</span> Cover goods completely with appropriate material, ensuring secure ends with tape.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">b.</span> For fragile items, use bubble wrap to protect edges and corners.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">c.</span> Secure items with stretch wrap or other materials to prevent movement within the package.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">d.</span> Use cushioning materials like crumpled paper or foam for void spaces in boxes.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">e.</span> Use strong, industry-standard tape for sealing packages.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">6.2 Responsibility for Goods</h3>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">a.</span> You are fully responsible for all goods transported via Traul. You must only use Traul's services for legal purposes and ensure that the goods being transported do not violate any laws or regulations.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">b.</span> You must accurately describe the consignment in the Goods Forwarding Note and ensure that the contents match the declaration. Traul reserves the right to decline transportation for any consignment containing prohibited or illegal items.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liability and Claims */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Liability and Claims</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">7.1 Damaged Goods Claims</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Any claim for damage or loss to goods during transport must be made within 24 hours from receipt of the goods. The claim must be sent to the respective customer support email address:
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">a.</span> For Packers and Movers services: [Email to be provided]
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">b.</span> For Goods Transport services: [Email to be provided]
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">c.</span> The claim must include photos of the damaged goods, packaging, or both (depending on the service), along with a detailed description of the damage.
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-3">
                      Claims submitted outside the 24-hour window will not be processed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">7.2 Liability Limits</h3>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">a.</span> <strong>Two-Wheeler Transport:</strong> Traul's liability for loss or damage is limited to the lesser of the freight amount paid or INR 1,500 (Rupees One Thousand Five Hundred), whichever is lower.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">b.</span> <strong>Three or Four-Wheeler Transport:</strong> Traul's liability for loss or damage is limited to the lesser of the freight amount paid or INR 5,000 (Rupees Five Thousand), whichever is lower.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">c.</span> <strong>Packers and Movers:</strong> Traul's liability for loss or damage to goods packed in single-layer packaging is limited to INR 1,500 (Rupees One Thousand Five Hundred), and for multi-layer packaging, the limit is INR 5,000 (Rupees Five Thousand).
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-3">
                      For goods exceeding the above values, you must obtain additional insurance coverage at your own cost. Traul recommends securing insurance for any valuable goods being transported.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Sections */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Mis-declaration of Goods</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">8.1</span> You must accurately declare the nature, quantity, and value of the goods at the time of booking. If the goods are mis-declared, you will be liable for any damages, penalties, or fines resulting from this mis-declaration, including any third-party claims.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">8.2</span> If the consignment contains prohibited or illegal items, Traul will not be liable for any damages or logistics-related costs associated with these items.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Payment Terms</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">9.1</span> You agree to pay for all services provided by Traul as per the rates displayed on the application. If you choose the cash-on-delivery (COD) payment option, you must pay the full amount to the delivery partner upon delivery, as per the amount shown in the Traul app. Any additional payments, including tips, made to the delivery partner are not the responsibility of Traul.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">9.2</span> Traul reserves the right to levy additional charges for any non-payment, deficit payment, or failure to complete the payment as specified.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Cancellation Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you decide to cancel the service after the driver has been allocated, a cancellation fee may apply as per Traul's policies. Details of such fees, if applicable, will be communicated at the time of cancellation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Dispute Resolution</h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Any dispute arising out of or in connection with this Agreement shall be resolved as follows:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">a.</span> <strong>Mediation:</strong> If a dispute cannot be resolved amicably within 30 days, the parties agree to attempt mediation in accordance with the applicable mediation laws.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">b.</span> <strong>Jurisdiction:</strong> This Agreement shall be governed by the laws of India, and any legal action or dispute resolution will be subject to the exclusive jurisdiction of the courts of the applicable jurisdiction.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Access Blocking</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Traul reserves the right to block or suspend your access to the services if you violate any of the terms and conditions, misuse the services, or engage in fraudulent activity. Traul may restore access at its sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Pure Agent Relationship</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you use the Traul Wallet to make transactions, you authorize Traul to act as a "pure agent" for procuring services from Payment Aggregators and Payment Gateways. You agree to reimburse Traul for any charges incurred in providing these services, on a cost-to-cost basis.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">14. Miscellaneous Provisions</h2>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">a.</span> These terms constitute the entire Agreement between you and Traul regarding the use of the services.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">b.</span> Traul's failure to enforce any provision of this Agreement shall not be construed as a waiver of any right or provision.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">c.</span> If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">d.</span> <strong>Force Majeure:</strong> Traul shall not be liable for any failure or delay in performance of its obligations due to causes beyond its reasonable control, including but not limited to natural disasters, acts of war, government actions, strikes, or technical failures.
                    </p>
                  </div>
                </div>
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
              Clear & Comprehensive
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our terms and conditions clearly outline your rights, responsibilities, and the rules governing the use of our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsCondition;
