import React, { useState, useEffect } from 'react';
import { Images } from '../assets';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === Images.length - 1 ? 0 : prevImage + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? Images.length - 1 : prevImage - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <div className="flex overflow-hidden">
        {Images.map((image, index) => (
          <div
            key={image.id}
            className={`w-full h-[27rem] md:h-[20rem] lg:h-[31rem]  ${index === currentImage ? 'block' : 'hidden'} `}
          >
            <img
              src={image.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 lg:left-[-5%] top-1/2 transform -translate-y-8 duration-100 text-3xl hover:text-gray-500  lg:text-gray-700 p-2 rounded-full"><IoIosArrowBack/></button>
      <button onClick={nextSlide} className="text-3xl absolute lg:text-gray-700 hover:text-gray-500 right-0 lg:right-[-5%] top-1/2 transform -translate-y-8"><IoIosArrowForward/></button>
      <div className="flex justify-center mt-4">
        {Images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 mx-1 rounded-full bg-gray-300 cursor-pointer ${index === currentImage ? 'bg-red-500' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
