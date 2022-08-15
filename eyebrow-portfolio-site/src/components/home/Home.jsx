import React from 'react';
import Carousel from './CarouselComponent.jsx';

const Home = () => {
  return (
    <div className="home">
      <h2>Pagrindinis</h2>

      <h2>Pagrindinis</h2>
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
          non deleniti blanditiis. Commodi qui illo recusandae beatae vel vitae,
          esse rerum quasi nobis impedit magni ullam optio natus, quisquam
          eligendi doloribus sapiente itaque distinctio accusantium tempora eum,
          totam ea vero. Debitis id, error delectus nemo repellat recusandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          corporis odit. Ipsam, fugiat maiores. Nisi a illo sunt consectetur,
          fuga eaque mollitia ad officiis ducimus distinctio. Consequuntur sint
          dicta aliquid.
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
          incidunt esse. Dicta animi dignissimos ut porro similique reiciendis,
          deserunt maxime et alias ipsum consequatur molestiae? Consequuntur
          porro architecto eos corrupti possimus minus dolores suscipit amet,
          excepturi pariatur voluptatibus odit reiciendis voluptas dicta, culpa
          dolorum consectetur.
        </p>
      </article>
      <Carousel className="carousel-section" />
      <div style={{ marginTop: '50px' }}>
        <b>Nuolaidos</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, neque,
          hic obcaecati a, eligendi incidunt natus consequuntur placeat deleniti
          ipsum distinctio facilis maxime quos ea?
        </p>
      </div>
      <footer>Copyrights 'Lorenzia' 2022.</footer>
    </div>
  );
};

export default Home;
