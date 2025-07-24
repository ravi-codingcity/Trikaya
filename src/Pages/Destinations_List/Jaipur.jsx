import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Calendar,
  Users,
  Bed,
  Building,
  Crown,
  Heart,
  Sun,
  Thermometer,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import jaipur from "../../assets/jaipur.png"; // Assuming you have a jaipur image in assets
import theleelapalace_jaipur  from "../../assets/destination/jaipur/leelaplace_jaipur.jpg"; 
import fairmont from "../../assets/destination/jaipur/fairmont.jpg"; 
import rambaghpalace from "../../assets/destination/jaipur/rambaghpalace.jpg"; 
import hyatt_regency from "../../assets/destination/jaipur/hyatt_regency.jpg"; 
import alila_fort_bishangarh from "../../assets/destination/jaipur/alila_fort_bishangarh.jpg"; 
import jai_mahal_palace from "../../assets/destination/jaipur/jai_mahal_palace.jpg"; 

function Jaipur() {
  const hotels = [
    {
      id: 1,
      name: "Fairmont",
      rooms: 248,
      eventSpaces: 4,
      description:
        "The hallmarks of the brand Fairmont are its impressive decor, architecture, services! This property focuses on connecting its guests to extraordinary places.",
      image:
        fairmont,
      features: [
        "Impressive Decor",
        "Luxury Architecture",
        "Premium Services",
        "Extraordinary Experience",
      ],
    },
    {
      id: 2,
      name: "Rambagh Palace",
      rooms: 78,
      eventSpaces: 6,
      description:
        "If splendour and luxury is what you wish to experience in your dream wedding, then the grandeur of this golden land of Rajasthan - Rambagh is the right place for you to get hitched!",
      image:
        rambaghpalace,
      features: [
        "Royal Heritage",
        "Luxury Suites",
        "Palace Gardens",
        "Golden Architecture",
      ],
    },
    {
      id: 3,
      name: "Jai Mahal Palace",
      rooms: 100,
      eventSpaces: 3,
      description:
        "Jai Mahal Palace offers a perfect venue for your fairy tale wedding with a pinch of picturesque exuberance of royalty!",
      image:
        jai_mahal_palace,
      features: [
        "Fairy Tale Setting",
        "Royal Exuberance",
        "Picturesque Views",
        "Palace Heritage",
      ],
    },
    {
      id: 4,
      name: "The Leela Palace",
      rooms: 198,
      eventSpaces: 8,
      description:
        "The Leela Palace Jaipur is known for memorable weddings providing 50,000 square feet of indoor and outdoor celebrations space - Grand Ballroom and Verdant Lawns.",
      image:
        theleelapalace_jaipur,
      features: [
        "Grand Ballroom",
        "Verdant Lawns",
        "50,000 sq ft Space",
        "Memorable Weddings",
      ],
    },
    {
      id: 5,
      name: "Hyatt Regency Hotel",
      rooms: 245,
      eventSpaces: 5,
      description:
        "That flamboyance of Rajasthani architecture and heritage is all you need for your extravagant wedding at Hyatt Regency Jaipur Mansarovar.",
      image:
        hyatt_regency,
      features: [
        "Rajasthani Architecture",
        "Heritage Design",
        "Extravagant Venues",
        "Mansarovar Location",
      ],
    },
    {
      id: 6,
      name: "Alila Fort Palace",
      rooms: 59,
      eventSpaces: 3,
      description:
        "The best property that offers heavenly views - Alila Fort, Bishangarh, is known for hosting grand royal weddings connecting you with the roots of Rajasthan and its history!",
      image:
        alila_fort_bishangarh,
      features: [
        "Heavenly Views",
        "Royal Weddings",
        "Historical Roots",
        "Fort Architecture",
      ],
    },
  ];

  const whyJaipur = [
    {
      icon: MapPin,
      title: "Central Location",
      description:
        "Connected to all major cities in India, making it easily accessible for guests.",
    },
    {
      icon: Crown,
      title: "Royal Heritage",
      description:
        "Rich history and grand venues that provide unique royal backdrops.",
    },
    {
      icon: Building,
      title: "Architectural Opulence",
      description:
        "Stunning palaces and heritage hotels with magnificent architecture.",
    },
    {
      icon: Heart,
      title: "Perfect for Destination Weddings",
      description:
        "The Pink City offers everything needed for a grand royal wedding celebration.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-orange-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              JAIPUR
            </h1>
            <div className="w-28 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              A dream of grand and royal wedding in an architecturally opulent
              city can be fulfilled by choosing Jaipur - The Pink City!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Top Hotels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-luxury-navy mb-4 tracking-wider">
              TOP&nbsp;HOTELS
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-blue-900 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {hotel.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-600">
                      <Bed size={18} className="mr-2 text-blue-900" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-blue-900" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Event Spaces
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {hotel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-50 text-gray-600 text-xs rounded-full border border-pink-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6 tracking-wider">
                WEATHER
              </h2>
              <div className="w-16 h-1 bg-blue-900 mb-6"></div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Sun className="text-blue-900 mr-3" size={24} />
                  <span className="text-lg font-semibold text-luxury-navy">
                    Best Season
                  </span>
                </div>
                <p className="text-gray-600">
                  October to March offers pleasant weather perfect for outdoor
                  wedding celebrations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={Weather}
                alt="Jaipur Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Jaipur Section */}
      <section className="pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;JAIPUR?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Being one of the places connected to all major cities in India,
              Jaipur is all about history, grand venues and unique backdrops,
              making it a perfect choice for a royal destination wedding!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJaipur.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-100 p-8 rounded-xl border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300"
              >
                <div className="text-red-600 mb-6 flex justify-center">
                  <reason.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <img src={jaipur} alt="" />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-navy to-luxury-green">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Royal Wedding?
            </h2>
            <p className="text-lg text-pink-100 mb-8 mx-auto">
              Let us help you plan the perfect destination wedding in the
              magnificent Pink City of Jaipur.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-blue-900 text-blue-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Plan Your Jaipur Wedding
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Jaipur;
