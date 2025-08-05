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
  Sparkles,
  Gem,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import park from "../../assets/destination/hyderabad/park.jpg";
import taj from "../../assets/destination/hyderabad/taj.jpg";
import westin from "../../assets/destination/hyderabad/westin.jpg";
import leela from "../../assets/destination/hyderabad/leela.jpg";

function Hyderabad() {
  const hotels = [
    {
      id: 1,
      name: "Park Hyatt Hyderabad",
      rooms: 185,
      eventSpaces: 7,
      description:
        "Park Hyatt Hyderabad is one of the most luxurious 5 star hotels in Hyderabad. With opulent architecture and unparalleled service, it's not a stay but a journey that unfolds into rare and intimate experiences. Enjoy stunning art in the hotel, sumptuous suites, a lavish spa, gourmet restaurants, and more.",
      image:
        park,
      features: [
        "Opulent Architecture",
        "Stunning Art Collection",
        "Lavish Spa",
        "Gourmet Restaurants",
      ],
    },
    {
      id: 2,
      name: "Taj Krishna Hyderabad",
      rooms: 261,
      eventSpaces: 7,
      description:
        "Taj Krishna, Hyderabad, sprawls over 56,656 square metres of enviable greenery at the heart of the city. The immaculate lawns offer idyllic spots for leisurely days and picturesque weddings, while our indoor venues boast awe-inspiring ballrooms and well-equipped meeting spaces for business endeavours.",
      image:
        taj,

      features: [
        "56,656 sq m Greenery",
        "Immaculate Lawns",
        "Awe-inspiring Ballrooms",
        "Panoramic City Views",
      ],
    },
    {
      id: 3,
      name: "The Westin Hyderabad",
      rooms: 425,
      eventSpaces: 13,
      description:
        "The Westin Hyderabad marks the advent of the Ambition brand in India, indeed in its very heart, in the beautiful and vibrant city of Hyderabad. Centrally located with easy access to the commercial centres, as well as the entertainment and shopping hubs, ensuring a comfortable and memorable stay.",
      image:
       westin,

      features: [
        "Central Location",
        "Commercial Access",
        "Entertainment Hubs",
        "Shopping Centers",
      ],
    },
    {
      id: 4,
      name: "The Leela Hyderabad",
      rooms: 156,
      eventSpaces: 7,
      description:
        "Set amidst 2.5 acres in the heart of Banjara Hills, The Leela Hyderabad is a luminous jewel in the city of pearls and Nizams, a modern palace style hotel where classic grandeur meets progressive luxury. Inspired by Deccan heritage, its design stuns with Warangal temple-style pillars, Turkish chandeliers, gilded ceilings, and hand-painted murals.",
      image:
        leela,

      features: [
        "Deccan Heritage Design",
        "Warangal Temple Pillars",
        "Turkish Chandeliers",
        "Hand-painted Murals",
      ],
    },
  ];

  const whyHyderabad = [
    {
      icon: Crown,
      title: "City of Nizams",
      description:
        "Rich royal heritage and Nizami culture providing a regal backdrop with palaces, architectural marvels, and traditional grandeur for royal celebrations.",
    },
    {
      icon: Gem,
      title: "Pearl City",
      description:
        "Known as the City of Pearls, offering elegant venues with sophisticated charm and luxury that reflects the city's precious jewel heritage.",
    },
    {
      icon: Building,
      title: "Modern Luxury",
      description:
        "Home to world-class luxury hotels with stunning architecture, expansive lawns, awe-inspiring ballrooms, and unparalleled hospitality services.",
    },
    {
      icon: Heart,
      title: "Cultural Blend",
      description:
        "Perfect fusion of traditional Deccan heritage with modern amenities, creating unique venues that celebrate both history and contemporary luxury.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-rose-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              HYDERABAD
            </h1>
            <div className="w-24 h-1 bg-purple-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The City of Pearls and Nizams, where royal heritage meets modern
              luxury. Experience opulent palaces, stunning architecture, and
              world-class hospitality in India's most culturally rich
              destination for your dream wedding.
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
            <div className="w-20 h-1 bg-purple-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-purple-900 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-purple-900" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-purple-900" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Event Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-purple-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-purple-700 text-sm">
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
                        className="px-3 py-1 bg-purple-50 text-gray-600 text-xs rounded-full border border-purple-100"
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
              <div className="w-16 h-1 bg-purple-900 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-purple-900 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best months to get married in Hyderabad are from
                    November to February. During these months, the weather is
                    pleasant and comfortable, perfect for outdoor celebrations
                    and royal wedding ceremonies.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-purple-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Temperature Range
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Winter: 15-28°C (59-82°F) | Summer: 25-42°C (77-108°F) |
                    Monsoon: 22-32°C (72-90°F)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Hyderabad Weather"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Hyderabad Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;HYDERABAD?
            </h2>
            <div className="w-20 h-1 bg-purple-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The City of Pearls offers a perfect blend of royal Nizami
              heritage, stunning architecture, and modern luxury. With
              magnificent palaces, world-class hotels, and rich cultural
              traditions, Hyderabad provides an enchanting setting for your
              royal destination wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyHyderabad.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-purple-900 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-purple-900 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Royal Hyderabad Wedding?
            </h2>
            <p className="text-lg text-purple-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Hyderabad,
              where Nizami grandeur meets modern luxury, creating an
              unforgettable royal celebration in the City of Pearls.
            </p>
            <Link to="/contact">
              <button className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Hyderabad Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Hyderabad;
