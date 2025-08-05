import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Mail,
  Calendar,
  Shield,
  Star,
  CheckCircle,
  UserCheck,
  Instagram,
  Coffee,
  Clock,
  UserPlus,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Services1 from "../../assets/Services/services_1.jpg";
import Services2 from "../../assets/Services/services_2.jpg";
import Services3 from "../../assets/Services/services_3.jpg";
import rsvp from "../../assets/rsvp_management.jpg";    
import social_media_team from "../../assets/social_media_team.jpg"; 

const RSVPManagement = () => {
  const services = [
    {
      id: 1,
      icon: Users,
      title: "RSVP Team",
      description:
        "Being the biggest part of planning your wedding, we provide a RSVP team to manage the overall head count of your guests and send invites. It is very much important to have a final count of guests attending the wedding before the date to plan their pick/drop services and stay during the celebrations. We make sure the invites and responses are handled properly to plan the after services!",
      features: [
        "Guest Count Management",
        "Invitation Distribution",
        "Response Tracking",
        "Pick/Drop Planning",
        "Stay Coordination",
      ],
      color: "from-blue-400 to-blue-600",
      image: rsvp,
    },
    {
      id: 2,
      icon: Instagram,
      title: "Social Media Team",
      description:
        "Following the new trend of hashtags, we assist you in creating a quirky hashtag for your wedding and an Instagram page for all the updates! A page with only family members as followers will be created and all the real time updates of your wedding will be posted! Doesn't it sound fun?! Creating the buzz and excitement for a wedding is one of the most fun parts of wedding planning!",
      features: [
        "Custom Wedding Hashtag",
        "Private Instagram Page",
        "Real-time Updates",
        "Family-only Access",
        "Pre-wedding Buzz Creation",
      ],
      color: "from-pink-400 to-purple-600",
      image: social_media_team,
    },
    {
      id: 3,
      icon: Coffee,
      title: "Pre Wedding Assistance",
      description:
        "Being a wedding planner, we are your 'Google' for anything and everything related to weddings! The Bandbaajaa team will help you find the right venue, concept, theme, food, entertainment, activities, hospitality, vendors and come what may from today till the time you tie the knot with your loved one. We are there to assist you in small yet important tasks like gifting, invites, outfit choosing and the list is endless.",
      features: [
        "Venue Selection",
        "Theme & Concept Development",
        "Vendor Coordination",
        "Outfit Selection Help",
        "Complete Planning Support",
      ],
      color: "from-green-400 to-teal-600",
      image: Services1,
    },
    {
      id: 4,
      icon: Star,
      title: "Event Execution Team",
      description:
        "An experienced team is prepared to provide you an experience that exceeds expectations flawlessly. After months of wedding planning, all you wish is an extraordinary wedding celebrations an happy faced and compliments from everyone. Getting everything done on time according to the flow planned and making sure everything is in place is important to give a memorable experience.",
      features: [
        "Experienced Professionals",
        "Flawless Execution",
        "Timeline Management",
        "Quality Assurance",
        "Memorable Experience Creation",
      ],
      color: "from-yellow-400 to-orange-600",
      image: Services2,
    },
    {
      id: 5,
      icon: Shield,
      title: "Shadow Team",
      description:
        "The closest family members are not only the most important ones but also the busiest throughout the wedding celebrations. The shadow team will be like a support person for your every need. We provide you with the best shadow to take care of your headaches and leave you stress free. Why stay on your feet all the time and run from pillar to post when you have a shadow ready for you 24/7?",
      features: [
        "24/7 Personal Support",
        "Family Member Assistance",
        "Stress-free Experience",
        "Dedicated Support Person",
        "Round-the-clock Care",
      ],
      color: "from-indigo-400 to-purple-600",
      image: Services3,
    },
  ];

  const hospitalityFeatures = [
    {
      icon: UserCheck,
      title: "Guest Reception",
      description:
        "Ensuring your guests feel welcomed from the moment they arrive",
    },
    {
      icon: Calendar,
      title: "Stay Coordination",
      description: "Managing comfortable accommodations for all your guests",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Treating guests the way you would personally",
    },
    {
      icon: CheckCircle,
      title: "Seamless Experience",
      description: "From arrival to departure, every detail is handled",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-14 bg-gradient-to-b bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-orange-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-6 tracking-wider">
              HOSPITALITY & RSVP
            </h1>
            <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Guests are the charm of the wedding, don't they deserve the right
              "Khatirdari"? The Bandbaajaa team makes an effort to treat them
              the way you would, personally. From making sure they reach the
              destination, making their stay comfortable with fun experiences to
              giving them a joyful goodbye, we do it all!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hospitality Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Complete Guest Care
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hospitalityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-blue-900 hover:shadow-md transition-all duration-300"
              >
                <div className="text-red-600 mb-6 flex justify-center">
                  <feature.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Our Specialized Teams
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each team is dedicated to making your wedding celebration flawless
              and memorable
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`p-8 lg:p-12 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-r ${service.color} mr-4`}
                      >
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy tracking-wide">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Image/Visual Element */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Couples", icon: Heart },
              { number: "10,000+", label: "Guests Managed", icon: Users },
              { number: "99%", label: "RSVP Accuracy", icon: CheckCircle },
              { number: "24/7", label: "Support Available", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100"
              >
                <stat.icon
                  size={48}
                  className="text-blue-900 mx-auto mb-4"
                />
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Pamper Your Guests?
            </h2>
            <p className="text-lg text-pink-100 mb-8 max-w-3xl mx-auto">
              Let our dedicated teams handle every aspect of guest management
              and hospitality, so you can focus on enjoying your special day.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 hover:bg-white text-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Plan Guest Experience
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RSVPManagement;
