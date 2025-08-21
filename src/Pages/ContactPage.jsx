import React, { useEffect, useState } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Preload EmailJS for better performance
    if (!window.emailjs) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.async = true;
      script.onload = () => {
        // Initialize EmailJS once the script is loaded
        window.emailjs.init("BRfh47i2hK2ZXCmjO");
      };
      document.head.appendChild(script);
    } else {
      // If EmailJS is already loaded, initialize it
      window.emailjs.init("BRfh47i2hK2ZXCmjO");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "delivery", // Default to delivery
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // For select elements, ensure we get the full value
    const inputValue = type === "select-one" ? value : value;

    console.log(
      `Input changed - Name: ${name}, Value: ${inputValue}, Type: ${type}`
    ); // Debug log

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleInquiryTypeChange = (type) => {
    console.log("Toggle button clicked:", type); // Debug log
    setFormData((prev) => ({
      ...prev,
      inquiryType: type,
    }));
    console.log("Updated formData:", { ...formData, inquiryType: type }); // Debug log
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Debug log before submission - show each field individually
    console.log("=== FORM SUBMISSION DEBUG ===");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Subject:", formData.subject);
    console.log("Message:", formData.message);
    console.log("Inquiry Type:", formData.inquiryType);
    console.log("Full formData object:", formData);
    console.log("=== END DEBUG ===");

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = "service_ljrtlpm";
      const templateId = "template_vrliyjx";
      const publicKey = "kb9h18Ut8n73eP2f2";

      // Ensure EmailJS is loaded and initialized
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Initialize EmailJS with the public key
      window.emailjs.init(publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject,
        message: formData.message,
        inquiry_type:
          formData.inquiryType === "enterprise"
            ? "For Enterprise"
            : "For Delivery",
        to_email: "traulteam@traul.in", // Updated to use your actual email

        // Alternative variable names that EmailJS commonly uses
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || "Not provided",
        user_subject: formData.subject,
        user_message: formData.message,
        user_inquiry_type:
          formData.inquiryType === "enterprise"
            ? "For Enterprise"
            : "For Delivery",

        // Additional debugging info
        timestamp: new Date().toISOString(),
        source: "Traul Website Contact Form",

        // Raw inquiry type for debugging
        raw_inquiry_type: formData.inquiryType,

        // Multiple variations to ensure compatibility
        inquiryType: formData.inquiryType,
        inquiryTypeFormatted:
          formData.inquiryType === "enterprise"
            ? "Enterprise Inquiry"
            : "Delivery Inquiry",
        isEnterprise: formData.inquiryType === "enterprise" ? "Yes" : "No",
        isDelivery: formData.inquiryType === "delivery" ? "Yes" : "No",

        // Most common EmailJS variable names
        inquiry_type_simple: formData.inquiryType,
        inquiry_type_full:
          formData.inquiryType === "enterprise"
            ? "Enterprise Inquiry"
            : "Delivery Inquiry",
        inquiry_type_label:
          formData.inquiryType === "enterprise" ? "Enterprise" : "Delivery",
      };

      // Debug log the template parameters
      console.log("EmailJS template parameters:", templateParams);

      // Specific debug log for inquiry type
      console.log("=== INQUIRY TYPE DEBUG ===");
      console.log("Raw inquiryType from form:", formData.inquiryType);
      console.log("Formatted inquiry_type:", templateParams.inquiry_type);
      console.log("User inquiry type:", templateParams.user_inquiry_type);
      console.log("Simple inquiry type:", templateParams.inquiry_type_simple);
      console.log("Full inquiry type:", templateParams.inquiry_type_full);
      console.log("=== END INQUIRY TYPE DEBUG ===");

      const response = await window.emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log("EmailJS response:", response); // Debug log

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "delivery",
        });
        setErrors({});
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Form data that failed:", formData); // Debug log

      // Provide more specific error information
      let errorMessage =
        "Failed to send message. Please try again or contact us directly.";

      if (error.text) {
        console.error("EmailJS Error Details:", error.text);
        if (error.text.includes("Invalid template")) {
          errorMessage =
            "Email template configuration error. Please contact support.";
        } else if (error.text.includes("Invalid service")) {
          errorMessage =
            "Email service configuration error. Please contact support.";
        } else if (error.text.includes("Invalid public key")) {
          errorMessage =
            "Email service authentication error. Please contact support.";
        }
      }

      setSubmitStatus("error");
      // You can also set a more detailed error message here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: "Visit Our Office",
      content: "Poojitha Waterfront Apartments\nKunchanapalli, India, 52250",
      action: "Get Directions",
      onClick: () =>
        window.open(
          "https://maps.app.goo.gl/kavaRCG7KHagRwcn9?g_st=com.google.maps.preview.copy",
          "_blank"
        ),
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      title: "Mail Us",
      content: "traulteam@traul.in\nMon-Fri 9AM-6PM EST",
      action: "Mail Now",
      onClick: () => window.open("mailto:traulteam@traul.in", "_blank"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Ready to streamline your logistics? Contact our expert team today
              and discover how we can deliver your packages faster, safer, and
              more efficiently than anyone else.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Business Hours Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Send Us a Message
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 font-medium">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 font-medium">
                    ✗ Failed to send message. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type Toggle - Moved to top */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Inquiry Type
                  </label>
                  <div className="flex bg-gray-700/50 rounded-lg p-1 border border-gray-600">
                    <button
                      type="button"
                      onClick={() => handleInquiryTypeChange("delivery")}
                      disabled={isSubmitting}
                      className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-200 ${
                        formData.inquiryType === "delivery"
                          ? "bg-orange-500 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-gray-600/50"
                      } disabled:opacity-50`}
                    >
                      For Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInquiryTypeChange("enterprise")}
                      disabled={isSubmitting}
                      className={`flex-1 py-3 px-4 rounded-md font-medium text-sm transition-all duration-200 ${
                        formData.inquiryType === "enterprise"
                          ? "bg-orange-500 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-gray-600/50"
                      } disabled:opacity-50`}
                    >
                      For Enterprise
                    </button>
                  </div>
                  {/* Debug indicator - shows current selection */}
                  <div className="mt-2 text-xs text-gray-400">
                    Selected:{" "}
                    <span className="text-orange-400 font-medium">
                      {formData.inquiryType === "enterprise"
                        ? "Enterprise"
                        : "Delivery"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 disabled:opacity-50 ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 disabled:opacity-50 ${
                        errors.email ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 disabled:opacity-50"
                      placeholder="+91 9646443444"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white disabled:opacity-50 ${
                        errors.subject ? "border-red-500" : "border-gray-600"
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="shipping">Shipping Inquiry</option>
                      <option value="tracking">Package Tracking</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.subject}
                      </p>
                    )}
                    {/* Debug indicator for subject */}
                    <div className="mt-1 text-xs text-gray-400">
                      Selected Subject:{" "}
                      <span className="text-orange-400 font-medium">
                        {formData.subject || "None"}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 resize-none disabled:opacity-50 ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Tell us about your logistics needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Business Hours */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-fit">
              <h3 className="text-xl font-semibold mb-6 text-white text-center">
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-orange-400 font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday - Sunday</span>
                  <span className="text-orange-400 font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  Emergency support available 24/7 for existing customers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:border-orange-500/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <div className="text-white">{info.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-400 transition-colors">
                {info.title}
              </h3>
              <p className="text-gray-300 mb-6 whitespace-pre-line leading-relaxed">
                {info.content}
              </p>
              <button
                onClick={info.onClick}
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors group-hover:underline"
              >
                {info.action} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
