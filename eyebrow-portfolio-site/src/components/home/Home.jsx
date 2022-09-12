import React from 'react';
import Carousel from './CarouselComponent.jsx';
import location from '../../images/locationv1.jpg';

const Home = () => {
  return (
    <div>
      <div className="home">
        <article>
          <p>
            <b>Svarbi informacija</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem velit recusandae at eos, quia explicabo quo numquam
            voluptatem unde incidunt impedit totam reiciendis non illo ex earum.
            Minus maxime deserunt deleniti vero nostrum doloribus? Cupiditate
            iusto nulla laborum quaerat veritatis cum reprehenderit. Ipsum atque
            asperiores, accusantium unde neque saepe quam reprehenderit sapiente
            non deleniti blanditiis. Commodi qui illo recusandae beatae vel
            vitae, esse rerum quasi nobis impedit magni ullam optio natus,
            quisquam eligendi doloribus sapiente itaque distinctio accusantium
            tempora eum, totam ea vero. Debitis id, error delectus nemo repellat
            recusandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            corporis odit. Ipsam, fugiat maiores. Nisi a illo sunt consectetur,
            fuga eaque mollitia ad officiis ducimus distinctio. Consequuntur
            sint dicta aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cumque consequuntur deleniti, voluptatem quas et minus eaque
            laboriosam placeat harum soluta rem impedit nostrum omnis amet, odit
            natus ipsam. Sit!
          </p>
        </article>
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
        <Carousel />
        <div>
          <h3>Kokį antakių korekcijos tipą išsirinkti?</h3>
          <p>
            Atsižvelgiant į Jūsų odos tipą nustatysime, kuris korekcijos tipas
            Jums būtų priimtiniausias.
          </p>
          <h3>Ar man nepakenks dažai?</h3>
          <p>
            Norint įsitikinti ar dažai Jums nepakenks, rekomenduojama atlikti
            alergijos testą kiekvienai naudojamai ekspozicijai. Medžiaga tepama
            ant nedidelio odos ploto, nuvaloma ir stebima 24-48 val. Tiek laiko
            užtenka norint įsitikinti, jog Jūs šioms medžiagoms nesate
            alergiški.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
