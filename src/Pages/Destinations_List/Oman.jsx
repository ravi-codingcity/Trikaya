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
  Mountain,
  Waves,
  Gem,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import hinu from "../../assets/destination/oman/hinubay.jpg";
import kempinski from "../../assets/destination/oman/kempinski.jpg";
import regis from "../../assets/destination/oman/regis.jpg";
import jw from "../../assets/destination/oman/jw.jpg";

function Oman() {
  const hotels = [
    {
      id: 1,
      name: "Alila Hinu Bay",
      rooms: 112,
      eventSpaces: 3,
      description:
        "Nestled between the Arabian Sea and Dhofar Mountains, Alila Hinu Bay is an ecologically attractive site offering a gateway to dramatic coastlines and historical treasures.",
      image: hinu,
      specialFeature: "Ecological Sanctuary",
      capacity: "Between Arabian Sea & Dhofar Mountains",
      features: [
        "Dramatic Coastlines",
        "Historical Treasures",
        "Ecologically Attractive",
        "Serene Environment",
      ],
    },
    {
      id: 2,
      name: "Kempinski Hotel Muscat",
      rooms: 310,
      eventSpaces: 4,
      description:
        "Offers state-of-the-art meeting facilities, world-class restaurants, a private bowling center, and an authentic spa experience. Features a striking diamond-shaped pillarless ballroom.",
      image: kempinski,
      specialFeature: "Diamond-Shaped Ballroom",
      capacity: "Up to 800 Guests",
      features: [
        "World-Class Restaurants",
        "Private Bowling",
        "Authentic Spa",
        "Pillarless Ballroom",
      ],
    },
    {
      id: 3,
      name: "The St. Regis Al Mouj Muscat Resort",
      rooms: 250,
      eventSpaces: 2,
      description:
        "This resort offers a variety of event spaces, including a large pillarless ballroom that can be divided into three sections, and a grand reception area with spacious parking.",
      image: regis,
      specialFeature: "Divisible Pillarless Ballroom",
      capacity: "Up to 1,500 Guests",
      features: [
        "Flexible Event Spaces",
        "Grand Reception Area",
        "Spacious Parking",
        "Luxury Resort Experience",
      ],
    },
    {
      id: 4,
      name: "JW Marriott Hotel Muscat",
      rooms: 304,
      eventSpaces: 4,
      description:
        "Directly linked to the Oman Convention and Exhibition Centre, this hotel features an outdoor swimming pool, fitness center, three gardens, and a multipurpose court.",
      image: jw,
      specialFeature: "Direct OCEC Access",
      capacity: "Convention & Exhibition Hub",
      features: [
        "Outdoor Pool",
        "Three Gardens",
        "Multipurpose Court",
        "24-Hour Front Desk",
      ],
    },
  ];

  const whyOman = [
    {
      icon: Mountain,
      title: "Dramatic Landscapes",
      description:
        "From majestic mountains and vast deserts to pristine coastlines, Oman offers a stunning and diverse natural backdrop for your wedding.",
    },
    {
      icon: Gem,
      title: "Rich Culture & Heritage",
      description:
        "Experience the authentic Arabian hospitality and rich history. Incorporate traditional Omani elements for a unique and memorable celebration.",
    },
    {
      icon: Waves,
      title: "Coastal Serenity",
      description:
        "With its beautiful beaches and luxurious seaside resorts, Oman is perfect for a serene and romantic beach wedding.",
    },
    {
      icon: Star,
      title: "Exclusive Luxury",
      description:
        "Oman is home to some of the world's most luxurious hotels and resorts, offering impeccable service and opulent venues for a grand wedding.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-amber-100 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-red-100 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-wider">
              OMAN
            </h1>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The Jewel of Arabia, where ancient traditions meet modern luxury. Discover a land of dramatic landscapes, rich culture, and warm hospitality, offering a truly magical setting for your destination wedding.
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
            <div className="w-20 h-1 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-amber-700 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-amber-800" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-amber-800" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-amber-50 rounded-lg">
                      <p className="text-amber-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-amber-700 text-sm">
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
                        className="px-3 py-1 bg-amber-50 text-gray-600 text-xs rounded-full border border-amber-200"
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wider">
                WEATHER
              </h2>
              <div className="w-16 h-1 bg-amber-700 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-amber-600 mr-3" size={24} />
                    <span className="text-lg font-semibold text-gray-800">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best time to visit Oman is between October and April, when the weather is pleasantly warm and sunny, perfect for outdoor weddings and exploring the country's natural beauty.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-amber-600 mr-3" size={24} />
                    <span className="text-lg font-semibold text-gray-800">
                      Climate
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Oman has a hot, dry desert climate. Temperatures can soar in the summer (May-September), while winters are mild and pleasant. Coastal areas are more humid.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Oman Landscape"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>


{/* Why Wedding in Oman Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;OMAN?
            </h2>
            <div className="w-20 h-1 bg-amber-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Jewel of Arabia, Oman offers a perfect blend of ancient traditions and modern luxury. From majestic mountains and vast deserts to pristine coastlines, it provides a stunning and diverse natural backdrop for your wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyOman.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-amber-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-amber-700 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Arabian Dream Wedding?
            </h2>
            <p className="text-lg text-amber-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan a magical wedding in Oman, a land of enchanting beauty and timeless traditions. Your unforgettable journey begins here.
            </p>
            <Link to="/contact">
              <button className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Oman Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Oman;