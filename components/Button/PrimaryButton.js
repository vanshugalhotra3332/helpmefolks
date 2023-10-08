"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { BsArrowUpRight } from "react-icons/bs";

const PrimaryButton = ({ text, url, size = "large", icon }) => {
  const router = useRouter();
  return (
    <button
      className={`primary-button relative ${
        size == "large"
          ? "leading-[56px] font-semibold text-[18px]  px-[24px] md:px-[30px]"
          : "leading-[50px] font-semibold text-[15px] px-[25px]"
      } py-1`}
      onClick={() => {
        url && router.push(url);
      }}
    >
      {text}
      {!icon && <BsArrowUpRight className="w-4 h-4 mx-2" />}
      {icon}
    </button>
  );
};

export default PrimaryButton;
