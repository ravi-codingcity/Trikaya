import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Heart,
  Package,
  Home,
  Star,
  Users,
  CheckCircle,
  Sparkles,
  ShoppingBag,
  Award,
  Target,
  Smile,
  Hand,
  Leaf,
  Zap,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";

const WeddingFavoursGiveaways = () => {
  const services = [
    {
      id: 1,
      icon: Gift,
      title: "Return Gifts",
      description:
        "There are many ways to say 'Thank You' to your guests for being there with you to celebrate happiness. These return gifts are like a token of an unforgettable affair that your guests will always remember. We help you pick and choose from a variety of thoughtful and fancy return gifts according to your tastes and likes and dislikes. Now these can be sweet boxes, plant pots, idol of God and many more. We make sure to get it packed and ready in the most attractive way ever!",
      features: [
        "Thoughtful Gift Selection",
        "Attractive Packaging",
        "Personalized Options",
      ],
      color: "from-pink-400 to-rose-600",
      image: Services1,
    },
    {
      id: 2,
      icon: ShoppingBag,
      title: "Give Aways",
      description:
        "Giveaways are like unexpected gifts that your guests can choose and pick from your wedding celebrations and take home with them. You have no idea how delighted you will feel seeing your guests happy and excited engaging with giveaways you set for them! We have a wide range of options for you to decide from like potlis, bangles, hath phool etc for Mehendi or Haldi function and more for every function. Let's not forget taking care of our guests who are the charm of your celebration!",
      features: [
        "Function-Specific Giveaways",
        "Traditional Items Collection",
        "Guest Engagement Focus",
      ],
      color: "from-blue-400 to-indigo-600",
      image: Services2,
    },
    {
      id: 3,
      icon: Package,
      title: "Room Hampers",
      description:
        "There are times your guests are flying in for your wedding and giving the perfect welcome to each and everyone is not possible. Here comes the idea of room hampers placed in your guest's room to show them how glad you are to have them for your ceremony and to also ensure their stay is comfortable and joyful. We help you curate beautiful hampers using exclusive, popular and imported products to pamper your guests. We also have ideas for personalised hampers and baskets to serve your guests with immense love and hospitality!",
      features: [
        "Exclusive Product Curation",
        "Personalized Hampers",
        "Luxury Guest Experience",
      ],
      color: "from-purple-400 to-violet-600",
      image: Services3,
    },
  ];

  const favorFeatures = [
    {
      icon: Gift,
      title: "Thoughtful Returns",
      description: "Meaningful gifts that create lasting memories",
    },
    {
      icon: Sparkles,
      title: "Exciting Giveaways",
      description: "Interactive gifts that delight your guests",
    },
    {
      icon: Package,
      title: "Luxury Hampers",
      description: "Premium welcome gifts for special guests",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Customized favors that reflect your style",
    },
  ];

  const giftOptions = [
    {
      icon: Gift,
      title: "Return Gifts",
      description: "Thoughtful tokens of appreciation and memories",
      color: "text-pink-600",
    },
    {
      icon: ShoppingBag,
      title: "Interactive Giveaways",
      description: "Engaging gifts for every wedding function",
      color: "text-blue-600",
    },
    {
      icon: Package,
      title: "Room Hampers",
      description: "Luxury welcome packages for traveling guests",
      color: "text-purple-600",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description: "Sustainable and environmentally conscious gifts",
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
              W E D D I N G   F A V O R S   &   G I V E A W A Y S
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Your guests come from near or far places to be a part of your happy day and shower their blessings. It's our duty to make them feel important and comfortable during your wedding celebrations. There are various kinds of wedding favours and gifts to add that personal touch and affection towards your guest. We offer plenty of options of trending, new and eco friendly gifts and favours to choose from to make sure your guests have a great experience during the wedding days!
            </p>
            <div className="mt-8">
              <span className="text-sm md:text-base text-gray-500 tracking-wider font-medium">
                WEDDING FAVOR AND GIVEAWAY
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
              Our Wedding Favor & Giveaway Services
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From return gifts to room hampers, we create memorable experiences that show your guests how much they mean to you
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
              { number: "1000+", label: "Unique Gift Ideas", icon: Gift },
              { number: "100%", label: "Guest Satisfaction", icon: Smile },
              { number: "500+", label: "Custom Hampers Created", icon: Package },
              { number: "∞", label: "Personalization Options", icon: Heart },
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
              Creating Memorable Guest Experiences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive approach to wedding favors and giveaways ensures every guest feels appreciated and creates lasting memories of your special day
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Return Gifts",
                  description:
                    "Thoughtful tokens of appreciation for your guests",
                  icon: Gift,
                  color: "from-pink-500 to-rose-600",
                  bgColor: "bg-pink-50",
                  borderColor: "border-pink-200",
                  features: [
                    "Sweet boxes",
                    "Plant pots",
                    "Religious idols",
                    "Attractive packaging",
                  ],
                },
                {
                  step: "02",
                  title: "Interactive Giveaways",
                  description: "Engaging gifts for every wedding function",
                  icon: ShoppingBag,
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  features: [
                    "Potlis & bangles",
                    "Hath phool",
                    "Function-specific items",
                    "Guest engagement",
                  ],
                },
                {
                  step: "03",
                  title: "Luxury Room Hampers",
                  description: "Premium welcome packages for traveling guests",
                  icon: Package,
                  color: "from-purple-500 to-violet-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  features: [
                    "Exclusive products",
                    "Imported items",
                    "Personalized baskets",
                    "Luxury hospitality",
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
                  {index < 2 && (
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

      {/* Gift Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-luxury-navy mb-4">
              Our Gift & Favor Categories
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four specialized categories ensuring every guest feels valued and appreciated
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {giftOptions.map((option, index) => (
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

export default WeddingFavoursGiveaways;
