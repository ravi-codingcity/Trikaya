import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  Heart,
  Target,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import director_1 from "../Assets/director/ravi_verma.jpeg";
import director_2 from "../Assets/director/azam.jpeg";
import director_3 from "../Assets/director/bhupender.jpeg";
import director_4 from "../Assets/director/aqib_k.jpeg";
import team_1 from "../Assets/teams/aryan.jpeg";
import team_2 from "../Assets/teams/raghav.jpeg";
import team_3 from "../Assets/teams/ashish.jpeg";
import team_4 from "../Assets/teams/anusha.jpeg";
import team_6 from "../Assets/teams/maroof.jpeg";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We pour our heart into every event, treating each celebration as if it were our own.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Every detail matters. We ensure flawless execution through meticulous planning.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We embrace creativity and cutting-edge trends to deliver unique experiences.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "Your special moments are safe with us. We build lasting relationships through reliability.",
    },
  ];

  // Smooth scroll functions
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const directors = [
    {
      name: "Ravi Verma",
      role: "Director",
      image: director_1,
    },
    {
      name: "Azam Abbasi ",
      role: "Director",
      image: director_2,
    },
    {
      name: "Bhupender Singh Lohia ",
      role: "Director",
      image: director_3,
    },
    {
      name: "Aqib Khan",
      role: "Director",
      image: director_4,
    },
  ];

const team = [
    {
      name: "Aryan Keshwani",
      image: team_1,
    },
    {
      name: "Raghav Rathi",
      image: team_2,
    },
    {
      name: "Ashish Kumar",
      image: team_3,
    },
    {
      name: "Anusha Vasandani",
      image: team_4,
    },
     {
      name: "Anuj Saraswat",
      image: team_6,
    },
     {
      name: "Maroof Khan",
      image: team_6,
    },
  ];

  const stats = [
    { number: "500+", label: "Events Completed", icon: Award },
    { number: "50+", label: "Destinations", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "15+", label: "Years Experience", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-14 bg-gradient-to-b bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-5xl font-bold text-luxury-navy mb-6">
                Trikaya Events
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We love what we do and we always do more than expected. We take
                great pride in the quality of our service. We own what we manage
                – driven by creative passion and botanical curiosity. We offer
                event services with good-looking legacies and form longterm
                relationships with our clients as their satifaction is our
                happiness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("our-story")}
                  className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Our Story
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("meet-our-team")}
                  className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Meet Our Team
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative "
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Event"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-900 transition-all duration-300"
              >
                <div className="text-red-600 mb-4 flex justify-center">
                  <stat.icon size={48} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-luxury-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6">
                About Us
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We are Trikaya Events, we are a a client-focused event
                management company. we have been in business since 15 years now.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We provide skilled & quality resources for all event needs -
                from small, intimate gatherings to large-scale events with
                thousands of attendees.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We have an extensive background in event planning, and we know
                how to get the most out of every penny spent on your project.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We follow processes to select those resources and train them for
                specific roles, so you can rest assured that you’re working with
                a team of professionals who are dedicated to your success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-white p-8 rounded-xl border border-gray-100 hover:border-luxury-gold hover:shadow-md transition-all duration-300"
              >
                <div className="text-red-600 mb-6 flex justify-center">
                  <value.icon size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-luxury-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section id="meet-our-team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6">
              Directors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind every extraordinary event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {directors.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group bg-gray-100 rounded-xl border border-gray-100 hover:border-luxury-gold hover:shadow-md transition-all duration-300"
              >
                <div className="relative mb-3 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-900 font-medium mb-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 {/* Team Section */}
      <section id="meet-our-team" className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind every extraordinary event
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group rounded-xl   transition-all duration-300"
              >
                <div className="relative mb-3 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-base font-semibold text-black mb-1">
                  {member.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-navy to-luxury-green">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              Ready to turn your vision into reality? Let's discuss your
              upcoming event and create an unforgettable experience.
            </p>
            <a href="/contact" className="inline-block mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-blue-900 text-blue-900 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Contact Us
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
