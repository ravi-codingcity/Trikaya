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
  Flower,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import taj from "../../assets/destination/ahemdabad/taj.jpg";
import itc from "../../assets/destination/ahemdabad/itc.jpg";
import vivanta from "../../assets/destination/ahemdabad/vivanta.jpg";
import ummed from "../../assets/destination/ahemdabad/ummed.jpg";

function Ahmedabad() {
  const hotels = [
    {
      id: 1,
      name: "Taj Skyline",
      rooms: 308,
      eventSpaces: 4,
      description:
        "An elegant addition to the city, Taj Skyline draws design inspiration from Ahmedabad's vibrant spirit. Heritage and cultural ingenuity run deep, from interiors to cuisine. The hotel features 308 luxurious rooms, signature peacock motifs, and a range of dining and wellness options.",
      image: taj,
      specialFeature: "Navratri & Peacock Motifs",
      capacity: "308 Rooms & 4 Event Spaces",
      features: [
        "Signature J Wellness Spa",
        "Indoor Pool",
        "Multicuisine Dining",
        "Cultural Design",
      ],
    },
    {
      id: 2,
      name: "ITC Narmada, Ahmedabad",
      rooms: 291,
      eventSpaces: 4,
      description:
        "Influenced by the Toran of Vadnagar, the grand hotel façade is a symbolic gateway to the region. The atrium stepwell-design celebrates Adalaj Ni Vav, while the river Narmada is depicted as a waterfall. Intricate handicraft and vibrant culture are expressed throughout the hotel.",
      image: itc,
      specialFeature: "Stepwell Atrium & Waterfall",
      capacity: "291 Rooms & 4 Event Spaces",
      features: [
        "Handicraft Motifs",
        "Prime Location",
        "Signature Services",
        "Cultural Art",
      ],
    },
    {
      id: 3,
      name: "Vivanta Ahmedabad SG Highway",
      rooms: 176,
      eventSpaces: 2,
      description:
        "Delve into the vibrant ambience of the city at Vivanta Ahmedabad SG Highway, where modern style blends with echoes of history. Thoughtfully designed spaces and seamless hospitality create a refined urban retreat.",
      image: vivanta,
      specialFeature: "Modern Urban Retreat",
      capacity: "176 Rooms & 2 Event Spaces",
      features: [
        "Refined Hospitality",
        "Modern Design",
        "City Views",
        "Seamless Service",
      ],
    },
    {
      id: 4,
      name: "The Ummed Ahmedabad",
      rooms: 91,
      eventSpaces: 4,
      description:
        "Gujarat's first 5-star luxury hotel, located near the airport. Designed to showcase fine Indian aesthetics and contemporary elements, with original teak wood furnishing, green marble, and views of lush gardens or shimmering waters.",
      image: ummed,
      specialFeature: "Lush Gardens & Teak Furnishings",
      capacity: "91 Rooms & 4 Event Spaces",
      features: [
        "Airport Proximity",
        "Indian Aesthetics",
        "Garden Views",
        "Luxury Comfort",
      ],
    },
  ];

  const whyAhmedabad = [
    {
      icon: Landmark,
      title: "Heritage & Culture",
      description:
        "Ahmedabad is a UNESCO World Heritage City, rich in history, architecture, and vibrant festivals, making it a unique wedding destination.",
    },
    {
      icon: Flower,
      title: "Colorful Traditions",
      description:
        "Experience the energy of Navratri, intricate handicrafts, and the warmth of Gujarati hospitality for a truly memorable celebration.",
    },
    {
      icon: UtensilsCrossed,
      title: "Culinary Delights",
      description:
        "Treat your guests to authentic Gujarati cuisine, from street food to royal banquets, for a feast to remember.",
    },
    {
      icon: Star,
      title: "Modern Luxury",
      description:
        "Ahmedabad offers a blend of luxury hotels, modern amenities, and seamless connectivity for a grand and comfortable wedding experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-yellow-100 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-900 mb-6 tracking-wider">
              AHMEDABAD
            </h1>
            <div className="w-24 h-1 bg-yellow-700 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The heart of Gujarat, where heritage meets modernity. Celebrate your wedding in a city known for its vibrant culture, colorful festivals, and luxurious hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Top Hotels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-900 mb-4 tracking-wider">
              TOP&nbsp;HOTELS
            </h2>
            <div className="w-20 h-1 bg-yellow-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-yellow-700 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
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
                      <Bed size={18} className="mr-2 text-yellow-800" />
                      <span className="font-medium">{hotel.rooms} Rooms</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building size={18} className="mr-2 text-yellow-800" />
                      <span className="font-medium">
                        {hotel.eventSpaces} Venues
                      </span>
                    </div>
                  </div>

                  {hotel.specialFeature && (
                    <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-yellow-800 font-semibold text-sm">
                        {hotel.specialFeature}
                      </p>
                      <p className="text-yellow-700 text-sm">
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
              <h2 className="text-3xl md:text-5xl font-bold text-yellow-900 mb-6 tracking-wider">
                WEATHER
              </h2>
              <div className="w-16 h-1 bg-yellow-700 mb-6"></div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Sun className="text-yellow-700 mr-3" size={24} />
                    <span className="text-lg font-semibold text-yellow-900">
                      Best Season
                    </span>
                  </div>
                  <p className="text-gray-600">
                    The best time to visit Ahmedabad is from November to February, when the weather is pleasant and ideal for outdoor celebrations and sightseeing.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-yellow-700 mr-3" size={24} />
                    <span className="text-lg font-semibold text-yellow-900">
                      Climate
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Ahmedabad has a hot, semi-arid climate. Summers are very hot, while winters are mild and comfortable. Monsoon season brings moderate rainfall from June to September.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Ahmedabad Landscape"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Ahmedabad Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-900 mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;AHMEDABAD?
            </h2>
            <div className="w-20 h-1 bg-yellow-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ahmedabad is a city where tradition and modernity blend seamlessly. Celebrate your wedding in a city of vibrant festivals, rich heritage, and warm hospitality for an unforgettable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAhmedabad.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-yellow-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-yellow-700 mb-6 flex justify-center">
                  <reason.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">
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
      <section className="py-20 bg-gradient-to-r from-yellow-700 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Grand Gujarati Wedding?
            </h2>
            <p className="text-lg text-yellow-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan a vibrant wedding in Ahmedabad, where heritage, color, and celebration come together for a truly memorable event.
            </p>
            <Link to="/contact">
              <button className="bg-yellow-900 hover:bg-yellow-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Ahmedabad Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Ahmedabad;
