import React from 'react';
import Contacts from '../contacts/Contacts';
import Services from '../services/Services';
import Home from '../home/Home';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import FAQ from '../faq/FAQ';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';

const Navi = () => {
  return (
    <div>
      <Router>
        <nav className="nav-bar">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 235, 215, 0)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/"
          >
            Pagrindinis
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 235, 215, 0)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/services"
          >
            Paslaugos
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 235, 215, 0)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/gallery"
          >
            Galerija
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 235, 215, 0)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/contacts"
          >
            Kontaktai
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 235, 215, 0)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/about"
          >
            Apie
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 235, 215, 0)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/faq"
          >
            D.U.K
          </NavLink>
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
