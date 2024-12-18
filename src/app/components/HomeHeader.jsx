"use client";

import Image from "next/image";
import logo from "../photos/limm.logo.logo 1.png";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const handleMenuButtonClick = (e) => {
    setIsMenuOpen(!isMenuOpen);

    console.log("Button clicked!");
  };
  window.addEventListener("resize", () => {
    setIsMenuOpen(false);
  });
  return (
    <div
      style={{
        height: isMenuOpen ? menuTranslateY : "9vh",
        overflowY: "hidden",
      }}
      id=" header"
      className="z-[100] h-[75vh] lg:h-12 lg:w-[92%] w-[100vw] left-0 right-0 text-4xl lg:text-xl flex flex-col lg:flex-row lg:justify-between
       lg:items-center text-gray-400 lg:text-gray-500 leading-[28.8px] font-medium lg:px-6 fixed bg-white rounded-lg
       lg:top-8 lg:left-[4%] lg:right-[4%] border-gray-400 shadow-sm lg:shadow-none transition-[height] duration-300"
    >
      <div className="px-[12%] w-full mt-3 max-h-[9vh] lg:w-auto lg:p-2 flex justify-between lg:justify-center items-center lg:pt-0 mb-3 lg:mb-0 lg:h-full">
        <div className="h-full lg:h-auto">
          {/* Company logo */}
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-full lg:mt-[-20px] lg:w-4/5" />
          </Link>
        </div>
        {/* Menu button */}
        <div className="h-8 w-8 visible lg:hidden ">
          <button
            onClick={handleMenuButtonClick}
            className="relative overflow-y-hidden flex justify-between flex-col w-full h-full"
          >
            {isMenuOpen ? (
              // Diplay and "X" symbol if the menu is open
              <div className="w-full h-full translate-y-3">
                {/* <span className="absolute translate-y-[250%] block rotate-[45deg] transition-all bg-black w-full h-[5px]"></span>
                <span className="absolute translate-y-[250%] block rotate-[135deg] transition-all bg-black w-full h-[5px]"></span> */}
                <span className="absolute block rotate-[45deg] transition-transform bg-black w-full h-[5px]"></span>
                <span className="absolute block rotate-[135deg] transition-transform bg-black w-full h-[5px]"></span>
              </div>
            ) : (
              // Display three horizontail lines if the menu is not open
              <>
                <span className="block w-full bg-black h-[5px]"></span>
                <span className="block w-full bg-black h-[5px]"></span>
                <span className="block w-full bg-black h-[5px]"></span>
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
                <Link href={link.href} className="block w-full">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row lg:text-[16px] w-full lg:w-auto gap-8">
            {rightLinks.map((link, index) => (
              <Link
                key={index}
                className="block w-full lg:text-center text-start px-3 lg:inline"
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
            <div className="mt-3 lg:mt-0">
              <button className="ml-4 text-[20px] lg:text-[12px] bg-slate-500 text-white px-6 py-3 lg:px-3 lg:py-1 text-nowrap rounded-[50px]">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
