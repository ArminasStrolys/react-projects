import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import carousel1 from '../../images/eyes-wide1.jpg';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className="home">
      <h2>Pagrindinis</h2>

      <h2>Pagrindinis</h2>
      <div>Bendra info</div>
      <div className="carousel-section">
        <Carousel
          autoPlay="true"
          infiniteLoop="true"
          interval={5000}
          showStatus="false"
          showIndicators="false"
          showThumbs="false"
          showArrows="true"
          centerMode="true"
          transitionTime="700"
          centerSlidePercentage="70"
          dynamicHeight="true"
        >
          <div>
            <img src={carousel1} alt="eyes" />
          </div>
          <div>
            <img src={carousel1} alt="eyes" />
          </div>
          <div>
            <img src={carousel1} alt="eyes" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
