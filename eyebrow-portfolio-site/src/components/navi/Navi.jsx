import React from 'react';
import Contacts from '../contacts/Contacts';
import PricesAndServices from '../pricesAndServices/PricesAndServices'
import Home from '../home/Home';
import About from '../about/About';

const Navi = () => {
  return (
    <div>
      Navigation:
      <b>
      <Home />
      <PricesAndServices />
      <Contacts />
      <About />
      </b>
    </div>
  );
}

export default Navi;
