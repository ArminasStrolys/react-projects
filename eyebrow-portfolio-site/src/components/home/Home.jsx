import React from 'react';
import Carousel from './CarouselComponent.jsx';
import Services from '../services/Services';

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
              <h3>Sertifikatas 1</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores voluptatem in cumque eligendi debitis!
              </p>
            </div>
            <div className="card-2">
              <h3>Sertifikatas 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate mollitia velit debitis. Harum, blanditiis deserunt.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Home;
