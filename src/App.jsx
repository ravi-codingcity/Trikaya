import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage';
import About from './Pages/About_us';
import Services from './Pages/Services';
import Destinations from './Pages/Destinations';
import Contact from './Pages/Contact_us';
import ScrollToTop from './Components/ScrollToTop';
import Jaipur from './Pages/Destinations_List/Jaipur';
import Agra from './Pages/Destinations_List/Agra';
import Turkey from './Pages/Destinations_List/Turkey';
import Paris from './Pages/Destinations_List/Paris';
import WorldMap from './Pages/Destinations_List/World_map';
import RSVPManagement from './Pages/Services/RSVP_management';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<WorldMap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations/jaipur" element={<Jaipur />} />
          <Route path="/destinations/agra" element={<Agra />} />
          <Route path="/destinations/turkey" element={<Turkey />} />
          <Route path="/destinations/paris" element={<Paris />} />
          <Route path="/destinations/map" element={<WorldMap />} />
          <Route path="/services/rsvp-management" element={<RSVPManagement />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
