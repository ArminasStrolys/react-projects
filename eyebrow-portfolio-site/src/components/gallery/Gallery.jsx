import React from 'react';
import eyes1 from '../../images/eyebrows1.jpg';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Galerija</h2>
      <div className="image-collection">
        <Zoom className="img-level">
          <img src={eyes1} alt="Eyebrows after and before 1" />
        </Zoom>
        <img src={eyes1} alt="Eyebrows after and before 1" />
        <img src={eyes1} alt="Eyebrows after and before 1" />
        <img src={eyes1} alt="Eyebrows after and before 1" />
        <img src={eyes1} alt="Eyebrows after and before 1" />
        <img src={eyes1} alt="Eyebrows after and before 1" />
        <img src={eyes1} alt="Eyebrows after and before 1" />
      </div>
    </div>
  );
};

export default Gallery;
