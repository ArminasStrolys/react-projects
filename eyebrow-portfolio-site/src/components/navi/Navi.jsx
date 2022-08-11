import React from 'react';
import Contacts from '../contacts/Contacts';
import Services from '../services/Services';
import Home from '../home/Home';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Navi = () => {
  return (
    <div>
      <div className="nav-bar">
        <a href="/home">Home</a>
        <a href="/services">Services</a>
        <a href="/contacts">Contacts</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
      </div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navi;
