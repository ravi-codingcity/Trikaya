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
import arista from "../../assets/destination/guwahati/arista.jpg";
import novotel from "../../assets/destination/guwahati/novotel.jpg";
import vivanta from "../../assets/destination/guwahati/vivanta.jpg";
import radisson from "../../assets/destination/guwahati/radisson.jpg";

function Guwahati() {
  const hotels = [
    {
      id: 1,
      name: "Arista by Ambition",
      rooms: 60,
      eventSpaces: 5,
      description:
        "Arista by Ambition marks the advent of the Ambition brand in North-East India, indeed in its very heart, in the beautiful and vibrant city of Guwahati. Business and leisure travellers alike prefer to patronize Arista by Ambition because they are assured of a comfortable and memorable stay. Centrally located with easy access to commercial centres, entertainment and shopping hubs.",
      image:
        arista,
      features: [
        "Central Location",
        "Commercial Access",
        "Entertainment Hubs",
        "Shopping Centers",
      ],
    },
    {
      id: 2,
      name: "Novotel Guwahati GS Road",
      rooms: 118,
      eventSpaces: 6,
      description:
        "Experience an abundance of unparalleled facilities and features at Novotel Guwahati GS Road. Maintain seamless communication using complimentary Wi-Fi. Features airport transfer services, taxi and car hire amenities, complimentary parking, concierge service, express check-in/out, luggage storage, safety deposit boxes, tours, dry cleaning and laundry services.",
      image:
        novotel,

      features: [
        "Airport Transfer",
        "Complimentary Wi-Fi",
        "Concierge Service",
        "Tour Arrangements",
      ],
    },
    {
      id: 3,
      name: "Vivanta Guwahati",
      rooms: 150,
      eventSpaces: 5,
      description:
        "Among the finest hotels in Guwahati city, Vivanta is located 31 km from Guwahati Airport. Located at the heart of the city, our 150 contemporary rooms and suites showcase local artistry through modern bamboo interweaves and traditional Xingkhap patterns. The lobby features awe-inspiring cascading sacred bells, while Kamakhya Temple's distinctive rounded dome influences our architectural elements.",
      image:
        vivanta,

      features: [
        "Traditional Xingkhap Patterns",
        "Bamboo Interweaves",
        "Sacred Bells Lobby",
        "Kamakhya Temple Inspired",
      ],
    },
    {
      id: 4,
      name: "Radisson Blu Hotel Guwahati",
      rooms: 196,
      eventSpaces: 5,
      description:
        "Set in a tranquil sector of Assam, the elegant Radisson Blu Hotel Guwahati offers stellar amenities and a peaceful location a short drive from the city centre. Located on NH-37, provides easy access to Lok Priya Gopinath Bordoloi International Airport and nearby railway station. Close to Kamakhya Temple, Deepor Beel Wildlife Sanctuary, and Assam State Zoo.",
      image:
       radisson,

      features: [
        "Peaceful Location",
        "Airport Access",
        "Wildlife Sanctuary Nearby",
        "Industrial Park Proximity",
      ],
    },
  ];

  const whyGuwahati = [
    {
      icon: TreePine,
      title: "Gateway to Northeast",
      description:
        "The largest city in Northeast India, offering unique cultural experiences and serving as the perfect entry point to explore the region's natural beauty.",
    },
    {
      icon: Crown,
      title: "Spiritual Heritage",
      description:
        "Home to the famous Kamakhya Temple and other ancient Hindu pilgrimage sites, providing a sacred and spiritual backdrop for your celebrations.",
    },
    {
      icon: Waves,
      title: "Brahmaputra Riverside",
      description:
        "Located along the mighty Brahmaputra River, offering scenic waterfront venues and breathtaking river views for memorable wedding ceremonies.",
    },
    {
      icon: Heart,
      title: "Cultural Diversity",
      description:
        "Rich Assamese culture blended with diverse Northeast traditions, creating unique celebration experiences with local artistry and traditional crafts.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-teal-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-emerald-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              GUWAHATI
            </h1>
            <div className="w-24 h-1 bg-teal-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Gateway to Northeast India, where the mighty Brahmaputra flows
              through ancient spiritual lands. Experience rich Assamese culture,
              sacred temples, and modern hospitality in this vibrant city
              perfect for unique destination weddings.
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
            <div className="w-20 h-1 bg-teal-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-teal-900 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-teal-900" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-teal-900" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Event Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-teal-50 rounded-lg">
                      <p className="text-teal-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-teal-700 text-sm">{hotel.capacity}</p>
                    </div>
                  )}

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {hotel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-50 text-gray-600 text-xs rounded-full border border-teal-100"
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
              <div className="w-16 h-1 bg-teal-900 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-teal-900 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best months to get married in Guwahati are from November
                    to March. During these months, the weather is pleasant and
                    dry, perfect for outdoor celebrations along the Brahmaputra
                    riverside.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-teal-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Temperature Range
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Winter: 8-25°C (46-77°F) | Summer: 20-35°C (68-95°F) |
                    Monsoon: 22-32°C (72-90°F)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Guwahati Weather"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Guwahati Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;GUWAHATI?
            </h2>
            <div className="w-20 h-1 bg-teal-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Gateway to Northeast India offers a unique blend of spiritual
              heritage, natural beauty, and cultural diversity. With the mighty
              Brahmaputra River, ancient temples, and rich Assamese traditions,
              Guwahati provides an extraordinary setting for your destination
              wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGuwahati.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-teal-900 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-teal-900 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Guwahati Wedding Adventure?
            </h2>
            <p className="text-lg text-teal-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Guwahati,
              where Northeast heritage meets modern hospitality, creating an
              unforgettable celebration by the mighty Brahmaputra.
            </p>
            <Link to="/contact">
              <button className="bg-teal-900 hover:bg-teal-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Guwahati Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Guwahati;
