import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const ServicesCardWithImage = ({
  heading,
  description,
  buttonText,
  url,
  backImage,
  icon,
}) => {
  return (
    <div className="left-0 top-0 max-w-[740px] m-1 md:m-0">
      <div
        className={` p-[1px] bg-[var(--third-black)] rounded relative services-card-with-image`}
      >
        <div className="inner-box flex flex-col md:flex-row items-center rounded p-[30px] bg-[#0c0f14] relative overflow-hidden">
          <div className="image-left min-w-[200px] w-[270px] h-[270px] md:w-[200px] md:h-[200px] mr-0 md:mr-[30px] my-6 md:my-0 rounded-sm md:rounded-none relative overflow-hidden">
            <Image
              alt="..."
              src={backImage}
              layout="fill"
              loading="lazy"
              style={{ objectFit: "cover" }}
              className="w-full relative services-card-image transform-[scale(1.1)] transition-all duration-200 ease-linear h-auto rounded-none shadow-none max-w-full"
            />
            <div className="side-icon">
              <Image
                alt="..."
                src={icon}
                width={70}
                className="w-auto max-h-[70px]"
                height={70}
                loading="lazy"
              />
            </div>
          </div>
          <div className="text">
            <h3 className="text-[24px] title transition-all duration-200 ease-linear mb-[20px] font-semibold tracking-wide leading-snug text-[var(--secondary-color)] capitalize">
              <span>{heading}</span>
            </h3>
            <p className="description text-[var(--third-color)] text-[17px] leading-snug">
              {description}
            </p>
            <div className="my-2">
              <Link
                className="secondary-button read-more-btn relative px-[24px] md:px-[30px] leading-[70px] py-1"
                href={url}
              >
                {buttonText}
                <BsArrowUpRight className="w-4 h-4 mx-2 icon transition-all duration-200 ease-linear" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardWithImage;
