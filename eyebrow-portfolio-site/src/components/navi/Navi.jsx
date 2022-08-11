import React from 'react';
import Contacts from '../contacts/Contacts';
import Services from '../services/Services';
import Home from '../home/Home';
import About from '../about/About';
import Gallery from '../gallery/Gallery';

const Navi = () => {
  return (
    <div className="nav-bar">
      <Home />
      <Services />
      <Contacts />
      <Gallery />
      <About />
    </div>
  );
};

export default Navi;
