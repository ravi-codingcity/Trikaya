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
  Mountain,
  TreePine,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import hyatt from "../../assets/destination/dehradun/hyatt.jpg";
import centric from "../../assets/destination/dehradun/centric.jpg";
import taj from "../../assets/destination/dehradun/taj.jpg";

function Dehradun() {
  const hotels = [
    {
      id: 1,
      name: "Hyatt Regency Dehradun",
      rooms: 263,
      eventSpaces: 7,
      description:
        "Come experience the might of the mountains and the warmth of a valley. Nestled amidst a picturesque 4.25 acres, Hyatt Regency Dehradun Resort and Spa is adjacent to the serene Malsi Forest and majestic Himalayan range, on the Dehradun-Mussoorie Road. Ours is the largest luxury hotel in the state of Uttarakhand.",
      image: hyatt,
      features: [
        "4.25 Acres Property",
        "Malsi Forest Adjacent",
        "Himalayan Range Views",
        "Largest Luxury Hotel",
      ],
    },
    {
      id: 2,
      name: "Hyatt Centric Rajpur Road",
      rooms: 126,
      eventSpaces: 2,
      description:
        "Conveniently located in the heart of the city and offering 15,000 square feet of flexible event space, Hyatt Centric Rajpur Road Dehradun is the perfect venue for networking events, business meetings, corporate dinners, team off-sites and more. Features intimate pre-function spaces, a large pillarless ballroom with grand ceilings and an expansive outdoor lawn.",
      image: centric,
    
      features: [
        "Heart of City",
        "15,000 sq ft Events",
        "Pillarless Ballroom",
        "Outdoor Lawn",
      ],
    },
    {
      id: 3,
      name: "Taj Mussoorie Foothills",
      rooms: 115,
      eventSpaces: 3,
      description:
        "Nestled in the serene foothills of the mighty Himalayas, Taj Mussoorie Foothills, Dehradun invites you to immerse yourself in Uttarakhand's breathtaking beauty and tranquility. This luxurious haven seamlessly blends modern elegance with pristine natural surroundings, offering 115 meticulously designed rooms, including 16 lavish suites.",
      image: taj,
    
      features: [
        "Himalayan Foothills",
        "16 Lavish Suites", 
        "Banquet Hall & Lawns",
        "Gateway to Mussoorie",
      ],
    },
  ];

  const whyDehradun = [
    {
      icon: Mountain,
      title: "Himalayan Gateway",
      description:
        "Nestled in the foothills of the mighty Himalayas, offering breathtaking mountain views and serene natural beauty for your special day.",
    },
    {
      icon: TreePine,
      title: "Forest Serenity",
      description:
        "Adjacent to pristine forests like Malsi Forest, providing a tranquil and peaceful environment perfect for intimate celebrations.",
    },
    {
      icon: Crown,
      title: "Luxury Resorts",
      description:
        "Home to some of Uttarakhand's most luxurious hotels and resorts with world-class amenities and exceptional hospitality.",
    },
    {
      icon: Heart,
      title: "Hill Station Access",
      description:
        "Perfect base to explore nearby attractions like Mussoorie, Robber's Cave, Sahastradhara, and Rajaji National Park.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-emerald-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              DEHRADUN
            </h1>
            <div className="w-24 h-1 bg-emerald-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Experience the might of the mountains and the warmth of a valley. Gateway to the Himalayas, offering luxurious mountain resorts with pristine forest views and world-class hospitality for your dream destination wedding.
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
                        {hotel.eventSpaces} Event Spaces
                      </span>
                    </div>
                  </div>

                  {hotel.ballroom && (
                    <div className="mb-4 p-3 bg-emerald-50 rounded-lg">
                      <p className="text-emerald-800 font-semibold text-sm">
                        {hotel.ballroom}
                      </p>
                      <p className="text-emerald-700 text-sm">
                        Features: {hotel.capacity}
                      </p>
                    </div>
                  )}

                  {hotel.suites && (
                    <div className="mb-4 p-3 bg-emerald-50 rounded-lg">
                      <p className="text-emerald-800 font-semibold text-sm">
                        {hotel.suites}
                      </p>
                      <p className="text-emerald-700 text-sm">
                        {hotel.specialFeature}
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
                    The best months to get married in Dehradun are from October to April. During these months, the weather is pleasant with cool mountain air, perfect for outdoor celebrations in the foothills.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-emerald-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Temperature Range
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Winter: 2-18°C (36-64°F) | Summer: 15-35°C (59-95°F) | 
                    Monsoon: 20-30°C (68-86°F)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Dehradun Weather"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Dehradun Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;DEHRADUN?
            </h2>
            <div className="w-20 h-1 bg-emerald-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nestled in the Himalayan foothills, Dehradun offers a perfect blend of mountain serenity, forest tranquility, and luxury hospitality. With breathtaking natural beauty and world-class resorts, it provides an enchanting setting for your dream destination wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDehradun.map((reason, index) => (
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
              Ready for Your Himalayan Wedding Dream?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Dehradun, where mountain majesty meets valley warmth, creating an unforgettable celebration in the lap of the Himalayas.
            </p>
            <Link to="/contact">
              <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Dehradun Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Dehradun;