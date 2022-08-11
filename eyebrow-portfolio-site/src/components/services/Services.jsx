import React from 'react';
import Correction from './service/Correction';
import Laminate from './service/Laminate';
import Henna from './service/Henna';

const PricesAndServices = () => {
  return (
    <div className="services">
      <div>
        <h2>Paslaugos</h2>
        <Correction />
        <Laminate />
        <Henna />

        <table class="customTable">
          <thead>
            <tr>
              <th>Procedūra</th>
              <th>Kaina</th>
              <th>Trukmė</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Korekcija</td>
              <td>8$</td>
              <td>15 - 30 min</td>
            </tr>
            <tr>
              <td>Laminavimas</td>
              <td>30$</td>
              <td>1 - 1,5 h</td>
            </tr>
            <tr>
              <td>Henna dažymas</td>
              <td>20$</td>
              <td>20 - 40 min</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricesAndServices;
