import React from "react";

import { Lato } from "next/font/google";

const lato_font = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

const StatCard = ({ counter, text }) => {
  return (
    <div className={`stat-card w-full relative flex `}>
      <div className="justify-center p-[15px] flex relative w-full flex-wrap items-start">
        <div className="stat-item w-auto max-w-full">
          <div className="transition-all duration-300 ease-linear fadeInRight">
            <div
              className={`counter-number inline-flex mb-2 relative transition-all duration-300 ease-linear shadow-none text-[100px] font-bold pr-[30px] ${lato_font.className}`}
            >
              <span className="transition-all duration-200 ease-linear z-10 leading-[1]">
                {counter}
              </span>
            </div>
            <div className="item-title font-medium text-[var(--third-color)] transition-all duration-300 ease-linear relative pl-5 capitalize text-[20px] tracking-widest text-left">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
