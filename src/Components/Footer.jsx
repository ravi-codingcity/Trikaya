import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail, Heart, ChevronDown } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const destinations = [
    // Indian Destinations
    { name: "Jaipur - Pink City Royal Weddings", link: "/destinations/jaipur" },
    {
      name: "Agra - Taj Mahal Destination Weddings",
      link: "/destinations/agra",
    },
    { name: "Udaipur - City of Lakes Weddings", link: "/destinations/udaipur" },
    { name: "Goa - Beach Destination Weddings", link: "/destinations/goa" },
    {
      name: "Jim Corbett - Wildlife Resort Weddings",
      link: "/destinations/jim-corbett",
    },
    {
      name: "Mussoorie - Hill Station Weddings",
      link: "/destinations/mussoorie",
    },
    {
      name: "Delhi - Capital City Grand Weddings",
      link: "/destinations/delhi",
    },
    {
      name: "Jodhpur - Blue City Palace Weddings",
      link: "/destinations/jodhpur",
    },
    {
      name: "Kerala - Backwater Paradise Weddings",
      link: "/destinations/kerala",
    },
    { name: "Shimla - Colonial Hill Weddings", link: "/destinations/shimla" },
    {
      name: "Jaisalmer - Golden Desert Weddings",
      link: "/destinations/jaisalmer",
    },
    {
      name: "Chandigarh - Garden City Weddings",
      link: "/destinations/chandigarh",
    },
    {
      name: "Dehradun - Valley Capital Weddings",
      link: "/destinations/dehradun",
    },
    {
      name: "Hyderabad - Nizami Heritage Weddings",
      link: "/destinations/hyderabad",
    },
    {
      name: "Rishikesh - Spiritual Riverside Weddings",
      link: "/destinations/rishikesh",
    },
    {
      name: "Guwahati - Gateway Northeast Weddings",
      link: "/destinations/guwahati",
    },
    {
      name: "Chennai - Cultural Capital Weddings",
      link: "/destinations/chennai",
    },
    {
      name: "Ahmedabad - Heritage City Weddings",
      link: "/destinations/ahmedabad",
    },

    // International Destinations
    {
      name: "Hua Hin - Thai Royal Beach Weddings",
      link: "/destinations/hua_hin",
    },
    {
      name: "Abu Dhabi - Luxury Arabian Weddings",
      link: "/destinations/abu_dhabi",
    },
    { name: "Phuket - Tropical Island Weddings", link: "/destinations/phuket" },
    { name: "Dubai - Modern Luxury Weddings", link: "/destinations/dubai" },
    {
      name: "Singapore - Garden City Weddings",
      link: "/destinations/singapore",
    },
    {
      name: "Bangkok - Cultural Thai Weddings",
      link: "/destinations/bangkok",
    },
    {
      name: "Oman - Arabian Peninsula Weddings",
      link: "/destinations/oman",
    },
    {
      name: "Qatar - Pearl Gulf Weddings",
      link: "/destinations/qatar",
    },
    {
      name: "Vietnam - Southeast Asian Weddings",
      link: "/destinations/vietnam",
    },
  ];

  const handleDestinationSelect = (destination) => {
    if (destination.link) {
      setIsDropdownOpen(false);

      // Use setTimeout to ensure smooth transition
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        navigate(destination.link);
      }, 150);
    } else {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6b7280;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>

      <footer className="bg-dark-50 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-luxury-navy/20 to-luxury-green/20"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Trikaya Events
                  </h3>
                  <p className="text-white leading-relaxed text-sm">
                    Creating unforgettable moments with premium event
                    management, wedding planning, and hospitality services
                    tailored to your vision.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-blue-500 flex-shrink-0" size={18} />
                    <span className="text-white  text-sm">
                      253A/3, First floor, Shahpurjatt, New delhi -110049
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-500 flex-shrink-0" size={18} />
                    <span className="text-white  text-sm">+91-9811930424</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-500 flex-shrink-0" size={18} />
                    <span className="text-white  text-sm">
                      azam@trikayaevents.in
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Destinations Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6 relative"
              >
                <h4 className="text-xl font-semibold text-white">
                  Our Destinations
                </h4>

                {/* Custom Dropdown - Constrained container */}
                <div className="relative overflow-visible">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-left text-white text-sm transition-all duration-300 flex items-center justify-between group"
                  >
                    <span className="text-sm text-gray-200">
                      Browse All {destinations.length} Destinations
                    </span>
                    <ChevronDown
                      className={`transform transition-transform duration-300 text-gray-400 group-hover:text-white ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      size={16}
                    />
                  </button>

                  {/* Dropdown Menu - Shows ALL 15 destinations with scrolling */}
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-[60] overflow-hidden"
                      style={{
                        maxHeight: "200px", // Large height to show many destinations
                        marginTop: "4px",
                      }}
                    >
                      <div
                        className="overflow-y-auto max-h-full custom-scrollbar"
                        style={{
                          scrollbarWidth: "thin",
                          scrollbarColor: "#6B7280 #374151",
                          height: "200px", // Fixed height for consistent scrolling
                        }}
                      >
                        {destinations.map((destination, index) => (
                          <button
                            key={index}
                            onClick={() => handleDestinationSelect(destination)}
                            className="w-full text-left px-4 py-2.5 text-gray-300 hover:text-white hover:bg-gray-700/70 transition-all duration-200 text-sm border-b border-gray-700 last:border-b-0 flex items-center space-x-3 group"
                            style={{
                              minHeight: "40px", // Optimized height for 200px container
                              lineHeight: "1.3",
                            }}
                          >
                            <MapPin
                              size={14}
                              className="text-blue-400 flex-shrink-0 group-hover:text-blue-300"
                            />
                            <span className="flex-1 text-left font-medium text-gray-200 group-hover:text-white">
                              {destination.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Click outside to close dropdown */}
                {isDropdownOpen && (
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                )}
              </motion.div>

              {/* Services/Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-semibold text-white">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/join-our-team"
                      className="text-gray-300 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="text-sm">Join Our Team</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-gray-300 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="text-sm">Services</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-300 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="text-sm">Contact Us</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-300 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="text-sm">About Us</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-dark-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-1 text-gray-300 text-sm">
                  <span>
                    &copy; 2025 Trikaya Events. All rights reserved. Made with
                  </span>
                  <Heart className="text-red-500 fill-current" size={16} />
                  <span>for unforgettable moments.</span>
                </div>
                <div className="flex space-x-6 text-sm">
                  <a
                    href="#privacy"
                    className="text-gray-300 hover:text-luxury-gold transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#terms"
                    className="text-gray-300 hover:text-luxury-gold transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
