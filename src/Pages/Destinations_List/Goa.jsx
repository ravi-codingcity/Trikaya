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
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import hyatt from "../../assets/destination/goa/hyatt.jpg";
import taj from "../../assets/destination/goa/taj.jpg";
import tajfort from "../../assets/destination/goa/tajfort.jpg";
import rejis from "../../assets/destination/goa/rejis.jpg";
import itcgrand from "../../assets/destination/goa/itcgrand.jpg";
import W from "../../assets/destination/goa/W.jpg"; // Ensure you have the correct path to the image

function Goa() {
  const hotels = [
    {
      id: 1,
      name: "Grand Hyatt",
      rooms: 314,
      eventSpaces: 4,
      description:
        "Get hitched by the sea with sunset as your backdrop and sea breeze as your guest at Grand Hyatt, Goa!",
      image: hyatt,
      features: [
        "Sea Side Wedding",
        "Sunset Backdrop",
        "Sea Breeze Setting",
        "Beachfront Location",
      ],
    },
    {
      id: 2,
      name: "Taj Exotica",
      rooms: 140,
      eventSpaces: 6,
      description:
        "Taj Exotica Resort, Goa has lush green gardens and grand indoor venues to make you and your guests fall in love and host the wedding you wished for!",
      image: taj,
      features: [
        "Lush Green Gardens",
        "Grand Indoor Venues",
        "Resort Setting",
        "Dream Wedding",
      ],
    },
    {
      id: 3,
      name: "Taj Fort Aguada",
      rooms: 142,
      eventSpaces: 3,
      description:
        "The perfect spot next to bay view point, Taj Fort Aguada, Goa adds that pinch of essence of glamour and luxury needed for a perfect destination wedding!",
      image: tajfort,
      features: [
        "Bay View Point",
        "Glamour & Luxury",
        "Perfect Location",
        "Essence of Style",
      ],
    },
    {
      id: 4,
      name: "St. Regis",
      rooms: 206,
      eventSpaces: 8,
      description:
        "With lawns facing the Arabian Sea, beachside and poolside venue, St. Regis, Goa is perfect for a scenic and mesmerizing wedding!",
      image: rejis,
      features: [
        "Arabian Sea Views",
        "Beachside Venue",
        "Poolside Setting",
        "Scenic & Mesmerizing",
      ],
    },
    {
      id: 5,
      name: "ITC Grand",
      rooms: 252,
      eventSpaces: 5,
      description:
        "ITC Grand, Goa offers one of the most impressive venues for a big or small wedding at a picturesque location creating a vibe for an amazing celebration!",
      image: itcgrand,
      features: [
        "Impressive Venues",
        "Big or Small Weddings",
        "Picturesque Location",
        "Amazing Celebration",
      ],
    },
    {
      id: 6,
      name: "W Goa",
      rooms: 121,
      eventSpaces: 3,
      description:
        "W, Goa is known to create magical experiences with a backdrop of an ocean front setting the vibe for an extraordinary luxury destination wedding!",
      image: W,
      features: [
        "Magical Experiences",
        "Ocean Front Backdrop",
        "Extraordinary Luxury",
        "Destination Wedding",
      ],
    },
  ];

  const whyGoa = [
    {
      icon: Waves,
      title: "Surreal Beach Wedding",
      description:
        "A surreal beach wedding and the sound of ocean are perfect for a breezy wedding the luxury venues in Goa have to offer!",
    },
    {
      icon: Heart,
      title: "Island Wedding",
      description:
        "Be it an island wedding, church wedding or tropical style wedding, Goa has stunning venues to make your day unforgettable!",
    },
    {
      icon: Building,
      title: "Luxurious Venues",
      description:
        "Goa offers luxury venues with its own charm and magnificent settings for a dream destination wedding!",
    },
    {
      icon: Star,
      title: "Beach Inspiration",
      description:
        "A wedding inspired by beaches at this destination - Goa, which has its own charm and luxurious venues is a dream come true!",
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
              GOA
            </h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              A wedding inspired by beaches at this destination - Goa, which has
              its own charm and luxurious venues is a dream come true!
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
                    The best months to get married in Goa are from end of
                    November to the beginning of February. During these months,
                    the evenings and nights are pleasant and humidity is under
                    control.
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
                    Winter: 20-30°C (68-86°F) | Summer: 25-35°C (77-95°F) |
                    Monsoon: 24-30°C (75-86°F)
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
                alt="Goa Beach Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Goa Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;GOA?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A surreal beach wedding and the sound of ocean are perfect for a
              breezy wedding! Be it an island wedding, church wedding or
              tropical style wedding, Goa has stunning venues to make your day
              unforgettable!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGoa.map((reason, index) => (
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
              Ready for Your Beach Wedding Dream?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Goa, where
              pristine beaches, luxury resorts, and ocean breezes create an
              unforgettable celebration by the sea.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Goa Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Goa;
