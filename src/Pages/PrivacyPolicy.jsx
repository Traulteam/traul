import React, { useEffect } from "react";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Policy Content */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 max-w-5xl text-left">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  This Privacy Policy ("Policy") governs how Traul (referred to as "we," "our," or "Traul") collects, uses, discloses, and protects your personal information when you use the Traul website, mobile applications, and services (collectively referred to as the "Traul Apps" or "Services"). This Policy is intended to comply with the Information Technology Act, 2000, and its associated rules, as amended from time to time.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  At Traul, we value your privacy and are committed to safeguarding the personal information you share with us. This Privacy Policy explains the types of personal information we collect, how we use and share it, how we protect your data, and your rights with regard to the information we hold. By using the Traul Apps or Services, you agree to the collection, use, storage, processing, disclosure, and sharing of your personal information as described in this Policy. If you do not agree to the terms of this Privacy Policy, you should refrain from using the Traul Apps and Services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.1 Personal Information</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      When you use the Traul Apps or Services, we may collect the following personal information:
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.1.1</span> <strong>Identification Details:</strong> Your full name, job title, and contact information (such as email address, phone number).
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.1.2</span> <strong>Demographic Information:</strong> Postal address, mobile number, login name, preferences, interests, and other demographic details.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.1.3</span> <strong>Service Usage Information:</strong> Information required for processing requests, completing forms for future transactions, and storing details like phone number, address, email, billing information, invoices, etc.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.1.4</span> <strong>App Usage Information:</strong> Data related to app installation, uninstallation, and other installed apps on your device.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.2 Driver Partner Specific Information</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      If you register as a Driver Partner, we may collect additional details, including:
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.2.1</span> <strong>Location Data:</strong> Precise or approximate location data when the Traul Apps are in use.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.2.2</span> <strong>Profile Information:</strong> Profile pictures, copies of government-issued identification documents (e.g., Aadhar, PAN, or driving license), vehicle-related documents (e.g., insurance, pollution certificate, registration certificate), bank account details, utility bills, and any documents evidencing vehicle fitness.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.2.3</span> <strong>Background Verification:</strong> Information for background checks and identity verification, including criminal record (where permitted by law) and right to work. This information may be collected by an authorized third-party vendor on behalf of Traul.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">1.2.4</span> <strong>Communication Data:</strong> Call and SMS details may be shared with customers during service provision.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">1.3 Referral Program Data</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If you participate in a referral program, Traul may request access to your mobile device's contact list with your consent. This will allow us to share selected mobile numbers for referral purposes. We do not share this data with third parties for marketing or other unrelated purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2.1 Purpose of Data Collection</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We use the personal information we collect for the following purposes:
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">2.1.1</span> <strong>To Provide Services:</strong> To fulfill the contractual obligations between you and Traul, allowing you to use the Services on the Traul Apps.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">2.1.2</span> <strong>Transaction Management:</strong> To process and complete transactions, including payment processing.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">2.1.3</span> <strong>Account Management:</strong> To manage and personalize your account with Traul Apps and to enhance your overall experience.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">2.1.4</span> <strong>Customer Support:</strong> To respond to your queries, feedback, and reviews, and provide effective customer support.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">2.1.5</span> <strong>Communication:</strong> To notify you of important updates, changes, and announcements related to the Traul Apps or Services.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">2.1.6</span> <strong>Promotional Communication:</strong> With your consent, we may use your information to send promotional emails, SMS, or make voice calls about new products, offers, or services.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">2.1.7</span> <strong>Market Research:</strong> From time to time, we may use your information for market research purposes to improve our Services and customer experience.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">2.1.8</span> <strong>Safety & Fraud Prevention:</strong> To detect and prevent fraud or other illegal activities, and to ensure the security and integrity of the Traul Apps.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">2.2 Consent-Based Data Use</h3>
                    <p className="text-gray-300 leading-relaxed">
                      In addition to the uses listed above, we may use your information for other purposes with your explicit consent. This may include sharing your personal information with third parties for specific, agreed-upon purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">3.1 Commitment to Security</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We are dedicated to protecting your personal information from unauthorized access or disclosure. To achieve this, we implement appropriate physical, electronic, and managerial security measures in compliance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, to safeguard your personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">3.2 Data Retention</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We do not retain your personal information for longer than necessary for the purposes for which it was collected, or as required by applicable laws. Once the purpose for which the information was collected has been fulfilled, we will securely dispose of or anonymize your data in accordance with legal requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">3.3 User Responsibilities</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You are responsible for maintaining the confidentiality of your personal information, including login details and any other data you obtain via the Traul Apps. You should not share your credentials or other sensitive information with others.
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclosure of Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Disclosure of Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">4.1 Third-Party Service Providers</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We may disclose your information to third-party service providers under the following circumstances:
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">4.1.1</span> To enhance your experience and personalize your interactions with the Traul Apps.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">4.1.2</span> To facilitate payment processing, customer support, or marketing services.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">4.1.3</span> To third-party vendors, consultants, or partners who help us deliver our Services.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-orange-400">4.1.4</span> To our research partners, for academic research purposes (if applicable).
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">4.2 Legal Compliance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We may also disclose your information to governmental agencies, law enforcement authorities, or other third parties as required by law or as necessary for the investigation or prevention of fraudulent, illegal, or unauthorized activities. This includes compliance with legal processes or to respond to valid legal requests.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">4.3 Sharing with Other Users</h3>
                    <p className="text-gray-300 leading-relaxed">
                      If you are a Driver Partner, we may share certain details (such as your name, phone number, and profile picture) with customers who request your services to facilitate the provision of the Services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Prohibited Activities */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Activities</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  As a user of the Traul Apps, you are prohibited from engaging in activities that involve:
                </p>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">5.1</span> Hosting, displaying, uploading, modifying, publishing, transmitting, storing, updating, or sharing information that infringes on the rights of others or violates applicable laws.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">5.2</span> Engaging in defamatory, obscene, or illegal activities, including spreading false or misleading information, impersonating others, or engaging in activities harmful to children.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">5.3</span> Distributing viruses or malicious software that may harm or disrupt the functionality of any computer resource.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">5.4</span> Violating privacy laws or engaging in activities that threaten the unity, integrity, security, or sovereignty of India or that are likely to cause harm to any individual or entity.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400">5.5</span> Failure to comply with these guidelines may result in the termination of your access to the Traul Apps and the removal of non-compliant content.
                  </p>
                </div>
              </div>

              {/* Additional Sections */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Withdrawal or Non-Provision of Data</h2>
                  <p className="text-gray-300 leading-relaxed">
                    You are not required to provide personal data that is requested by Traul. You may also withdraw your consent to the collection or use of your personal information at any time by contacting us directly. However, please note that if you withdraw your consent, we may not be able to provide certain Services that rely on the collection or use of that data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400 mb-2">7.1 Cookies</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We use cookies and similar tracking technologies to enhance your experience on the Traul Apps. A cookie is a small text file placed on your device to help us analyze website traffic and personalize content. You can choose to accept or decline cookies through your browser settings. If you decline cookies, some features of the Traul Apps may not function properly.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400 mb-2">7.2 Usage Analytics</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We may use cookies to collect data for statistical analysis and improve our website and services. We use this information to understand your preferences and enhance your experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Websites and Links</h2>
                  <p className="text-gray-300 leading-relaxed">
                    The Traul Apps may contain links to third-party websites or advertisements. Please be aware that once you leave the Traul Apps and visit these third-party websites, we no longer have control over their privacy practices, and this Privacy Policy does not apply. We recommend that you review the privacy policies of those third-party sites to understand how your personal information may be collected, used, and disclosed.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Access to Personal Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    You have the right to request access to the personal information we hold about you. If you wish to obtain a copy of your personal information or believe that the information we hold is inaccurate, please contact us. We will promptly address any discrepancies and make the necessary corrections.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For any questions, concerns, or requests regarding this Privacy Policy, or if you wish to report a breach of the policy, please contact us using the contact information available on the support page of the Traul Apps.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Grievance Officer</h2>
                  <p className="text-gray-300 leading-relaxed">
                    In accordance with the Information Technology Act, 2000, and applicable rules, we have appointed a Grievance Officer to address any queries or concerns regarding this Privacy Policy. If you have any questions, please reach out to our Grievance Officer at:
                  </p>
                  <div className="ml-4 mt-2 text-gray-300">
                    <p>[Grievance Officer Name]</p>
                    <p>[Email Address]</p>
                    <p>[Phone Number]</p>
                    <p>[Address]</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Changes to the Privacy Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Traul reserves the right to modify or update this Privacy Policy at any time. Any changes will be posted on this page, and the updated policy will take effect immediately. Please check this Policy periodically to stay informed of any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Third-Party Data Sharing Transparency</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Traul is committed to maintaining transparency regarding the sharing of your personal data with third parties. We will disclose the categories of third parties with whom your data may be shared, the purpose of such sharing, and the measures taken to ensure the security of your data. We ensure that third-party service providers are bound by confidentiality agreements and are obligated to use your data solely for the purposes specified by Traul.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">14. User Data Deletion Process</h2>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">•</span> You have the right to request the deletion of your personal data at any time. To initiate a data removal request, please contact us through the support page of the Traul Apps, specifying your request clearly.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">•</span> Upon receiving your request, we will verify your identity to ensure the security of your data before processing the deletion.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">•</span> If your request is denied, we will provide a clear explanation outlining the reasons for the denial.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">15. Compliance with Legal Frameworks</h2>
                  <div className="ml-4 space-y-2">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">•</span> This Privacy Policy is designed to comply with the Information Technology Act, 2000, and its associated rules, as amended from time to time, as well as the General Data Protection Regulation (GDPR) (if applicable).
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-orange-400">•</span> Traul ensures that all data collection, processing, storage, and sharing practices align with these legal requirements to safeguard your personal information and uphold your privacy rights.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Effective Date</h2>
                  <p className="text-gray-300 leading-relaxed">
                    This Privacy Policy is effective as of the date of posting on our platform.
                  </p>
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
              Your Privacy Matters
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We are committed to protecting your personal information and ensuring transparency in how we collect, use, and safeguard your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
