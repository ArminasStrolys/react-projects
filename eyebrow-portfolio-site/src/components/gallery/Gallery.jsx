import React from 'react';
import eyes1 from '../../images/eyebrows1.jpg';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
// 
const Gallery = () => {
  const images = [eyes1, eyes1, eyes1, eyes1, eyes1, eyes1];

  return (
    <div className="gallery">
      <h2>Galerija</h2>
      <div className="image-collection">
        {images.map((e) => {
          return (
            <Zoom>
              <img src={e} alt="Woman eyebrows after and before in this pic" />
            </Zoom>
          );
        })}
      </div>
      <div className="empty-div"></div>
    </div>
  );
};

export default Gallery;
