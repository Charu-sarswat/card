import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Listings from "./components/Listings";
import Header from "./components/Header";
import propertiesData from "./data/properties";
import PropertyDetails from "./components/PropertyDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({});
  const [properties, setProperties] = useState(propertiesData);

  // Filtering logic here

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar filters={filters} setFilters={setFilters} />
          <Routes>
            <Route path="/" element={<Listings properties={propertiesData} filters={filters} />} />
            <Route path="/property/:id" element={<PropertyDetails properties={propertiesData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
