import React from 'react';
import Image1 from '../../images/eyes-wide1.jpg';
import Image2 from '../../images/eyes-wide2.jpg';
import Image3 from '../../images/eyes-wide3.jpg';
import Image4 from '../../images/eyes-wide4.jpg';
import Image5 from '../../images/eyes-wide5.jpg';
import Image6 from '../../images/eyes-wide6.jpg';
import { Carousel } from 'react-carousel-minimal';

const CarouselComponent = () => {
  const data = [
    {
      image: Image1,
    },
    {
      image: Image2,
    },
    {
      image: Image3,
    },
    {
      image: Image4,
    },
    {
      image: Image5,
    },
    {
      image: Image6,
    },
    // {
    //   image:
    //     'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
    //   // caption: 'Darjeeling',
    // },
    // {
    //   image:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
    //   // caption: 'San Francisco',
    // },
  ];

  return (
    <div>
      <h2>Mano keletas darbų:</h2>
      <div className="carousel-section">
        <Carousel
          className="car"
          data={data}
          time={4000}
          width="100%"
          // height="500px"
          // captionStyle={captionStyle}
          // radius="10px"
          // slideNumber={true}
          // slideNumberStyle={slideNumberStyle}
          // captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          // thumbnails={true}
          // thumbnailWidth="100px"
          // style={{
          //   textAlign: 'center',
          //   maxWidth: '850px',
          //   maxHeight: '500px',
          //   margin: '40px auto',
          // }}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
