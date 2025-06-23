import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - replace with your actual values
      const serviceId = "service_ljrtlpm";
      const templateId = "template_vrliyjx";
      const publicKey = "kb9h18Ut8n73eP2f2";

      // Load EmailJS if not already loaded
      if (!window.emailjs) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        script.onload = () => {
          window.emailjs.init(publicKey);
          sendEmail();
        };
        document.head.appendChild(script);
      } else {
        sendEmail();
      }

      function sendEmail() {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: "your-email@example.com", // Replace with your email
        };

        window.emailjs
          .send(serviceId, templateId, templateParams)
          .then(() => {
            setSubmitStatus("success");
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          })
          .catch((error) => {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
          })
          .finally(() => {
            setIsSubmitting(false);
          });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
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
      content: "123 Logistics Street\nBusiness District, City 12345",
      action: "Get Directions",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      title: "Call Us",
      content: "+1 (555) 123-4567\nMon-Fri 9AM-6PM EST",
      action: "Call Now",
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

              <div className="space-y-6">
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
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 disabled:opacity-50"
                      placeholder="Your full name"
                    />
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
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
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
                      placeholder="+1 (555) 123-4567"
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
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white disabled:opacity-50"
                    >
                      <option value="">Select a subject</option>
                      <option value="shipping">Shipping Inquiry</option>
                      <option value="tracking">Package Tracking</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
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
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 resize-none disabled:opacity-50"
                    placeholder="Tell us about your logistics needs..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
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
              </div>
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
              <button className="text-orange-400 hover:text-orange-300 font-medium transition-colors group-hover:underline">
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
