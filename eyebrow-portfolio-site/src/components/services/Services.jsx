import React from 'react';
import Correction from './service/Correction';
import Laminate from './service/Laminate';
import Henna from './service/Henna';
import Bronsun from './service/Bronsun';

const PricesAndServices = () => {
  return (
    <div>
      <div className="services">
        <div>
          <div className="drop-down-services">
            <h3>Teikiamos paslaugos</h3>

            <div className="service-headline">
              <label for="touch1">
                <span>Antakių korekcija</span>
              </label>
              <input type="checkbox" id="touch1" />

              <div className="slide">
                <p>
                  Eiga: karštu vašku, pincetu pašalinami iš formos išeinantys
                  plaukeliai
                </p>
                <p>Trukmė: 15 - 30 min.</p>
                <p>Kaina: 5€</p>
              </div>
            </div>

            {/*----------------------------------------------------------------------------------- PASLAUGA */}

            <div className="service-headline">
              <label for="touch2">
                <span>Antakių korekcija + dažymas</span>
              </label>
              <input type="checkbox" id="touch2" />

              <div className="slide">
                <p>
                  Eiga: atliekama korekcija, piešiamas karkasas, parenkama
                  antakių dažų spalva pagal klientės norus.
                </p>
                <p>Trukmė: 1 val. 30 min.</p>
                <p>Kaina: 15€</p>
              </div>
            </div>

            {/*----------------------------------------------------------------------------------- PASLAUGA */}
            <div className="service-headline">
              <label for="touch3">
                <span>Antakių laminavimas + korekcija</span>
              </label>
              <input type="checkbox" id="touch3" />

              <div className="slide">
                <p>
                  Eiga: tepamos specialios priemonės, po kurios plaukeliai tampa
                  paslankūs, lengvai formuojami bei atliekama korekcija.
                </p>
                <p>Trukmė: 1 val. 30 min.</p>
                <p>Kaina: 15€</p>
              </div>
            </div>

            {/*----------------------------------------------------------------------------------- PASLAUGA */}

            <div className="service-headline">
              <label for="touch4">
                <span>Antakių laminavimas + dažymas</span>
              </label>
              <input type="checkbox" id="touch4" />

              <div className="slide">
                <p>
                  Eiga: tepamos specialios priemonės, po kurios plaukeliai tampa
                  paslankūs, lengvai formuojami, atliekama korekcija bei
                  dažymas.
                </p>
                <p>Trukmė: 1 val. 30 min. - 2 val.</p>
                <p>Kaina: 20€</p>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------- PASLAUGA */}

            <div className="service-headline">
              <label for="touch5">
                <span>Ūsiukų depiliacija</span>
              </label>
              <input type="checkbox" id="touch5" />

              <div className="slide">
                <p>Eiga: atliekama ūsiukų depiliacija vašku ir pincetu.</p>
                <p>Trukmė: 15 - 30 min.</p>
                <p>Kaina: 5€</p>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------- PASLAUGA */}

            <div className="service-headline">
              <label for="touch6">
                <span>Express antakių dažymas</span>
              </label>
              <input type="checkbox" id="touch6" />

              <div className="slide">
                <p>Eiga: INFO INFO INFO INFO INFO INFO</p>
                <p>Trukmė: 15 - 30 min.</p>
                <p>Kaina: 8€</p>
              </div>
            </div>
          </div>
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
