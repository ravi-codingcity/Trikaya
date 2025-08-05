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
  TreePine,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import ritz from "../../assets/destination/malaysia/ritz.jpg";
import jw from "../../assets/destination/malaysia/jw.jpeg";
import four from "../../assets/destination/malaysia/four.jpg";

function Malaysia() {
  const hotels = [
    {
      id: 1,
      name: "The Ritz-Carlton, Langkawi",
      rooms: 119,
      eventSpaces: 6,
      description:
        "Set in a tranquil and private bay, on expansive grounds that are home to a 10-million-year-old rainforest and pristine beaches. Built in harmony with the verdant surroundings, the resort's residences provide complete privacy with floor-to-ceiling windows, and majestic beach and overwater villas boasting panoramic ocean views.",
      image: ritz,
      features: [
        "Rainforest Setting",
        "Pristine Beaches",
        "Overwater Villas",
        "Panoramic Ocean Views",
      ],
    },
    {
      id: 2,
      name: "JW Marriott Hotel Kuala Lumpur",
      rooms: 491,
      eventSpaces: 22,
      description:
        "The iconic JW Marriott Hotel Kuala Lumpur is ideally located on Jalan Bukit Bintang in the central business and entertainment district. Known as The Happening Hotel, this luxury destination offers exceptional experiences designed to focus on mind, body and spirit, with poolside rooms, spacious suites, and cutting-edge dining.",
      image: jw,
      features: [
        "Central KL Location",
        "22 Event Venues",
        "Shook! Restaurant",
        "Focus on Wellness",
      ],
    },
    {
      id: 3,
      name: "Four Seasons Hotel Kuala Lumpur",
      rooms: 209,
      eventSpaces: "8 Ballrooms",
      description:
        "Experience unparalleled luxury at Four Seasons Hotel Kuala Lumpur in the heart of Malaysia’s dynamic capital. Surrounded by vibrant multicultural energy, our Hotel takes centre stage with its unique blend of panache and sophistication, combining extraordinary dining, sleek accommodations, and legendary Four Seasons service.",
      image: four,
      features: [
        "Unparalleled Luxury",
        "Vibrant Multicultural Energy",
        "8 Ballrooms",
        "Upscale Urban Living",
      ],
    },
  ];

  const whyMalaysia = [
    {
      icon: TreePine,
      title: "Rainforest & Beaches",
      description:
        "From ancient rainforests in Langkawi to pristine beaches, Malaysia offers breathtaking natural landscapes for a truly exotic wedding.",
    },
    {
      icon: Building,
      title: "Vibrant City Life",
      description:
        "Kuala Lumpur's iconic skyline, luxury hotels, and bustling entertainment districts provide a glamorous and modern urban wedding experience.",
    },
    {
      icon: Heart,
      title: "Cultural Fusion",
      description:
        "A rich blend of Malay, Chinese, Indian, and indigenous cultures offers diverse traditions, cuisines, and themes for a unique celebration.",
    },
    {
      icon: Star,
      title: "Affordable Luxury",
      description:
        "Enjoy world-class hospitality, stunning venues, and luxurious amenities at a great value, making your dream wedding both grand and accessible.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-emerald-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-amber-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              MALAYSIA
            </h1>
            <div className="w-24 h-1 bg-emerald-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Truly Asia, where ancient rainforests meet modern skylines.
              Experience a vibrant fusion of cultures, breathtaking natural
              beauty, and world-class luxury in this exotic destination perfect
              for an unforgettable wedding.
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
            <div className="w-20 h-1 bg-emerald-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-emerald-900 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-emerald-900" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-emerald-900" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-emerald-50 rounded-lg">
                      <p className="text-emerald-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-emerald-700 text-sm">
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
                        className="px-3 py-1 bg-emerald-50 text-gray-600 text-xs rounded-full border border-emerald-100"
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
              <div className="w-16 h-1 bg-emerald-900 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-emerald-900 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Malaysia is a year-round destination. For the west coast
                    (Langkawi, KL), the dry season from December to April is
                    ideal. For the east coast, June to August is best. The
                    climate is consistently warm and tropical.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-emerald-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Climate
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Temperature: 25-35°C (77-95°F) year-round. High humidity
                    with distinct wet and dry seasons depending on the region.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Malaysia Landscape"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Malaysia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;MALAYSIA?
            </h2>
            <div className="w-20 h-1 bg-emerald-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Truly Asia, Malaysia offers a perfect blend of exotic natural
              beauty, vibrant city life, and rich cultural diversity. From
              ancient rainforests and pristine beaches to modern skylines and
              world-class luxury, it provides an unforgettable setting for your
              destination wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMalaysia.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-emerald-900 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-emerald-900 mb-6 flex justify-center">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Exotic Malaysian Wedding?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Malaysia,
              where ancient nature meets modern luxury, creating an
              unforgettable celebration in the heart of Southeast Asia.
            </p>
            <Link to="/contact">
              <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Malaysia Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Malaysia;
