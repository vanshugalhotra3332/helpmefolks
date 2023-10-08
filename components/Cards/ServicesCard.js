import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Sora } from "next/font/google";
import { BsArrowUpRight } from "react-icons/bs";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const ServicesCard = ({ icon, heading, url, description }) => {
  return (
    <div className="service-card relative left-0 top-0 p-4 w-[250px] xs:min-w-[330px] xs:max-w-[330px] mx-auto">
      <div
        className="service-card-inner rounded py-10 px-5 border border-[#171d26] z-10 relative text-center mt-6"
        style={{ height: "450px" }}
      >
        <div className="hover-lines"></div>
        <div className="icon text-[var(--secondary-color)] h-[70px] flex items-center justify-center mb-[30px] transition-all duration-200 ease-linear">
          <Image
            alt="..."
            src={icon}
            width={70}
            className="w-auto max-h-[70px] shadow-none transition-all duration-300 ease-linear"
            height={70}
            loading="lazy"
          />
        </div>
        <h3 className="text text-[var(--secondary-color)]">
          <Link className="third-button capitalize" href={url}>
            {heading}
          </Link>
        </h3>
        <div
          className={`${sora.className} my-6 desc text-[14px] leading-[1.71] text-[var(--third-color)]`}
        >
          {description}
        </div>
        <div className="cta">
          <Link className="redirect-btn" href={url}>
            <BsArrowUpRight className="w-6 redirect-icon h-6 font-medium transition-all duration-200 ease-linear" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
