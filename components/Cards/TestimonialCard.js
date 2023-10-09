import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { HiStar } from "react-icons/hi";

const TestimonialCard = ({ name, city, desc, image, stars=4, flag="/assets/images/background/testimonial/canada.png" }) => {
  const unfilledStars = 5 - stars;

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <div
      className={`${
        inView ? "animated flipInY" : ""
      } testimonial-item parent-hover-div flex-shrink-0 w-full h-full relative px-4 my-4`}
      ref={ref}
    >
      <div className="mt-6 mb-5 p-6 rounded-md border border-[var(--third-black)] relative z-10">
        <div className="quoters absolute w-auto h-[60px] flex items-center justify-center text-[var(--primary-color)] -top-6 right-8 max-h-[60px]">
          <Image
            alt=""
            src={"/assets/images/misc/quoter.png"}
            width={49}
            height={60}
            loading="lazy"
            className="h-auto max-w-full border-none rounded-none shadow-none"
          />
        </div>
        <span className="testimonial-stars mb-4 inline-flex text-[var(--primary-color)]">
          {[...Array(stars)].map((_, index) => (
            <HiStar key={index} className="w-5 h-5" />
          ))}
          {[...Array(unfilledStars)].map((_, index) => (
            <HiStar key={index} className="w-5 h-5 text-[var(--third-black)]" />
          ))}
        </span>
        <div className="testimonial-desc min-h-[144px] mb-6 pb-9 text-[var(--secondary-color)] text-[18px] border-b border-[var(--third-black)]">
          {desc}
        </div>
        <div className="testimonial-client relative pr-16 flex flex-wrap items-center">
          <div className="client-image max-w-[50px] min-w-[50px] max-h-[50px] mr-[10px] rounded-full overflow-hidden transition-all duration-300 ease-linear">
            <Image
              alt=""
              src={image}
              width={78}
              loading="lazy"
              height={78}
              className="w-full h-auto border-none shadow-none rounded-none"
            />
          </div>
          <div className="client-meta">
            <h4 className="text-[24px] mb-0 font-bold text-[var(--secondary-color)] tracking-wide leading-[1.2]">
              {name}
            </h4>
            <h6 className="location text-[14px] font-semibold tracking-wider text-[var(--third-color)]">
              {city}
            </h6>
          </div>
          <div className="flag absolute right-0 top-0">
            <div className="w-[50px] h-[50px] leading-[50px] text-center inline-block bg-[var(--third-black)] rounded-full overflow-hidden">
              <Image
                alt=""
                src={flag}
                width={60}
                height={60}
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
