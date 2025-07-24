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
  Palmtree,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import emirates_palace from "../../assets/destination/abu_dhabi/emirates_palace.jpg";
import regis from "../../assets/destination/abu_dhabi/regis.jpg";
import bab from "../../assets/destination/abu_dhabi/bab.jpg";
import four from "../../assets/destination/abu_dhabi/four.jpg";
import ritz from "../../assets/destination/abu_dhabi/ritz.jpg";
import al_sarab_desert from "../../assets/destination/abu_dhabi/al_sarab_desert.jpg";


function AbuDhabi() {
  const hotels = [
    {
      id: 1,
      name: "Emirates Palace",
      rooms: 394,
      eventSpaces: 4,
      description:
        "Emirates Palace is the epitome of luxury in Abu Dhabi with manicured gardens, elegant terraces, architectural ballroom and breathtaking views - being as glamorous as it can!",
      image:
        emirates_palace,
      features: [
        "Manicured Gardens",
        "Elegant Terraces",
        "Architectural Ballroom",
        "Breathtaking Views",
      ],
    },
    {
      id: 2,
      name: "St. Regis",
      rooms: 376,
      eventSpaces: 4,
      description:
        "Located on the serene beach of Saadiyat Island, the St. Regis Saadiyat Island Resort, Abu Dhabi overlooks a majestic white beach and has a regal ballroom for hosting a wedding to remember!",
      image:
        regis,
      features: [
        "Saadiyat Island",
        "Majestic White Beach",
        "Regal Ballroom",
        "Serene Beach",
      ],
    },
    {
      id: 3,
      name: "Bab Al Qasr",
      rooms: 677,
      eventSpaces: 5,
      description:
        "A modern Arabian hotel - Bab Al Qasr offers a set of stunning views – the palace and the sea, and the perfect modern fairytale vibe to host a grand celebration!",
      image:
        bab,
      features: [
        "Modern Arabian",
        "Palace Views",
        "Sea Views",
        "Fairytale Vibe",
      ],
    },
    {
      id: 4,
      name: "Four Seasons",
      rooms: 200,
      eventSpaces: 3,
      description:
        "Located on the Al Maryah Island, Four Seasons, Abu Dhabi is a spot full of beauty and romance - the two mains needed to make your D-day a memory for lifetime!",
      image:
        four,
      features: [
        "Al Maryah Island",
        "Beauty & Romance",
        "Lifetime Memory",
        "Perfect D-day",
      ],
    },
    {
      id: 5,
      name: "The Ritz Carlton",
      rooms: 528,
      eventSpaces: 5,
      description:
        "The Ritz-Carlton Abu Dhabi, Grand Canal is a Venetian-inspired hotel overlooking the canal and Grand Mosque, offering impressive venues for all kind of wedding celebrations!",
      image:
        ritz,
      features: [
        "Venetian-inspired",
        "Grand Canal",
        "Grand Mosque Views",
        "Impressive Venues",
      ],
    },
    {
      id: 6,
      name: "Qasr Al Sarab",
      rooms: 205,
      eventSpaces: 3,
      description:
        "Qasr Al Sarab, Abu Dhabi stands like a mirage in the world's largest sand desert - Empty Quarter and is one of the most majestic and luxurious destinations to begin your new life!",
      image:
        al_sarab_desert,
      features: [
        "Empty Quarter",
        "Desert Mirage",
        "Most Majestic",
        "Luxurious Desert",
      ],
    },
  ];

  const whyAbuDhabi = [
    {
      icon: Crown,
      title: "Hub of Destination Weddings",
      description:
        "On the road to becoming the hub of destination weddings, Abu Dhabi is one of the most beautiful locations to begin your journey of love and happiness!",
    },
    {
      icon: Building2,
      title: "Slick and Modern",
      description:
        "Abu Dhabi has everything slick and modern, from exotic islands to futuristic ballrooms, to host the wedding you've always dreamt off!",
    },
    {
      icon: Palmtree,
      title: "Exotic Islands",
      description:
        "Experience luxury on pristine islands with world-class resorts offering stunning beachfront venues and unparalleled hospitality.",
    },
    {
      icon: Heart,
      title: "Futuristic Ballrooms",
      description:
        "Celebrate in architectural marvels with state-of-the-art ballrooms that blend modern luxury with traditional Arabian elegance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              ABU&nbsp;DHABI
            </h1>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              ON THE ROAD TO BECOMING THE HUB OF DESTINATION WEDDINGS, ABU DHABI
              IS ONE OF THE MOST BEAUTIFUL LOCATIONS TO BEGIN YOUR JOURNEY OF
              LOVE AND HAPPINESS!
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
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-orange-600 hover:shadow-xl transition-all duration-300 group"
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
                      <Bed size={18} className="mr-2 text-orange-600" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-orange-600" />
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
                        className="px-3 py-1 bg-amber-50 text-gray-600 text-xs rounded-full border border-amber-100"
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
              <div className="w-16 h-1 bg-orange-600 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-orange-600 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best time to plan a wedding in Abu Dhabi would be
                    between September and April when the weather is extremely
                    pleasant.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-orange-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Climate Features
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Desert climate with pleasant winters | Sep-Apr: Perfect
                    wedding weather (20-30°C) | Indoor and outdoor venue
                    options available
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
                alt="Abu Dhabi Desert Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Abu Dhabi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;ABU&nbsp;DHABI?
            </h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Abu Dhabi has everything slick and modern, from exotic islands to
              futuristic ballrooms, to host the wedding you've always dreamt
              off! Experience luxury redefined in the capital of UAE.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAbuDhabi.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-orange-600 hover:shadow-md transition-all duration-300"
              >
                <div className="text-orange-600 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Abu Dhabi Luxury Wedding?
            </h2>
            <p className="text-lg text-amber-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Abu Dhabi,
              where modern luxury meets Arabian elegance in the most beautiful
              venues across exotic islands and futuristic ballrooms.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Abu Dhabi Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AbuDhabi;
