import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Trophy,
  Target,
  Briefcase,
  Star,
  CheckCircle,
  Calendar,
  Presentation,
  Award,
  Network,
  Coffee,
  Mic,
  Camera,
  Clock,
  Zap,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";

const CorporateEvent = () => {
  const services = [
    {
      id: 1,
      icon: Presentation,
      title: "Corporate Conferences & Seminars",
      description:
        "Professional conference and seminar planning that delivers impactful business experiences. We handle everything from venue selection and speaker coordination to technical setup and attendee management. Our team ensures your corporate message is delivered effectively while maintaining the highest standards of professionalism.",
      features: [],
      color: "from-blue-400 to-indigo-600",
      image: Services1,
    },
    {
      id: 2,
      icon: Award,
      title: "Corporate Awards & Recognition Events",
      description:
        "Celebrate excellence and achievement with sophisticated awards ceremonies and recognition events. We create memorable experiences that honor your team's accomplishments while reinforcing company values and culture. From intimate recognition dinners to grand award galas, we handle every detail.",
      features: [],
      color: "from-amber-400 to-orange-600",
      image: Services2,
    },
    {
      id: 3,
      icon: Network,
      title: "Corporate Team Building & Retreats",
      description:
        "Strengthen team bonds and enhance collaboration through expertly designed team building events and corporate retreats. We create engaging activities and experiences that promote communication, problem-solving, and team cohesion while ensuring everyone has an enjoyable and productive time.",
      features: [],
      color: "from-green-400 to-teal-600",
      image: Services3,
    },
    {
      id: 4,
      icon: Building2,
      title: "Product Launches & Brand Events",
      description:
        "Create buzz and excitement around your new products and brand initiatives with spectacular launch events. We design experiences that capture attention, generate media coverage, and leave lasting impressions on your target audience, stakeholders, and industry influencers.",
      features: [],
      color: "from-purple-400 to-violet-600",
      image: Services1,
    },
    {
      id: 5,
      icon: Briefcase,
      title: "Board Meetings & Executive Events",
      description:
        "Facilitate high-level executive gatherings and board meetings with meticulous attention to detail and confidentiality. We provide sophisticated venues, seamless logistics, and professional support services that enable productive discussions and strategic decision-making.",
      features: [],
      color: "from-slate-400 to-gray-600",
      image: Services2,
    },
    {
      id: 6,
      icon: Coffee,
      title: "Corporate Hospitality & Client Events",
      description:
        "Strengthen business relationships through exceptional corporate hospitality events. From client appreciation dinners to exclusive networking receptions, we create sophisticated experiences that enhance your professional relationships and drive business growth.",
      features: [],
      color: "from-rose-400 to-pink-600",
      image: Services3,
    },
  ];

  const corporateFeatures = [
    {
      icon: Target,
      title: "Strategic Planning",
      description:
        "Goal-oriented event design that aligns with business objectives",
    },
    {
      icon: Users,
      title: "Professional Management",
      description: "Expert coordination ensuring flawless execution",
    },
    {
      icon: Award,
      title: "Brand Excellence",
      description: "Events that enhance and reinforce your corporate brand",
    },
    {
      icon: Network,
      title: "Relationship Building",
      description: "Creating meaningful connections and business opportunities",
    },
  ];

  const eventOptions = [
    {
      icon: Presentation,
      title: "Conferences & Seminars",
      description: "Professional knowledge-sharing and industry events",
      color: "text-blue-600",
    },
    {
      icon: Award,
      title: "Awards & Recognition",
      description: "Celebrating achievements and company milestones",
      color: "text-amber-600",
    },
    {
      icon: Network,
      title: "Team Building",
      description: "Strengthening collaboration and team dynamics",
      color: "text-green-600",
    },
    {
      icon: Building2,
      title: "Product Launches",
      description: "Creating excitement around new products and initiatives",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-14 bg-gradient-to-b bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6 tracking-wider">
              C O R P O R A T E E V E N T S
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Elevate your business presence with professionally managed
              corporate events that drive results. From intimate board meetings
              to large-scale conferences, we create experiences that enhance
              your brand, strengthen relationships, and achieve your business
              objectives with precision and excellence.
            </p>
            <div className="mt-8">
              <span className="text-sm md:text-base text-gray-500 tracking-wider font-medium">
                PROFESSIONAL EVENT EXCELLENCE
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
              { number: "500+", label: "Corporate Events", icon: Building2 },
              { number: "100+", label: "Fortune 500 Clients", icon: Trophy },
              { number: "50,000+", label: "Attendees Managed", icon: Users },
              { number: "98%", label: "Client Satisfaction", icon: Star },
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-6 leading-tight">
              Strategic Corporate Event Planning Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic four-stage approach ensures every corporate event
              aligns with your business objectives and delivers measurable
              results
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Strategic Planning",
                  description:
                    "Understanding objectives and designing strategic event framework",
                  icon: Target,
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  features: [
                    "Objective analysis",
                    "Strategic framework",
                    "Budget planning",
                    "Timeline development",
                  ],
                },
                {
                  step: "02",
                  title: "Event Design",
                  description:
                    "Creating professional experiences that enhance your brand",
                  icon: Presentation,
                  color: "from-indigo-500 to-purple-600",
                  bgColor: "bg-indigo-50",
                  borderColor: "border-indigo-200",
                  features: [
                    "Concept development",
                    "Brand integration",
                    "Experience design",
                    "Content curation",
                  ],
                },
                {
                  step: "03",
                  title: "Professional Coordination",
                  description:
                    "Expert management of all logistical and operational elements",
                  icon: Users,
                  color: "from-purple-500 to-pink-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  features: [
                    "Vendor coordination",
                    "Logistics management",
                    "Technology setup",
                    "Team coordination",
                  ],
                },
                {
                  step: "04",
                  title: "Flawless Execution",
                  description:
                    "Seamless event delivery with professional oversight",
                  icon: Award,
                  color: "from-pink-500 to-rose-600",
                  bgColor: "bg-pink-50",
                  borderColor: "border-pink-200",
                  features: [
                    "Event day management",
                    "Quality assurance",
                    "Problem resolution",
                    "Success measurement",
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
                    <h3 className="text-lg font-bold text-luxury-navy mb-3 group-hover:text-blue-600 transition-colors duration-300">
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

      {/* Corporate Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-4">
              Our Corporate Event Excellence
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four pillars that ensure every corporate event enhances your
              business success and professional reputation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventOptions.map((option, index) => (
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

      {/* Enhanced Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Why Choose Our Corporate Event Services
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional excellence that drives business results and enhances
              your corporate reputation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300"
              >
                <div className="text-blue-600 mb-6 flex justify-center">
                  <feature.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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

export default CorporateEvent;
