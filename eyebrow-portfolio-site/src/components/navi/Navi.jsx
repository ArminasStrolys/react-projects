import React from 'react';
import Contacts from '../contacts/Contacts';
import Services from '../services/Services';
import Home from '../home/Home';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import FAQ from '../faq/FAQ';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Navi = () => {
  return (
    <div>
      <Router>
        <nav className="nav-bar">
          <Link to="/">Pagrindinis</Link>
          <Link to="/services">Paslaugos</Link>
          <Link to="/gallery">Galerija</Link>
          <Link to="/contacts">Kontaktai</Link>
          <Link to="/about">Apie</Link>
          <Link to="/faq">D.U.K</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navi;
