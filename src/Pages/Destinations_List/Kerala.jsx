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
import taj from "../../assets/destination/kerala/taj.jpg";
import leela from "../../assets/destination/kerala/leela.jpg";
import tajkumarakom from "../../assets/destination/kerala/tajkumarakom.jpg";
import kumarakom from "../../assets/destination/kerala/kumarakom.jpg";
import ramada from "../../assets/destination/kerala/ramada.jpg";
import the from "../../assets/destination/kerala/the.jpg";


function Kerala() {
  const hotels = [
    {
      id: 1,
      name: "Taj Bekal",
      rooms: 75,
      eventSpaces: 4,
      description:
        "Inspired by the design of Ketuvallam houseboats, it is a beautifully located property right by the side of the Kappil River.",
      image:
        taj,
      features: [
        "Ketuvallam Design",
        "Kappil River Side",
        "Beautiful Location",
        "Houseboat Inspired",
      ],
    },
    {
      id: 2,
      name: "Leela Kovalam",
      rooms: 184,
      eventSpaces: 3,
      description:
        "Nestled within the serene surroundings of 67 acres of lush greenery, this property offers the best view of the Kovalam shoreline and the Arabian Sea.",
      image:
        leela,
      features: [
        "67 Acres Greenery",
        "Kovalam Shoreline",
        "Arabian Sea Views",
        "Serene Surroundings",
      ],
    },
    {
      id: 3,
      name: "Taj Kumarakom Resort and Spa",
      rooms: 28,
      eventSpaces: 2,
      description:
        "With exotic backwater views, located on the shores of the vast Vembanad Lake, this property is a striking structure that complements its rustic natural surroundings.",
      image:
        tajkumarakom,
      features: [
        "Exotic Backwaters",
        "Vembanad Lake",
        "Striking Structure",
        "Natural Surroundings",
      ],
    },
    {
      id: 4,
      name: "Kumarakom Lake Resort",
      rooms: 66,
      eventSpaces: 3,
      description:
        "Acclaimed as the finest heritage resort in India, right on the banks of the serene Vembanad Lake, it is an exquisite luxury retreat with vivid reflection of the true culture of Kerala.",
      image:
        kumarakom,
      features: [
        "Finest Heritage Resort",
        "Vembanad Lake Banks",
        "Luxury Retreat",
        "True Kerala Culture",
      ],
    },
    {
      id: 5,
      name: "Ramada Resort",
      rooms: 58,
      eventSpaces: 3,
      description:
        "A 5-minute walk from Kumbalam Lake, it is a 5 star deluxe luxury retreat with rooms offering views of Kerala's countryside.",
      image:
        ramada,
      features: [
        "Kumbalam Lake",
        "5 Star Deluxe",
        "Countryside Views",
        "Luxury Retreat",
      ],
    },
    {
      id: 6,
      name: "The Zuri Kumarakom",
      rooms: 72,
      eventSpaces: 3,
      description:
        "With breathtaking views of the serene backwaters and lush greenery of Kerala, it is a 5-star property packed with top-notch luxe accommodations.",
      image:
        the,
      features: [
        "Breathtaking Views",
        "Serene Backwaters",
        "Lush Greenery",
        "Top-notch Luxury",
      ],
    },
  ];

  const whyKerala = [
    {
      icon: Waves,
      title: "God's Own Country",
      description:
        "Known as God's own country, Kerala has something for everyone when it comes to wedding.",
    },
    {
      icon: TreePine,
      title: "Natural Beauty",
      description:
        "A home to variety of cultures and religions, Kerala is the perfect place to embark on a new beginning with nature on its finest show.",
    },
    {
      icon: Heart,
      title: "Backwater Romance",
      description:
        "Experience the magic of Kerala's backwaters with serene lakes, lush greenery, and traditional houseboats for an unforgettable celebration.",
    },
    {
      icon: Crown,
      title: "Cultural Diversity",
      description:
        "Celebrate your union in a land that embraces various cultures and traditions, offering a perfect blend of heritage and natural splendor.",
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
              KERALA
            </h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              KNOWN AS GOD'S OWN COUNTRY, KERALA HAS SOMETHING FOR EVERYONE WHEN
              IT COMES TO WEDDING.
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
                    The most ideal time to get married in Kerala is between the
                    months of October and March when the weather is pleasant
                    enough for both outdoor and indoor weddings.
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
                    Winter: 18-32°C (64-90°F) | Summer: 24-35°C (75-95°F) |
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
                alt="Kerala Backwater Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Kerala Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;KERALA?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A home to variety of cultures and religions, Kerala is the perfect
              place to embark on a new beginning with nature on its finest show.
              Experience God's own country with its serene backwaters and lush
              landscapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyKerala.map((reason, index) => (
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
              Ready for Your God's Own Country Wedding?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Kerala,
              where serene backwaters, lush greenery, and cultural diversity
              create an unforgettable celebration in nature's finest setting.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Kerala Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Kerala;
