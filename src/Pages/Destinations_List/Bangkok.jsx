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
  Ship,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import mandarin from "../../assets/destination/bangkok/mandarin.jpg";
import four from "../../assets/destination/bangkok/four.jpg";
import waldorf from "../../assets/destination/bangkok/waldorf.jpg";
import capella from "../../assets/destination/bangkok/capella.jpg";

function Bangkok() {
  const hotels = [
    {
      id: 1,
      name: "Mandarin Oriental, Bangkok",
      rooms: 393,
      eventSpaces: 8,
      description:
        "A cultural landmark with nearly 150 years of legacy. With unrivaled service, refined dining, historic elegance, and modern luxury, it offers a truly elevated experience on the Chao Phraya River.",
      image: mandarin,
      specialFeature: "150 Years of Legacy",
      capacity: "Iconic Chao Phraya River Views",
      features: [
        "Historic Elegance",
        "Refined Dining",
        "Unrivaled Service",
        "Riverside Luxury",
      ],
    },
    {
      id: 2,
      name: "Four Seasons Hotel Bangkok",
      rooms: 299,
      eventSpaces: 5,
      description:
        "Celebrate your love at our urban riverside oasis. Exchange vows under soaring ceilings with floor-to-ceiling windows, then transition to a grand reception or an outdoor terrace with dazzling fireworks.",
      image: four,
      specialFeature: "Urban Riverside Oasis",
      capacity: "Terrace with Fireworks Display",
      features: [
        "Floor-to-ceiling windows",
        "Grand Indoor Receptions",
        "Expert Wedding Specialists",
        "Riverside Setting",
      ],
    },
    {
      id: 3,
      name: "Waldorf Astoria Bangkok",
      rooms: 171,
      eventSpaces: 3,
      description:
        "Start your “happily ever after” at Waldorf Astoria Bangkok. Our dedicated wedding specialists are pleased to plan every aspect of your wedding, from the engagement ceremony to the wedding party.",
      image: waldorf,
      specialFeature: "Dedicated Wedding Specialists",
      capacity: "Heart of the City",
      features: [
        "Iconic Brand",
        "Personalized Planning",
        "Luxurious Suites",
        "Elegant Ballrooms",
      ],
    },
    {
      id: 4,
      name: "Capella Bangkok",
      rooms: 101,
      eventSpaces: 6,
      description:
        "A sleek, low-rise facade designed to integrate with its riverside setting. Floor-to-ceiling windows draw in expansive river and pool views, creating a striking yet harmonious presence on the water’s edge.",
      image: capella,
      specialFeature: "Harmonious Riverside Design",
      capacity: "Expansive River & Pool Views",
      features: [
        "Floor-to-ceiling windows",
        "Intimate Luxury",
        "Sleek Architecture",
        "Waterfront Presence",
      ],
    },
  ];

  const whyBangkok = [
    {
      icon: Ship,
      title: "Riverside Romance",
      description:
        "The majestic Chao Phraya River offers a stunning backdrop for romantic ceremonies, dinner cruises, and breathtaking photos.",
    },
    {
      icon: Building,
      title: "Vibrant City Life",
      description:
        "From rooftop bars to bustling markets and luxury malls, Bangkok's energy provides endless entertainment for you and your guests.",
    },
    {
      icon: UtensilsCrossed,
      title: "World-Class Cuisine",
      description:
        "A food lover's paradise, offering everything from Michelin-starred restaurants to legendary street food for a memorable culinary experience.",
    },
    {
      icon: Crown,
      title: "Rich Culture & Temples",
      description:
        "Incorporate Thailand's rich cultural heritage with blessings at ornate temples or traditional ceremonies for a unique and meaningful wedding.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-amber-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-fuchsia-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              BANGKOK
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The City of Angels, where ancient temples stand beside modern marvels. Experience a city of vibrant street life, serene river views, and unparalleled hospitality for a wedding that is both exhilarating and elegant.
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
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-amber-500 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-amber-600" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-amber-600" />
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
                        className="px-3 py-1 bg-amber-50 text-gray-600 text-xs rounded-full border border-amber-100"
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
              <div className="w-16 h-1 bg-amber-500 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-amber-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best time to visit Bangkok is during the cool, dry season from November to February. This period offers pleasant temperatures and lower humidity, perfect for city exploration and outdoor events.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-amber-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Climate
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Temperature: 26-34°C (79-93°F). Bangkok has three seasons: hot (March-June), rainy (July-October), and cool (November-February).
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Bangkok Landscape"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Bangkok Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;BANGKOK?
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bangkok is a city of incredible contrasts, offering a unique blend of cosmopolitan energy and rich cultural heritage. From serene riverside ceremonies to glamorous rooftop parties, it's a destination that promises a wedding full of excitement, elegance, and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyBangkok.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-amber-600 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Begin Your Journey in the City of Angels?
            </h2>
            <p className="text-lg text-amber-100 mb-8 mx-auto max-w-3xl">
              Let us craft your dream wedding in Bangkok, a city that blends golden temples with cosmopolitan flair. Your unforgettable celebration awaits.
            </p>
            <Link to="/contact">
              <button className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Bangkok Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Bangkok;
