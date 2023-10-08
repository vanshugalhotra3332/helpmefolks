import React from "react";
import Image from "next/image";
import Link from "next/link";
import { email, whatsappLink, whatsappNumber } from "@/data";

import { Sora } from "next/font/google";
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className={`${sora.className} my-11 py-6 footer bg-transparent bg-[url('/assets/images/background/footer-bg.png')] flex justify-center text-[var(--secondary-color)] gap-5`}
    >
      <div className="px-4 xs:px-16 py-3 xl:px-28 xl:py-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <div className="grid-item  mx-4">
          <div className="image py-4">
            <Image
              alt="helpmefolks"
              src={"/assets/images/logo/logo11.svg"}
              width={200}
              height={200}
              className=""
            />
          </div>
          <div className="desc mb-8 leading-8 font-normal tracking-wide">
            Elevating Academics – Your Assignments, Our Expertise. Unleash
            Success with helpmefolks.
          </div>
          <div className="social-links space-x-5 hidden">
            <Link
              href={"https://www.instagram.com/"}
              className="social-link"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/"}
              className="social-link"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"https://twitter.com/"}
              className="social-link"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="title uppercase text-[var(--secondary-white)] text-xl leading-8 tracking-wide mb-2 font-semibold py-8 px-4
          "
          >
            explore
          </div>
          <div className="explore-items flex">
            <div className="row-1 flex flex-col mr-8">
              <Link href={"/"} className="explore-item">
                Home
              </Link>
              <Link href={"/portfolio"} className="explore-item">
                Portfolio
              </Link>
              <Link href={"/services"} className="explore-item">
                Services
              </Link>

              <Link href={"/contact"} className="explore-item">
                Contact
              </Link>
            </div>
            <div className="row-2 flex flex-col ml-2">
              <Link href={"/services"} className="explore-item">
                Theory Assignments
              </Link>
              <Link href={"/services"} className="explore-item">
                Technical Assignments
              </Link>
              <Link href={"/services"} className="explore-item">
                Graphic Designing
              </Link>
              <Link href={"/services"} className="explore-item">
                Web Development
              </Link>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="title uppercase text-[var(--secondary-white)] text-xl leading-8 tracking-wide mb-2 font-semibold py-8 px-4
          "
          >
            contact
          </div>
          <div className="explore-items flex flex-col">
            <div
              className="flex items-center space-x-4"
            >
              <MdEmail className="text-[var(--primary-color)]" />{" "}
              <span className="explore-item !normal-case">{email}</span>
            </div>
            <Link
              href={whatsappLink}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <MdPhone className="text-[var(--primary-color)]" />{" "}
              <span className="explore-item !normal-case">
                {whatsappNumber}
              </span>
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div
            className="title uppercase text-[var(--secondary-white)] text-xl leading-8 tracking-wide mb-2 font-semibold py-8 px-4
          "
          >
            newsletter
          </div>
          <div className="form mb-8">
            <div className="newsletter-form relative outline-none border-none">
              <input
                type="text"
                className="outline-none border-none relative w-full leading-8 py-5 pl-6 pr-16 h-[70px] block bg-transparent rounded text-[var(--secondary-white)] border border-[var(--color-black-1)] transition-all duration-300 ease-in-out text-sm"
                placeholder="Email Address"
              />
              <div className="icon flex justify-center items-center absolute right-[12px] top-[12px] w-[44px] h-[44px] bg-[var(--primary-color)] text-[var(--main-black)] rounded-full cursor-pointer transition-all duration-200 ease-linear hover:bg-[var(--secondary-white)] hover:text-[var(--primary-color)]">
                <MdEmail className="text-lg" />
              </div>
            </div>
          </div>
          <div className="desc leading-8 text-base">
            Sign up for our latest news & articles. We won’t give you spam
            mails.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
