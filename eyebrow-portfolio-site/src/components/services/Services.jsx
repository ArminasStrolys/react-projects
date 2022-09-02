import React from 'react';
import Correction from './service/Correction';
import Laminate from './service/Laminate';
import Henna from './service/Henna';

const PricesAndServices = () => {
  return (
    <div>
      <div className="services">
        <div>
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
                <td> Antakių korekcija</td>
                <td>5€</td>
                <td>15 - 30 min.</td>
                <td>
                  Karštu vašku, pincetu pašalinami iš formos išeinantys
                  plaukeliai
                </td>
              </tr>

              <tr>
                <td>Antakių korekcija + dažymas</td>
                <td>12€</td>
                <td>1 val. 30 min.</td>
                <td>
                  Atliekama korekcija, piešiamas karkasas, parenkama antakių
                  dažų spalva pagal klientės norus.
                </td>
              </tr>

              <tr>
                <td>Antakių laminavimas + korekcija</td>
                <td>12€</td>
                <td>1 val. 30 min.</td>
                <td>
                  Tepamos specialios priemonės, po kurios plaukeliai tampa
                  paslankūs, lengvai formuojami bei atliekama korekcija.
                </td>
              </tr>
              <tr>
                <td>Antakių laminavimas + dažymas</td>
                <td>20€</td>
                <td>2 val.</td>
                <td>
                  Tepamos specialios priemonės, po kurios plaukeliai tampa
                  paslankūs, lengvai formuojami, atliekama korekcija bei
                  dažymas.
                </td>
              </tr>
              <tr>
                <td>Ūsiukų depiliacija</td>
                <td>5€</td>
                <td>15 - 30 min.</td>
                <td>Atliekama ūsiukų depiliacija vašku ir pincetu.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Correction />
        <Laminate />
        <Henna />
      </div>
      {/* <footer className="footer-home-services-contacts">
        Copyrights © Lorenzia 2022.
      </footer> */}
    </div>
  );
};

export default PricesAndServices;
