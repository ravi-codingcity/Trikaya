import React from "react";
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
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import roseate from "../../assets/destination/rishikesh/roseate.jpg";
import westin from "../../assets/destination/rishikesh/westin.jpg"; 

function Rishikesh() {
  const hotels = [
    {
      id: 1,
      name: "Hotel Roseate Rishikesh",
      rooms: "17 Villas",
      eventSpaces: "Multiple",
      description:
        "Experience fine dining in Rishikesh at the signature restaurant, 'Chidya Ghar', that amalgamates elegant decor with a menu prepared from seasonal, local, organic ingredients. Features an in-house patisserie & boulangerie, 'Roasted by Roseate'. Offers comprehensive spa and yoga services for physical, mental and spiritual wellness, along with adventure activities like hiking, trekking, river rafting, and spiritual experiences.",
      image: roseate,
      features: [
        "Signature Restaurant 'Chidya Ghar'",
        "In-house Patisserie",
        "Spa & Yoga Services",
        "Adventure Activities",
      ],
    },
    {
      id: 2,
      name: "The Westin Resort & Spa Himalayas",
      rooms: 141,
      eventSpaces: 2,
      description:
        "The Westin Resort & Spa, Himalayas is a luxury wellness retreat located in Narendra Nagar near Rishikesh, nestled in the Himalayan foothills with breathtaking views of the Ganga valley. Spread across 12 acres, offers 141 spacious rooms and suites, including villas with private pools, featuring signature Heavenly® Bed, modern amenities, and private balconies. Features multiple dining venues, renowned Heavenly® Spa, infinity pool, and cultural experiences.",
      image: westin,
      features: [
        "Heavenly® Bed & Spa",
        "Infinity Pool",
        "Multiple Dining Venues",
        "Cultural Experiences",
      ],
    },
  ];

  const whyRishikesh = [
    {
      icon: Waves,
      title: "Sacred Ganges",
      description:
        "The holy river Ganges flows through Rishikesh, offering sacred blessings and beautiful riverside venues for spiritual wedding ceremonies and divine celebrations.",
    },
    {
      icon: Mountain,
      title: "Himalayan Foothills",
      description:
        "Nestled in the breathtaking Himalayan foothills, providing stunning mountain views and serene natural beauty as the perfect backdrop for your special day.",
    },
    {
      icon: Heart,
      title: "Yoga Capital",
      description:
        "Known as the Yoga Capital of the World, offering spiritual wellness experiences, meditation sessions, and holistic healing for mind, body, and soul.",
    },
    {
      icon: TreePine,
      title: "Adventure & Serenity",
      description:
        "Perfect blend of adventure activities like river rafting, trekking, and nature walks with peaceful spiritual experiences and wellness retreats.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              RISHIKESH
            </h1>
            <div className="w-24 h-1 bg-orange-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The Yoga Capital of the World, where the sacred Ganges flows through the Himalayan foothills. Experience spiritual bliss, adventure activities, and luxury wellness retreats in this divine destination perfect for soul-enriching weddings.
            </p>
          </div>
        </div>
      </section>

      {/* Top Hotels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-luxury-navy mb-4 tracking-wider">
              TOP&nbsp;HOTELS
            </h2>
            <div className="w-20 h-1 bg-orange-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-orange-900 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-orange-900" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-orange-900" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Event Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-orange-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-orange-700 text-sm">
                        {hotel.capacity}
                      </p>
                    </div>
                  )}

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {hotel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-50 text-gray-600 text-xs rounded-full border border-orange-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
                WEATHER
              </h2>
              <div className="w-16 h-1 bg-orange-900 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-orange-900 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best months to get married in Rishikesh are from October to April. During these months, the weather is pleasant with comfortable temperatures, perfect for outdoor ceremonies by the Ganges and spiritual celebrations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-orange-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Temperature Range
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Winter: 4-20°C (39-68°F) | Summer: 18-38°C (64-100°F) | 
                    Monsoon: 22-32°C (72-90°F)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Rishikesh Weather"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Rishikesh Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;RISHIKESH?
            </h2>
            <div className="w-20 h-1 bg-orange-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Yoga Capital of the World offers a perfect blend of spiritual sanctity, natural beauty, and adventure. With the holy Ganges, Himalayan foothills, and world-class wellness retreats, Rishikesh provides a divine setting for your spiritual destination wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRishikesh.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-orange-900 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-orange-900 mb-6 flex justify-center">
                  <reason.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Experiences Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              SPIRITUAL&nbsp;EXPERIENCES
            </h2>
            <div className="w-20 h-1 bg-orange-900 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-orange-100">
              <Waves className="w-12 h-12 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-luxury-navy mb-3">
                Ganga Aarti
              </h3>
              <p className="text-gray-600">
                Experience the divine evening Aarti ceremony by the sacred Ganges, adding spiritual blessings to your wedding celebration.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-orange-100">
              <Heart className="w-12 h-12 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-luxury-navy mb-3">
                Yoga & Meditation
              </h3>
              <p className="text-gray-600">
                Begin your married life with yoga sessions and meditation practices in the world's yoga capital for inner peace and harmony.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-orange-100">
              <TreePine className="w-12 h-12 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-luxury-navy mb-3">
                Ashram Visits
              </h3>
              <p className="text-gray-600">
                Visit famous ashrams like Sivananda Ashram and The Beatles Ashram for spiritual enlightenment and cultural experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Spiritual Rishikesh Wedding?
            </h2>
            <p className="text-lg text-orange-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Rishikesh, where sacred Ganges meets Himalayan serenity, creating an unforgettable spiritual celebration in the Yoga Capital of the World.
            </p>
            <Link to="/contact">
              <button className="bg-orange-900 hover:bg-orange-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Rishikesh Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Rishikesh;