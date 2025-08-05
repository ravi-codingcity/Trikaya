import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Plane, 
  Settings, 
  Lightbulb, 
  Music, 
  UserCheck,
  Gift,
  MapPin,
  FileText,
  Scissors
} from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Services1 from '../assets/Services/services_1.jpg';
import Services2 from '../assets/Services/services_2.jpg';
import Services3 from '../assets/Services/services_3.jpg';
import Music_img from '../assets/Services/services_9.jpg';
import ServicesMain1 from '../assets/services_1.jpg';
import ServicesMain2 from '../assets/services_2.jpg';
import { link } from 'framer-motion/client';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'RSVP Management',
      description: 'Complete guest management system with digital invitations, response tracking, and attendance coordination.',
      features: ['Digital RSVP System', 'Guest List Management', 'Automated Reminders', 'Real-time Updates'],
      image: ServicesMain1,
      link: '/services/rsvp-management'
    },
    {
      icon: Users,
      title: 'Hospitality Services',
      description: 'Premium hospitality solutions ensuring your guests receive exceptional care and attention.',
      features: ['VIP Guest Services', 'Concierge Support', 'Transportation Coordination', 'Accommodation Assistance'],
      image: ServicesMain2
    },
    {
      icon: Plane,
      title: 'Travel Management & Logistics',
      description: 'Comprehensive travel planning and logistics coordination for seamless event experiences.',
      features: ['Flight Bookings', 'Hotel Reservations', 'Ground Transportation', 'Travel Itineraries'],
      image: Services1,
      link: '/services/travel-management-logistics'
    },
    {
      icon: Settings,
      title: 'Event Flow & Management',
      description: 'Expert coordination and management to ensure your event runs flawlessly from start to finish.',
      features: ['Timeline Planning', 'Vendor Coordination', 'Day-of Management', 'Contingency Planning'],
      image: Services2,
      link: '/services/event-flow-management'
    },
    {
      icon: Lightbulb,
      title: 'Innovations & Concepts',
      description: 'Creative and unique concepts that transform your vision into extraordinary experiences.',
      features: ['Theme Development', 'Creative Design', 'Interactive Elements', 'Technology Integration'],
      image: Services3,
      link: '/services/innovations-and-concepts'
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Curated entertainment options to create memorable moments for your guests.',
      features: ['Live Performances', 'DJ Services', 'Interactive Entertainment', 'Cultural Performances'],
      image: ServicesMain1,
      link: '/services/entertainment'
    },
    {
      icon: UserCheck,
      title: 'Vendor Management',
      description: 'Professional vendor coordination and management for all your event needs.',
      features: ['Vendor Selection', 'Contract Management', 'Quality Control', 'Performance Monitoring'],
      image: ServicesMain2,
      link: '/services/vendor-management'
    },
    {
      icon: Gift,
      title: 'Wedding Favors & Giveaways',
      description: 'Thoughtful and personalized wedding favors that leave lasting impressions.',
      features: ['Custom Design', 'Bulk Ordering', 'Packaging Services', 'Personalization Options'],
      image: Services1,
      link: '/services/wedding-favours-giveaways'
    },
    {
      icon: MapPin,
      title: 'Destination & Venue',
      description: 'Discover and secure the perfect venues for your special occasions.',
      features: ['Venue Scouting', 'Site Inspections', 'Booking Assistance', 'Layout Planning'],
      image: Services2,
      link: '/services/destinations-venue'
    },
    {
      icon: FileText,
      title: 'Stationery & Invites',
      description: 'Beautiful, custom-designed stationery and invitations that set the tone for your event.',
      features: ['Custom Design', 'Premium Materials', 'Printing Services', 'Envelope Addressing'],
      image: Services3
    },
    {
      icon: Scissors,
      title: 'Salon & Ironing Rentals',
      description: 'Professional grooming and garment care services for your special day.',
      features: ['Mobile Salon Services', 'Garment Care', 'Professional Styling', 'Equipment Rental'],
      image: ServicesMain1
    },
    {
      icon: Music,
      title: 'Music Licensing',
      description: 'We can provide legal permission for Music license across India - IPRS, NOVEX & PPL',
      features: ['Music Rights Management', 'Licensing Agreements', 'Royalty Collection', 'Legal Compliance'],
      image: Music_img
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="py-10  bg-gradient-to-b bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6">
              Our Premium Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              From intimate gatherings to grand celebrations, we offer comprehensive event management solutions tailored to your unique vision and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-blue-900 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={40} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black group-hover:text-blue-900 transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {service.link ? (
                    <Link
                      to={service.link}
                      onClick={() => window.scrollTo(0, 0)}
                      className="w-full bg-red-600/10 hover:bg-red-600 hover:text-white text-red-600 border border-red-600 rounded-lg py-2.5 font-semibold transition-all duration-300 text-sm inline-block text-center"
                    >
                      Learn More
                    </Link>
                  ) : (
                    <button
                      className="w-full bg-red-600/10 hover:bg-red-600 hover:text-white text-red-600 border border-red-600 rounded-lg py-2.5 font-semibold transition-all duration-300 text-sm"
                    >
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure every detail is perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your vision and requirements' },
              { step: '02', title: 'Planning', description: 'Detailed planning and timeline creation' },
              { step: '03', title: 'Execution', description: 'Flawless execution of your event' },
              { step: '04', title: 'Follow-up', description: 'Post-event support and feedback' }
            ].map((process, index) => (
              <div
                key={index}
                className="text-center bg-gray-100 p-6 rounded-xl border border-gray-100 hover:border-red-600 hover:shadow-md transition-all duration-300"
              >
                <div className="text-6xl font-bold text-red-600  mb-3">
                  {process.step}
                </div>
                <h3 className="text-2xl font-semibold text-luxury-navy mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  );
};

export default Services;