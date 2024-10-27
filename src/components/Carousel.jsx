import React, { useState, useEffect } from "react";
import autumn1 from "../assets/Images/autumn-1.jpg";
import autumn2 from "../assets/Images/autumn-2.jpg";
import autumn3 from "../assets/Images/autumn-3.jpg";
import autumn4 from "../assets/Images/autumn-4.jpg";
import autumn5 from "../assets/Images/autumn-5.jpg";
import autumn6 from "../assets/Images/autumn-6.jpg";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Carousel = () => {
  const images = [autumn1, autumn2, autumn3, autumn4, autumn5, autumn6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-64 sm:h-80 md:h-96 lg:h-[600px] mt-4 overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          onClick={goToPrevious}
          className="text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        >
          <MdOutlineKeyboardArrowLeft size={25} />
        </button>

        <button
          onClick={goToNext}
          className="text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        >
          <MdOutlineKeyboardArrowRight size={25} />
        </button>
      </div>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover rounded-lg"
            style={{ flex: "0 0 100%" }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
