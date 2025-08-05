import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Search,
  Handshake,
  CheckCircle,
  Star,
  Target,
  Award,
  Shield,
  Settings,
  TrendingUp,
  Clock,
  DollarSign,
  FileCheck,
  UserCheck,
  Zap,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";

const VendorManagement = () => {
  const services = [
    {
      id: 1,
      icon: Search,
      title: "Vendor Shortlisting",
      description:
        "We provide you with top-notch wedding vendors in and around your destination, to shortlist from. Experienced vendors are the only ones we count on! We help you in shortlisting the best vendors within your budget to execute a smooth flow on the main day.",
      features: [
        "Top-Notch Vendor Database",
        "Experienced Professionals Only",
        "Budget-Friendly Options",
      ],
      color: "from-pink-400 to-rose-600",
      image: Services1,
    },
    {
      id: 2,
      icon: Handshake,
      title: "Vendor Negotiations",
      description:
        "Where don't negotiations happen? The BandBaajaa team focuses on discussions with various vendors to offer a price that is mutually beneficial to all. Majority of the wedding budget is spent on vendors. There's always room for negotiations and we never fail to leave that away, afterall it's our job to get what you really want at the best possible prices!",
      features: [
        "Mutually Beneficial Pricing",
        "Budget Optimization",
        "Best Possible Prices",
      ],
      color: "from-blue-400 to-indigo-600",
      image: Services2,
    },
    {
      id: 3,
      icon: FileCheck,
      title: "Vendor Deliverables",
      description:
        "Keeping a track of deliverables is very important. The job to ensure that you receive the right deliverables with quality, requirements and budget is something we never miss out! We keep everything black and white between you and the vendor to keep everyone on the same page. BandBaajaa never believes in breaking trust!",
      features: [
        "Quality Assurance",
        "Clear Documentation",
        "Trust & Transparency",
      ],
      color: "from-purple-400 to-violet-600",
      image: Services3,
    },
    {
      id: 4,
      icon: UserCheck,
      title: "Vendor Execution Evaluation",
      description:
        "Professionalism is something we survive on. We make sure the vendors deliver what we decided without any flaw because the last thing you want is panic attacks on your fun-filled day. BandBaajaa lets you enjoy your precious moments and handles all the stress and execution issues for you!",
      features: [
        "Flawless Execution",
        "Stress-Free Experience",
        "Professional Monitoring",
      ],
      color: "from-emerald-400 to-teal-600",
      image: Services1,
    },
  ];

  const vendorFeatures = [
    {
      icon: Search,
      title: "Expert Shortlisting",
      description: "Carefully curated vendors matching your requirements",
    },
    {
      icon: Handshake,
      title: "Smart Negotiations",
      description: "Best prices through strategic vendor discussions",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Guaranteed deliverables with transparency",
    },
    {
      icon: Award,
      title: "Flawless Execution",
      description: "Professional monitoring for perfect results",
    },
  ];

  const managementOptions = [
    {
      icon: Search,
      title: "Vendor Discovery",
      description: "Top-notch professionals in your destination",
      color: "text-pink-600",
    },
    {
      icon: DollarSign,
      title: "Price Optimization",
      description: "Best possible rates through negotiations",
      color: "text-blue-600",
    },
    {
      icon: FileCheck,
      title: "Deliverable Tracking",
      description: "Quality control and requirement monitoring",
      color: "text-purple-600",
    },
    {
      icon: UserCheck,
      title: "Execution Excellence",
      description: "Flawless delivery on your special day",
      color: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-14 bg-gradient-to-b bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6 tracking-wider">
              V E N D O R   M A N A G E M E N T
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              To make your wedding mind boggling, vendor management plays a great role. From picking up the right vendors to managing them on the D-day is something you don't need to worry about because BandBaajaa is at your service! Every detail matters to deliver a perfect fairytale like wedding. Trust is all we need to get the best vendors for every department of your wedding celebration!
            </p>
            <div className="mt-8">
              <span className="text-sm md:text-base text-gray-500 tracking-wider font-medium">
                VENDOR MANAGEMENT
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-4">
              Our Vendor Management Services
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From vendor discovery to execution evaluation, we ensure every aspect of vendor management is handled professionally
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

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle
                            size={20}
                            className="text-green-600 flex-shrink-0"
                          />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
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
              { number: "1000+", label: "Trusted Vendors", icon: Users },
              { number: "100%", label: "Quality Assured", icon: Shield },
              { number: "500+", label: "Successful Negotiations", icon: Handshake },
              { number: "0", label: "Execution Failures", icon: Award },
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-6 leading-tight">
              Complete Vendor Management Solution
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic four-stage vendor management approach ensures you get the best professionals at optimal prices with guaranteed quality delivery
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Vendor Shortlisting",
                  description:
                    "Curating top-notch vendors within your destination",
                  icon: Search,
                  color: "from-pink-500 to-rose-600",
                  bgColor: "bg-pink-50",
                  borderColor: "border-pink-200",
                  features: [
                    "Top-notch vendors",
                    "Experienced professionals",
                    "Budget optimization",
                    "Smooth execution",
                  ],
                },
                {
                  step: "02",
                  title: "Smart Negotiations",
                  description: "Getting the best prices through strategic discussions",
                  icon: Handshake,
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  features: [
                    "Mutual benefits",
                    "Budget maximization",
                    "Strategic discussions",
                    "Cost optimization",
                  ],
                },
                {
                  step: "03",
                  title: "Deliverable Tracking",
                  description:
                    "Ensuring quality and transparency in all agreements",
                  icon: FileCheck,
                  color: "from-purple-500 to-violet-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  features: [
                    "Quality tracking",
                    "Clear documentation",
                    "Transparency focus",
                    "Trust building",
                  ],
                },
                {
                  step: "04",
                  title: "Execution Evaluation",
                  description: "Professional monitoring for flawless delivery",
                  icon: UserCheck,
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "bg-emerald-50",
                  borderColor: "border-emerald-200",
                  features: [
                    "Flawless execution",
                    "Professional monitoring",
                    "Stress-free experience",
                    "Quality assurance",
                  ],
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative ${process.bgColor} p-6 rounded-3xl border-2 ${process.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 group`}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">
                        {process.step}
                      </span>
                    </div>
                  </div>

                  {/* Main icon */}
                  <div className="text-center mb-4 mt-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <process.icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-luxury-navy mb-3 group-hover:text-pink-600 transition-colors duration-300">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {process.description}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-1">
                      {process.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + featureIndex * 0.1,
                          }}
                          className="flex items-center justify-center space-x-2"
                        >
                          <CheckCircle
                            size={14}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span className="text-gray-700 text-xs font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <process.icon size={40} className="text-gray-400" />
                  </div>

                  {/* Connection arrow for desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div
                        className={`w-6 h-6 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <Zap size={12} className="text-white" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Approach */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-4">
              Our Management Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four pillars of vendor management that ensure your wedding vendors deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementOptions.map((option, index) => (
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
      <Footer />
    </div>
  );
};

export default VendorManagement;
