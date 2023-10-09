"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ContactItem = ({ number, content, icon, url }) => {
  const router = useRouter();
  return (
    <div
      className="contact-item w-full cursor-pointer"
      target="_blank"
      onClick={() => {
        url && router.push(url);
      }}
    >
      <div className="p-4 flex relative w-full flex-wrap items-start">
        <div className="relative  min-w-[310px]">
          <div className="inner-item">
            <span className="top-number">{number}</span>
            <span className="item-icon">
              <div className="icon relative z-10 transition-all duration-200 ease-linear text-[var(--primary-color)] h-[50px]">
                {icon}
              </div>
            </span>
            <span className="item-content tracking-widest">
              <h3 className="mb-0 text-[22px] text-[var(--secondary-color)] font-semibold">
                {content}
              </h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
