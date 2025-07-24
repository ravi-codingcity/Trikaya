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
  Gem,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import surya from "../../assets/destination/jaisalmer/surya.jpg";
import tulip from "../../assets/destination/jaisalmer/tulip.jpg";
import choki from "../../assets/destination/jaisalmer/choki.jpg";
import marriot from "../../assets/destination/jaisalmer/marriot.jpg";
import saira from "../../assets/destination/jaisalmer/saira.jpg";
import fort from "../../assets/destination/jaisalmer/fort.jpg";

function Jaisalmer() {
  const hotels = [
    {
      id: 1,
      name: "Suryagarh",
      rooms: 83,
      eventSpaces: 4,
      description:
        "Luxury and tradition come hand in hand at this Suryagarh Palace, Jaisalmer, located in the dusty dunes of the desert city, making it perfect for your royal wedding!",
      image:
        surya,
      features: [
        "Luxury & Tradition",
        "Desert Palace",
        "Dusty Dunes",
        "Royal Wedding",
      ],
    },
    {
      id: 2,
      name: "The Desert Tulip and Resort",
      rooms: 64,
      eventSpaces: 3,
      description:
        "Desert Tulip Jaisalmer stands in the enigmatic Thar and offers an ideal venue to host a grand magnificent wedding with an essence of Indian heritage!",
      image:
        tulip,
      features: [
        "Enigmatic Thar",
        "Grand Magnificent",
        "Indian Heritage",
        "Ideal Venue",
      ],
    },
    {
      id: 3,
      name: "Chokhi Dhani",
      rooms: 43,
      eventSpaces: 3,
      description:
        "Chokhi Dhani is a huge and beautifully built palace like property that is ideal for big and small weddings with a picture perfect backdrop.",
      image:
        choki,
      features: [
        "Palace Property",
        "Big & Small Weddings",
        "Picture Perfect",
        "Beautiful Built",
      ],
    },
    {
      id: 4,
      name: "Marriott",
      rooms: 135,
      eventSpaces: 4,
      description:
        "Make your dream wedding come true at Jaisalmer Marriott Resort & Spa with both an architectural backdrop and a scenic location!",
      image:
        marriot,
      features: [
        "Dream Wedding",
        "Architectural Backdrop",
        "Scenic Location",
        "Resort & Spa",
      ],
    },
    {
      id: 5,
      name: "Sairafort Sarovar",
      rooms: 59,
      eventSpaces: 3,
      description:
        "A traditional Rajputana Haveli styled hotel - Sairafort Sarovar Portico, located in the suburbs of Jaisalmer is the one of the best venues to tie the knot with the backdrop of heavenly views.",
      image:
        saira,
      features: [
        "Rajputana Haveli",
        "Traditional Style",
        "Heavenly Views",
        "Best Venues",
      ],
    },
    {
      id: 6,
      name: "Fort Rajwada",
      rooms: 90,
      eventSpaces: 3,
      description:
        "The grand Fort Rajwada, Jaisalmer is one of the most magnificent destinations to get hitched with an essence of elegance, beauty and royalty.",
      image:
        fort,
      features: [
        "Grand Fort",
        "Magnificent Destination",
        "Elegance & Beauty",
        "Royal Essence",
      ],
    },
  ];

  const whyJaisalmer = [
    {
      icon: Castle,
      title: "Culture and History",
      description:
        "Jaisalmer is all about culture and history, and hosting a wedding amidst the captivating dunes and fairytale like decor is all you need on your wedding day!",
    },
    {
      icon: Crown,
      title: "Royal Grandeur",
      description:
        "A dream wedding filled with joy, grandeur and luxury deserves a destination like Jaisalmer!",
    },
    {
      icon: Gem,
      title: "Golden City",
      description:
        "Experience the magic of the Golden City with its magnificent forts, palaces, and desert landscapes for an unforgettable celebration.",
    },
    {
      icon: Heart,
      title: "Desert Romance",
      description:
        "Create magical moments under the starlit desert sky with traditional Rajasthani hospitality and luxurious venues.",
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
              JAISALMER
            </h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              JAISALMER IS ALL ABOUT CULTURE AND HISTORY, AND HOSTING A WEDDING
              AMIDST THE CAPTIVATING DUNES AND FAIRYTALE LIKE DECOR IS ALL YOU
              NEED ON YOUR WEDDING DAY!
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
                    September to March are the most pleasant months. The weather
                    in Jaisalmer during this period is perfect for your wedding
                    celebrations.
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
                    Winter: 7-24°C (45-75°F) | Summer: 25-42°C (77-108°F) |
                    Pleasant: Sep-Mar (Perfect for celebrations)
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
                alt="Jaisalmer Desert Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Jaisalmer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;JAISALMER?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A dream wedding filled with joy, grandeur and luxury deserves a
              destination like Jaisalmer! Experience the magical Golden City
              with its captivating dunes, fairytale decor, and rich cultural
              heritage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJaisalmer.map((reason, index) => (
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
              Ready for Your Golden City Wedding Dream?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Jaisalmer,
              where desert romance, royal palaces, and cultural heritage create
              an unforgettable celebration in the heart of the Thar Desert.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Jaisalmer Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Jaisalmer;
