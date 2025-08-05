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
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Weather from "../../assets/Weather.avif";
import hyatt from "../../assets/destination/chandigarh/hyatt.jpg";
import centric from "../../assets/destination/chandigarh/centric.jpg";
import taj from "../../assets/destination/chandigarh/taj.jpg";
import lalit from "../../assets/destination/chandigarh/lalit.jpg";
import jw from "../../assets/destination/chandigarh/jw.jpg";

function Chandigarh() {
  const hotels = [
    {
      id: 1,
      name: "Hyatt Regency Chandigarh",
      rooms: 211,
      eventSpaces: 1,
      description:
        "Hyatt Regency Chandigarh enjoys a prime location within the heart of the tri-city of Chandigarh and is easily accessible to the two additional key areas of the city: Mohali and Panchkula. The hotel is part of a premium development that includes the Elante Shopping mall.",
      image: hyatt,
      features: [
        "Prime Location",
        "Tri-city Access",
        "Premium Development",
        "Shopping Mall Adjacent",
      ],
    },
    {
      id: 2,
      name: "Hyatt Centric Sector 17",
      rooms: 143,
      eventSpaces: 6,
      description:
        "Discover the charm of Chandigarh. Hyatt Centric Sector 17 Chandigarh is a modern lifestyle hotel in the heart of Chandigarh's past and present. Inspired by Le Corbusier's expressionist architectural genius and the unabashed vibrant culture of Chandigarh.",
      image: centric,
      features: [
        "Modern Lifestyle Hotel",
        "Le Corbusier Inspired",
        "Vibrant Culture",
        "City Views",
      ],
    },
    {
      id: 3,
      name: "Taj Chandigarh",
      rooms: 149,
      eventSpaces: 7,
      description:
        "Taj Chandigarh is a luxurious home away from home for both business and leisure travellers. Elegant rooms, refined service, a dedicated concierge team and indulgent amenities assure you of a comfortable stay in our centrally located hotel in Chandigarh.",
      image: taj,
      features: [
        "Luxurious Home",
        "Elegant Rooms",
        "Refined Service",
        "Central Location",
      ],
    },
    {
      id: 4,
      name: "The LaLiT Chandigarh",
      rooms: 179,
      eventSpaces: 5,
      description:
        "Nestled amidst the breathtaking view of the Shivalik mountain range and greenery, the art of luxury comes to life at The LaLiT Chandigarh. Located in the Rajiv Gandhi InfoTech Park, it offers over 30,000 square feet of conference and banqueting space.",
      image: lalit,
      features: [
        "Shivalik Mountain Views",
        "Art of Luxury",
        "30,000 sq ft Events",
        "InfoTech Park Location",
      ],
    },
    {
      id: 5,
      name: "Marriott Chandigarh",
      rooms: 162,
      eventSpaces: 5,
      description:
        "Dream weddings don't just happen, they're planned. Marriott Certified Wedding Planners are trained to help coordinate weddings of all types, including ethnic and military weddings. Experience, training, tradition and old-fashioned intuition guide every detail.",
      image: jw,
      features: [
        "Certified Wedding Planners",
        "All Wedding Types",
        "Experience & Training",
        "Complete Coordination",
      ],
    },
  ];

  const whyChandigarh = [
    {
      icon: Mountain,
      title: "Shivalik Mountain Views",
      description:
        "Nestled amidst breathtaking views of the Shivalik mountain range, offering a serene and picturesque backdrop for your special day.",
    },
    {
      icon: Crown,
      title: "Planned City Beauty",
      description:
        "India's first planned city, designed by Le Corbusier, provides unique architectural charm and modern infrastructure for elegant celebrations.",
    },
    {
      icon: Building,
      title: "Luxury Hotels",
      description:
        "Home to premium international hotel chains offering world-class amenities, spacious ballrooms, and professional wedding planning services.",
    },
    {
      icon: Heart,
      title: "Tri-City Advantage",
      description:
        "Strategic location connecting Chandigarh, Mohali, and Panchkula, providing easy accessibility and diverse venue options for guests.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-teal-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-navy mb-6 tracking-wider">
              CHANDIGARH
            </h1>
            <div className="w-24 h-1 bg-green-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              India's first planned city, beautifully designed by Le Corbusier, offering modern luxury venues with breathtaking mountain views and world-class hospitality for your dream destination wedding.
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
                        {hotel.eventSpaces} Event Spaces
                      </span>
                    </div>
                  </div>

                  {hotel.ballroom && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold text-sm">
                        {hotel.ballroom}
                      </p>
                      <p className="text-green-700 text-sm">
                        Capacity: {hotel.capacity}
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
                    The best months to get married in Chandigarh are from October to March. During these months, the weather is pleasant with cool mornings and evenings, perfect for outdoor celebrations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Thermometer className="text-green-500 mr-3" size={24} />
                    <span className="text-lg font-semibold text-luxury-navy">
                      Temperature Range
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Winter: 5-20°C (41-68°F) | Summer: 20-40°C (68-104°F) | 
                    Monsoon: 25-35°C (77-95°F)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Weather}
                alt="Chandigarh Weather"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Wedding in Chandigarh Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6 tracking-wider">
              WHY&nbsp;WEDDING&nbsp;IN&nbsp;CHANDIGARH?
            </h2>
            <div className="w-20 h-1 bg-green-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              India's first planned city offers a perfect blend of modern architecture, mountain views, and luxury hospitality. With world-class hotels and stunning venues, Chandigarh provides an elegant setting for your dream destination wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChandigarh.map((reason, index) => (
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Chandigarh Wedding Dream?
            </h2>
            <p className="text-lg text-green-100 mb-8 mx-auto max-w-3xl">
              Let us help you plan the perfect destination wedding in Chandigarh, where modern luxury meets mountain beauty, creating an unforgettable celebration in India's most beautiful planned city.
            </p>
            <Link to="/contact">
              <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plan Your Chandigarh Wedding
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Chandigarh;