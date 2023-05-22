import React, { useState } from 'react';
import image1 from '../images/room-1.jpeg';
import image2 from '../images/room-2.jpeg';
import image3 from '../images/room-3.jpeg';
import image4 from '../images/room-4.jpeg';
import image5 from '../images/room-5.jpeg';
import image6 from '../images/room-6.jpeg';
import image7 from '../images/room-7.jpeg';
import image8 from '../images/room-8.jpeg';
import image9 from '../images/room-9.jpeg';
import image10 from '../images/room-10.jpeg';
import image11 from '../images/room-11.jpeg';
const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5,image6, image7, image8, image9, image10, image11];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="Slide" />
      <div className=" -left" onClick={handlePrev}>
        &lt;
      </div>
      <div className=" -right" onClick={handleNext}>
        &gt;
      </div>
    </div>
  );
};

export default Slideshow;
