import React from "react";
import {
  MapPin,
  Star,
  Calendar,
  Users,
  Bed,
  Building,
  Sun,
  Thermometer,
  ArrowLeft,
  Landmark,
  Waves,
  Crown,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import raffles from "../../assets/destination/qatar/raffles.jpg";
import four from "../../assets/destination/qatar/four.jpg";
import regis from "../../assets/destination/qatar/regis.jpeg";
import mandarin from "../../assets/destination/qatar/mandarin.jpg";

function Qatar() {
  const hotels = [
    {
      id: 1,
      name: "Raffles Doha",
      rooms: 126,
      eventSpaces: 9,
      description:
        "The Raffles legacy as an oasis for the well-travelled lives on at Raffles Doha, a beacon of ultra-luxury accommodation. Soaring over the city and Arabian Gulf in Katara Towers, this hotel features 132 opulent suites, personalised butler service, spectacular restaurants, and a restorative wellness spa.",
      image: raffles,
      specialFeature: "Katara Towers Landmark",
      capacity: "Opulent Suites & Gulf Views",
      features: [
        "Personalised Butler Service",
        "Terrace Suites",
        "Wellness Spa",
        "Iconic Waterfront Location",
      ],
    },
    {
      id: 2,
      name: "Four Seasons Hotel Doha",
      rooms: 237,
      eventSpaces: 21,
      description:
        "A five-star hotel reimagined with modern grandeur and sparkling with sunlight and sea views. This beachfront urban retreat offers an elegant lobby, energetic restaurants, and a vibrant hotspot true to Qatari roots.",
      image: four,
      specialFeature: "Beachfront Urban Retreat",
      capacity: "Sunlit Sea Views & 21 Venues",
      features: [
        "Elegant Lobby",
        "Energetic Restaurants",
        "Beachfront Location",
        "Qatari Hospitality",
      ],
    },
    {
      id: 3,
      name: "The St. Regis Doha",
      rooms: 237,
      eventSpaces: 21,
      description:
        "A five-star beach hotel on the West Bay, near the Diplomatic District. Features a 1,850 sq.m Grand Ballroom, Guerlain Spa, private beach cabanas, and bespoke Arabian-influenced décor with state-of-the-art technology.",
      image: regis,
      specialFeature: "Grand Ballroom & Private Beach",
      capacity: "Luxury Resort Facilities",
      features: [
        "Guerlain Spa",
        "Private Cabanas",
        "Pearl Island Views",
        "24/7 Butler Service",
      ],
    },
    {
      id: 4,
      name: "Mandarin Oriental, Doha",
      rooms: 527,
      eventSpaces: 4,
      description:
        "An intimate and stylish urban retreat in the centre of Msheireb Downtown Doha, the lifestyle and cultural heart of the city. Offers luxury rooms, event spaces, and world-class amenities.",
      image: mandarin,
      specialFeature: "Msheireb Downtown Location",
      capacity: "527 Rooms & 4 Event Spaces",
      features: [
        "Urban Retreat",
        "Cultural Heart of Doha",
        "Luxury Amenities",
        "Stylish Design",
      ],
    },
  ];

  const whyQatar = [
    {
      icon: Landmark,
      title: "Iconic Architecture",
      description:
        "Qatar is home to some of the world's most striking modern landmarks, offering a dramatic and luxurious backdrop for your wedding.",
    },
    {
      icon: Waves,
      title: "Waterfront Luxury",
      description:
        "From the Arabian Gulf's turquoise waters to private beaches and marinas, Qatar offers stunning waterfront venues for unforgettable celebrations.",
    },
    {
      icon: Crown,
      title: "Royal Hospitality",
      description:
        "Experience world-class service and Qatari hospitality, with opulent hotels and personalized attention for every guest.",
    },
    {
      icon: Star,
      title: "Cultural Fusion",
      description:
        "Blend of tradition and innovation, with vibrant souqs, art, and cuisine, making every wedding unique and memorable.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-sky-100 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-yellow-100 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-wider">
              QATAR
            </h1>
            <div className="w-24 h-1 bg-sky-700 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              A land of futuristic skylines, Arabian traditions, and luxury hospitality. Discover a destination where your wedding is set against the backdrop of iconic towers, sparkling waters, and vibrant culture.
            </p>
          </div>
        </div>
      </section>

      {/* Top Hotels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 tracking-wider">
              TOP&nbsp;HOTELS
            </h2>
            <div className="w-20 h-1 bg-sky-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-sky-700 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-sky-800" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-sky-800" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-sky-50 rounded-lg">
                      <p className="text-sky-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-sky-700 text-sm">
                        {hotel.capacity}
                      </p>
                    </div>
                  )}

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {hotel.description}
                  </p>
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wider">
                WEATHER
              </h2>
              <div className="w-16 h-1 bg-sky-700 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-sky-700 mr-3" size={24} />
                    <span className="text-lg font-semibold text-gray-800">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best time to visit Qatar is from November to April, when the weather is pleasantly cool and ideal for outdoor events and celebrations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-sky-700 mr-3" size={24} />
                    <span className="text-lg font-semibold text-gray-800">
                      Climate
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Qatar has a desert climate with hot summers and mild winters. Summer temperatures can exceed 40°C (104°F), while winters are comfortable and sunny.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Qatar Landscape"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Qatar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;QATAR?
            </h2>
            <div className="w-20 h-1 bg-sky-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Qatar is a land of contrasts, where futuristic skylines meet ancient traditions. Enjoy world-class hospitality, iconic architecture, and vibrant culture for a wedding that is truly extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyQatar.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-sky-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-sky-700 mb-6 flex justify-center">
                  <reason.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
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
      <section className="py-20 bg-gradient-to-r from-sky-700 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Iconic Qatari Wedding?
            </h2>
            <p className="text-lg text-sky-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan a spectacular wedding in Qatar, where luxury, culture, and innovation come together for an unforgettable celebration.
            </p>
            <Link to="/contact">
              <button className="bg-sky-900 hover:bg-sky-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Qatar Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Qatar;
