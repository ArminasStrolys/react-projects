import React from 'react';
import Correction from './service/Correction';
import Laminate from './service/Laminate';
import Henna from './service/Henna';

const PricesAndServices = () => {
  return (
    <div>
      <div className="services">
        <div>
          <Correction />
          <Laminate />
          <Henna />

          <table className="customTable">
            <thead>
              <tr>
                <th>Procedūra</th>
                <th>Kaina</th>
                <th>Trukmė</th>
                <th>Trumpas aprašymas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Korekcija</td>
                <td>8€</td>
                <td>15 - 30 min</td>
                <td>
                  Karštu vašku arba pincetu pašalinami iš formos išeinantys
                  plaukeliai
                </td>
              </tr>
              <tr>
                <td>Laminavimas</td>
                <td>30€</td>
                <td>1 - 1,5 h</td>
                <td>
                  Tepamas spec. gelis, kuris prailgina antakių formos išlaikymą
                </td>
              </tr>
              <tr>
                <td>Henna dažymas</td>
                <td>20€</td>
                <td>20 - 40 min</td>
                <td>
                  Naudojami natūralūs augaliniai dažai paryškinti antakius ir jų
                  linijas
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className="footer-home-services-contacts">
        Copyrights © Lorenzia 2022.
      </footer>
    </div>
  );
};

export default PricesAndServices;
