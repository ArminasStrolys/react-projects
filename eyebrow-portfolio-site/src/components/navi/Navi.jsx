import React, { useState } from 'react';
import Contacts from '../contacts/Contacts';
import Services from '../services/Services';
import Home from '../home/Home';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import FAQ from '../faq/FAQ';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Navi = () => {
  const [activeLink, setActiveLink] = useState({});

  const handleActiveLinks = (e) => {
    e.preventDefault();
    console.log(e.target.pathname);
  };

  return (
    <div>
      <Router>
        <nav className="nav-bar">
          <Link className="inactive-link" to="/">
            Pagrindinis
          </Link>
          <Link
            // onClick={(e) => handleActiveLinks(e)}
            className="inactive-link"
            to="/services"
          >
            Paslaugos
          </Link>
          <Link className="inactive-link" to="/gallery">
            Galerija
          </Link>
          <Link className="inactive-link" to="/contacts">
            Kontaktai
          </Link>
          <Link className="inactive-link" to="/about">
            Apie
          </Link>
          <Link className="inactive-link" to="/faq">
            D.U.K
          </Link>
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
      <footer
        style={{
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          position: 'relative',
          bottom: '-20px',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
        }}
      >
        Copyrights © Lorenzia 2022.
      </footer>
    </div>
  );
};

export default Navi;
