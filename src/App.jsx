import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import About from "./Pages/About_us";
import Services from "./Pages/Services";
import Destinations from "./Pages/Destinations";
import Contact from "./Pages/Contact_us";
import ScrollToTop from "./Components/ScrollToTop";
import Jaipur from "./Pages/Destinations_List/Jaipur";
import Agra from "./Pages/Destinations_List/Agra";
import Turkey from "./Pages/Destinations_List/Turkey";
import Paris from "./Pages/Destinations_List/Paris";
import WorldMap from "./Pages/Destinations_List/World_map";
import RSVPManagement from "./Pages/Services/RSVP_management";
import "./App.css";
import Udaipur from "./Pages/Destinations_List/Udaipur"; // Import Udaipur component
import Goa from "./Pages/Destinations_List/Goa"; // Import Goa component
import Delhi from "./Pages/Destinations_List/Delhi"; // Import Delhi component
import JimCorbett from "./Pages/Destinations_List/Jim_corbett"; // Import Jim Corbett component
import Mussoorie from "./Pages/Destinations_List/Mussoorie"; // Import Mussoorie component
import Shimla from "./Pages/Destinations_List/Shimla"; // Import Shimla component
import Jaisalmer from "./Pages/Destinations_List/Jaisalmer"; // Import Jaisalmer component
import Jodhpur from "./Pages/Destinations_List/Jodhpur"; // Import Jodhpur component
import Kerala from "./Pages/Destinations_List/Kerala"; // Import Kerala component
import Hua_Hin from "./Pages/Destinations_List/Hua_Hin"; // Import Hua Hin component
import Abu_dhabi from "./Pages/Destinations_List/Abu_dhabi"; // Import Abu Dhabi component
import Dubai from "./Pages/Destinations_List/Dubai"; // Import Dubai component
import Phuket from "./Pages/Destinations_List/Phuket"; // Import Phuket component

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
          <Route path="/destinations/udaipur" element={<Udaipur />} />
          <Route path="/destinations/goa" element={<Goa />} />
          <Route path="/destinations/delhi" element={<Delhi />} />
          <Route path="/destinations/turkey" element={<Turkey />} />
          <Route path="/destinations/paris" element={<Paris />} />
          <Route path="/destinations/map" element={<WorldMap />} />
          <Route
            path="/services/rsvp-management"
            element={<RSVPManagement />}
          />
          <Route path="/destinations/jim-corbett" element={<JimCorbett />} />
          <Route path="/destinations/mussoorie" element={<Mussoorie />} />
          <Route path="/destinations/shimla" element={<Shimla />} />
          <Route path="/destinations/jaisalmer" element={<Jaisalmer />} />
          <Route path="/destinations/jodhpur" element={<Jodhpur />} />
          <Route path="/destinations/kerala" element={<Kerala />} />
          <Route path="/destinations/hua_hin" element={<Hua_Hin />} />
          <Route path="/destinations/abu_dhabi" element={<Abu_dhabi />} />
          <Route path="/destinations/dubai" element={<Dubai />} />
          <Route path="/destinations/phuket" element={<Phuket />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
