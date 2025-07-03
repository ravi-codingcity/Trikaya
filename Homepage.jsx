import React from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Users,
  Calendar,
  Trophy,
  Quote,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Navbar from "./src/Components/Navbar";
import Footer from "./src/Components/Footer";
import HeroSection from "./src/Components/HeroSection";
import Banner1 from "./src/assets/Banner_1.jpg";
import Banner2 from "./src/assets/Banner_2.jpg";
import Banner3 from "./src/assets/Banner_3.jpg";
import Banner4 from "./src/assets/Banner_4.jpg";
import Services_1 from "./src/assets/Services_1.jpg";
import Services_2 from "./src/assets/Services_2.jpg";
import Services_3 from "./src/assets/Services_3.jpg";
import Services_4 from "./src/assets/Services_4.jpg";
import Services_5 from "./src/assets/Services_5.jpg";
import Services_6 from "./src/assets/Services_6.jpg";
import Services_7 from "./src/assets/Services_7.jpg";
import Services_8 from "./src/assets/Services_8.jpg";
import Services from "./src/Pages/Services";
import Logo_1 from "./src/assets/Logo/Logo_1.png";
import Logo_2 from "./src/assets/Logo/Logo_2.png";
import Logo_3 from "./src/assets/Logo/Logo_3.png";
import Logo_4 from "./src/assets/Logo/Logo_4.png";
import Logo_5 from "./src/assets/Logo/Logo_5.png";
import Logo_6 from "./src/assets/Logo/Logo_6.png";
import Logo_7 from "./src/assets/Logo/Logo_7.png";
import Logo_8 from "./src/assets/Logo/Logo_8.jpg";
import testimonial_video_1 from "./src/assets/testimonials/testimonials_1.mp4";
import testimonial_video_2 from "./src/assets/testimonials/testimonials_2.mp4";
import testimonial_video_3 from "./src/assets/testimonials/testimonials_3.mp4";
import testimonial_video_4 from "./src/assets/testimonials/testimonials_4.mp4";
import testimonial_video_5 from "./src/assets/testimonials/testimonials_5.mp4";



const Homepage = () => {
  const services = [
    {
      image: Services_1,
      title: "RSVP Management",
      description:
        "Seamless guest management and response tracking for your events.",
      link: "/services/rsvp-management",
    },
    {
      image: Services_2,
      title: "Hospitality Services",
      description:
        "Premium hospitality solutions to ensure your guests feel valued.",
    },
    {
      image: Services_3,
      title: "Corporate Event",
      description: "Expert coordination to ensure your event runs flawlessly.",
    },
    {
      image: Services_4,
      title: "Event Flow & Management",
      description:
        "Strategic planning and timeline execution for smooth event progression.",
    },
    {
      image: Services_5,
      title: "Innovations & Concepts",
      description: "Creative and unique concepts to make your event memorable.",
    },
    {
      image: Services_6,
      title: "Entertainment",
      description:
        "Curated performers and activities to captivate and delight your guests.",
    },
    {
      image: Services_7,
      title: "Vendor Management",
      description:
        "Coordinating with trusted suppliers to deliver exceptional quality and service.",
    },
    {
      image: Services_8,
      title: "Destination & Venue",
      description:
        "Personalized keepsakes and custom gifts that reflect your style and gratitude.",
    },
  ];

  const stats = [
    { number: "1000+", label: "Events Completed" },
    { number: "50+", label: "Destinations" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
  ];

const Clients_logos = [
  {
    image: Logo_1,
    alt: "Client Logo 1",
  },
  {
    image: Logo_2,
    alt: "Client Logo 2",
  },
  {
    image: Logo_3,
    alt: "Client Logo 3",
  },
  {
    image: Logo_4,
    alt: "Client Logo 4",
  },
   {
    image: Logo_5,
    alt: "Client Logo 5",
  },
  {
    image: Logo_6,
    alt: "Client Logo 6",
  },
  {
    image: Logo_7,
    alt: "Client Logo 7",
  },
  {
    image: Logo_8,
    alt: "Client Logo 8",
  },
];

  const testimonials = [
    {
     video: testimonial_video_1,
      name: "John Doe",
    },
    {
      video: testimonial_video_2,
      name: "Jane Smith",
    },
    {
      video: testimonial_video_3,
      name: "Alice Johnson",
    },
      {
      video: testimonial_video_4,
      name: "Jane Smith",
    },
    {
      video: testimonial_video_5,
      name: "Alice Johnson",
    },
  ];

  const galleryImages = [
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Services_5, // Using the banners again for a fuller gallery
    Services_6,
  ];

  const whyChooseUs = [
    {
      title: "Personalized Service",
      description:
        "Every event is tailored to your unique vision and requirements.",
      icon: Users,
    },
    {
      title: "Global Reach",
      description: "Worldwide network of premium venues and trusted vendors.",
      icon: Trophy,
    },
    {
      title: "Flawless Execution",
      description: "Meticulous planning ensures every detail is perfect.",
      icon: CheckCircle,
    },
    {
      title: "Creative Innovation",
      description: "Cutting-edge concepts that make your event unforgettable.",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section Component */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="py-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mt-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-900 mb-6 mt-10">
              Our Services
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white lg:p-0 rounded-xl border border-gray-300 hover:border-blue-900 transition-all duration-300 group relative overflow-hidden shadow-sm hover:shadow-lg will-change-transform"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-luxury-gold transition-transform duration-300 flex justify-center">
                    <img src={service.image} className="w-auto h-auto" />
                  </div>
                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-luxury-navy mb-4 ">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3 text-[15px]">
                      {service.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={service.link}
                        className="inline-block bg-blue-900 hover:bg-white text-white hover:text-blue-900 hover:border-blue-900 hover:border px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ paddingTop: "3rem" }}>
            <a href="/services" className="inline-flex items-center">
              <div className="bg-blue-900 hover:bg-white text-white hover:text-blue-900 border border-blue-900 px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto will-change-transform cursor-pointer">
                <span>View All Services</span>
                <ArrowRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className=" bg-white w-full">
        <div className="bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-luxury-navy mb-6">
                Why Choose Trikaya Events
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We don't just plan events; we create unforgettable experiences
                that exceed expectations and leave lasting impressions.
              </p>
              <div className="w-16 h-0.5 bg-blue-900 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 lg:p-8 rounded-xl border border-gray-200 hover:border-blue-900 transition-all duration-300 group text-center will-change-transform"
                >
                  <div className="text-red-600 mb-6 group-hover:scale-105 transition-transform duration-200 flex justify-center">
                    <item.icon size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-luxury-navy mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Our Portfolio */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-900 mb-6">
              Our Portfolio
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the magic we've created for our clients around the world.
              Each event tells a unique story of celebration and joy.
            </p>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 will-change-transform"
              >
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">Event {index + 1}</p>
                  <p className="text-sm text-gray-200">Luxury Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section - Our Track Record */}
      <section className="py-16 bg-gray-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-luxury-navy mb-4">
              Our Track Record
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group will-change-transform"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-2 transition-colors duration-200">
                  {stat.number}
                </div>
                <div className="text-black text-sm sm:text-base lg:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-900 mb-6">
              Testimonials
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about their experiences with Trikaya Events.
            </p>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 hover:border-luxury-gold transition-all duration-300 group relative shadow-sm hover:shadow-lg will-change-transform"
              >
                <video
                  src={testimonial.video}
                  className="w-full h-auto rounded-lg border border-gray-200"
                  controls
                  controlsList="nodownload"
                  unmuted
                  loop
                  playsInline
                  data-testimonial-video
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 bg-gray-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-luxury-navy mb-4">
              Our Clients
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mt-4"></div>
          </div>

          <div className="flex flex-wrap flex-row gap-6 lg:gap-8 m-auto justify-center">
            {Clients_logos.map((logo, index) => (
              <div
                key={index}
                className="text-center group will-change-transform"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="mx-auto border h-24 w-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 w-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to Create Magic?
            </h2>
            <p className="text-lg text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let's turn your vision into an unforgettable experience. Contact
              us today for a personalized consultation and discover how we can
              make your dream event a reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact">
                <div className="border-2 border-white hover:bg-white hover:text-luxury-navy text-white px-5 py-2 rounded-full font-semibold text-lg transition-all duration-200 backdrop-blur-sm will-change-transform cursor-pointer">
                  <span>Get Your Free Consultation</span>
                </div>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="text-white">
                <Calendar className="text-white mx-auto mb-3" size={40} />
                <h4 className="text-lg font-semibold">Free Consultation</h4>
                <p className="text-gray-300">No commitment, just ideas</p>
              </div>
              <div className="text-white">
                <Users className="text-white mx-auto mb-3" size={40} />
                <h4 className="text-lg font-semibold">Expert Team</h4>
                <p className="text-gray-300">Dedicated professionals</p>
              </div>
              <div className="text-white">
                <Trophy className="text-white mx-auto mb-3" size={40} />
                <h4 className="text-lg font-semibold">Award Winning</h4>
                <p className="text-gray-300">Industry recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
