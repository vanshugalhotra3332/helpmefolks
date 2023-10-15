"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// links import
import { links } from "@/data";

import { FcMenu } from "react-icons/fc";
import { BiCaretDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavItem = ({ name, url }) => {
  return (
    <li className="nav-item">
      <Link href={url} className="bottom-line">
        {name}
      </Link>
    </li>
  );
};

const NavItemDropDown = ({
  handleMouseEnter,
  handleMouseLeave,
  handleDropDownFocus,
  handleDropDownBlur,
  toggleDropDown,
  showDropDown,
  name,
  links,
  url,
}) => {
  const router = useRouter();

  return (
    <li
      className="nav-item relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="bottom-line flex items-center justify-center cursor-pointer focus:outline-none"
        onClick={(event) => {
          toggleDropDown();
          router.push(url);
        }}
      >
        {name}
        <BiCaretDown className="w-4 h-4 ml-2" />
      </button>
      {showDropDown && (
        <div
          className=""
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleDropDownFocus}
          onBlur={handleDropDownBlur}
        >
          <ul
            className={`absolute py-2 bg-[var(--secondary-color)] bg-opacity-80 rounded-md shadow-lg cursor-pointer z-[100] mt-4`}
          >
            {links.map(({ name, url }, index) => {
              return (
                <li key={index}>
                  <Link href={url} className="dropdown-link">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

const Navbar = () => {
  // states
  const [isOpen, setIsOpen] = useState(false);

  // local functions
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        id="navbar"
        className="flex items-center justify-around border-b-[var(--color-grey-1)] z-[1000] py-6 bg-[#0C0F14] sticky top-0"
      >
        <button
          className="menu-bar md:hidden text-2xl mx-6 z-[99999]"
          onClick={toggleMenu}
        >
          <FcMenu className="w-6 h-6 text-white" />
        </button>
        <Link className="nav-logo z-[1000]" href={"/"}>
          <Image
            alt="helpmefolks"
            src={"/assets/images/logo/logo11.svg"}
            width={220}
            height={220}
            loading="lazy"
          />
        </Link>

        <div className="nav-items-container">
          <ul className="nav-items md:flex hidden items-center justify-center">
            {links.map(({ name, url, dropdown }) => {
              if (dropdown) {
                return (
                  <NavItemDropDown
                    key={name}
                    name={name}
                    url={url}
                    links={dropdown.links}
                    handleMouseEnter={dropdown.handleMouseEnter}
                    handleMouseLeave={dropdown.handleMouseLeave}
                    handleDropDownBlur={dropdown.handleDropDownBlur}
                    handleDropDownFocus={dropdown.handleDropDownFocus}
                    toggleDropDown={dropdown.toggleDropDown}
                    showDropDown={dropdown.showDropDown}
                  />
                );
              } else {
                return <NavItem name={name} url={url} key={name} />;
              }
            })}
          </ul>
        </div>
        <div className="nav-icons"></div>
      </nav>
      {/* mobile view */}
      <div
        className={`md:hidden sticky top-0 mobile-view bg-[var(--main-black)] inset-x-0 top-0 z-20 w-full px-6 py-6 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center transition-all duration-500 ease-in-out z-[10000]`}
      >
        <div className="flex flex-col md:flex-row md:mx-6">
          {links.map(({ name, url, dropdown }) => {
            if (dropdown) {
              return (
                <div key={name}>
                  <Link
                    className="mobile-link flex items-center cursor-pointer focus:outline-none"
                    href={url}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {name}
                    <BiCaretDown
                      className="w-4 h-4 ml-2"
                      onClick={(event) => {
                        dropdown.toggleDropDown();
                        event.stopPropagation();
                        event.preventDefault();
                      }}
                    />
                  </Link>
                  <ul
                    className={`flex flex-col ${
                      dropdown.showDropDown ? "max-h-full mt-0" : "max-h-0 mt-2"
                    } overflow-y-auto transition-max-height duration-100 ease-in-out`}
                  >
                    {dropdown.links.map(({ name, url }) => {
                      return (
                        <Link
                          className="mobile-link px-6"
                          href={url}
                          key={name}
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          {name}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            } else {
              return (
                <Link
                  className="mobile-link"
                  href={url}
                  key={name}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {name}
                </Link>
              );
            }
          })}
        </div>
        <button
          className="close-icon absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <AiOutlineClose className="w-6 h-6 text-white font-bold" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
