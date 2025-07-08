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
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Turkey() {
  const hotels = [
    {
      id: 1,
      name: "Four Seasons Hotel Istanbul at Sultanahmet",
      rooms: 65,
      eventSpaces: 4,
      description:
        "A stunning neoclassical mansion overlooking the Sea of Marmara, offering intimate wedding celebrations with breathtaking views of the Blue Mosque and Hagia Sophia.",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Historic Mansion",
        "Sea Views",
        "Intimate Settings",
        "Ottoman Heritage",
      ],
    },
    {
      id: 2,
      name: "Ciragan Palace Kempinski",
      rooms: 313,
      eventSpaces: 8,
      description:
        "The only imperial Ottoman palace and hotel on the Bosphorus, offering unparalleled luxury and grandeur for royal wedding celebrations with stunning waterfront views.",
      image:
        "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Imperial Palace",
        "Bosphorus Views",
        "Royal Luxury",
        "Waterfront Venue",
      ],
    },
    {
      id: 3,
      name: "The Ritz-Carlton Istanbul",
      rooms: 244,
      eventSpaces: 6,
      description:
        "Located in the heart of Istanbul, this luxury hotel offers elegant ballrooms and rooftop terraces with panoramic city views, perfect for sophisticated wedding celebrations.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "City Center Location",
        "Panoramic Views",
        "Elegant Ballrooms",
        "Rooftop Terraces",
      ],
    },
    {
      id: 4,
      name: "Shangri La Bosphorus",
      rooms: 186,
      eventSpaces: 5,
      description:
        "Contemporary luxury meets Ottoman elegance with spectacular Bosphorus views, offering multiple venue options for grand wedding celebrations in the heart of Istanbul.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Contemporary Design",
        "Ottoman Elegance",
        "Multiple Venues",
        "Bosphorus Location",
      ],
    },
    {
      id: 5,
      name: "Swissotel The Bosphorus",
      rooms: 566,
      eventSpaces: 12,
      description:
        "Perched on a hilltop with commanding views of the Bosphorus, this hotel offers extensive event facilities and luxurious accommodations for large wedding celebrations.",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Hilltop Location",
        "Extensive Facilities",
        "Large Capacity",
        "Commanding Views",
      ],
    },
    {
      id: 6,
      name: "Conrad Istanbul Bosphorus",
      rooms: 590,
      eventSpaces: 10,
      description:
        "Modern sophistication with traditional Turkish hospitality, featuring versatile event spaces and stunning views of both the Bosphorus strait and the city skyline.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Modern Sophistication",
        "Turkish Hospitality",
        "Versatile Spaces",
        "Dual Views",
      ],
    },
  ];

 
  const whyTurkey = [
    {
      icon: Heart,
      title: "Where East Meets West",
      description:
        "Unique cultural blend offering both European elegance and Asian mystique in one magnificent city.",
    },
    {
      icon: Crown,
      title: "Ottoman Heritage",
      description:
        "Rich imperial history with stunning palaces, mosques, and architectural wonders as wedding backdrops.",
    },
    {
      icon: Building,
      title: "Bosphorus Beauty",
      description:
        "Magical strait connecting two continents, providing breathtaking waterfront venues and sunset views.",
    },
    {
      icon: Star,
      title: "Turkish Hospitality",
      description:
        "World-renowned warmth and hospitality ensuring unforgettable experiences for you and your guests.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

  

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-red-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              ISTANBUL, TURKEY
            </h1>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Where two continents meet, Istanbul offers a magical blend of East and West, 
              creating the perfect backdrop for unforgettable destination weddings with rich Ottoman heritage and Bosphorus beauty!
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
              LUXURY&nbsp;HOTELS
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
                    <h3 className="text-xl font-bold text-white mb-2">
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
      <section className="py-20 bg-white">
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

              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-luxury-gold mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    April to June and September to November offer perfect weather with mild temperatures and minimal rainfall, ideal for outdoor ceremonies.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-blue-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Temperature Range
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Spring: 15-25°C (59-77°F) | Summer: 20-30°C (68-86°F) | Autumn: 10-20°C (50-68°F)
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
                src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Istanbul Bosphorus Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Turkey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;TURKEY?
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Istanbul, the magical city where Europe meets Asia, offers an enchanting blend of cultures, 
              stunning Ottoman architecture, and the magnificent Bosphorus strait - creating the perfect setting 
              for a truly unique and unforgettable destination wedding experience!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyTurkey.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-white p-8 rounded-xl border border-gray-100 hover:border-luxury-gold hover:shadow-md transition-all duration-300"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Turkish Wedding Adventure?
            </h2>
            <p className="text-lg text-red-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Istanbul, 
              where ancient traditions meet modern luxury on the magical Bosphorus strait.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-luxury-gold hover:bg-luxury-darkGold text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Istanbul Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Turkey;
