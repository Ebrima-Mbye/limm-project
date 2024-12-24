"use client";

import Image from "next/image";
import logo from "../photos/limm.logo.logo 1.png";
import Link from "next/link";
import { useState } from "react";

export default function HomeHeader() {
  const menuTranslateY = "75vh";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const leftNavLinks = [
    {
      text: "Retail",
      href: "/retail",
    },
    {
      text: "Restaurants",
      href: "/restaurants",
    },
    {
      text: "Services",
      href: "/services",
    },
  ];
  const rightLinks = [
    {
      text: "Pricing",
      href: "/pricing",
    },
    {
      text: "Login",
      href: "/login",
    },
  ];

  // HANDLER FUNCTIONS
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if(typeof window !== 'undefined') {
    window.addEventListener("resize", () => {
      setIsMenuOpen(false);
    });
  }

  return (
    <div
      style={{
        height: isMenuOpen ? menuTranslateY : "9vh",
        overflowY: "hidden",
      }}
      id=" header"
      className="z-[100] h-[75vh] lg:h-12 lg:w-[92%] w-[100vw] left-0 right-0 text-4xl lg:text-xl flex flex-col lg:flex-row lg:justify-between
       lg:items-center leading-[28.8px] text-gray-500 font-medium lg:px-6 fixed bg-inherit rounded-lg
       lg:top-8 lg:left-[4%] lg:right-[4%] border-gray-400 shadow-sm lg:shadow-none transition-[height] duration-300"
    >
      <div className="px-[12%] w-full mt-3 max-h-[9vh] lg:w-auto lg:p-2 flex justify-between lg:justify-center items-center lg:pt-0 mb-3 lg:mb-0 lg:h-full">
        <div className="h-full lg:h-auto">
          {/* Company logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="w-full lg:mt-[-20px] lg:w-full"
            />
          </Link>
        </div>
        {/* Menu button */}
        <div className="h-5 w-5 visible lg:hidden ">
          <button
            onClick={toggleMenu}
            className="relative overflow-y-hidden flex justify-between flex-col w-full h-full"
          >
            {isMenuOpen ? (
              // Diplay and "X" symbol if the menu is open
              <div className="w-full h-full translate-y-2">
                {/* <span className="absolute translate-y-[250%] block rotate-[45deg] transition-all bg-black w-full h-[5px]"></span>
                <span className="absolute translate-y-[250%] block rotate-[135deg] transition-all bg-black w-full h-[5px]"></span> */}
                <span className="absolute block rotate-[45deg] transition-transform bg-gray-500 w-full h-[3px]"></span>
                <span className="absolute block rotate-[134deg] transition-transform bg-gray-500 w-full h-[3px]"></span>
              </div>
            ) : (
              // Display three horizontail lines if the menu is not open
              <>
                <span className="block w-full bg-gray-500 h-[3px]"></span>
                <span className="block w-full bg-gray-500 h-[3px]"></span>
                <span className="block w-full bg-gray-500 h-[3px]"></span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="h-full px-[10%] mt-0 lg:px-1 flex-1 lg:text-[13px] w-full lg:w-auto lg:items-center">
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0 h-full w-full lg:w-auto">
          <ul className="flex items-center flex-col lg:flex-row w-full lg:w-auto gap-8 lg:gap-1 lg:text-[16px]">
            {leftNavLinks.map((link, index) => (
              <li
                key={index}
                className="lg:mr-8 block w-full
                           lg:inline text-start px-3"
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block w-full"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row lg:text-[16px] w-full lg:w-auto gap-8">
            {rightLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={closeMenu}
                className="block w-full lg:text-center text-start px-3 lg:inline"
              >
                {link.text}
              </Link>
            ))}

            <div className="mt-3 lg:mt-0">
              <button
                onClick={closeMenu}
                className="ml-4 text-[20px] lg:text-[12px] bg-slate-500 hover:bg-gray-600 transition-colors duration-150 text-white px-6 py-3 lg:px-3 lg:py-1 text-nowrap rounded-[50px]"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
