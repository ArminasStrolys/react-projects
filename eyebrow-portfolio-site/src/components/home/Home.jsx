import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import eyes1 from '../../images/eyebrows1.jpg';
import correction from '../../images/correction.webp';
import henna from '../../images/henna.jpg';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className="home">
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
          showArrows="false"
          // width="50%"
          centerMode="true"
          transitionTime="700"
          centerSlidePercentage="70"
          dynamicHeight="true"
        >
          <div>
            <img src={eyes1} alt="eyes" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={correction} alt="eyes" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={henna} alt="eyes" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
