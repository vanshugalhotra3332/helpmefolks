import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Sora } from "next/font/google";

const sora_font = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
});

import { BsArrowUpRight } from "react-icons/bs";

const PortfolioItem = ({ category, url, image, title }) => {
  return (
    <div
      className={`w-full ${sora_font.className} m-4`} // Set the width to 66.66%
      style={{ position: "relative" }}
    >
      <div className="portfolio-item relative overflow-hidden mb-6 max-h-[411px]">
        <div
          className="image relative"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            alt="..."
            src={image}
            layout="responsive"
            loading="lazy"
            width={855}
            height={411}
            style={{
              objectFit: "cover",
            }}
            className="w-full h-full object-cover scale-105 transition-all duration-300 ease-linear"
          />
        </div>
        <a
          className="portfolio-link flex items-center justify-center bg-[var(--secondary-color)] w-[70px] h-[70px] text-[#000] text-[30px] rounded-full absolute z-20 top-[70%] left-[20%] transform-[translate(-50%, -50%) scale(0.3)] transition-all duration-200 ease-linear opacity-0"
          href={url}
          target="_blank"
        >
          <BsArrowUpRight className="w-6 h-6 font-medium icon transition-all duration-200 ease-linear" />
        </a>
        <div className="item-category px-[15px] pt-[6px] pb-[5px] rounded-[35px] bg-[var(--secondary-color)] absolute bottom-[30px] left-[30px] z-20 transition-all duration-300 ease-linear">
          <a
            className="inline-block text-[#000] font-medium tracking-wider capitalize"
            href={url}
            target="_blank"
          >
            {category}
          </a>
        </div>
      </div>
      <div className="item-meta mb-3">
        <h3 className="title text-[24px] mb-2 capitalize text-[var(--secondary-color)] font-medium tracking-wider leading-snug hover:text-[var(--primary-color)] transition-all duration-200 ease-linear">
          <a className="" href={url} target="_blank">
            {title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default PortfolioItem;
