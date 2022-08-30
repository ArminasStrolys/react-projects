import React, { useState } from 'react';
import Contacts from '../contacts/Contacts';
import Services from '../services/Services';
import Home from '../home/Home';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import FAQ from '../faq/FAQ';
import logo from '../../images/logo.png';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';

const Navi = () => {
  const [visible, setVisible] = useState(true);

  const visibility = () => {
    visible === true ? setVisible(false) : setVisible(true);
  };

  return (
    <div>
      <Router>
        <div onClick={visibility} className="drop-down">
          MENIU
        </div>
        <nav
          className="nav-bar"
          style={{ marginTop: visible === false ? '0px' : '-450px' }}
        >
          <img className="logo" src={logo} alt="logo" />
          <NavLink
            onClick={() => setVisible(true)}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 250, 250, 0.2)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/"
          >
            Pagrindinis
          </NavLink>
          <NavLink
            onClick={() => setVisible(true)}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 250, 250, 0.2)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/services"
          >
            Paslaugos
          </NavLink>
          <NavLink
            onClick={() => setVisible(true)}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 250, 250, 0.2)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/gallery"
          >
            Galerija
          </NavLink>
          <NavLink
            onClick={() => setVisible(true)}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 250, 250, 0.2)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/contacts"
          >
            Kontaktai
          </NavLink>
          <NavLink
            onClick={() => setVisible(true)}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 250, 250, 0.2)'
                : 'rgba(250, 235, 215, 0)',
            })}
            to="/about"
          >
            Apie
          </NavLink>
          <NavLink
            onClick={() => setVisible(true)}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              border: isActive ? '1px solid white' : 'none',
              padding: isActive ? '10px' : '10px',
              backgroundColor: isActive
                ? 'rgba(250, 250, 250, 0.2)'
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
