import React from 'react';
import Carousel from './CarouselComponent.jsx';

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
            <p>Sertifikatai</p>
          </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            incidunt esse. Dicta animi dignissimos ut porro similique
            reiciendis, deserunt maxime et alias ipsum consequatur molestiae?
            Consequuntur porro architecto eos corrupti possimus minus dolores
            suscipit amet, excepturi pariatur voluptatibus odit reiciendis
            voluptas dicta, culpa dolorum consectetur.
          </p>
          <div className="cards">
            <div className="card-1">
              <h3>Info kortelė 1</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores voluptatem in cumque eligendi debitis! Quaerat
                reprehenderit a ullam quia? Aliquid cumque aut dolor ipsam atque
                illum amet? Sequi, voluptas laboriosam. Temporibus delectus
                vitae architecto in eius voluptate odit magni tenetur.
              </p>
            </div>
            <div className="card-2">
              <h3>Info kortelė 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate mollitia velit debitis. Harum, blanditiis deserunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                voluptates voluptas itaque commodi earum sit voluptate qui
                repellat quisquam veniam!
              </p>
            </div>
            <div className="card-3">
              <h3>Info kortelė 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
                nisi.
              </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, voluptates quaerat accusamus eos recusandae
                assumenda!
              </p>
            </div>
          </div>
        </article>
        <Carousel />
        <div>
          <h3>Kokį antakių korekcijos tipą išsirinkti?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            fugiat qui minus veniam assumenda beatae distinctio ipsam odio, quae
            laudantium saepe possimus consequuntur repellendus explicabo dicta
            dolor quas vitae nulla. Architecto nesciunt deserunt soluta totam,
            cupiditate sequi iure officiis repudiandae amet sed, facilis velit
            ipsa laboriosam maxime ad, aperiam placeat!
          </p>
          <h3>Ar man nepakenks dažai?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            magnam in provident quibusdam cumque similique maiores, cum, vero a
            omnis, natus fugit molestias hic laboriosam eum. Repellat qui soluta
            odio debitis! Magni repudiandae, dolorum magnam, soluta deleniti a
            quaerat laudantium, mollitia omnis iste ipsam blanditiis sequi
            aperiam quas inventore ullam aspernatur perspiciatis. Dignissimos
            sequi corrupti facilis perferendis fugit, velit vitae.
          </p>
          <h3>Alergijos dažams</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            sapiente laborum at, velit tempore praesentium quia tempora amet
            autem necessitatibus, reiciendis dicta facere, magni ipsa aperiam
            rem ipsum neque eaque molestias! Mollitia eos perferendis saepe
            rerum inventore cupiditate modi adipisci!
          </p>
        </div>
        <div>
          <h2>Nuolaidos</h2>
          <b>Nuolaidos</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            neque, hic obcaecati a, eligendi incidunt natus consequuntur placeat
            deleniti ipsum distinctio facilis maxime quos ea?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
