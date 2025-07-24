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
  Mountain,
  TreePine,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import wildflower from "../../assets/destination/shimla/wildflower.jpg";
import radisson from "../../assets/destination/shimla/radisson.jpg";
import tulip from "../../assets/destination/shimla/tulip.jpg";
import oberoi from "../../assets/destination/shimla/oberoi.jpg";
import taj from "../../assets/destination/shimla/taj.jpg";
import marigold from "../../assets/destination/shimla/marigold.jpg";

function Shimla() {
  const hotels = [
    {
      id: 1,
      name: "Wild Flower Hall",
      rooms: 85,
      eventSpaces: 4,
      description:
        "An Oberoi Resort in the Himalayas - Wildflower Hall, Shimla is the perfect venue to experience romance of nature with mountain views for an indoor or an outdoor wedding!",
      image:
        wildflower,
      features: [
        "Oberoi Resort",
        "Mountain Views",
        "Indoor & Outdoor",
        "Romance of Nature",
      ],
    },
    {
      id: 2,
      name: "Radisson Jass",
      rooms: 67,
      eventSpaces: 3,
      description:
        "Located near the historic city center amidst the cedar forest overlooking the breathtaking Himalayas, Radisson Jass, Shimla offers you the right backdrop and service for your dream wedding!",
      image:
       radisson,
      features: [
        "Historic City Center",
        "Cedar Forest",
        "Himalayan Views",
        "Dream Wedding",
      ],
    },
    {
      id: 3,
      name: "Royal Tulip Luxury Hotel",
      rooms: 58,
      eventSpaces: 3,
      description:
        "In the Kufri Hills, Royal Tulip Luxury Hotel, Kufri - Shimla will wow you with its incredible view adding that perfect essence of a hillside marriage to make your day unforgettable!",
      image:
        tulip,
      features: [
        "Kufri Hills",
        "Incredible Views",
        "Hillside Marriage",
        "Unforgettable Day",
      ],
    },
    {
      id: 4,
      name: "The Oberoi Cecil",
      rooms: 75,
      eventSpaces: 3,
      description:
        "The Oberoi Cecil, Shimla is known for its colonial charm and classic elegance and is surrounded by the Himalayas and cedar rich valley making it one of the best venues to host a luxurious wedding!",
      image:
        oberoi,
      features: [
        "Colonial Charm",
        "Classic Elegance",
        "Cedar Rich Valley",
        "Luxurious Wedding",
      ],
    },
    {
      id: 5,
      name: "Taj Theog Resort & Spa",
      rooms: 99,
      eventSpaces: 4,
      description:
        "Standing tall in Theog, Taj Theog Resort & Spa, offers you a perfect spot for an exotic and mystic wedding celebration with uninterrupted views of snow peaks and deep valleys!",
      image:
        taj,
      features: [
        "Exotic & Mystic",
        "Snow Peaks Views",
        "Deep Valleys",
        "Perfect Spot",
      ],
    },
    {
      id: 6,
      name: "Marigold Sarovar Portico",
      rooms: 47,
      eventSpaces: 3,
      description:
        "Marigold Sarovar Portico, in Mashobra - Shimla is a nature resort surrounded by mighty mountains and greenery making it a perfect picturesque location to tie the knot!",
      image:
        marigold,
      features: [
        "Nature Resort",
        "Mighty Mountains",
        "Greenery Surrounded",
        "Picturesque Location",
      ],
    },
  ];

  const whyShimla = [
    {
      icon: Mountain,
      title: "Natural Splendor",
      description:
        "Shimla offers you a destination against the natural splendor to set the vibe for your upcoming D-day!",
    },
    {
      icon: TreePine,
      title: "Off Beat Destination",
      description:
        "Thinking to plan a wedding away from the dirt and noise of metropolitan cities? Shimla is the right off beat destination for you!",
    },
    {
      icon: Crown,
      title: "Colonial Charm",
      description:
        "Experience the perfect blend of colonial architecture and natural beauty in the heart of the Himalayas.",
    },
    {
      icon: Heart,
      title: "Mountain Romance",
      description:
        "Create unforgettable memories with breathtaking mountain views and pristine natural settings for your special day.",
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
              SHIMLA
            </h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              THINKING TO PLAN A WEDDING AWAY FROM THE DIRT AND NOISE OF
              METROPOLITAN CITIES? SHIMLA IS THE RIGHT OFF BEAT DESTINATION FOR
              YOU!
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
                    The climate in Shimla is lovely for a spring and summer
                    wedding. The spring season lasts from mid-March to April and
                    the summer season lasts from May to June.
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
                    Winter: -4 to 7°C (25-45°F) | Summer: 15-28°C (59-82°F) |
                    Spring: 10-20°C (50-68°F)
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
                alt="Shimla Mountain Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Shimla Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;SHIMLA?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Shimla offers you a destination against the natural splendor to
              set the vibe for your upcoming D-day! Experience the perfect blend
              of colonial charm and mountain beauty for an unforgettable
              wedding celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyShimla.map((reason, index) => (
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
              Ready for Your Himalayan Wedding Dream?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Shimla,
              where colonial charm, mountain views, and natural splendor create
              an unforgettable celebration away from the metropolitan hustle.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Shimla Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Shimla;
