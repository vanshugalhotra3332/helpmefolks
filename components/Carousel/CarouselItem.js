"use client";

import React from "react";

const CarouselItem = ({ children, index, activeIndex, length }) => {
  const offset = index - activeIndex;
  const shouldSlideBack = offset === length - 1;

  const transform = shouldSlideBack
    ? `translateX(calc(${offset * 100}% - ${100 * length}%))`
    : `translateX(${offset * 100}%)`;
  const opacity = offset === 0 ? 1 : 0;

  return (
    <div
      className="carousel-item"
      style={{
        transform,
        opacity,
        zIndex: offset === 0 ? 2 : 1,
        transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
