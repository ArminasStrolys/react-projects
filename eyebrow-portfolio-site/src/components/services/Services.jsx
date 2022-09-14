import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
import Correction from './service/Correction';
import Laminate from './service/Laminate';
import Henna from './service/Henna';
import Bronsun from './service/Bronsun';

const PricesAndServices = () => {
  const [dropDown, setDropDown] = useState(false);
  const [addClass, setAddClass] = useState('service-option');
  const handleHidden = () => {
    dropDown === false ? setDropDown(true) : setDropDown(false);
    dropDown === false ? setAddClass('hidden') : setAddClass('service-option');
  };

  return (
    <div>
      <div className="services">
        <div>
          <div className="drop-down-services">
            <h3>Teikiamos paslaugos</h3>
            <div className="service-headline">
              <b>Antakių korekcija</b>
            </div>
            <ReactCSSTransitionGroup transitionName="testing">
              <div className="service-headline">
                <p>Antakių korekcija</p>
                <p>
                  Eiga: karštu vašku, pincetu pašalinami iš formos išeinantys
                  plaukeliai
                </p>
                <p>Trukmė: 15 - 30 min.</p>
                <p>Kaina: 5€</p>
              </div>
            </ReactCSSTransitionGroup>
            {/* <div onClick={handleHidden} className="service-headline">
              <b>Antakių korekcija</b>
            </div>
            <div className={addClass}>
              <p>Antakių korekcija</p>
              <p>
                Eiga: karštu vašku, pincetu pašalinami iš formos išeinantys
                plaukeliai
              </p>
              <p>Trukmė: 15 - 30 min.</p>
              <p>Kaina: 5€</p>
            </div> */}
            {/*----------------------------------------------------------------------------------- PASLAUGA */}
            <div className="service-headline">
              <b>Antakių korekcija + dažymas</b>
            </div>
            <div className="service-option">
              <p>Antakių korekcija + dažymas</p>
              <p>
                Eiga: atliekama korekcija, piešiamas karkasas, parenkama antakių
                dažų spalva pagal klientės norus.
              </p>
              <p>Trukmė: 1 val. 30 min.</p>
              <p>Kaina: 15€</p>
            </div>
            {/*----------------------------------------------------------------------------------- PASLAUGA */}
            <div className="service-headline">
              <b>Antakių laminavimas + korekcija</b>
            </div>
            <div className="service-option">
              <p>Antakių laminavimas + korekcija</p>
              <p>
                Eiga: tepamos specialios priemonės, po kurios plaukeliai tampa
                paslankūs, lengvai formuojami bei atliekama korekcija.
              </p>
              <p>Trukmė: 1 val. 30 min.</p>
              <p>Kaina: 15€</p>
            </div>
            {/*----------------------------------------------------------------------------------- PASLAUGA */}
            <div className="service-headline">
              <b>Antakių laminavimas + dažymas</b>
            </div>
            <div className="service-option">
              <p>Antakių laminavimas + dažymas</p>
              <p>
                Eiga: tepamos specialios priemonės, po kurios plaukeliai tampa
                paslankūs, lengvai formuojami, atliekama korekcija bei dažymas.
              </p>
              <p>Trukmė: 1 val. 30 min. - 2 val.</p>
              <p>Kaina: 20€</p>
            </div>
            {/*----------------------------------------------------------------------------------- PASLAUGA */}
            <div className="service-headline">
              <b>Ūsiukų depiliacija</b>
            </div>
            <div className="service-option">
              <p>Ūsiukų depiliacija</p>
              <p>Eiga: atliekama ūsiukų depiliacija vašku ir pincetu.</p>
              <p>Trukmė: 15 - 30 min.</p>
              <p>Kaina: 5€</p>
            </div>
            {/*----------------------------------------------------------------------------------- PASLAUGA */}
            <div className="service-headline">
              <b>Express antakių dažymas</b>
            </div>
            <div className="service-option">
              <p>Express antakių dažymas</p>
              <p>Eiga: INFO INFO INFO INFO INFO INFO</p>
              <p>Trukmė: 15 - 30 min.</p>
              <p>Kaina: 8€</p>
            </div>
          </div>
          {/* <table className="customTable">
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
                <td>15€</td>
                <td>1 val. 30 min.</td>
                <td>
                  Atliekama korekcija, piešiamas karkasas, parenkama antakių
                  dažų spalva pagal klientės norus.
                </td>
              </tr>

              <tr>
                <td>Antakių laminavimas + korekcija</td>
                <td>15€</td>
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
          </table> */}
        </div>

        <Correction />
        <Laminate />
        <Henna />
        <Bronsun />
      </div>
    </div>
  );
};

export default PricesAndServices;
