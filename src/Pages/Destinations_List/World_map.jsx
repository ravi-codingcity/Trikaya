import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  MapPin,
  Globe,
  Navigation,
  Star,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import amarvillas_agra from "../../Assets/destination/amarvillas.jpg";
import udaivillas_udaipur from "../../Assets/destination/udaivillas.jpg";
import itcmaurya_delhi from "../../Assets/destination/itcmaurya_delhi.jpg";
import theleelapalace_jaipur from "../../Assets/destination/jaipur/leelaplace_jaipur.jpg";
import hyatt from "../../assets/destination/goa/hyatt.jpg";
import taj from "../../assets/destination/jim_corbett/taj.jpg"; 
import umaid from "../../assets/destination/jodhpur/umaid.jpg";
import surya from "../../assets/destination/jaisalmer/surya.jpg";

// Component to control the map view - flyTo animation
const MapController = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (center && zoom) {
      map.flyTo(center, zoom, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [map, center, zoom]);

  // Add custom map controls
  useEffect(() => {
    // Create a custom control for "Zoom to India"
    const zoomToIndiaControl = L.Control.extend({
      options: {
        position: "topright",
      },

      onAdd: function () {
        const container = L.DomUtil.create(
          "div",
          "leaflet-bar leaflet-control"
        );
        const button = L.DomUtil.create("a", "", container);

        button.innerHTML = `
          <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background-color: white;
            border-radius: 4px;
            box-shadow: 0 1px 5px rgba(0,0,0,0.2);
            cursor: pointer;
            font-weight: bold;
            color: #d97706;
          ">
            <span style="font-size: 14px;">🇮🇳</span>
          </div>
        `;
        button.href = "#";
        button.title = "Zoom to India";

        L.DomEvent.on(button, "click", function (e) {
          L.DomEvent.stopPropagation(e);
          L.DomEvent.preventDefault(e);

          // Fly to India
          map.flyTo([23.5937, 78.9629], 4.5, {
            duration: 1.5,
            easeLinearity: 0.25,
          });
        });

        return container;
      },
    });

    // Add the custom control to the map
    map.addControl(new zoomToIndiaControl());

    return () => {
      // This will automatically be cleaned up when the component unmounts
    };
  }, [map]);

  return null;
};

const WorldMap = () => {
  const navigate = useNavigate();
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [persistentPopup, setPersistentPopup] = useState(false);
  const mapRef = useRef(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Fix for Leaflet marker icon issue in webpack
  useEffect(() => {
    // This fixes the missing icon issue in Leaflet when using webpack
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  // Define our destination locations with real geographical coordinates
  const destinations = [
    {
      id: "agra",
      name: "Agra",
      country: "India",
      description: "City of Love - Taj Mahal weddings",
      lat: 27.1767,
      lng: 78.0081,
      route: "/destinations/agra",
      color: "#f44336",
      image:
       amarvillas_agra,
    },
    {
      id: "jaipur",
      name: "Jaipur",
      country: "India",
      description: "Pink City - Royal palaces and heritage weddings",
      lat: 26.9124,
      lng: 75.7873,
      route: "/destinations/jaipur",
      color: "#e91e63",
      image:
        theleelapalace_jaipur,
    },
    {
      id: "delhi",
      name: "Delhi",
      country: "India",
      description: "Capital celebrations in grand venues",
      lat: 28.7041,
      lng: 77.1025,
      route: "/destinations/delhi",
      color: "#2196f3",
      image:
        itcmaurya_delhi,
    },
    {
      id: "udaipur",
      name: "Udaipur",
      country: "India",
      description: "City of Lakes - Romantic lakeside ceremonies",
      lat: 24.5854,
      lng: 73.7125,
      route: "/destinations/udaipur",
      color: "#4caf50",
      image:
        udaivillas_udaipur,
    },
    {
      id: "jodhpur",
      name: "Jodhpur",
      country: "India",
      description: "Blue City - Majestic forts and royal celebrations",
      lat: 26.2389,
      lng: 73.0243,
      route: "/destinations/jodhpur",
      color: "#3f51b5",
      image:
        umaid,
    },
    {
      id: "jaisalmer",
      name: "Jaisalmer",
      country: "India",
      description: "Golden City - Desert weddings with royal grandeur",
      lat: 26.9157,
      lng: 70.9083,
      route: "/destinations/jaisalmer",
      color: "#ff9800",
      image: surya,
    },
    {
      id: "chandigarh",
      name: "Chandigarh",
      country: "India",
      description: "City Beautiful - Modern venues with garden settings",
      lat: 30.7333,
      lng: 76.7794,
      route: "/destinations",
      color: "#8bc34a",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "bangalore",
      name: "Bangalore",
      country: "India",
      description: "Garden City - Modern venues with traditional charm",
      lat: 12.9716,
      lng: 77.5946,
      route: "/destinations",
      color: "#9c27b0",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "kochi",
      name: "Kochi",
      country: "India",
      description: "Queen of Arabian Sea - Coastal elegance and spice gardens",
      lat: 9.9312,
      lng: 76.2673,
      route: "/destinations",
      color: "#607d8b",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "goa",
      name: "Goa",
      country: "India",
      description: "Beach weddings - Pristine shores and luxury resorts",
      lat: 15.2993,
      lng: 74.1240,
      route: "/destinations/goa",
      color: "#00bcd4",
      image: hyatt,
    },
    {
      id: "jim-corbett",
      name: "Jim Corbett",
      country: "India",
      description: "Wilderness weddings - Nature's grandeur and wildlife sanctuary",
      lat: 29.3892,
      lng: 78.7636,
      route: "/destinations/jim-corbett",
      color: "#10b981",
      image:
        taj,
    },
    {
      id: "mussoorie",
      name: "Mussoorie",
      country: "India",
      description: "Queen of the Hills - Majestic mountain views and luxury venues",
      lat: 30.4598,
      lng: 78.0664,
      route: "/destinations/mussoorie",
      color: "#3b82f6",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "shimla",
      name: "Shimla",
      country: "India",
      description: "Off beat destination - Colonial charm and natural splendor",
      lat: 31.1048,
      lng: 77.1734,
      route: "/destinations/shimla",
      color: "#8b5cf6",
      image:
        "https://images.unsplash.com/photo-1578774204375-826dc5d073f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "kerala",
      name: "Kerala",
      country: "India",
      description: "God's Own Country - Backwater weddings with serene natural beauty",
      lat: 10.8505,
      lng: 76.2711,
      route: "/destinations/kerala",
      color: "#059669",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "huahin",
      name: "Hua Hin",
      country: "Thailand",
      description: "Thai Summer Palaces - OG beach resort city with royal heritage",
      lat: 12.5684,
      lng: 99.9576,
      route: "/destinations/hua_hin",
      color: "#dc2626",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "turkey",
      name: "Istanbul",
      country: "Turkey",
      description:
        "Where East meets West - Historic palaces and Bosphorus views",
      lat: 41.0082,
      lng: 28.9784,
      route: "/destinations/turkey",
      color: "#795548",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "tokyo",
      name: "Tokyo",
      country: "Japan",
      description:
        "Modern metropolis - Cherry blossoms and contemporary elegance",
      lat: 35.6762,
      lng: 139.6503,
      route: "/destinations",
      color: "#e91e63",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "nigeria",
      name: "Lagos",
      country: "Nigeria",
      description:
        "Vibrant cultural celebrations - Rich traditions and coastal beauty",
      lat: 6.5244,
      lng: 3.3792,
      route: "/destinations",
      color: "#4caf50",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "abudhabi",
      name: "Abu Dhabi",
      country: "UAE",
      description: "Hub of Destination Weddings - Modern luxury with Arabian elegance",
      lat: 24.4539,
      lng: 54.3773,
      route: "/destinations/abu_dhabi",
      color: "#d97706",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "dubai",
      name: "Dubai",
      country: "UAE",
      description: "Arabian Sky Weddings - Perfect luxury with world-class tourism",
      lat: 25.2048,
      lng: 55.2708,
      route: "/destinations/dubai",
      color: "#eab308",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "phuket",
      name: "Phuket",
      country: "Thailand",
      description: "Ultimate Tropical Oasis - Paradise destination with white sand beaches",
      lat: 7.8804,
      lng: 98.3923,
      route: "/destinations/phuket",
      color: "#14b8a6",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "france",
      name: "Paris",
      country: "France",
      description: "City of Love - Romantic châteaux and timeless elegance",
      lat: 48.8566,
      lng: 2.3522,
      route: "/destinations/paris",
      color: "#ff5722",
      image:
        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const handleLocationClick = (destination) => {
    console.log('🎯 Destination clicked:', destination.name, '-> Navigating to:', destination.route);
    setSelectedDestination(destination);
    setClickedLocation(destination);
    setPersistentPopup(true);
    setHoveredLocation(null); // Clear hover state when clicked

    // Navigate immediately for direct marker clicks
    navigate(destination.route);
  };

  const handleLocationHover = (destination) => {
    if (!persistentPopup) {
      setHoveredLocation(destination);
    }
  };

  const handleLocationHoverOut = () => {
    if (!persistentPopup) {
      setHoveredLocation(null);
    }
  };

  const handlePopupClose = () => {
    setPersistentPopup(false);
    setClickedLocation(null);
    setHoveredLocation(null);
  };

  const handleExploreClick = (destination) => {
    setSelectedDestination(destination);
    setTimeout(() => {
      navigate(destination.route);
    }, 300);
  };

  // Create custom icons for map markers
  const createCustomIcon = (color, isInternational = false) => {
    return L.divIcon({
      className: "custom-marker-icon",
      html: `
        <div style="
          background-color: ${color}; 
          width: 28px; 
          height: 28px; 
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
          box-shadow: 0 3px 8px rgba(0,0,0,0.4);
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        "
        onmouseover="this.style.transform='scale(1.2)'; this.style.zIndex='1000';"
        onmouseout="this.style.transform='scale(1)'; this.style.zIndex='auto';"
        onclick="this.style.transform='scale(0.95)';"
        >
          <div style="color: white; font-size: 14px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          ${
            isInternational
              ? `
            <div style="
              position: absolute; 
              top: -5px; 
              right: -5px; 
              background-color: #fbbf24; 
              width: 12px; 
              height: 12px; 
              border-radius: 50%; 
              border: 2px solid white;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24" fill="#7c2d12" stroke="#7c2d12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          `
              : ""
          }
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -28],
    });
  };

  // Convert lat/lng to pixel coordinates for our map image
  const getMarkerPosition = (lat, lng) => {
    // These calculations are for a standard world map projection
    // Adjust based on your map image dimensions and projection
    const mapWidth = 100; // percentage
    const mapHeight = 60; // percentage

    // Convert longitude (-180 to 180) to x percentage (0 to 100)
    const x = ((lng + 180) / 360) * mapWidth;

    // Convert latitude (90 to -90) to y percentage (0 to 100)
    // Using Web Mercator projection approximation
    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = ((1 - mercN / Math.PI) / 2) * mapHeight;

    return {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Interactive Map Section */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Interactive Destination Map
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Explore our premium wedding destinations across India and around
              the world on our interactive map
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-2">
              <div className="inline-flex items-center justify-center bg-luxury-gold/10 text-luxury-navy px-4 py-2 rounded-full text-sm">
                <Star size={16} className="text-luxury-gold mr-2" />
                <span>Click on any marker to instantly visit destination page</span>
              </div>
              <div className="inline-flex items-center justify-center bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm">
                <Globe size={16} className="text-blue-600 mr-2" />
                <span>Discover destinations across multiple continents</span>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="relative w-full" style={{ height: "600px" }}>
              <MapContainer
                center={[20, 10]} // World center instead of just India
                zoom={2} // Zoomed out to show the entire world
                style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
                scrollWheelZoom={true}
                dragging={true}
                ref={mapRef}
                minZoom={2} // Prevent zooming out too far
                maxBounds={[
                  [-90, -180],
                  [90, 180],
                ]} // Restrict panning to world bounds
              >
                {/* Map Controller for animations */}
                <MapController
                  center={
                    selectedDestination
                      ? [selectedDestination.lat, selectedDestination.lng]
                      : null
                  }
                  zoom={selectedDestination ? 7 : null}
                />

                {/* Base map layer - using a beautiful, detailed style that makes India highlight stand out */}
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                  subdomains="abcd"
                  maxZoom={19}
                />

                {/* Map markers for destinations */}
                {destinations.map((destination) => {
                  const isInternational = !["India"].includes(
                    destination.country
                  );

                  return (
                    <Marker
                      key={destination.id}
                      position={[destination.lat, destination.lng]}
                      icon={createCustomIcon(
                        destination.color,
                        isInternational
                      )}
                      eventHandlers={{
                        mouseover: () => handleLocationHover(destination),
                        mouseout: () => handleLocationHoverOut(),
                        click: () => handleLocationClick(destination),
                      }}
                    >
                      <Popup>
                        <div className="p-1">
                          <h3 className="font-bold text-sm">
                            {destination.name}
                          </h3>
                          <p className="text-xs text-gray-500 mb-1">
                            {destination.country}
                          </p>
                          <p className="text-xs text-gray-600">
                            {destination.description}
                          </p>
                          <button
                            onClick={() => handleExploreClick(destination)}
                            className="mt-2 text-xs bg-luxury-gold hover:bg-luxury-darkGold text-white px-3 py-1 rounded-full w-full"
                          >
                            Explore
                          </button>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>

              {/* Enhanced Tooltip - positioned absolutely over the map */}
              {(hoveredLocation || (persistentPopup && clickedLocation)) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute bg-white rounded-xl shadow-2xl border border-luxury-gold/20 z-[1000] overflow-hidden"
                  style={{
                    right: "20px",
                    top: "70px", // Positioned below the zoom controls
                    width: "280px",
                  }}
                >
                  {/* Close button for persistent popup */}
                  {persistentPopup && (
                    <button
                      onClick={handlePopupClose}
                      className="absolute top-2 right-2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors duration-200"
                      title="Close popup"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-gray-600"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}

                  {/* Image header */}
                  <div
                    className="h-32 bg-cover bg-center relative"
                    style={{ 
                      backgroundImage: `url(${(persistentPopup && clickedLocation) ? clickedLocation.image : hoveredLocation?.image})` 
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <h3 className="font-bold text-lg">
                        {(persistentPopup && clickedLocation) ? clickedLocation.name : hoveredLocation?.name}
                      </h3>
                      <p className="text-sm opacity-90">
                        {(persistentPopup && clickedLocation) ? clickedLocation.country : hoveredLocation?.country}
                      </p>
                    </div>
                    {!["India"].includes((persistentPopup && clickedLocation) ? clickedLocation.country : hoveredLocation?.country) && (
                      <div className="absolute top-3 right-3 bg-luxury-gold text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star size={12} className="mr-1" />
                        International
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {(persistentPopup && clickedLocation) ? clickedLocation.description : hoveredLocation?.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleExploreClick((persistentPopup && clickedLocation) ? clickedLocation : hoveredLocation)}
                      className="w-full bg-gradient-to-r from-luxury-gold to-luxury-darkGold text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Heart size={14} />
                      <span>Explore {(persistentPopup && clickedLocation) ? clickedLocation.name : hoveredLocation?.name}</span>
                    </motion.button>
                    
                    {/* Additional interactive elements for persistent popup */}
                    {persistentPopup && clickedLocation && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Click to explore destination</span>
                          <div className="flex items-center space-x-1">
                            <div 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: clickedLocation.color }}
                            ></div>
                            <span>{clickedLocation.country}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[500]">
              <div className="flex flex-col items-start space-y-2 text-xs">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-4 h-4 mr-2">
                    <div className="w-3 h-3 rounded-full bg-[#2196f3] border border-white"></div>
                  </div>
                  <span className="text-gray-700">Indian Destinations</span>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-4 h-4 mr-2 relative">
                    <div className="w-3 h-3 rounded-full bg-[#ff5722] border border-white"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full border border-white"></div>
                  </div>
                  <span className="text-gray-700">International Destinations ⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Explore Our Destinations
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked destinations across India and around the world for your perfect wedding celebration
            </p>
          </motion.div>

          {/* Indian Destinations */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy mb-4 text-center">
                Indian Destinations
              </h3>
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations
                .filter(destination => destination.country === "India")
                .map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-luxury-gold hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => handleLocationClick(destination)}
                  >
                    {/* Image header */}
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{destination.name}</h3>
                        <p className="text-sm opacity-90">{destination.country}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: destination.color }}
                        />
                        <MapPin className="text-gray-400 mr-2" size={18} />
                        <span className="text-gray-500 text-sm">Indian Destination</span>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {destination.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-luxury-gold/10 hover:bg-luxury-gold hover:text-white text-luxury-gold border border-luxury-gold rounded-lg py-3 font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Navigation size={18} />
                        <span>Explore {destination.name}</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* International Destinations */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy mb-4 text-center">
                International Destinations
              </h3>
              <div className="w-16 h-1 bg-luxury-gold mx-auto mb-6"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations
                .filter(destination => destination.country !== "India")
                .map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-luxury-gold hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => handleLocationClick(destination)}
                  >
                    {/* Image header */}
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold flex items-center">
                          {destination.name}
                          <Star size={16} className="ml-2 text-yellow-400" />
                        </h3>
                        <p className="text-sm opacity-90">{destination.country}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-luxury-gold text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star size={12} className="mr-1" />
                        International
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: destination.color }}
                        />
                        <MapPin className="text-gray-400 mr-2" size={18} />
                        <span className="text-gray-500 text-sm">International Destination</span>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {destination.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-luxury-gold/10 hover:bg-luxury-gold hover:text-white text-luxury-gold border border-luxury-gold rounded-lg py-3 font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Navigation size={18} />
                        <span>Explore {destination.name}</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorldMap;
