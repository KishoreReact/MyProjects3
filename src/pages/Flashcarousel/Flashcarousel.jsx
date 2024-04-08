import React,{ useState, useEffect  } from 'react';
import { Carousel } from 'react-bootstrap'; 
import image1 from '../../components/images/carousel/elctrons.png';
import image2 from '../../components/images/carousel/fashnh.png';
import image3 from '../../components/images/carousel/sport.png';
import "./Flascarousel.css";



const FlashSaleCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    require('../../components/images/carousel/elctrons.png'),
    require('../../components/images/carousel/fashnh.png'),
    require('../../components/images/carousel/sport.png')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="center">
      <div className="card">
        <div className="carousel">
          <div className="image-container" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
          <button className="prev" onClick={handlePrev}>&#10094;</button>
          <button className="next" onClick={handleNext}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCarousel;
