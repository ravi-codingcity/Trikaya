import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Heart,
  Calendar,
  FileText,
  Users,
  Star,
  CheckCircle,
  Sparkles,
  Palette,
  Award,
  Target,
  Smile,
  Layout,
  PenTool,
  Newspaper,
  Zap,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";

const StationeryAndInvites = () => {
  const services = [
    {
      id: 1,
      icon: Mail,
      title: "E-Invite & Save The Date",
      description:
        "First things first! Your invitations and save the dates! There are 'N' number of options and ideas for the kind of E-invites or save the dates for your guests. But, implementing new innovations every time is what makes it more exciting. The BandBaajaa team tries to personalise the invites in the best way possible. We brainstorm ideas and create it for you, tell us if you don't fall in love with it!",
      features: [
        "Innovative Design Concepts",
        "Personalized Invitations",
        "Creative Brainstorming",
      ],
      color: "from-pink-400 to-rose-600",
      image: Services1,
    },
    {
      id: 2,
      icon: FileText,
      title: "Itinerary & Room Stationery",
      description:
        "Giving the guests the ultimate experience and to make them feel special is really important, after all they have travelled all the way to celebrate your special day with you. Even the tiniest of things can make them feel important. As soon as the guests reach, the 'Khatirdari' begins! Luggage tags and key cards during check in, wedding itinerary with the flow of celebration, wedding newspapers and many more stuff are prepared to serve your guests during their stay. Guess what, every item is customised and personalised in the most attractive way possible!",
      features: [
        "Complete Guest Experience",
        "Custom Luggage Tags & Key Cards",
        "Wedding Itinerary Planning",
      ],
      color: "from-blue-400 to-indigo-600",
      image: Services2,
    },
    {
      id: 3,
      icon: Layout,
      title: "Quirky Event Board",
      description:
        "Add a fun element to your traditional decor with sign boards in any shape, size, colour, place! Quirky boards are a must have in your wedding celebrations to make it attractive, increase guest engagement and let happiness flow in the air! We personalise and customise all signages and boards according to the couple and the theme decided for each function. Making your celebration colourful and exciting is what we aim for!",
      features: [
        "Custom Shape & Size Boards",
        "Theme-Based Signages",
        "Guest Engagement Focus",
      ],
      color: "from-purple-400 to-violet-600",
      image: Services3,
    },
    {
      id: 4,
      icon: Palette,
      title: "Theme Based Stationery",
      description:
        "Wedding stationery can include anything and everything - cards, tags, newspaper and what not! The options are endless! The designs of every type of stationery is thought and planned well before time according to the theme of different functions. The BandBaajaa team never fails to keep its aesthetic game strong and appealing. Such small elements play a major role when it comes to making your wedding unforgettable. We plan and help you decide what kind of stationery will be the best for your day and make sure its in place on the D-day!",
      features: [
        "Endless Design Options",
        "Function-Specific Themes",
        "Aesthetic Excellence",
      ],
      color: "from-emerald-400 to-teal-600",
      image: Services1,
    },
  ];

  const stationeryFeatures = [
    {
      icon: Mail,
      title: "Creative Invitations",
      description: "Innovative and personalized e-invites that wow your guests",
    },
    {
      icon: FileText,
      title: "Guest Experience",
      description: "Complete stationery suite for ultimate guest comfort",
    },
    {
      icon: Layout,
      title: "Quirky Signages",
      description: "Fun and engaging boards that add excitement",
    },
    {
      icon: Palette,
      title: "Theme Consistency",
      description: "Cohesive design across all wedding stationery",
    },
  ];

  const designOptions = [
    {
      icon: Mail,
      title: "Digital Invitations",
      description: "Innovative e-invites and save the date designs",
      color: "text-pink-600",
    },
    {
      icon: FileText,
      title: "Guest Stationery",
      description: "Complete suite from luggage tags to itineraries",
      color: "text-blue-600",
    },
    {
      icon: Layout,
      title: "Event Signages",
      description: "Quirky boards and signs for every function",
      color: "text-purple-600",
    },
    {
      icon: Newspaper,
      title: "Custom Elements",
      description: "Wedding newspapers and themed stationery",
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
              S T A T I O N E R Y   &   I N V I T E S
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              That "extra" element in your wedding is added by all kinds of quirky and fun things to create an enjoyable experience during your wedding. Attractive save the dates, stationery for making guests feel special, funky and colourful elements to make your function look exciting, we plan and do it all. Creating a new experience with every new wedding we plan is one of the most enjoyable and creative tasks in wedding planning offered by BandBaajaa!
            </p>
            <div className="mt-8">
              <span className="text-sm md:text-base text-gray-500 tracking-wider font-medium">
                STATIONERY AND INVITES
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
              Our Stationery & Invitation Services
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From innovative e-invites to quirky event boards, we create memorable stationery experiences that set the perfect tone for your celebration
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
              { number: "1000+", label: "Unique Designs Created", icon: PenTool },
              { number: "100%", label: "Personalized Stationery", icon: Heart },
              { number: "500+", label: "Quirky Boards Made", icon: Layout },
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
              Complete Stationery Design Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive stationery approach covers every touchpoint from the first invitation to the last thank you note, ensuring consistent beauty throughout your celebration
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Digital Invitations",
                  description:
                    "Innovative e-invites and save the date designs",
                  icon: Mail,
                  color: "from-pink-500 to-rose-600",
                  bgColor: "bg-pink-50",
                  borderColor: "border-pink-200",
                  features: [
                    "Creative concepts",
                    "Personalized designs",
                    "Innovation focus",
                    "Guest excitement",
                  ],
                },
                {
                  step: "02",
                  title: "Guest Experience Suite",
                  description: "Complete stationery for ultimate guest comfort",
                  icon: FileText,
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  features: [
                    "Luggage tags",
                    "Key cards",
                    "Wedding itinerary",
                    "Guest newspapers",
                  ],
                },
                {
                  step: "03",
                  title: "Quirky Event Boards",
                  description:
                    "Fun signages that add excitement to celebrations",
                  icon: Layout,
                  color: "from-purple-500 to-violet-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  features: [
                    "Custom shapes",
                    "Theme-based design",
                    "Guest engagement",
                    "Colorful elements",
                  ],
                },
                {
                  step: "04",
                  title: "Theme Consistency",
                  description: "Cohesive design across all wedding elements",
                  icon: Palette,
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "bg-emerald-50",
                  borderColor: "border-emerald-200",
                  features: [
                    "Aesthetic excellence",
                    "Function-specific themes",
                    "Endless options",
                    "D-day perfection",
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

      {/* Design Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-4">
              Our Design Categories
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four specialized areas that cover every stationery need for your perfect wedding celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designOptions.map((option, index) => (
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

export default StationeryAndInvites;
