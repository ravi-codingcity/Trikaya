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
  Waves,
  Leaf,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import hyatt from "../../assets/destination/vietnam/hyatt.jpg";
import courtyard from "../../assets/destination/vietnam/country.jpg";
import meridien from "../../assets/destination/vietnam/meridien.jpg";
import jw from "../../assets/destination/vietnam/jw.jpg";

function Vietnam() {
  const hotels = [
    {
      id: 1,
      name: "Hyatt Regency Danang Resort and Spa",
      rooms: 360,
      eventSpaces: 9,
      description:
        "Beachfront resort on the coast of Da Nang City, 5 minutes from Marble Mountains. Offers stunning views of the East Sea, 3 dining options, outdoor pool, and day spa. Close to Asia Park and Love Lock Bridge.",
      image: hyatt,
      specialFeature: "Picturesque Coastline",
      capacity: "360 Rooms & 9 Event Spaces",
      features: [
        "3 Dining Options",
        "Outdoor Pool",
        "Day Spa",
        "Stunning Sea Views",
      ],
    },
    {
      id: 2,
      name: "Courtyard Danang Han River",
      rooms: 296,
      eventSpaces: 10,
      description:
        "5-star experience with rooftop pool, fitness centre, sun terrace, restaurant, and bar. Family and interconnected rooms for all guests.",
      image: courtyard,
      specialFeature: "Rooftop Pool & River Views",
      capacity: "10 Event Spaces",
      features: [
        "Fitness Centre",
        "Sun Terrace",
        "Family Rooms",
        "Restaurant & Bar",
      ],
    },
    {
      id: 3,
      name: "Le Méridien Saigon",
      rooms: 344,
      eventSpaces: 4,
      description:
        "First Le Méridien hotel in Vietnam, located in District 1, Ho Chi Minh City. Easy access to Ben Thanh Market and trendy neighborhoods. Culinary options, spa, infinity pool, and flexible venues including a ballroom. Rooms with Saigon River views.",
      image: meridien,
      specialFeature: "Saigon River Views",
      capacity: "Expansive Ballroom",
      features: [
        "Infinity Pool",
        "Spa & Wellness",
        "Flexible Venues",
        "Culinary Experiences",
      ],
    },
    {
      id: 4,
      name: "JW Marriott Phu Quoc Emerald Bay Resort & Spa",
      rooms: 231,
      eventSpaces: 6,
      description:
        "Luxury haven and eco-conscious oasis on Khem Beach, Phu Quoc. Former 19th-century French university reimagined as a lavish beachfront playground. Private balconies, villas with plunge pools, 5 restaurants, spa, and mosaic-tiled pool.",
      image: jw,
      specialFeature: "Eco-Conscious Oasis",
      capacity: "Beachfront & Villas",
      features: [
        "Private Balconies",
        "Plunge Pools",
        "5 Restaurants",
        "Spa by JW",
      ],
    },
  ];

  const whyVietnam = [
    {
      icon: Waves,
      title: "Stunning Coastlines",
      description:
        "Vietnam boasts some of Asia's most beautiful beaches and islands, perfect for romantic ceremonies and breathtaking photos.",
    },
    {
      icon: Leaf,
      title: "Natural Beauty",
      description:
        "From lush mountains to vibrant rice paddies and tropical forests, Vietnam offers a diverse and picturesque backdrop for your wedding.",
    },
    {
      icon: UtensilsCrossed,
      title: "World-Famous Cuisine",
      description:
        "Treat your guests to Vietnam's celebrated cuisine, from street food to fine dining, for a truly memorable celebration.",
    },
    {
      icon: Star,
      title: "Cultural Richness",
      description:
        "Experience a blend of ancient traditions, French colonial charm, and modern vibrancy for a unique and unforgettable wedding.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-green-100 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-yellow-100 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6 tracking-wider">
              VIETNAM
            </h1>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              A land of timeless beauty, vibrant culture, and breathtaking landscapes. From the beaches of Da Nang to the energy of Ho Chi Minh City, Vietnam is the perfect destination for a wedding that is both exotic and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Top Hotels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-green-900 mb-4 tracking-wider">
              TOP&nbsp;HOTELS
            </h2>
            <div className="w-20 h-1 bg-green-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-green-700 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-green-800" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-green-800" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-green-700 text-sm">
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
              <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6 tracking-wider">
                WEATHER
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-green-700 mr-3" size={24} />
                    <span className="text-lg font-semibold text-green-900">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best time to visit Vietnam is from November to April, when the weather is dry and pleasant in most regions. Coastal areas are ideal for beach weddings during this period.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-green-700 mr-3" size={24} />
                    <span className="text-lg font-semibold text-green-900">
                      Climate
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Vietnam has a tropical climate with regional variations. Expect warm temperatures year-round, with a rainy season from May to October.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Vietnam Landscape"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Vietnam Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;VIETNAM?
            </h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vietnam is a land of contrasts, where ancient traditions meet modern vibrancy. Enjoy stunning coastlines, world-famous cuisine, and a rich cultural heritage for a wedding that is truly unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyVietnam.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-green-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-green-700 mb-6 flex justify-center">
                  <reason.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">
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
      <section className="py-20 bg-gradient-to-r from-green-700 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Dream Wedding in Vietnam?
            </h2>
            <p className="text-lg text-green-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan a magical wedding in Vietnam, where natural beauty, vibrant culture, and world-class hospitality await.
            </p>
            <Link to="/contact">
              <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Vietnam Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Vietnam;
