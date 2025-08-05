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
  Wind,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import jw from "../../assets/destination/singapore/jw.jpg";
import fairmont from "../../assets/destination/singapore/fairmont.jpg";
import rafles from "../../assets/destination/singapore/rafles.jpg";

function Singapore() {
  const hotels = [
    {
      id: 1,
      name: "JW Marriott Hotel Singapore",
      rooms: 634,
      eventSpaces: 18,
      description:
        "Expertly balances historic heritage with modern style, providing a luxury experience in the city center. Situated in Marina Bay, near the CBD and leading attractions. Features immaculately appointed rooms, a signature Spa by JW, stylish restaurants, and a breathtaking Grand Ballroom with a stunning Forest of Lights.",
      image: jw,
      specialFeature: "Grand Ballroom with Forest of Lights",
      capacity: "Marina Bay Luxury",
      features: [
        "Historic Heritage & Modern Style",
        "Spa by JW",
        "City Center Location",
        "18 Event Venues",
      ],
    },
    {
      id: 2,
      name: "Hotel Fairmont Singapore",
      rooms: 778,
      eventSpaces: "3 Ballrooms",
      description:
        "A beacon of luxury in the heart of the city, offering exceptional service and thoughtfully curated experiences. Features stylishly appointed rooms, a wide array of dining options, and award-winning wellness facilities. Its prime location is steps from Singapore’s cultural landmarks and business districts.",
      image: fairmont,
      specialFeature: "Award-Winning Wellness Facilities",
      capacity: "Heart of the City",
      features: [
        "778 Stylish Rooms",
        "Wide Dining Options",
        "Prime Location",
        "3 Grand Ballrooms",
      ],
    },
    {
      id: 3,
      name: "Hotel Raffles Singapore",
      rooms: 115,
      eventSpaces: 3,
      description:
        "A beacon of classic colonial architecture perfectly preserved among modern skyscrapers. Located in the vibrant business and civic district, it features the Raffles Arcade for shopping and is walking distance to the Convention Centre and Esplanade. Offers a timeless experience of luxury and heritage.",
      image: rafles,
      specialFeature: "Iconic Colonial Architecture",
      capacity: "A National Monument",
      features: [
        "Classic Colonial Heritage",
        "Raffles Arcade Shopping",
        "All-Suite Accommodations",
        "Legendary Service",
      ],
    },
  ];

  const whySingapore = [
    {
      icon: Building,
      title: "Futuristic Skyline",
      description:
        "An iconic skyline featuring Marina Bay Sands and the Supertree Grove provides a stunningly modern and glamorous backdrop for any wedding.",
    },
    {
      icon: Wind,
      title: "The Garden City",
      description:
        "Lush greenery, the famous Gardens by the Bay, and the Singapore Botanic Gardens offer beautiful, serene, and natural settings for a picturesque wedding.",
    },
    {
      icon: Heart,
      title: "Cultural Melting Pot",
      description:
        "A vibrant blend of Chinese, Malay, Indian, and Western cultures allows for diverse, unique, and personalized wedding themes, cuisines, and experiences.",
    },
    {
      icon: Star,
      title: "Ultimate Luxury",
      description:
        "Home to world-class luxury hotels, Michelin-starred dining, and unparalleled service, ensuring a truly glamorous and unforgettable celebration.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-cyan-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              SINGAPORE
            </h1>
            <div className="w-24 h-1 bg-green-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The Lion City, where a futuristic skyline meets lush green gardens. Experience the ultimate in modern luxury, cultural diversity, and world-class hospitality in this vibrant metropolis perfect for a glamorous destination wedding.
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
            <div className="w-20 h-1 bg-green-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-green-900 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-green-900" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-green-900" />
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
              <div className="w-16 h-1 bg-green-900 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-green-900 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Singapore is a year-round destination. For the driest weather, consider February to April. The city's climate is consistently warm and humid, making its luxurious indoor venues and climate-controlled attractions ideal for weddings anytime.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Droplets className="text-blue-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Climate
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Temperature: 25-32°C (77-90°F) year-round. High humidity with rainfall throughout the year, heaviest during the monsoon season from November to January.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Singapore Skyline"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Singapore Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;SINGAPORE?
            </h2>
            <div className="w-20 h-1 bg-green-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Lion City offers a perfect blend of futuristic luxury, lush natural beauty, and rich cultural diversity. With its iconic skyline, world-class hotels, and impeccable service, Singapore provides a glamorous and unforgettable setting for your destination wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySingapore.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-green-900 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-green-900 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Glamorous Singapore Wedding?
            </h2>
            <p className="text-lg text-green-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Singapore, where modern luxury meets natural beauty, creating an unforgettable celebration in the heart of Southeast Asia.
            </p>
            <Link to="/contact">
              <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Singapore Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Singapore;
