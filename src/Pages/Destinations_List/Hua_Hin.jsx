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
  Waves,
  Palmtree,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import sheraton from "../../assets/destination/hua_hin/sheraton.jpg";
import anantara from "../../assets/destination/hua_hin/anantara.jpg";
import avani from "../../assets/destination/hua_hin/avani.jpg";
import dusit from "../../assets/destination/hua_hin/dusit.jpg";
import intercontinental from "../../assets/destination/hua_hin/intercontinental.jpg";
import the from "../../assets/destination/hua_hin/the.jpg";

function HuaHin() {
  const hotels = [
    {
      id: 1,
      name: "Sheraton",
      rooms: 240,
      eventSpaces: 4,
      description:
        "Nestled on the lush beaches of the Gulf of Thailand, this property offers rooms with tropical scenery and private pools to bask in the sun.",
      image:
        sheraton,
      features: [
        "Gulf of Thailand",
        "Tropical Scenery",
        "Private Pools",
        "Lush Beaches",
      ],
    },
    {
      id: 2,
      name: "Anantara",
      rooms: 190,
      eventSpaces: 3,
      description:
        "Set on a traditional Thai village, this resort is located among lush tropical grounds with lotus-filled lagoons and mesmerising pathways making it the perfect spot for your dream wedding.",
      image:
        anantara,
      features: [
        "Traditional Thai Village",
        "Lotus-filled Lagoons",
        "Tropical Grounds",
        "Mesmerising Pathways",
      ],
    },
    {
      id: 3,
      name: "Avani",
      rooms: 196,
      eventSpaces: 3,
      description:
        "Offering the comfort of a luxury beachfront haven combined with the relaxing and peaceful getaway, this property located along the Gulf of Thailand is a go-to-destination for weddings.",
      image:
       avani,
      features: [
        "Luxury Beachfront",
        "Peaceful Getaway",
        "Gulf of Thailand",
        "Go-to Destination",
      ],
    },
    {
      id: 4,
      name: "Dusit Thani",
      rooms: 296,
      eventSpaces: 4,
      description:
        "Steeped in Thai royal heritage, surrounded by lush greenery, it is a property with scenery of idyllic stretch of sand on the Gulf of Thailand making it perfect for a destination wedding.",
      image:
        dusit,
      features: [
        "Thai Royal Heritage",
        "Lush Greenery",
        "Idyllic Sand Stretch",
        "Gulf of Thailand",
      ],
    },
    {
      id: 5,
      name: "InterContinental",
      rooms: 159,
      eventSpaces: 3,
      description:
        "Known for its elegant period architecture, this property is a combination of Eastern and Western design located on a prime stretch of white sandy beach alongside breathtaking Gulf waters.",
      image:
        intercontinental,
      features: [
        "Period Architecture",
        "Eastern-Western Design",
        "White Sandy Beach",
        "Breathtaking Gulf",
      ],
    },
    {
      id: 6,
      name: "The Palayana",
      rooms: 42,
      eventSpaces: 3,
      description:
        "This luxurious resort offers an escape to the tropical along the Cha-am coast, with rooms offering a view of the sea even from the second floor.",
      image:
       the,
      features: [
        "Tropical Escape",
        "Cha-am Coast",
        "Sea Views",
        "Luxurious Resort",
      ],
    },
  ];

  const whyHuaHin = [
    {
      icon: Crown,
      title: "Thai Summer Palaces",
      description:
        "Home to Thai summer palaces with refreshing mix of city and sea, Hua Hin is the OG beach resort city for destination weddings.",
    },
    {
      icon: Waves,
      title: "Luxurious Venues",
      description:
        "Home to a myriad of luxurious venues, Hua Hin offers both intimate and lavish set ups for all kinds of weddings.",
    },
    {
      icon: Palmtree,
      title: "Tropical Paradise",
      description:
        "Experience the perfect blend of tropical beauty and royal heritage in this charming beach resort destination on the Gulf of Thailand.",
    },
    {
      icon: Heart,
      title: "Beach Romance",
      description:
        "Create magical moments on pristine beaches with stunning Gulf waters, offering the perfect backdrop for your special celebration.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-teal-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              HUA&nbsp;HIN
            </h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              HOME TO THAI SUMMER PALACES WITH REFRESHING MIX OF CITY AND SEA,
              HUA HIN IS THE OG BEACH RESORT CITY FOR DESTINATION WEDDINGS.
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
                    <h3 className="text-xl font-bold text-white mb-2">
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
                        className="px-3 py-1 bg-cyan-50 text-gray-600 text-xs rounded-full border border-cyan-100"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
                WEATHER
              </h2>
              <div className="w-16 h-1 bg-blue-900 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-blue-900 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Hua Hin faces pleasant tropical climate round the year.
                    November to February is the best time which is also the
                    usual wedding phase.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-blue-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Climate Features
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Pleasant tropical climate year-round | Cool Season:
                    Nov-Feb (Perfect for weddings) | Warm temperatures ideal
                    for beach celebrations
                  </p>
                </div>
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
                alt="Hua Hin Beach Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Hua Hin Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;HUA&nbsp;HIN?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Home to a myriad of luxurious venues, Hua Hin offers both intimate
              and lavish set ups for all kinds of weddings. Experience the
              perfect blend of royal heritage and tropical paradise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyHuaHin.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300"
              >
                <div className="text-blue-900 mb-6 flex justify-center">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Hua Hin Beach Wedding?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Hua Hin,
              where Thai royal heritage meets tropical paradise on the stunning
              Gulf of Thailand coastline.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Hua Hin Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HuaHin;
