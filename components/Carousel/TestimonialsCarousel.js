"use client";

import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../Cards/TestimonialCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsCarousel = ({ testimonials }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 1,
    arrows: false, // Disable arrows
    dots: false, // Show dots
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    customPaging: function (i) {
      return <span className="carousel-dots"></span>;
    },
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsCarousel;
