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
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import itcGrandBharat from "../../assets/destination/delhi/itc-grand-bharat.jpg";
import the_leela_palace from "../../assets/destination/delhi/the_leela_palace.jpg";
import itcmaurya_delhi from "../../Assets/destination/itcmaurya_delhi.jpg";
import imperial from "../../assets/destination/delhi/imperial.jpg";
import roseate from "../../assets/destination/delhi/roseate.jpg";
import oberoi from "../../assets/destination/delhi/oberoi.jpg";

function Delhi() {
  const hotels = [
    {
      id: 1,
      name: "ITC Grand Bharat",
      rooms: 100,
      eventSpaces: 4,
      description:
        "Get married in the contemporary and architectural surroundings of the magnificent ITC Grand Bharat, Gurugram and make your D-day unforgettable!",
      image: itcGrandBharat,
      features: [
        "Contemporary Design",
        "Architectural Marvel",
        "Magnificent Setting",
        "Unforgettable Experience",
      ],
    },
    {
      id: 2,
      name: "The Imperial",
      rooms: 235,
      eventSpaces: 3,
      description:
        "With old style and magnificent essence, The Imperial has both indoor and outdoor venues, and is an iconic property to get married!",
      image: imperial,
      features: [
        "Old Style Essence",
        "Indoor & Outdoor",
        "Iconic Property",
        "Magnificent Heritage",
      ],
    },
    {
      id: 3,
      name: "The Roseate",
      rooms: 60,
      eventSpaces: 3,
      description:
        "The picture perfect destination with comfort, luxury and both indoor and outdoor venues - The Roseate New Delhi is one of the beautiful properties in the capital to tie the knot!",
      image: roseate,
      features: [
        "Picture Perfect",
        "Comfort & Luxury",
        "Beautiful Property",
        "Capital's Finest",
      ],
    },
    {
      id: 4,
      name: "The Leela Palace",
      rooms: 254,
      eventSpaces: 4,
      description:
        "The Leela Palace, Chanakyapuri is known for its grandeur and beauty which makes it a perfect venue to host a wedding that is remembered by all!",
      image: the_leela_palace,
      features: [
        "Grandeur & Beauty",
        "Perfect Venue",
        "Memorable Wedding",
        "Chanakyapuri Location",
      ],
    },
    {
      id: 5,
      name: "ITC Maurya",
      rooms: 437,
      eventSpaces: 5,
      description:
        "Get hitched at the ITC Maurya, Chanakyapuri if you've always wished for a royal wedding without missing out the classiness and contemporary details!",
      image: itcmaurya_delhi,
      features: [
        "Royal Wedding",
        "Classiness",
        "Contemporary Details",
        "Premium Location",
      ],
    },
    {
      id: 6,
      name: "The Oberoi",
      rooms: 202,
      eventSpaces: 3,
      description:
        "The Oberoi Gurgaon is one of the most luxurious venues to host a charming wedding celebration with an essence of modernity and architecture!",
      image: oberoi,
      features: [
        "Most Luxurious",
        "Charming Celebration",
        "Modern Essence",
        "Architectural Beauty",
      ],
    },
  ];

  const whyDelhi = [
    {
      icon: Building,
      title: "Urban Setting",
      description:
        "Delhi NCR is a great place to host a wedding in an urban setting that has everything you've dreamt of!",
    },
    {
      icon: Landmark,
      title: "Heritage Tourist Spots",
      description:
        "From great venues to heritage tourist spots, Delhi offers rich cultural backdrops for your wedding.",
    },
    {
      icon: Heart,
      title: "Delicious Food",
      description:
        "Experience the best of Indian cuisine and street food culture that Delhi is famous for worldwide.",
    },
    {
      icon: Star,
      title: "All Budget Venues",
      description:
        "From pocket friendly to grand wedding venues, Delhi NCR has it all, after all, it's known for its beauty all around the world!",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              DELHI NCR
            </h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Delhi NCR is a great place to host a wedding in an urban setting
              that has everything you've dreamt of - from great venues to
              heritage tourist spots to delicious food!
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
                        className="px-3 py-1 bg-red-50 text-gray-600 text-xs rounded-full border border-red-100"
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
                    Delhi the best time is from October to March. The weather
                    during these months is pleasant and proper to host either an
                    outdoor day wedding or evening poolside ceremony.
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
                    Winter: 8-25°C (46-77°F) | Summer: 25-40°C (77-104°F) |
                    Monsoon: 25-35°C (77-95°F)
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
                alt="Delhi Weather and Monuments"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Delhi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;DELHI?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From pocket friendly to grand wedding venues, Delhi NCR has it
              all, after all, it's known for its beauty all around the world!
              Experience the perfect blend of heritage, modernity, and
              hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDelhi.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Capital Wedding?
            </h2>
            <p className="text-lg text-red-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Delhi NCR,
              where heritage meets modernity and every celebration becomes a
              grand affair in India's capital region.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-blue-900 text-blue-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Delhi Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Delhi;
