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
  Castle,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import umaid from "../../assets/destination/jodhpur/umaid.jpg";
import raas from "../../assets/destination/jodhpur/raas.jpg";
import inadana from "../../assets/destination/jodhpur/indiana.jpg";
import taj from "../../assets/destination/jodhpur/taj.jpg";
import ajit from "../../assets/destination/jodhpur/ajit.jpg";
import radisson from "../../assets/destination/jodhpur/radisson.jpg";

function Jodhpur() {
  const hotels = [
    {
      id: 1,
      name: "Umaid Bhawan Palace",
      rooms: 70,
      eventSpaces: 3,
      description:
        "A magnificent piece of Jodhpur's heritage - Umaid Bhawan is a great fit for a big fat royal wedding that'll look straight out of a fairytale!",
      image:
        umaid,
      features: [
        "Jodhpur's Heritage",
        "Royal Wedding",
        "Fairytale Setting",
        "Magnificent Palace",
      ],
    },
    {
      id: 2,
      name: "Raas",
      rooms: 39,
      eventSpaces: 3,
      description:
        "A fusion of ancient and modern style - Raas Jodhpur offers Haveli like architecture, which is a plus if you wish to have a grand backdrop for your wedding!",
      image:
        raas,
      features: [
        "Ancient & Modern",
        "Haveli Architecture",
        "Grand Backdrop",
        "Fusion Style",
      ],
    },
    {
      id: 3,
      name: "Indana Palace",
      rooms: 88,
      eventSpaces: 3,
      description:
        "Indana Palace, Jodhpur is one of the popular palaces to tie the knot adding a perfect combination of both the old and new world luxurious architecture!",
      image:
        inadana,
      features: [
        "Popular Palace",
        "Old & New World",
        "Luxurious Architecture",
        "Perfect Combination",
      ],
    },
    {
      id: 4,
      name: "Taj Hari Mahal",
      rooms: 93,
      eventSpaces: 3,
      description:
        "A marvellous property - Taj Hari Mahal, Jodhpur is an epitome of luxury with an essence of cultural heritage and a dream venue for a destination wedding!",
      image:
        taj,
      features: [
        "Marvellous Property",
        "Epitome of Luxury",
        "Cultural Heritage",
        "Dream Venue",
      ],
    },
    {
      id: 5,
      name: "Ajit Bhawan",
      rooms: 70,
      eventSpaces: 4,
      description:
        "Ajit Bhawan, Jodhpur - India's first heritage hotel, is a retreat known for tradition and heritage, making it perfect for a heavenly Indian wedding!",
      image:
        ajit,
      features: [
        "First Heritage Hotel",
        "Tradition & Heritage",
        "Heavenly Indian Wedding",
        "Perfect Retreat",
      ],
    },
    {
      id: 6,
      name: "Radisson",
      rooms: 96,
      eventSpaces: 3,
      description:
        "Hosting a destination wedding at the Royal Radisson Jodhpur is all about regality, luxury, and that magical spark needed to make your special day memorable!",
      image:
        radisson,
      features: [
        "Royal Radisson",
        "Regality & Luxury",
        "Magical Spark",
        "Memorable Day",
      ],
    },
  ];

  const whyJodhpur = [
    {
      icon: Castle,
      title: "Rich Backdrops",
      description:
        "Rich backdrops, historic culture and architecture, and spectacular surroundings in Jodhpur make it one of the best destinations to get married!",
    },
    {
      icon: Crown,
      title: "Gateway to Royalty",
      description:
        "Jodhpur is not only the gateway to Thar but also the gateway to your wedding as it offers a touch of royalty and heritage to your wedding!",
    },
    {
      icon: Shield,
      title: "Blue City",
      description:
        "Experience the magic of the Blue City with its majestic forts, palaces, and traditional Rajasthani architecture for an unforgettable celebration.",
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      description:
        "Immerse yourself in the rich cultural heritage of Rajasthan with traditional ceremonies and royal hospitality in the heart of the Thar Desert.",
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
              JODHPUR
            </h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              RICH BACKDROPS, HISTORIC CULTURE AND ARCHITECTURE, AND
              SPECTACULAR SURROUNDINGS IN JODHPUR MAKE IT ONE OF THE BEST
              DESTINATIONS TO GET MARRIED!
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
                    You can plan your destination wedding in Jodhpur between
                    October to March. These months have dry and cool weather.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-blue-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Temperature Range
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Winter: 10-25°C (50-77°F) | Summer: 25-45°C (77-113°F) |
                    Pleasant: Oct-Mar (Perfect for celebrations)
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
                alt="Jodhpur Desert Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Jodhpur Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;JODHPUR?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Jodhpur is not only the gateway to Thar but also the gateway to
              your wedding as it offers a touch of royalty and heritage to your
              wedding! Experience the magnificent Blue City with its rich
              backdrops and spectacular surroundings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJodhpur.map((reason, index) => (
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
              Ready for Your Blue City Wedding Dream?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Jodhpur,
              where royal palaces, cultural heritage, and majestic forts create
              an unforgettable celebration in the heart of Rajasthan.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Jodhpur Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Jodhpur;
