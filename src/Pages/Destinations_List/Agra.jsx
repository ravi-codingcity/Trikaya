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
import agra from "../../assets/agra.png";

function Agra() {
  const hotels = [
    {
      id: 1,
      name: "Amar Vilas",
      rooms: 102,
      eventSpaces: 9,
      description:
        "Having an uninterrupted view of the monument of love - Taj Mahal, The Oberoi Amarvillas adds the essence of regal touch and splendour to your wedding celebration!",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Taj Mahal View",
        "Regal Touch",
        "Luxury Suites",
        "Splendid Architecture",
      ],
    },
    {
      id: 2,
      name: "ITC Mughal",
      rooms: 233,
      eventSpaces: 4,
      description:
        "The ITC Mughal, Agra is where royalty and culture of Indian history come together. An extravagant wedding at this magnificent property is a dream come true!",
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Royal Heritage",
        "Cultural Ambiance",
        "Magnificent Property",
        "Historical Significance",
      ],
    },
    {
      id: 3,
      name: "Taj Hotel & Convention",
      rooms: 239,
      eventSpaces: 3,
      description:
        "Experience the backdrop of the monument of love - The Taj Mahal, at the Taj Hotel and Convention, Agra or the grand exquisite indoor spaces on your big day!",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Taj Mahal Backdrop",
        "Exquisite Interiors",
        "Convention Facilities",
        "Grand Spaces",
      ],
    },
    {
      id: 4,
      name: "Jaypee Palace",
      rooms: 341,
      eventSpaces: 5,
      description:
        "Get hitched at an all in one property - Jaypee Palace, Agra that displays Mughal and contemporary architecture, greenery and enormous water bodies!",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Mughal Architecture",
        "Contemporary Design",
        "Lush Greenery",
        "Water Features",
      ],
    },
    {
      id: 5,
      name: "Marriott",
      rooms: 189,
      eventSpaces: 3,
      description:
        "The colonial charm, wealth of the premise and the most picturesque backdrop, make Marriott the perfect venue for a big fat wedding!",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Colonial Charm",
        "Picturesque Backdrop",
        "Luxurious Premise",
        "Grand Celebrations",
      ],
    },
    {
      id: 6,
      name: "Trident",
      rooms: 135,
      eventSpaces: 3,
      description:
        "Treat your loved ones to an all-new experience at a luxurious place with exceptional hospitality and world-class amenities.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Luxurious Setting",
        "Exceptional Hospitality",
        "World-class Amenities",
        "Premium Experience",
      ],
    },
  ];

  const whyAgra = [
    {
      icon: Heart,
      title: "City of Love",
      description:
        "Home to the Taj Mahal, the ultimate symbol of eternal love and romance.",
    },
    {
      icon: Crown,
      title: "Royal Heritage",
      description:
        "Rich Mughal history with magnificent palaces and architectural wonders.",
    },
    {
      icon: Building,
      title: "Prominent Attractions",
      description:
        "Iconic monuments and historical sites that create magical backdrops.",
    },
    {
      icon: Star,
      title: "Lavish Experience",
      description:
        "Perfect destination for royal, magical, and unforgettable wedding celebrations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              AGRA
            </h1>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Agra is all about romance, heritage and history, offering pleasing
              surroundings for getting married in style!
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
            <div className="w-20 h-1 bg-luxury-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-luxury-gold hover:shadow-xl transition-all duration-300 group"
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
                      <Bed size={18} className="mr-2 text-luxury-gold" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-luxury-gold" />
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
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
                WEATHER
              </h2>
              <div className="w-16 h-1 bg-luxury-gold mb-6"></div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Sun className="text-luxury-gold mr-3" size={24} />
                  <span className="text-lg font-semibold text-luxury-navy">
                    Best Season
                  </span>
                </div>
                <p className="text-gray-600">
                  October to March offers pleasant weather perfect for outdoor
                  wedding celebrations and Taj Mahal visits.
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
                alt="Agra Weather and Taj Mahal"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Agra Section */}
      <section className="pt-20 pb-5 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;AGRA?
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Agra, the romantic city of India, home to most prominent
              attractions like Taj Mahal - a symbol of love is one of the best
              destinations to tie the knot with a lavish, royal and magical
              experience!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAgra.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-100 p-8 rounded-xl border border-gray-100 hover:border-luxury-gold hover:shadow-md transition-all duration-300"
              >
                <div className="text-luxury-gold mb-6 flex justify-center">
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
        {" "}
        <img src={agra} alt="" />
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
              Ready for Your Romantic Wedding?
            </h2>
            <p className="text-lg text-pink-100 mb-8 mx-auto">
              Let us help you plan the perfect destination wedding in the
              romantic city of Agra, with the majestic Taj Mahal as your
              backdrop.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-luxury-gold hover:bg-luxury-darkGold text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Plan Your Agra Wedding
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Agra;
