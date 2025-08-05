import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Heart,
  Sparkles,
  Gift,
  Star,
  Zap,
  CheckCircle,
  Smile,
  PartyPopper,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";

const InnovationsAndConcepts = () => {
  const services = [
    {
      id: 1,
      icon: Heart,
      title: "Every Wedding is a New Story",
      description:
        "Over the years, personalisation has increased in every wedding celebration. It's the time to celebrate you - everything should be about you! Template weddings are cliché. Creating our own template is what we propose to our clients. For us, every wedding is a new story with new personalised styles and trends.",
      features: [
        "Personalized Style Development",
        "Custom Template Creation",
        "Unique Story Telling",
      ],
      color: "from-pink-400 to-rose-600",
      image: Services1,
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "New Concepts",
      description:
        "Nowadays, every couple wishes to add something new to their celebrations. We sit with you to discuss about the creativity and uniqueness that we can use in every aspect. Why not wow your guests with fun, quirky and attractive experiences? We help you set the trend and not follow them!",
      features: [
        "Creative Brainstorming",
        "Unique Experience Design",
        "Trendsetting Concepts",
      ],
      color: "from-blue-400 to-indigo-600",
      image: Services2,
    },
    {
      id: 3,
      icon: Gift,
      title: "Surprise Elements",
      description:
        "We, as planners, propose that unexpected 'SHHH...' element for your big day to surprise your guests, family members and even your better half! Give the crowd something to talk about for years. Each surprise concept is a new innovation to break the norm and make your big day extra special for you and your guests!",
      features: [
        "Unexpected Surprises",
        "Memorable Moments",
        "Norm-Breaking Innovations",
      ],
      color: "from-purple-400 to-violet-600",
      image: Services3,
    },
    {
      id: 4,
      icon: Smile,
      title: "Fun Activities",
      description:
        "A wedding is something that is to be cherished and remembered for life. Chalking out ways and activities to spice up the day and uplift the mood of your guests is really important. More engagement means more fun, which will obviously be remembered. We ideate on engagement activities for people of all age groups to make them experience the thrill of your union!",
      features: [
        "Engaging Activities",
        "All Age Group Entertainment",
        "Memorable Experiences",
      ],
      color: "from-emerald-400 to-teal-600",
      image: Services1,
    },
  ];

  const innovationFeatures = [
    {
      icon: Sparkles,
      title: "Creative Innovation",
      description:
        "Bringing fresh ideas and unique concepts to every celebration",
    },
    {
      icon: Star,
      title: "Personalized Touch",
      description: "Every wedding tells a unique story tailored just for you",
    },
    {
      icon: Gift,
      title: "Surprise Elements",
      description: "Unexpected moments that create lasting memories",
    },
    {
      icon: PartyPopper,
      title: "Engaging Activities",
      description: "Fun experiences for guests of all ages",
    },
  ];

  const conceptOptions = [
    {
      icon: Heart,
      title: "Personal Stories",
      description: "Unique narratives and personalized themes",
      color: "text-pink-600",
    },
    {
      icon: Lightbulb,
      title: "Creative Concepts",
      description: "Innovative ideas and trendsetting elements",
      color: "text-blue-600",
    },
    {
      icon: Gift,
      title: "Surprise Elements",
      description: "Unexpected moments and memorable surprises",
      color: "text-purple-600",
    },
    {
      icon: Smile,
      title: "Fun Activities",
      description: "Engaging entertainment for all guests",
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
              I N N O V A T I O N A N D C O N C E P T S
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              We all want our wedding to be etched in not only our memories but
              even in our guest's too! Each effort, idea and concept counts from
              discovering trends to ideating new trends and concepts, we aim to
              create something new in every wedding we plan. We excel in
              personalizing and customizing every wedding to create an
              extraordinary experience.
            </p>
            <div className="mt-8">
              <span className="text-sm md:text-base text-gray-500 tracking-wider font-medium">
                INNOVATION AND CONCEPTS
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
              Our Innovation & Concept Services
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From personalized storytelling to surprise elements, we create
              unique experiences that make your wedding unforgettable
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
              {
                number: "500+",
                label: "Unique Concepts Created",
                icon: Lightbulb,
              },
              { number: "100%", label: "Personalized Weddings", icon: Heart },
              { number: "1000+", label: "Surprise Elements", icon: Gift },
              { number: "∞", label: "Creative Possibilities", icon: Sparkles },
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
              From Concept to Extraordinary Reality
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our creative four-stage approach transforms ordinary celebrations
              into extraordinary experiences that set new trends and create
              lasting memories
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Personal Stories",
                  description:
                    "Creating unique narratives that reflect your journey",
                  icon: Heart,
                  color: "from-pink-500 to-rose-600",
                  bgColor: "bg-pink-50",
                  borderColor: "border-pink-200",
                  features: [
                    "Story development",
                    "Personal themes",
                    "Custom templates",
                    "Unique narratives",
                  ],
                },
                {
                  step: "02",
                  title: "Creative Concepts",
                  description:
                    "Innovative ideas that set trends and wow guests",
                  icon: Lightbulb,
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  features: [
                    "Trend setting",
                    "Creative brainstorming",
                    "Unique experiences",
                    "Innovation focus",
                  ],
                },
                {
                  step: "03",
                  title: "Surprise Elements",
                  description:
                    "Unexpected moments that create unforgettable memories",
                  icon: Gift,
                  color: "from-purple-500 to-violet-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  features: [
                    "Surprise planning",
                    "Memorable moments",
                    "Unexpected elements",
                    "Norm breaking",
                  ],
                },
                {
                  step: "04",
                  title: "Fun Activities",
                  description: "Engaging entertainment for all age groups",
                  icon: Smile,
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "bg-emerald-50",
                  borderColor: "border-emerald-200",
                  features: [
                    "All-age activities",
                    "Guest engagement",
                    "Interactive fun",
                    "Memorable thrills",
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

      {/* Innovation Approach */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-4">
              Our Innovation Approach
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four pillars of creativity that transform ordinary celebrations
              into extraordinary experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conceptOptions.map((option, index) => (
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

export default InnovationsAndConcepts;
