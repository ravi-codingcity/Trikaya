import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Home,
  Calendar,
  Shield,
  Star,
  CheckCircle,
  UserCheck,
  Coffee,
  Clock,
  MapPin,
  Utensils,
  Car,
  Gift,
  Sparkles,
  Award,
  Zap,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";

const HospitalityManagement = () => {
  const services = [
    {
      id: 1,
      icon: Home,
      title: "Guest Accommodation",
      description:
        "We ensure your guests have the most comfortable stay during your celebration. From room allocation to special amenities, we coordinate every detail to make their experience memorable. Our team manages check-ins, room service, and any special requirements your guests might have throughout their stay.",
      features: [
        "Room Allocation Management",
        "Check-in/Check-out Coordination",
        "Special Amenities Arrangement",
        "Guest Comfort Monitoring",
        "24/7 Accommodation Support",
      ],
      color: "from-blue-400 to-blue-600",
      image: Services1,
    },
    {
      id: 2,
      icon: Car,
      title: "Transportation Services",
      description:
        "Seamless transportation arrangements for all your guests from arrival to departure. We coordinate airport pickups, local transfers, and ensure everyone reaches venues on time. Our transportation management includes luxury vehicles, group transport, and special arrangements for elderly or VIP guests.",
      features: [
        "Airport Pickup/Drop Services",
        "Local Transportation Coordination",
        "Luxury Vehicle Arrangements",
        "Group Transport Management",
        "VIP Guest Special Services",
      ],
      color: "from-green-400 to-teal-600",
      image: Services2,
    },
    {
      id: 3,
      icon: Utensils,
      title: "Dining & Catering Coordination",
      description:
        "Exceptional dining experiences tailored to your guests' preferences and dietary requirements. We coordinate with the best caterers and restaurants to ensure every meal is memorable. From welcome drinks to special dietary accommodations, we handle all culinary aspects of guest hospitality.",
      features: [
        "Customized Menu Planning",
        "Dietary Requirement Management",
        "Premium Catering Coordination",
        "Welcome Refreshments",
        "Special Meal Arrangements",
      ],
      color: "from-orange-400 to-red-600",
      image: Services3,
    },
    {
      id: 4,
      icon: Coffee,
      title: "Guest Experience Enhancement",
      description:
        "Creating unforgettable experiences through personalized services and thoughtful touches. We organize welcome ceremonies, local sightseeing tours, cultural experiences, and recreational activities to make your guests' stay truly special and memorable.",
      features: [
        "Welcome Ceremony Organization",
        "Local Sightseeing Tours",
        "Cultural Experience Planning",
        "Recreational Activities",
        "Personalized Guest Services",
      ],
      color: "from-purple-400 to-violet-600",
      image: Services1,
    },
    {
      id: 5,
      icon: Shield,
      title: "Guest Concierge Services",
      description:
        "Dedicated concierge team to assist guests with any request or need during their stay. From local recommendations to emergency assistance, our concierge services ensure guests feel cared for and supported throughout the celebration period.",
      features: [
        "24/7 Concierge Support",
        "Local Recommendations",
        "Emergency Assistance",
        "Personal Shopping Services",
        "Special Request Fulfillment",
      ],
      color: "from-indigo-400 to-purple-600",
      image: Services2,
    },
    {
      id: 6,
      title: "Welcome & Farewell Services",
      icon: Gift,
      description:
        "Creating memorable first and last impressions through thoughtful welcome and farewell services. We organize reception ceremonies, distribute welcome gifts, coordinate farewell gatherings, and ensure guests leave with beautiful memories of your celebration.",
      features: [
        "Guest Reception Ceremonies",
        "Welcome Gift Distribution",
        "Farewell Event Coordination",
        "Memory Collection Services",
        "Thank You Gesture Management",
      ],
      color: "from-pink-400 to-rose-600",
      image: Services3,
    },
  ];

  const hospitalityFeatures = [
    {
      icon: UserCheck,
      title: "Guest Reception",
      description:
        "Ensuring your guests feel welcomed from the moment they arrive",
    },
    {
      icon: Home,
      title: "Accommodation Management",
      description: "Managing comfortable accommodations for all your guests",
    },
    {
      icon: Car,
      title: "Transportation Coordination",
      description: "Seamless transport arrangements from arrival to departure",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Treating guests with warmth and personalized care",
    },
    {
      icon: Utensils,
      title: "Dining Excellence",
      description: "Exceptional culinary experiences for every guest",
    },
    {
      icon: Gift,
      title: "Welcome Services",
      description: "Creating memorable first impressions and lasting memories",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-14 bg-gradient-to-b bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-orange-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6 tracking-wider">
              H O S P I T A L I T Y   M A N A G E M E N T
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Guests are the charm of the wedding, don't they deserve the right
              "Khatirdari"? The BandBaajaa team makes an effort to treat them
              the way you would, personally. From making sure they reach the
              destination, making their stay comfortable with fun experiences to
              giving them a joyful goodbye, we do it all!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Our Hospitality Services
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From arrival to departure, we ensure every guest experiences the warmth and care that makes your celebration truly special
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`p-8 lg:p-12 ${
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

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
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

      {/* Hospitality Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Complete Guest Care Excellence
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Six pillars of hospitality that ensure every guest feels valued and cared for
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300"
              >
                <div className="text-red-600 mb-6 flex justify-center">
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

      {/* Statistics Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Guests", icon: Heart },
              { number: "10,000+", label: "Guests Hosted", icon: Users },
              { number: "100%", label: "Guest Satisfaction", icon: CheckCircle },
              { number: "24/7", label: "Hospitality Support", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg"
              >
                <stat.icon
                  size={48}
                  className="text-blue-900 mx-auto mb-4"
                />
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-navy to-blue-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Exceptional Guest Experiences?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              Let our dedicated hospitality team ensure every guest feels valued, comfortable, and truly welcomed throughout your celebration.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-blue-100 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Plan Guest Hospitality
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HospitalityManagement;
