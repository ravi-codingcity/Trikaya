import React from "react";
import { motion } from "framer-motion";
import {
  Music,
  Heart,
  Palette,
  Star,
  Users,
  Mic,
  CheckCircle,
  Sparkles,
  Volume2,
  Zap,
  Camera,
  Award,
  Target,
  Settings,
  PartyPopper,
  Headphones,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";

const Entertainment = () => {
  const services = [
    {
      id: 1,
      icon: Palette,
      title: "Theme Designing",
      description:
        "Each function in a destination wedding has a different vibe. Mehendi, Sangeet, Cocktail, Haldi, Wedding and Reception requires different type of music and entertainment. From traditional Mehendi songs to peppy Bollywood and trance beats for cocktail, we cover it all. The music is not limited to function these days. The moment guest steps in the hotel till the time he checks out, guest entertainment is always kept in mind.",
      features: [
        "Function-Specific Music Themes",
        "Traditional to Modern Beats",
        "24/7 Guest Entertainment",
      ],
      color: "from-pink-400 to-rose-600",
      image: Services1,
    },
    {
      id: 2,
      icon: Star,
      title: "Artist Recommendation",
      description:
        "We recommend the right artist in your budget for all occasions. Artist for welcoming of guest, traditional Mehendi function, western cocktail theme, wedding, reception and other occasions. From latest concepts in entertainment to the most popular ones, we got it covered for you.",
      features: [
        "Budget-Friendly Artist Selection",
        "Occasion-Specific Performers",
        "Latest Entertainment Concepts",
      ],
      color: "from-blue-400 to-indigo-600",
      image: Services2,
    },
    {
      id: 3,
      icon: Settings,
      title: "Artist Management",
      description:
        "For all the artist needs, we manage requirements related to the logistic, travel, stay, food and beverages, tech rider, sound and light for your event. Complete artist management ensuring seamless performances.",
      features: [
        "Complete Logistics Management",
        "Travel & Stay Arrangements",
        "Technical Requirements Handling",
      ],
      color: "from-purple-400 to-violet-600",
      image: Services3,
    },
    {
      id: 4,
      icon: Users,
      title: "Choreographers",
      description:
        "Any destination wedding is incomplete without family performances and teaching dance steps to your elders can be quite challenging. We design dance themes which can be easily adapted by the family members and provide the best choreographers to execute the same.",
      features: [
        "Family-Friendly Dance Themes",
        "Professional Choreographers",
        "Easy-to-Learn Routines",
      ],
      color: "from-emerald-400 to-teal-600",
      image: Services1,
    },
    {
      id: 5,
      icon: Volume2,
      title: "Sound and Stage Aesthetics",
      description:
        "We recommend the best sound systems and music equipment that will make your event night to be a memorable one. We provide you stage LED for visual graphics, high end sound system like D&B, L-Acoustics, Outline and others. We also provide all the technical requirements in tech riders.",
      features: [
        "High-End Sound Systems",
        "LED Visual Graphics",
        "Complete Technical Support",
      ],
      color: "from-orange-400 to-red-600",
      image: Services2,
    },
    {
      id: 6,
      icon: Sparkles,
      title: "Special Effects",
      description:
        "To make your wedding a memorable affair you need special effects for special occasions. Moments like ring exchange, your first dance, artist performance need to be cherished with effects like confetti blast, CO2 jet, fog effect, cold pyros, CO2 guns etc. We let you choose the right effect for the right occasion making it memorable affair.",
      features: [
        "Confetti & CO2 Effects",
        "Fog & Pyro Displays",
        "Moment-Specific Effects",
      ],
      color: "from-violet-400 to-purple-600",
      image: Services3,
    },
  ];

  const entertainmentFeatures = [
    {
      icon: Music,
      title: "Dance & Music",
      description: "Perfect beats for every celebration moment",
    },
    {
      icon: Star,
      title: "Top Artists",
      description: "Professional performers for unforgettable experiences",
    },
    {
      icon: Sparkles,
      title: "Special Effects",
      description: "Magical moments with stunning visual effects",
    },
    {
      icon: Users,
      title: "Family Performances",
      description: "Choreographed routines for all family members",
    },
  ];

  const entertainmentOptions = [
    {
      icon: Palette,
      title: "Theme Design",
      description: "Custom entertainment themes for each function",
      color: "text-pink-600",
    },
    {
      icon: Star,
      title: "Artist Selection",
      description: "Perfect performers for your budget and style",
      color: "text-blue-600",
    },
    {
      icon: Volume2,
      title: "Sound & Stage",
      description: "Premium audio-visual equipment and setup",
      color: "text-purple-600",
    },
    {
      icon: Sparkles,
      title: "Special Effects",
      description: "Memorable moments with stunning effects",
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
              E N T E R T A I N M E N T
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Big fat Indian weddings are known for dance, masti and dhamaal. At every point guest needs their favourite beats to dance, twist, shout & party to the fullest. We design different themes for each event in a destination wedding to give guests a new tadka in music.
            </p>
            <div className="mt-8">
              <span className="text-sm md:text-base text-gray-500 tracking-wider font-medium">
                ENTERTAINMENT
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
              Our Entertainment Services
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From theme designing to special effects, we create unforgettable entertainment experiences for your destination wedding
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
              { number: "500+", label: "Artists Managed", icon: Star },
              { number: "1000+", label: "Performances Organized", icon: Music },
              { number: "100%", label: "Event Success Rate", icon: Award },
              { number: "24/7", label: "Entertainment Support", icon: Headphones },
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
              Complete Entertainment Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive entertainment approach covers every aspect from theme design to special effects, ensuring your wedding is filled with dance, music, and unforgettable moments
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Theme Designing",
                  description:
                    "Custom entertainment themes for each wedding function",
                  icon: Palette,
                  color: "from-pink-500 to-rose-600",
                  bgColor: "bg-pink-50",
                  borderColor: "border-pink-200",
                  features: [
                    "Function-specific themes",
                    "Traditional to modern",
                    "24/7 entertainment",
                    "Guest experience focus",
                  ],
                },
                {
                  step: "02",
                  title: "Artist Selection",
                  description: "Perfect performers matching your budget and style",
                  icon: Star,
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  features: [
                    "Budget-friendly artists",
                    "Occasion-specific acts",
                    "Latest entertainment",
                    "Popular concepts",
                  ],
                },
                {
                  step: "03",
                  title: "Technical Setup",
                  description:
                    "Premium sound systems and stage aesthetics",
                  icon: Volume2,
                  color: "from-purple-500 to-violet-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  features: [
                    "High-end audio",
                    "LED visual graphics",
                    "Technical support",
                    "Professional setup",
                  ],
                },
                {
                  step: "04",
                  title: "Special Effects",
                  description: "Magical moments with stunning visual effects",
                  icon: Sparkles,
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "bg-emerald-50",
                  borderColor: "border-emerald-200",
                  features: [
                    "Confetti blasts",
                    "CO2 effects",
                    "Fog displays",
                    "Memorable moments",
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

      {/* Entertainment Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-4">
              Our Entertainment Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four core areas that make your destination wedding entertainment truly exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {entertainmentOptions.map((option, index) => (
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

export default Entertainment;
