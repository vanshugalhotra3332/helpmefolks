"use client";

import React, { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";

const ScrollToTop = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Check if we're on the client-side (window object exists)
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        // Check the scroll position and set isScrolling accordingly
        if (window.scrollY > 100) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      };

      // Add a scroll event listener to the window
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToTop = () => {
    // Scroll to the top when the button is clicked
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`scroll-to-top ${
        isScrolling ? "scroll-to-top-visible" : ""
      } cursor-pointer`}
      onClick={scrollToTop}
    >
      <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex items-center justify-center">
        <BsArrowUpShort className="w-6 h-6 text-black font-semibold" />
      </div>
    </div>
  );
};

export default ScrollToTop;
