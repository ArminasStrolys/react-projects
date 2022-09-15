import React from 'react';
import Carousel from './CarouselComponent.jsx';
import Services from '../services/Services';
import certificate1 from '../../images/certificate1.png';
import certificate2 from '../../images/certificate2.jpg';

const Home = () => {
  return (
    <div>
      <div className="home">
        <Services />
        <Carousel />
        <article>
          <b>
            <p>SERTIFIKATAI</p>
          </b>
          <p>
            <b>Eyebrows design online course “HENNA PROFI”.</b> Teorija. Mokymu
            metu buvo labiau pagilintos žinios į hennos dažymą, koloristiką,
            plauko analizę, laminavimą.
            <br />
            <br />
            <b>Antakių korekcija.</b> Teorija ir praktika. Mokymų metu
            atskleista visa antakių procedūros eiga nuo antakių paruošimo iki
            pilno jų sutvarkymo, nudažymo. Sužinota daugybė informacijos apie
            kiekvieną naudojamą produktą. Darbai buvo atlikti su henna ir
            geliniais dažais, atliktas laminavimas.
          </p>
          <div className="cards">
            <div className="card-1">
              {/* <h3>Sertifikatas 1</h3> */}
              <img
                src={certificate1}
                alt="certificate num. 1 - 'Eyebrows design online course 'Henna profi''"
              />
            </div>
            <div className="card-2">
              <img
                src={certificate2}
                alt="certificate num. 2 - 'Eyebrow correction at Mingailė Baltrušytė'"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Home;
