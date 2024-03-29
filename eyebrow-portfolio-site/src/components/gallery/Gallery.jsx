import React from 'react';
import eyes1 from '../../images/eyebrows1.jpg';
import eyes2 from '../../images/eyebrows2.jpg';
import eyes3 from '../../images/eyebrows3.jpg';
import eyes4 from '../../images/eyebrows4.jpg';
import eyes5 from '../../images/eyebrows5.jpg';
import eyes6 from '../../images/eyebrows6.jpg';
import eyes7 from '../../images/eyebrows7.jpg';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Gallery = () => {
  const images = [eyes1, eyes2, eyes3, eyes4, eyes5, eyes6, eyes7];

  return (
    <div className="gallery">
      <div className="image-collection">
        {images.map((e, index) => (
          <Zoom key={index}>
            <img src={e} alt="Woman eyebrows after and before in this pic" />
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
