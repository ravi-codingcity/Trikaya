import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Banner1 from "../assets/Banner_1.jpg";
import Banner2 from "../assets/Banner_2.jpg";
import Banner3 from "../assets/Banner_3.jpg";
import Banner4 from "../assets/Banner_4.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banner images for slideshow (using local images)
  const slides = [
    {
      image: Banner1,
      title: "Luxury Wedding Experiences",
    },
    {
      image: Banner2,
      title: "Corporate Event Excellence",
    },
    {
      image: Banner3,
      title: "Destination Celebrations",
    },
    {
      image: Banner4,
      title: "Exclusive Private Events",
    },
  ];

  // Auto-advance slideshow with longer duration for smoother experience
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased to 6 seconds for better viewing time
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="h-[600px] w-full relative overflow-hidden mt-0">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
          }}
          className="absolute inset-0"
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/85 via-luxury-navy/40 to-luxury-green/70"></div>
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-luxury-gold transition-colors duration-300 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/30 hover:border-luxury-gold"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-luxury-gold transition-colors duration-300 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/30 hover:border-luxury-gold"
      >
        <ChevronRight size={24} />
      </button>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-white w-full max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-0.5 w-16 bg-blue-900 mx-auto mb-6"></div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.4)" }}
            >
              {slides[currentSlide].title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-luxury-gold mb-4 font-light">
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-base sm:text-lg mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/services"
                className="bg-blue-900 hover:bg-white text-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl flex items-center space-x-2"
              >
                <span>Start Planning</span>
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/about"
                className="border-2 border-white hover:bg-white hover:text-luxury-navy text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
              >
                <Play size={18} />
                <span>Watch Our Story</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-3 bg-blue-900"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
