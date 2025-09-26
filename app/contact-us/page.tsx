"use client";
import { useState } from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { LpNavbar1 } from "@/components/lp-navbar-1";
import { Footer2 } from "@/components/footer-2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="font-poppins">
      <LpNavbar1 />
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-2 sm:p-4">
        {/* Decorative lines background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-20"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-20"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-20"></div>
        </div>

        {/* Fixed white container */}
        <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
          {/* Header - Side by side on larger screens */}
          <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-6">
              <div className="lg:flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                  CONTACT US
                </h1>
              </div>
              <div className="lg:flex-1 lg:text-right">
                <p className="text-gray-600 text-sm sm:text-base max-w-none lg:max-w-xl lg:ml-auto font-medium">
                  If you have any questions, please feel free to get in touch
                  with us via phone, text, email, the form below, or even on
                  social media!
                </p>
              </div>
            </div>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
            <div className="space-y-4 lg:space-y-6">
              {/* Two column section for form and contact info */}
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Left Side - Contact Form */}
                <div className="bg-gray-50 rounded-md p-4 sm:p-5 lg:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5">
                    GET IN TOUCH
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1">
                          NAME
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name*"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number*"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email*"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1">
                        YOUR MESSAGE
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message..."
                        rows={4}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 text-sm rounded-md transition-colors duration-300 transform hover:scale-105"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </div>

                {/* Right Side - Contact Information and Business Hours */}
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5">
                      CONTACT INFORMATION
                    </h2>

                    {/* Contact info in row flex for larger screens */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-gray-50 rounded-md p-4 sm:p-5 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-3 rounded-md mb-3">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">
                          PHONE
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base font-medium">
                          773-365-6240
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-md p-4 sm:p-5 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-3 rounded-md mb-3">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">
                          ADDRESS
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base text-center font-medium">
                          1425 N McLean Blvd Elgin, IL
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-md p-4 sm:p-5 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-3 rounded-md mb-3">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">
                          EMAIL
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base break-all font-medium">
                          office@statepondllans.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-gray-50 rounded-md p-5 sm:p-6 flex-1">
                    <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-5 flex items-center gap-3">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                      BUSINESS HOURS
                    </h2>

                    <div className="space-y-4 sm:space-y-5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-700 text-sm sm:text-base">
                          MONDAY - FRIDAY
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base font-medium">
                          9:00 am - 8:00 pm
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-700 text-sm sm:text-base">
                          SATURDAY
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base font-medium">
                          9:00 am - 6:00 pm
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-700 text-sm sm:text-base">
                          SUNDAY
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base font-medium">
                          9:00 am - 5:00 pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Width Map Section */}
              <div className="rounded-md overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8661234567890!2d-88.2816!3d42.0354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f05a1234567890%3A0x1234567890abcdef!2s1425%20N%20McLean%20Blvd%2C%20Elgin%2C%20IL%2060123!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </main>
  );
}
