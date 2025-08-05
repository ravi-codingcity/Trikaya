import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Train,
  Car,
  MapPin,
  Shield,
  Clock,
  CheckCircle,
  Users,
  Heart,
  Package,
  Navigation,
  Globe,
  Luggage,
  Bus,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";

const TravelManagementLogistics = () => {
  const services = [
    {
      id: 1,
      icon: Plane,
      title: "Flights, Train & Visa",
      description:
        "When you think of planning a destination wedding, the first thought that comes in the mind is how to manage the travel of all the guests. Visa arrangements, ticket booking, and pick and drop from the railway station and airport have to well planned to release the stress off our guest's heads. We provide with exclusive and personalized transport services for everyone who are going to be a part of the wedding giving them the luxury experience within the client's budget. Visa issues are also on us, we try our best to make it simpler and timely for you and your guests. Giving you the special treatment is what we aim for!",
      features: [
        "Visa Arrangement Support",
        "Flight & Train Booking",
        "Airport/Station Transfers",
        "Personalized Transport Services",
        "Budget-friendly Luxury Experience",
      ],
      color: "from-blue-400 to-blue-600",
      image: Services1,
    },
    {
      id: 2,
      icon: Car,
      title: "Ground Travel",
      description:
        "For wedding destinations where everyone has to reach by road, travel management has to be taken care of for one and all. We make sure that we have all the required details of the guests to make their transport arrangements be it pick and drop services or travel from home city to the destination city. Cars or buses, semi luxurious or luxurious, we arrange it all with personalized planning to make the travel fun and relaxing.",
      features: [
        "Complete Road Trip Planning",
        "Pick & Drop Services",
        "City-to-City Transport",
        "Luxury Vehicle Options",
        "Personalized Travel Experience",
      ],
      color: "from-green-400 to-teal-600",
      image: Services2,
    },
    {
      id: 3,
      icon: Package,
      title: "Logistics",
      description:
        "To make sure that everything you need for your wedding - gifts for guests, your luggage, distribution items, and even the smallest of requirements- we provide logistics support services. Seamless execution of a wedding can only happen when everything is at the right place at the right time. We ensure there is no lack of comfort and all the movements are monitored proficiently without any delay.",
      features: [
        "Gift & Luggage Transport",
        "Distribution Item Management",
        "Timely Delivery Assurance",
        "Professional Monitoring",
        "Complete Logistics Support",
      ],
      color: "from-purple-400 to-indigo-600",
      image: Services3,
    },
  ];

  const travelFeatures = [
    {
      icon: Globe,
      title: "Destination Planning",
      description:
        "Complete travel planning for destination weddings worldwide",
    },
    {
      icon: Shield,
      title: "Stress-Free Management",
      description:
        "Taking care of all travel worries so you can focus on celebration",
    },
    {
      icon: Navigation,
      title: "Route Optimization",
      description: "Best routes and timings for seamless guest movement",
    },
    {
      icon: CheckCircle,
      title: "On-Time Guarantee",
      description: "Everyone reaches exactly when they need to be there",
    },
  ];

  const transportOptions = [
    {
      icon: Plane,
      title: "Air Travel",
      description: "Flight bookings and airport transfers",
      color: "text-blue-600",
    },
    {
      icon: Train,
      title: "Railway",
      description: "Train reservations and station pickups",
      color: "text-green-600",
    },
    {
      icon: Car,
      title: "Private Cars",
      description: "Luxury cars for VIP guests",
      color: "text-purple-600",
    },
    {
      icon: Bus,
      title: "Group Transport",
      description: "Comfortable buses for large groups",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-14 bg-gradient-to-b bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6 tracking-wider">
              TRAVEL & LOGISTICS
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              On the D-day celebrations, one of the most stressful and worrisome
              situation for any couple is travel management. How will the family
              and guests commute, how can we make their travel to and from the
              destination easier and how to make sure that everyone is present
              at the time of the celebration. The Trikaya team provides a
              team to make travel and logistics management hassle free and be
              with them whenever they need assistance. We make sure to provide
              our client the peace of mind they need on the most important day
              of their life!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Transport Options
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple transportation modes to suit every guest's needs and
              preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`${option.color} mb-6 flex justify-center`}>
                  <option.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-4 text-center">
                  {option.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Our Travel & Logistics Services
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel management solutions for your destination
              wedding
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`p-8 lg:p-8 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-r ${service.color} mr-4`}
                      >
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy tracking-wide">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Image/Visual Element */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Guests Transported", icon: Users },
              { number: "50+", label: "Destinations Covered", icon: MapPin },
              { number: "99%", label: "On-Time Arrival", icon: Clock },
              { number: "24/7", label: "Travel Support", icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg"
              >
                <stat.icon size={48} className="text-blue-900 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-luxury-navy mb-6 leading-tight">
              Our Travel Management Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial planning to flawless execution, our systematic approach ensures every guest's journey is smooth and memorable
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Guest Details Collection",
                  description:
                    "Gathering complete travel requirements and preferences of all guests",
                  icon: Users,
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  features: ["Travel preferences", "Special requirements", "Budget considerations", "Timeline planning"]
                },
                {
                  step: "02",
                  title: "Route & Transport Planning",
                  description:
                    "Creating optimized travel plans with best routes and luxury options",
                  icon: Navigation,
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  features: ["Route optimization", "Vehicle selection", "Cost analysis", "Schedule coordination"]
                },
                {
                  step: "03",
                  title: "Seamless Execution",
                  description:
                    "Professional execution with real-time monitoring and support",
                  icon: CheckCircle,
                  color: "from-green-500 to-green-600",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                  features: ["Real-time tracking", "24/7 support", "Quality assurance", "Guest satisfaction"]
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative ${process.bgColor} p-8 rounded-3xl border-2 ${process.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 group`}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                  </div>

                  {/* Main icon */}
                  <div className="text-center mb-6 mt-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <process.icon size={36} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-luxury-navy mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {process.description}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-2">
                      {process.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.3) + (featureIndex * 0.1) }}
                          className="flex items-center justify-center space-x-2"
                        >
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <process.icon size={60} className="text-gray-400" />
                  </div>

                  {/* Connection arrow for desktop */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <div className={`w-8 h-8 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <Navigation size={16} className="text-white transform rotate-90" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
      <Footer />
    </div>
  );
};

export default TravelManagementLogistics;
