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
  Building2,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import versace from "../../assets/destination/dubai/versace.jpg"
import raffles from "../../assets/destination/dubai/raffles.jpg";
import four from "../../assets/destination/dubai/four.jpg";
import atlantis from "../../assets/destination/dubai/atlantis.jpg";
import habtoor from "../../assets/destination/dubai/habtoor.jpg";
import taj from "../../assets/destination/dubai/taj.jpg";



function Dubai() {
  const hotels = [
    {
      id: 1,
      name: "Versace Palazzo",
      rooms: 250,
      eventSpaces: 4,
      description:
        "Designed by Versace, this neoclassical 16th century Italian palace offers breathtaking waterfront views and city attractions.",
      image:
        versace,
      features: [
        "Versace Design",
        "Neoclassical Palace",
        "Waterfront Views",
        "City Attractions",
      ],
    },
    {
      id: 2,
      name: "Raffles The Palm",
      rooms: 389,
      eventSpaces: 5,
      description:
        "This 5-star beach palace located on one of the Palm beaches offering a classic yet contemporary design is the first ultra-luxury Raffles resort in the Middle East.",
      image:
        raffles,
      features: [
        "Palm Beach",
        "Contemporary Design",
        "Ultra-luxury",
        "Middle East First",
      ],
    },
    {
      id: 3,
      name: "Four Seasons Resort",
      rooms: 237,
      eventSpaces: 3,
      description:
        "Offering a beachfront oasis with stunning views, Four Seasons Resort Dubai is a 5-star property close to the Dubai Mall and Burj Khalifa.",
      image:
        four,
      features: [
        "Beachfront Oasis",
        "Stunning Views",
        "Dubai Mall Close",
        "Burj Khalifa",
      ],
    },
    {
      id: 4,
      name: "Atlantis",
      rooms: 1539,
      eventSpaces: 8,
      description:
        "Spectacularly situated on the crescent of the Palm Jumeirah Island, this ocean themed resort offers the stunning views of the Arabian Gulf.",
      image:
        atlantis,
      features: [
        "Palm Jumeirah",
        "Ocean Themed",
        "Arabian Gulf Views",
        "Spectacular Location",
      ],
    },
    {
      id: 5,
      name: "Habtoor Palace",
      rooms: 234,
      eventSpaces: 4,
      description:
        "Located on the banks of Dubai Water Canal Habtoor Palace is one of the most luxurious hotel, a perfect starting point for numerous sight seeing and tourist choices.",
      image:
        habtoor,
      features: [
        "Dubai Water Canal",
        "Most Luxurious",
        "Sight Seeing",
        "Tourist Choices",
      ],
    },
    {
      id: 6,
      name: "Taj Exotica Resort and Spa",
      rooms: 325,
      eventSpaces: 3,
      description:
        "Located at the crescent of Palm Jumeirah, Taj Exotic is a distinctive island oasis surrounded by white sands and waters of the Arabian Sea.",
      image:
        taj,
      features: [
        "Palm Jumeirah",
        "Island Oasis",
        "White Sands",
        "Arabian Sea",
      ],
    },
  ];

  const whyDubai = [
    {
      icon: Crown,
      title: "Arabian Sky Weddings",
      description:
        "The perfect location to get married under the Arabian sky with world class tourism and luxury - Dubai!",
    },
    {
      icon: Waves,
      title: "Desert or Beach",
      description:
        "One of the best place to get married in the desert or beach with an Arabian flavor, Dubai is the perfect site.",
    },
    {
      icon: Building2,
      title: "World Class Tourism",
      description:
        "Experience unparalleled luxury with iconic landmarks like Burj Khalifa, Dubai Mall, and Palm Jumeirah creating the perfect wedding backdrop.",
    },
    {
      icon: Heart,
      title: "Arabian Luxury",
      description:
        "Celebrate your love story in opulent venues that blend traditional Arabian hospitality with modern architectural marvels and breathtaking city views.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-yellow-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-amber-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              DUBAI
            </h1>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              THE PERFECT LOCATION TO GET MARRIED UNDER THE ARABIAN SKY WITH
              WORLD CLASS TOURISM AND LUXURY- DUBAYY!
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
            <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-yellow-600 hover:shadow-xl transition-all duration-300 group"
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
                      <Bed size={18} className="mr-2 text-yellow-600" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-yellow-600" />
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
                        className="px-3 py-1 bg-yellow-50 text-gray-600 text-xs rounded-full border border-yellow-100"
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
              <div className="w-16 h-1 bg-yellow-600 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-yellow-600 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Dubai offers perfect weather from September to April. This
                    would be the best time to plan a destination wedding in
                    Dubai.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-yellow-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Climate Features
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Desert climate with perfect winters | Sep-Apr: Ideal wedding
                    weather (20-30°C) | Clear skies and Arabian sunshine for
                    outdoor celebrations
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
                alt="Dubai Desert Weather"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Dubai Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;DUBAI?
            </h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              One of the best place to get married in the desert or beach with
              an Arabian flavor, Dubai is the perfect site. Experience world
              class tourism and luxury under the Arabian sky.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDubai.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-yellow-600 hover:shadow-md transition-all duration-300"
              >
                <div className="text-yellow-600 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Dubai Arabian Wedding?
            </h2>
            <p className="text-lg text-yellow-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Dubai,
              where Arabian luxury meets world-class tourism under the stunning
              desert sky with iconic venues and breathtaking views.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Dubai Wedding
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Dubai;
