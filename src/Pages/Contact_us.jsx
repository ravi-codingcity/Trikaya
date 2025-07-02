import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["253A/3, First floor, Shahpurjatt", "New delhi - 110041"],
      color: "text-luxury-gold",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-9811930424"],
      color: "text-blue-400",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["azam@trikayaevents.in", "info@trikayaevents.in"],
      color: "text-green-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 8:00 PM"],
      color: "text-purple-400",
    },
  ];

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Birthday Party",
    "Anniversary",
    "Engagement",
    "Baby Shower",
    "Graduation",
    "Holiday Party",
    "Other",
  ];

  // Change the state from a single value to an object tracking each FAQ
  const [openFaqs, setOpenFaqs] = useState({});

  // Update toggle function to handle independent toggling
  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-8 bg-gradient-to-b bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold text-luxury-navy mb-6">
              Get In <span className="text-luxury-gold">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Ready to start planning your dream event? We're here to bring your
              vision to life. Contact us today for a personalized consultation.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-5">
                <MessageCircle className="text-luxury-gold mr-4" size={32} />
                <h2 className="text-3xl font-bold text-luxury-navy">
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-luxury-gold transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-luxury-gold transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-luxury-gold transition-colors duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-luxury-gold transition-colors duration-300"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type} className="bg-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Preferred Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-luxury-gold transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Tell us about your event
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-luxury-gold transition-colors duration-300 resize-none"
                    placeholder="Share your vision, guest count, budget range, and any special requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-luxury-gold hover:bg-luxury-darkGold text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-luxury-navy mb-6">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-gray-100 hover:border-luxury-gold hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${info.color} p-3 bg-gray-50 rounded-lg`}
                      >
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-luxury-navy mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-navy mb-4">
              Visit Our Studio
            </h2>
            <p className="text-lg text-gray-600">
              Come see our planning studio and meet our team in person
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="h-[450px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6735616194433!2d77.21007567522291!3d28.549530087845575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21410f77cc3%3A0xda0670fc84e41088!2s253a%2C%203%2C%20Street%20No.%201%2C%20Shahpur%20Jat%2C%20Siri%20Fort%2C%20New%20Delhi%2C%20Delhi%20110049!5e0!3m2!1sen!2sin!4v1751089268685!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-luxury-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How far in advance should I book your services?",
                answer:
                  "We recommend booking 6-12 months in advance for weddings and major events, though we can accommodate shorter timelines based on availability.",
              },
              {
                question: "Do you provide services for destination events?",
                answer:
                  "Absolutely! We specialize in destination events and have experience planning celebrations in over 50 countries worldwide.",
              },
              {
                question: "What's included in your event planning packages?",
                answer:
                  "Our packages include venue selection, vendor coordination, timeline management, design consultation, and day-of coordination. We customize each package to your specific needs.",
              },
              {
                question: "Can you work with my budget?",
                answer:
                  "We work with various budget ranges and will help you maximize your investment to create the most impactful event possible within your means.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(index)} 
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-luxury-navy">
                    {faq.question}
                  </h3>
                  <span className={`text-luxury-gold transition-transform duration-300 ${openFaqs[index] ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqs[index] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
