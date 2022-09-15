import React, { useState, useRef } from 'react';
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

const purple = 'purple';
const waves_color = '#fdebff';

const Navi = () => {
  const [visible, setVisible] = useState(true);
  const bottomRef = useRef(null);
  const handleScrollBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    setVisible(true);
  };
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
    setVisible(true);
  };

  const visibility = () => {
    visible === true ? setVisible(false) : setVisible(true);
  };

  return (
    <div>
      {/* <div class="tech-slideshow"> // Announcement bar
        <div class="mover-1"></div>
      </div> */}
      <svg
        className="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
      >
        <path
          fill={waves_color}
          fill-opacity="1"
          d="M0,128L21.8,144C43.6,160,87,192,131,181.3C174.5,171,218,117,262,117.3C305.5,117,349,171,393,181.3C436.4,192,480,160,524,144C567.3,128,611,128,655,138.7C698.2,149,742,171,785,186.7C829.1,203,873,213,916,192C960,171,1004,117,1047,106.7C1090.9,96,1135,128,1178,133.3C1221.8,139,1265,117,1309,117.3C1352.7,117,1396,139,1418,149.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>

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
              onClick={handleScrollTop}
              style={({ isActive }) => ({
                color: isActive ? purple : 'black',
                border: isActive ? `1px solid ${purple}` : 'none',
                padding: isActive ? '10px' : '10px',
                backgroundColor: isActive
                  ? 'rgba(250, 250, 250, 0.2)'
                  : 'rgba(250, 235, 215, 0)',
              })}
              to="/"
            >
              Pagrindinis
            </NavLink>
            {/* <NavLink
              onClick={handleScrollTop}
              style={({ isActive }) => ({
                color: isActive ? purple : 'black',
                border: isActive ? `1px solid ${purple}` : 'none',
                padding: isActive ? '10px' : '10px',
                backgroundColor: isActive
                  ? 'rgba(250, 250, 250, 0.2)'
                  : 'rgba(250, 235, 215, 0)',
              })}
              to="/services"
            >
              Paslaugos
            </NavLink> */}
            <NavLink
              path={'/gallery'}
              onClick={handleScrollTop}
              style={({ isActive }) => ({
                color: isActive ? purple : 'black',
                border: isActive ? `1px solid ${purple}` : 'none',
                padding: isActive ? '10px' : '10px',
                backgroundColor: isActive
                  ? 'rgba(250, 250, 250, 0.2)'
                  : 'rgba(250, 235, 215, 0)',
              })}
              to="/gallery"
            >
              Galerija
            </NavLink>
            <span className="contacts-link" onClick={handleScrollBottom}>
              Kontaktai
            </span>
            <NavLink
              onClick={handleScrollTop}
              style={({ isActive }) => ({
                color: isActive ? purple : 'black',
                border: isActive ? `1px solid ${purple}` : 'none',
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
              onClick={handleScrollTop}
              style={({ isActive }) => ({
                color: isActive ? purple : 'black',
                border: isActive ? `1px solid ${purple}` : 'none',
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

      <div ref={bottomRef}>
        <Contacts />
      </div>
    </div>
  );
};

export default Navi;
