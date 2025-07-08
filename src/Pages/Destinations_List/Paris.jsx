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

function Paris() {
  const hotels = [
    {
      id: 1,
      name: "Le Meurice",
      rooms: 160,
      eventSpaces: 6,
      description:
        "An opulent palace hotel facing the Tuileries Garden, offering regal elegance with stunning views of the Louvre and Paris landmarks, perfect for fairy-tale weddings.",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Palace Hotel",
        "Tuileries Views",
        "Regal Elegance",
        "Historic Luxury",
      ],
    },
    {
      id: 2,
      name: "The Ritz Paris",
      rooms: 142,
      eventSpaces: 8,
      description:
        "The legendary Parisian palace hotel in Place Vendôme, synonymous with luxury and refinement, offering timeless elegance for the most exclusive wedding celebrations.",
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Legendary Palace",
        "Place Vendôme",
        "Timeless Elegance",
        "Exclusive Luxury",
      ],
    },
    {
      id: 3,
      name: "Four Seasons Hotel George V",
      rooms: 244,
      eventSpaces: 7,
      description:
        "Art Deco masterpiece steps from the Champs-Élysées, renowned for its floral arrangements and Michelin-starred dining, ideal for sophisticated Parisian weddings.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Art Deco Design",
        "Champs-Élysées",
        "Floral Arrangements",
        "Michelin Dining",
      ],
    },
    {
      id: 4,
      name: "Hotel Plaza Athénée",
      rooms: 208,
      eventSpaces: 5,
      description:
        "Iconic red-awning palace hotel with Eiffel Tower views, epitomizing Parisian chic and haute couture elegance, perfect for glamorous wedding celebrations.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Eiffel Tower Views",
        "Parisian Chic",
        "Haute Couture",
        "Glamorous Setting",
      ],
    },
    {
      id: 5,
      name: "Shangri La Hotel Paris",
      rooms: 101,
      eventSpaces: 4,
      description:
        "Former palace of Napoleon's grandnephew with panoramic Eiffel Tower views, offering imperial grandeur and Asian hospitality for unforgettable weddings.",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Former Palace",
        "Panoramic Views",
        "Imperial Grandeur",
        "Asian Hospitality",
      ],
    },
    {
      id: 6,
      name: "Le Bristol Paris",
      rooms: 190,
      eventSpaces: 6,
      description:
        "Elegant palace hotel on rue du Faubourg Saint-Honoré, featuring French gardens and refined luxury, ideal for intimate and sophisticated wedding celebrations.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "French Gardens",
        "Refined Luxury",
        "Intimate Setting",
        "Sophisticated Style",
      ],
    },
  ];

  const whyParis = [
    {
      icon: Heart,
      title: "City of Love",
      description:
        "The world's most romantic city, where love stories come alive amidst iconic landmarks and charming boulevards.",
    },
    {
      icon: Crown,
      title: "Timeless Elegance",
      description:
        "Sophisticated French culture and refined luxury creating the perfect backdrop for elegant wedding celebrations.",
    },
    {
      icon: Building,
      title: "Iconic Landmarks",
      description:
        "Eiffel Tower, Arc de Triomphe, and stunning architecture providing magical settings for unforgettable photos.",
    },
    {
      icon: Star,
      title: "Culinary Excellence",
      description:
        "World-renowned French cuisine and Michelin-starred dining experiences for the most exquisite wedding celebrations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

     

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              PARIS, FRANCE
            </h1>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The City of Light and Love, where romance blooms amidst iconic landmarks, 
              elegant boulevards, and timeless French sophistication - creating the perfect fairy-tale setting for your dream wedding!
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
                    May to September offers warm, pleasant weather with long daylight hours, perfect for outdoor ceremonies and romantic evening receptions.
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
                    Spring: 10-20°C (50-68°F) | Summer: 15-25°C (59-77°F) | Autumn: 8-18°C (46-64°F)
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
                src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Paris Eiffel Tower Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Paris Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;PARIS?
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Paris, the eternal City of Love, offers an enchanting blend of romance, elegance, and sophistication. 
              From the iconic Eiffel Tower to charming cobblestone streets, every corner tells a love story - 
              making it the perfect destination for your fairy-tale wedding celebration!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyParis.map((reason, index) => (
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Parisian Love Story?
            </h2>
            <p className="text-lg text-pink-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Paris, 
              the City of Light and Love, where every moment becomes a cherished memory amidst iconic landmarks and timeless elegance.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-luxury-gold hover:bg-luxury-darkGold text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Paris Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Paris;
