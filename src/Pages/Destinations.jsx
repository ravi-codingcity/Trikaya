import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Star, 
  Calendar, 
  Users,
  Filter,
  Search,
  ArrowRight,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'beach', name: 'Beach & Coastal' },
    { id: 'mountain', name: 'Mountain & Hills' },
    { id: 'city', name: 'Urban & Metropolitan' },
    { id: 'historic', name: 'Historic & Cultural' },
    { id: 'luxury', name: 'Luxury Resorts' }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Jaipur, India',
      category: 'historic',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'The Pink City offers stunning palaces and forts with rich cultural heritage and vibrant royal architecture.',
      rating: 4.9,
      events: 150,
      features: ['Royal Palaces', 'Heritage Hotels', 'Cultural Experience', 'Luxury Venues'],
      link: '/destinations/jaipur'
    },
    {
      id: 2,
      name: 'Agra, India',
      category: 'historic',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Home to the Taj Mahal, the ultimate symbol of love, perfect for romantic wedding celebrations.',
      rating: 4.9,
      events: 130,
      features: ['Taj Mahal Views', 'Mughal Heritage', 'Romantic Setting', 'Historic Venues'],
      link: '/destinations/agra'
    },
    {
      id: 3,
      name: 'Tuscany, Italy',
      category: 'historic',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Rolling hills, vineyards, and historic villas perfect for romantic celebrations.',
      rating: 4.8,
      events: 200,
      features: ['Wine Estates', 'Historic Villas', 'Countryside Views', 'Culinary Excellence']
    },
    {
      id: 4,
      name: 'Bali, Indonesia',
      category: 'beach',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccad1031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Tropical paradise with luxurious resorts and traditional Balinese culture.',
      rating: 4.7,
      events: 180,
      features: ['Beach Venues', 'Cultural Experiences', 'Luxury Resorts', 'Tropical Gardens']
    },
    {
      id: 5,
      name: 'Swiss Alps, Switzerland',
      category: 'mountain',
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Majestic mountain venues with pristine alpine settings and luxury chalets.',
      rating: 4.9,
      events: 120,
      features: ['Mountain Views', 'Luxury Chalets', 'Alpine Adventures', 'Winter Sports']
    },
    {
      id: 6,
      name: 'Dubai, UAE',
      category: 'city',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Ultra-modern city with world-class venues and luxury amenities.',
      rating: 4.8,
      events: 300,
      features: ['Luxury Hotels', 'Modern Architecture', 'Desert Experiences', 'Shopping']
    },
    {
      id: 7,
      name: 'Maldives',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Private island resorts with overwater villas and crystal-clear lagoons.',
      rating: 5.0,
      events: 90,
      features: ['Private Islands', 'Overwater Villas', 'Crystal Waters', 'Ultimate Privacy']
    },
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-10 pb-5 bg-gradient-to-b bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold text-luxury-navy mb-6">
              Dream <span className="text-luxury-gold">Destinations</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Discover breathtaking venues around the world where your perfect celebration awaits.
            </p>
            
            <Link to="/destinations/map">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-luxury-gold hover:bg-luxury-darkGold text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Globe size={20} />
                <span>View Interactive World Map</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-luxury-gold hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="text-luxury-gold fill-current" size={16} />
                    <span className="text-gray-800 text-sm font-medium">{destination.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <MapPin size={16} className="mr-1" />
                    <span className="font-medium">{destination.name}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      <span>{destination.events} events hosted</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {destination.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {destination.link ? (
                    <Link to={destination.link}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-luxury-gold hover:bg-luxury-darkGold text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Explore Destination</span>
                        <ArrowRight size={18} />
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-luxury-gold hover:bg-luxury-darkGold text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Explore Destination</span>
                      <ArrowRight size={18} />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
