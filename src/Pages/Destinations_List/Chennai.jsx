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
  Waves,
  Gem,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import itc from "../../assets/destination/chennai/itc.jpg";
import hyatt from "../../assets/destination/chennai/hyatt.jpg";
import taj from "../../assets/destination/chennai/taj.jpg";
import radisson from "../../assets/destination/chennai/radisson.jpg";

function Chennai() {
  const hotels = [
    {
      id: 1,
      name: "ITC Grand Chola, a Luxury Collection Hotel",
      rooms: 600,
      eventSpaces: 2,
      description:
        "ITC Grand Chola, part of Luxury Collection, stands as the largest and most iconic Marriott Hotel in Chennai. With its awe-inspiring size and grandeur, it is a palatial tribute to Southern India's greatest empires, the Imperial Cholas. Features four separate entry points, 522 rooms, 78 serviced apartments, and eleven award-winning dining outlets.",
      image: itc,
      specialFeature: "Largest Marriott Hotel in Chennai",
      capacity: "Palatial Tribute to Chola Empire",
      features: [
        "Iconic Architecture",
        "11 Award-Winning Restaurants",
        "Largest Conference Space",
        "78 Serviced Apartments",
      ],
    },
    {
      id: 2,
      name: "Hyatt Regency Chennai",
      rooms: 325,
      eventSpaces: 2,
      description:
        "Hyatt Regency Chennai is a modern 5-star business hotel, located centrally near major business districts, hospitals and the U.S. Consulate. It is conveniently situated just a short distance from the nearest Metro Station and Chennai International Airport, making it ideal for both business and leisure travelers.",
      image: hyatt,
      specialFeature: "Central Business Location",
      capacity: "Airport & Metro Access",
      features: [
        "Modern Business Hotel",
        "Near U.S. Consulate",
        "Metro Station Access",
        "Close to Airport",
      ],
    },
    {
      id: 3,
      name: "Taj Connemara, Chennai",
      rooms: 147,
      eventSpaces: 2,
      description:
        "Taj Connemara, Chennai is a luxurious heritage hotel that seamlessly blends colonial elegance with modern sophistication. Established in 1854, it is Chennai’s oldest hotel and a true landmark. Spanning 4.5 acres, it features rooms in both Heritage and Tower Wings, the award-winning Raintree restaurant, and the city’s first licensed bar.",
      image: taj,
      specialFeature: "Chennai's Oldest Hotel (1854)",
      capacity: "4.5 Acres Heritage Property",
      features: [
        "Colonial Elegance",
        "Heritage & Tower Wings",
        "Award-winning Raintree Restaurant",
        "City's First Licensed Bar",
      ],
    },
    {
      id: 4,
      name: "Radisson Blu Hotel & Suites GRT Chennai",
      rooms: 179,
      eventSpaces: 5,
      description:
        "A luxurious 5-star hotel located minutes from Chennai International Airport. Features 179 elegantly designed rooms inspired by Madras heritage. Guests can indulge at Ministry of Chutneys, The Great Kebab Factory, and Kari Theory. Boasts the Bodhi Spa & Wellness Center with Chennai’s only Turkish hammam, and over 17,000 sq ft of event space.",
      image: radisson,
      specialFeature: "Chennai’s Only Turkish Hammam",
      capacity: "17,000 sq ft Event Space",
      features: [
        "Near Airport",
        "Bodhi Spa & Wellness",
        "Turkish Hammam",
        "Pet-Friendly",
      ],
    },
  ];

  const whyChennai = [
    {
      icon: Waves,
      title: "Coastal Charm",
      description:
        "Located on the Bay of Bengal, Chennai offers beautiful beaches and stunning seaside venues for romantic and picturesque coastal weddings.",
    },
    {
      icon: Crown,
      title: "Cultural Capital",
      description:
        "Rich in South Indian culture, with ancient temples, classical music, dance forms, and traditional arts providing a vibrant and authentic wedding experience.",
    },
    {
      icon: Building,
      title: "Heritage & Modernity",
      description:
        "A perfect blend of historic colonial architecture and modern luxury, offering a wide range of venues from heritage hotels to contemporary marvels.",
    },
    {
      icon: Gem,
      title: "Culinary Delights",
      description:
        "Famous for its exquisite South Indian cuisine, offering a gastronomic journey with authentic flavors and award-winning restaurants for your wedding feast.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              CHENNAI
            </h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The Cultural Capital of the South, where coastal charm meets rich heritage. Experience vibrant traditions, stunning seaside venues, and world-class hospitality in this bustling metropolis perfect for a grand destination wedding.
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
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-blue-900 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-blue-900" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-blue-900" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Event Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-blue-700 text-sm">
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
                        className="px-3 py-1 bg-blue-50 text-gray-600 text-xs rounded-full border border-blue-100"
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
              <div className="w-16 h-1 bg-blue-900 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-blue-900 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best months to get married in Chennai are from November to February. During these months, the weather is pleasant with lower humidity, perfect for both indoor and outdoor coastal celebrations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-blue-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Temperature Range
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Winter: 20-28°C (68-82°F) | Summer: 25-40°C (77-104°F) | 
                    Monsoon: 24-35°C (75-95°F)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Chennai Weather"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Chennai Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;CHENNAI?
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Cultural Capital of the South offers a perfect blend of coastal beauty, rich traditions, and modern luxury. With stunning seaside venues, ancient temples, and world-class hospitality, Chennai provides a vibrant setting for your grand destination wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChennai.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-900 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Grand Chennai Wedding?
            </h2>
            <p className="text-lg text-blue-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Chennai, where coastal beauty meets cultural richness, creating an unforgettable celebration in the heart of South India.
            </p>
            <Link to="/contact">
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Chennai Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Chennai;
