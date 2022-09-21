import { useEffect, useState } from 'react';
// import Image1 from '../../images/eyes-wide1.jpg';
import Image2 from '../../images/eyes-wide2.jpg';
import Image3 from '../../images/eyes-wide3.jpg';
import Image4 from '../../images/eyes-wide4.jpg';
import Image5 from '../../images/eyes-wide5.jpg';
import Image6 from '../../images/eyes-wide6.jpg';
// import Image7 from '../../images/eyes-wide7.jpg';
// import Image8 from '../../images/eyes-wide8.jpg';
// import Image9 from '../../images/eyes-wide9.jpg';
import imgSM1 from '../../images/DeiSHD.jpg';
import imgSM2 from '../../images/GerSHD.jpg';
import imgSM3 from '../../images/JustSHD.jpg';
import imgSM4 from '../../images/RameSHD.jpg';
import imgSM5 from '../../images/MileSHD.jpg';
import imgSM6 from '../../images/loreSHD.jpg';
import imgSM7 from '../../images/p1SHD.jpg';
import imgSM8 from '../../images/p2SHD.jpg';
import imgSM9 from '../../images/p3SHD.jpg';
import { Carousel } from 'react-carousel-minimal';

const CarouselComponent = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    windowSize.innerWidth < 750 ? setPhotoLib(data2) : setPhotoLib(data1);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize.innerWidth]);
  const data1 = [
    // {
    //   image: Image1,
    // },
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
    //   image: Image7,
    // },
    // {
    //   image: Image8,
    // },
    // {
    //   image: Image9,
    // },
  ];
  const data2 = [
    {
      image: imgSM1,
    },
    {
      image: imgSM2,
    },
    {
      image: imgSM3,
    },
    {
      image: imgSM4,
    },
    {
      image: imgSM5,
    },
    {
      image: imgSM6,
    },
    {
      image: imgSM7,
    },
    {
      image: imgSM8,
    },
    {
      image: imgSM9,
    },
  ];
  const [photoLib, setPhotoLib] = useState(data1);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div>
      <h2 className="clients">Keletas mano darbų:</h2>
      <div className="carousel-section">
        <Carousel
          data={photoLib}
          time={3000}
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
          slideBackgroundColor="white"
          slideImageFit="cover"
          // thumbnails={true}
          // thumbnailWidth="100px"
          // style={{
          //   textAlign: 'center',
          //   maxWidth: '850px',
          //   maxHeight: '500px',
          //   margin: '40px auto',
          // }}
          style={{}}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
