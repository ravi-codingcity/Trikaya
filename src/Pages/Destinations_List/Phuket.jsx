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
  TreePine,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import marriott from "../../assets/destination/phuket/marriott.jpg";
import centara from "../../assets/destination/phuket/centara.jpg";
import anantara from "../../assets/destination/phuket/anantara.jpg";
import angsana from "../../assets/destination/phuket/angsana.jpg";
import dusit from "../../assets/destination/phuket/dusit.jpg";
import hilton from "../../assets/destination/phuket/hilton.jpg";

function Phuket() {
  const hotels = [
    {
      id: 1,
      name: "JW Marriott",
      rooms: 262,
      eventSpaces: 4,
      description:
        "An unforgettable beachfront escape in Phuket - JW Marriott Resort & Spa is a venue to celebrate love and union in the most romantic way!",
      image:
        marriott,
      features: [
        "Beachfront Escape",
        "Resort & Spa",
        "Romantic Venue",
        "Love & Union",
      ],
    },
    {
      id: 2,
      name: "Centara Grand Beach Resort",
      rooms: 262,
      eventSpaces: 3,
      description:
        "A stunning resort on the Karon Beach to experience that seaside charm of Phuket and the Sino - Portuguese architecture is ideal to celebrate your special day in the most amazing way!",
      image:
        centara,
      features: [
        "Karon Beach",
        "Seaside Charm",
        "Sino-Portuguese",
        "Amazing Celebration",
      ],
    },
    {
      id: 3,
      name: "Anantara Mai Khao",
      rooms: 83,
      eventSpaces: 3,
      description:
        "Exchange vows on a golden stretch of beach, in an intimate or a grand wedding in the Anantara Mai Khao where the ocean meets the jungle of greenery!",
      image:
        anantara,
      features: [
        "Golden Beach",
        "Intimate/Grand",
        "Ocean Meets Jungle",
        "Greenery Paradise",
      ],
    },
    {
      id: 4,
      name: "Angsana Laguna",
      rooms: 371,
      eventSpaces: 4,
      description:
        "The resort is set along the shores of Phuket's Bang Tao Bay, and exchanging vows by the beach, pool or in the chapel feels like a dream come true!",
      image:
        angsana,
      features: [
        "Bang Tao Bay",
        "Beach/Pool/Chapel",
        "Dream Come True",
        "Multiple Venues",
      ],
    },
    {
      id: 5,
      name: "Dusit Thani Laguna",
      rooms: 253,
      eventSpaces: 3,
      description:
        "The hotel is surrounded by lush gardens, overlooking the glittering Andaman Ocean offering a serene picturesque backdrop to host all your magical wedding celebrations!",
      image:
        dusit,
      features: [
        "Lush Gardens",
        "Andaman Ocean",
        "Serene Backdrop",
        "Magical Celebrations",
      ],
    },
    {
      id: 6,
      name: "Hilton Phuket Arcadia Resort and Spa",
      rooms: 662,
      eventSpaces: 5,
      description:
        "Hilton Phuket Arcadia Resort & Spa is surrounded by lush tropical gardens, golden sands of Karon Beach and lit pools offering an ambience to fit your D-day!",
      image:
        hilton,
      features: [
        "Tropical Gardens",
        "Golden Sands",
        "Karon Beach",
        "Perfect D-day",
      ],
    },
  ];

  const whyPhuket = [
    {
      icon: Waves,
      title: "Ultimate Tropical Oasis",
      description:
        "Phuket has become a home to tonnes of destination weddings owing to being an ultimate tropical oasis and having everything to plan a flawless wedding!",
    },
    {
      icon: TreePine,
      title: "Paradise-like Destination",
      description:
        "Phuket is a paradise - like destination with white sand beaches, green seas and lush forests with a warm tropical climate all year round!",
    },
    {
      icon: Sun,
      title: "White Sand Beaches",
      description:
        "Experience stunning white sand beaches with crystal clear waters, offering the perfect romantic setting for your dream beach wedding ceremony.",
    },
    {
      icon: Heart,
      title: "Flawless Wedding Planning",
      description:
        "With world-class resorts, experienced wedding planners, and breathtaking venues, Phuket offers everything needed for a flawless destination wedding.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-cyan-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              PHUKET
            </h1>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              PHUKET HAS BECOME A HOME TO TONNES OF DESTINATION WEDDINGS OWNING
              TO BEING AN ULTIMATE TROPICAL OASIS AND HAVING EVERYTHING TO PLAN
              A FLAWLESS WEDDING!
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
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-teal-600 hover:shadow-xl transition-all duration-300 group"
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
                      <Bed size={18} className="mr-2 text-teal-600" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-teal-600" />
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
                        className="px-3 py-1 bg-teal-50 text-gray-600 text-xs rounded-full border border-teal-100"
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
              <div className="w-16 h-1 bg-teal-600 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-teal-600 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    November, December, January the best months for your Phuket
                    beach wedding as they usually come with calm, cool weather.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-teal-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Climate Features
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Warm tropical climate year-round | Nov-Jan: Perfect wedding
                    weather (24-30°C) | Calm seas and cool breezes ideal for
                    beach ceremonies
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
                alt="Phuket Beach Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Phuket Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;PHUKET?
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Phuket is a paradise - like destination with white sand beaches,
              green seas and lush forests with a warm tropical climate all year
              round! Experience the ultimate tropical oasis for your dream
              wedding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPhuket.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-teal-600 hover:shadow-md transition-all duration-300"
              >
                <div className="text-teal-600 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Phuket Paradise Wedding?
            </h2>
            <p className="text-lg text-teal-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Phuket,
              where white sand beaches, tropical oasis settings, and world-class
              resorts create an unforgettable celebration in paradise.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Phuket Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Phuket;
