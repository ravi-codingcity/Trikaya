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
  Trees,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import taj from "../../assets/destination/jim_corbett/taj.jpg"; 
import ahana from "../../assets/destination/jim_corbett/ahaana.jpg"; 
import hridayash from "../../assets/destination/jim_corbett/hridayesh.jpg"; 
import theriverview from "../../assets/destination/jim_corbett/theriverview.jpg"; 
import namah from "../../assets/destination/jim_corbett/namah.jpg";
import lemon from "../../assets/destination/jim_corbett/lemon.jpg"; 


function Jim_corbett() {
  const hotels = [
    {
      id: 1,
      name: "Taj Corbett",
      rooms: 80,
      eventSpaces: 3,
      description:
        "Surrounded by mountains, Taj Corbett Resort & Spa is a lush property on the river bank overlooking the mountain, perfect for hosting a memorable affair.",
      image:
        taj,
      features: [
        "Mountain Views",
        "River Bank Location",
        "Lush Property",
        "Memorable Affairs",
      ],
    },
    {
      id: 2,
      name: "Aahana",
      rooms: 42,
      eventSpaces: 3,
      description:
        "Plan a fairytale wedding in the hearts of wilderness at the Aahana Resort - a venue inspired by culture and serenity.",
      image:
        ahana,
      features: [
        "Fairytale Wedding",
        "Hearts of Wilderness",
        "Cultural Inspiration",
        "Serene Environment",
      ],
    },
    {
      id: 3,
      name: "Hridayesh",
      rooms: 58,
      eventSpaces: 3,
      description:
        "Hridayesh Wilderness Resort, Jim Corbett has everything you need from forest in the background to great views for an unforgettable celebration.",
      image:
        hridayash,
      features: [
        "Forest Background",
        "Great Views",
        "Wilderness Resort",
        "Unforgettable Celebration",
      ],
    },
    {
      id: 4,
      name: "The Riverview Retreat",
      rooms: 80,
      eventSpaces: 4,
      description:
        "On the banks of River Kosi, The Riverview Retreat Resort serves as a picture perfect venue with mountains all around and big lawns to tie the knot.",
      image:
        theriverview,
      features: [
        "River Kosi Banks",
        "Picture Perfect",
        "Mountain Surroundings",
        "Big Lawns",
      ],
    },
    {
      id: 5,
      name: "Namah",
      rooms: 48,
      eventSpaces: 3,
      description:
        "Namah Resort is a beautiful premium resort that offers huge space for a grand wedding amidst nature's pleasure and calmness!",
      image:
       namah,
      features: [
        "Premium Resort",
        "Huge Space",
        "Grand Wedding",
        "Nature's Pleasure",
      ],
    },
    {
      id: 6,
      name: "Lemon Tree Corbett",
      rooms: 68,
      eventSpaces: 3,
      description:
        "Lemon Tree Premier Jim Corbett is a luxury resort in the lap of nature and beside the River Kosi making it one of the scenic venues to get hitched!",
      image:
        lemon,
      features: [
        "Lap of Nature",
        "River Kosi Side",
        "Luxury Resort",
        "Scenic Venue",
      ],
    },
  ];

  const whyJimCorbett = [
    {
      icon: Trees,
      title: "Natural Beauty",
      description:
        "The venues in Jim Corbett are perfect for a destination wedding amid natural beauty in the Himalayan foothills.",
    },
    {
      icon: Heart,
      title: "Cherishable Memories",
      description:
        "Make your D-day the most cherishable memory at lavish resorts in Jim Corbett with comfort and scenic beauty.",
    },
    {
      icon: Building,
      title: "Lavish Resorts",
      description:
        "Experience luxury accommodations with delicious delights and world-class amenities in the wilderness.",
    },
    {
      icon: Star,
      title: "Scenic Beauty",
      description:
        "Surrounded by mountains, forests, and rivers creating the perfect backdrop for your special celebration.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-teal-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              JIM CORBETT
            </h1>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The venues in Jim Corbett are perfect for a destination wedding amid natural beauty in the Himalayan foothills.
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
                        className="px-3 py-1 bg-green-50 text-gray-600 text-xs rounded-full border border-green-100"
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
              <div className="w-16 h-1 bg-luxury-gold mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-luxury-gold mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The months between November to March are perfect to enjoy a perfect destination wedding in Jim Corbett.
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
                    Winter: 10-25°C (50-77°F) | Summer: 20-35°C (68-95°F) | Monsoon: 22-30°C (72-86°F)
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
                alt="Jim Corbett Weather and Nature"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Jim Corbett Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;JIM&nbsp;CORBETT?
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Make your D-day the most cherishable memory at lavish resorts in Jim Corbett with comfort, 
              delicious delights and scenic beauty amidst the Himalayan foothills!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJimCorbett.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-luxury-gold hover:shadow-md transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Wilderness Wedding?
            </h2>
            <p className="text-lg text-green-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Jim Corbett, 
              where natural beauty meets luxury amidst the serene Himalayan foothills and pristine wilderness.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-luxury-gold hover:bg-luxury-darkGold text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Jim Corbett Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Jim_corbett;