"use client";

import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = ({ width, height, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="carousel-container" style={{ overflow: "hidden" }}>
      {images.map((item, index) => (
        <CarouselItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          length={images.length}
        >
          {item}
        </CarouselItem>
      ))}
    </div>
  );
};

export default Carousel;
