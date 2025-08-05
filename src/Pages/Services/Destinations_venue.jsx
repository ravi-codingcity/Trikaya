import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Heart,
  Camera,
  Plane,
  Crown,
  Mountain,
  Waves,
  Building,
  TreePine,
  Sun,
  Star,
  Sparkles,
  Globe,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const DestinationsVenue = () => {
  const destinations = [
    {
      id: 1,
      name: "JAIPUR",
      icon: Crown,
      distance: "268KM FROM DELHI",
      description: "THIS PINK CITY IS THE IDEAL LOCATION FOR YOUR BIG FAT DESTINATION WEDDING!",
      details: "Destination wedding hotels in Jaipur, destination wedding planner in jaipur, wedding planning in jaipur",
      color: "from-pink-400 to-rose-600",
      route: "/destinations/jaipur",
      speciality: "Royal Heritage",
    },
    {
      id: 2,
      name: "AGRA",
      icon: Heart,
      distance: "CITY OF ROMANCE",
      description: "IF CELEBRATING LOVE THROUGH A FANCY AND EXOTIC DESTINATION WEDDING IS YOUR DREAM, THIS CITY OF ROMANCE - AGRA, IS WHERE YOU SHOULD FULLFILL IT!",
      details: "Destination wedding hotels in agra, destination wedding planner in agra, wedding planning in agra",
      color: "from-red-400 to-pink-600",
      route: "/destinations/agra",
      speciality: "Iconic Beauty",
    },
    {
      id: 3,
      name: "UDAIPUR",
      icon: Crown,
      distance: "CITY OF LAKES",
      description: "IF A ROYAL DESTINATION WEDDING WITH AN ESSENCE OF NATURAL BEAUTY IS WHAT YOU CRAVE FOR, THIS CITY OF LAKES - UDAIPUR IS THE PERFECT CHOICE",
      details: "Destination wedding hotels in udaipur, destination wedding planner in udaipur, wedding planning in udaipur",
      color: "from-blue-400 to-indigo-600",
      route: "/destinations/udaipur",
      speciality: "Lake Palace",
    },
    {
      id: 4,
      name: "GOA",
      icon: Waves,
      distance: "BEACH PARADISE",
      description: "GET HITCHED AT A SERENE BEACH DESTINATION WEDDING WITH A BEACH SIDE MANDAP AND THE IDYLLIC SETTING,WITH A BACKDROP OF OCEAN WAVES IN GOA",
      details: "Destination wedding hotels in goa, destination wedding planner in goa, wedding planning in goa",
      color: "from-cyan-400 to-blue-600",
      route: "/destinations/goa",
      speciality: "Beach Weddings",
    },
    {
      id: 5,
      name: "JIM CORBETT",
      icon: TreePine,
      distance: "NATURE'S HEART",
      description: "EXCHANGE YOUR WEDDING VOWS RIGHT IN THE HEART OF NATURE AT JIM CORBETT, MAKING A MEMORABLE AFFAIR TO REMEMBER FOR A LIFE TIME.",
      details: "Destination wedding hotels in Jim corbett, destination wedding planner in jim corbett, wedding planning in jim corbett",
      color: "from-green-400 to-emerald-600",
      route: "/destinations/jim-corbett",
      speciality: "Wildlife Experience",
    },
    {
      id: 6,
      name: "MUSSOORIE",
      icon: Mountain,
      distance: "QUEEN OF HILLS",
      description: "ON CAPTIVATING MOUNTAIN TOPS AND RIGHT BENEATH THE BRIGHT SKY,THE QUEEN OF HILLS - MUSSOORIE OFFERS ONE OF THE MOST SIZZLING LOCATIONS FOR DESTINATION WEDDING",
      details: "Destination wedding hotels in mussoorie, destination wedding planner in mussoorie, wedding planning in mussoorie",
      color: "from-teal-400 to-green-600",
      route: "/destinations/mussoorie",
      speciality: "Hill Station",
    },
    {
      id: 7,
      name: "SHIMLA",
      icon: Mountain,
      distance: "SNOW COVERED CITY",
      description: "ENJOY YOUR SPECIAL DAY IN THIS SNOW COVERED MOUNTAIN CITY - SHIMLA, WITH BREATHTAKING VIEWS AND CHARMING NATURAL SETTINGS.",
      details: "Destination wedding hotels in shimla, destination wedding planner in shimla, wedding planning in shimla",
      color: "from-slate-400 to-gray-600",
      route: "/destinations/shimla",
      speciality: "Mountain Views",
    },
    {
      id: 8,
      name: "JAISALMER",
      icon: Sun,
      distance: "GOLDEN CITY",
      description: "THE GOLDEN CITY OF INDIA JAISALMER, KNOWN FOR SAND DUNES, OASES AND BEAUTY, HAS BECOME THE DREAM DESTINATION VENUE FOR A ROYAL DESTINATION WEDDING",
      details: "Destination wedding hotels in Jaisalmer, destination wedding planner in jaisalmer, wedding planning in jaisalmer",
      color: "from-yellow-400 to-orange-600",
      route: "/destinations/jaisalmer",
      speciality: "Desert Royal",
    },
    {
      id: 9,
      name: "DELHI NCR",
      icon: Building,
      distance: "CAPITAL REGION",
      description: "ONE OF THE POPULAR DESTINATIONS TO GET HITCHED, WILL OFFER YOU MOST AWE-INSPIRING VENUES THAT WILL LEAVE YOU LOVE STRUCK!",
      details: "Destination wedding hotels in delhi ncr, destination wedding planner in delhi ncr, wedding planning in delhi ncr",
      color: "from-purple-400 to-violet-600",
      route: "/destinations/delhi",
      speciality: "Urban Luxury",
    },
    {
      id: 10,
      name: "JODHPUR",
      icon: Crown,
      distance: "BLUE CITY",
      description: "JODHPUR IS NOT ONLY THE GATEWAY TO THAR, BUT A GATEWAY TO YOUR DESTINATION WEDDING, OFFERING YOU WITH PALATIAL LAYOUTS AND RICH HISTORIC VIBES TO ADD THAT ESSENCE OF ROYALTY TO YOUR WEDDING",
      details: "Destination wedding hotels in Jodhpur, destination wedding planner in jodhpur, wedding planning in jodhpur",
      color: "from-indigo-400 to-blue-600",
      route: "/destinations/jodhpur",
      speciality: "Royal Heritage",
    },
    {
      id: 11,
      name: "KERALA",
      icon: TreePine,
      distance: "GOD'S OWN COUNTRY",
      description: "TIE THE KNOT IN THE LAP OF NATURE WITH FLAWLESS SCENERY AND COOL BREEZE OF KERALA, SETTING THE TONE OF YOUR DESTINATION WEDDING",
      details: "Destination wedding hotels in kerala, destination wedding planner in kerala, wedding planning in kerala",
      color: "from-emerald-400 to-green-600",
      route: "/destinations/kerala",
      speciality: "Natural Beauty",
    },
    {
      id: 12,
      name: "HUA HIN",
      icon: Waves,
      distance: "THAILAND",
      description: "AN EXEMPLARY WEDDING SETTING ON THE SHORES OF GULF OF THAILAND IS ALL YOU NEED FOR THE PERFECT TOP NOTCH DESTINATION WEDDING.",
      details: "Destination wedding hotels in hua hin, destination wedding planner in hua hin, wedding planning in hua hin",
      color: "from-orange-400 to-red-600",
      route: "/destinations/hua-hin",
      speciality: "Beach Paradise",
    },
    {
      id: 13,
      name: "ABU DHABI",
      icon: Building,
      distance: "UAE",
      description: "THE MIDDLE EAST DESTINATIONS HAVE THEIR OWN CHARM AND SPLENDOUR TO ADD THAT PINCH OF EXOTIC-NESS TO YOUR DREAM DAY",
      details: "Destination wedding hotels in abu dhabi, destination wedding planner in abu dhabi, wedding planning in abu dhabi",
      color: "from-amber-400 to-yellow-600",
      route: "/destinations/abu-dhabi",
      speciality: "Luxury Desert",
    },
    {
      id: 14,
      name: "DUBAI",
      icon: Building,
      distance: "UAE",
      description: "IF GETTING MARRIED IN STYLE AT BEAUTIFUL VENUES UNDER THE BREEZY ARABIAN SKIES IS WHAT YOU DREAM FOR, THEN DUBAI IS THE PERFECT CHOICE FOR YOUR DESTINATION WEDDING",
      details: "Destination wedding hotels in dubai, destination wedding planner in dubai, wedding planning in dubai",
      color: "from-cyan-400 to-blue-600",
      route: "/destinations/dubai",
      speciality: "Modern Luxury",
    },
    {
      id: 15,
      name: "PHUKET",
      icon: Waves,
      distance: "THAILAND",
      description: "OFFERING A PICTURESQUE ISLAND LOCATION AND DENSE FORESTRY, THIS JEWEL IN THAILAND IS ONE OF THE ROMANTIC DESTINATIONS TO GET HITCHED.",
      details: "Destination wedding hotels in phuket, destination wedding planner in phuket, wedding planning in phuket",
      color: "from-teal-400 to-cyan-600",
      route: "/destinations/phuket",
      speciality: "Island Paradise",
    },
    {
      id: 16,
      name: "PUSHKAR",
      icon: Crown,
      distance: "RAJASTHAN",
      description: "IF A REGAL WEDDING WITH A BLEND OF RICH INDIAN VALUES AND MODERN OPULENCE IS THE CHOICE OF VIBE FOR YOUR WEDDING, THEN PUSHKAR IS YOUR BEST CHOICE.",
      details: "Destination wedding hotels in pushkar, destination wedding planner in pushkar, wedding planning in pushkar",
      color: "from-rose-400 to-pink-600",
      route: "/destinations/pushkar",
      speciality: "Sacred Beauty",
    },
  ];

  const destinationFeatures = [
    {
      icon: Globe,
      title: "Worldwide Destinations",
      description: "Handpicked venues across India and international locations",
    },
    {
      icon: Crown,
      title: "Royal Experiences",
      description: "Palace weddings and luxury venue arrangements",
    },
    {
      icon: Heart,
      title: "Romantic Settings",
      description: "Picture-perfect backdrops for your special moments",
    },
    {
      icon: Camera,
      title: "Instagram Worthy",
      description: "Stunning locations that create lasting memories",
    },
  ];

  const venueStats = [
    { number: "16+", label: "Premium Destinations" },
    { number: "500+", label: "Beautiful Venues" },
    { number: "1000+", label: "Happy Couples" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Navbar />
      
      {/* Destinations Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Our Premium Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked collection of breathtaking venues across India and around the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={destination.route} className="block">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${destination.color} p-6 relative overflow-hidden`}>
                      <motion.div
                        className="absolute top-0 right-0 opacity-20"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <destination.icon size={80} />
                      </motion.div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <destination.icon className="w-8 h-8 text-white" />
                          <span className="text-white/80 text-sm font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                            {destination.speciality}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-wider">
                          {destination.name}
                        </h3>
                        <p className="text-white/90 text-sm font-medium">
                          {destination.distance}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                        {destination.description}
                      </p>
                      
                      <p className="text-gray-500 text-xs italic mb-6 line-clamp-2">
                        {destination.details}
                      </p>

                      <div className="flex items-center justify-between">
                        <motion.span
                          className={`text-transparent bg-gradient-to-r ${destination.color} bg-clip-text font-semibold group-hover:scale-105 transition-transform duration-300`}
                        >
                          READ MORE...
                        </motion.span>
                        <motion.div
                          className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <Plane size={20} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-purple-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Our Destination Portfolio
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {venueStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600"></div>
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Plan Your Dream Destination Wedding?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let us help you create the perfect celebration in your ideal destination
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Planning Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationsVenue;