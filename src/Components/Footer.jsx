import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

const Footer = () => {
  const destinations_2 = [
    { name: "Destination Wedding in Delhi", link: null },
    { name: "Destination Wedding in Jodhpur", link: null },
    { name: "Destination Wedding in Kerala", link: null },
    { name: "Destination Wedding in Hua Hin", link: null },
    { name: "Destination Wedding in Phuket", link: null },
    { name: "Destination Wedding in Dubai", link: null },
    { name: "Destination Wedding in Pushkar", link: null },
  ];

  const destinations = [
    { name: "Destination Wedding in Jaipur", link: "/destinations/jaipur" },
    { name: "Destination Wedding in Agra", link: "/destinations/agra" },
    { name: "Destination Wedding in Udaipur", link: null },
    { name: "Destination Wedding in Goa", link: null },
    { name: "Destination Wedding in Abu Dhabi", link: null },
    { name: "Destination Wedding in Jim Corbett", link: null },
    { name: "Destination Wedding in Mussoorie", link: null },
  ];

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Destinations", link: "/destinations" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <footer className="bg-dark-50 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-luxury-navy/20 to-luxury-green/20"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Quick Links */}
          <div className="hidden space-y-4 md:flex flex-row justify-center items-center mb-10">
            <ul className="flex flex-row space-x-10">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.link.startsWith("/") ? (
                    <a
                      href={link.link}
                      className="text-gray-300 hover:text-luxury-gold transition-colors duration-300"
                    >
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <a
                      href={link.link}
                      className="text-gray-300 hover:text-luxury-gold transition-colors duration-300"
                    >
                      <span>{link.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

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
                  Creating unforgettable moments with premium event management,
                  wedding planning, and hospitality services tailored to your
                  vision.
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

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-white">
                Our Destinations
              </h4>
              <ul className="space-y-3">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    {destination.link ? (
                      <a
                        href={destination.link}
                        className="text-gray-300 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2"
                      >
                        <span className="text-sm">{destination.name}</span>
                      </a>
                    ) : (
                      <a
                        href="#destinations"
                        className="text-gray-300 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2"
                      >
                        
                        <span className="text-sm">{destination.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold ">
                Our Destinations
              </h4>
              <ul className="space-y-3">
                {destinations_2.map((destination, index) => (
                  <li key={index}>
                    {destination.link ? (
                      <a
                        href={destination.link}
                        className="text-gray-300 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2"
                      >
                       
                        <span className="text-sm">{destination.name}</span>
                      </a>
                    ) : (
                      <a
                        href="#destinations"
                        className="text-gray-300 hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2"
                      >
                       
                        <span className="text-sm">{destination.name}</span>
                      </a>
                    )}
                  </li>
                ))}
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
  );
};

export default Footer;
