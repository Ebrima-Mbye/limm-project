"use client";

import { getText2 } from "@/data/bookADemo.js";
import { getLeftLinks, getRightLinks } from "@/data/headerLinks";
import { useDeviceSize } from "@/hooks/DeviceSizeContext";
import AnimatedButton from "@/components/AnimatedButton";
import { useLanguage } from "@/hooks/LanguageContext";
import { formLink } from "@/utils/myLinks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const logo = "/images/limm.logo.logo 1.png";

export default function HomeHeader() {
  const { isWideScreen } = useDeviceSize();
  const { language } = useLanguage();
  const menuOpenHeight = "75vh";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("60px");
  const [rightLinks, setRightLinks] = useState([]);
  const [leftLinks, setLeftLinks] = useState([]);
  const [buttonText, setButtonText] = useState("");
  const headerRef = useRef();

  useEffect(() => {
    setMaxHeight(isMenuOpen ? "100vh" : "60px");
    setRightLinks(getRightLinks[language]);
    setLeftLinks(getLeftLinks[language]);
  }, [isMenuOpen, language]); // Runs whenever isMenuOpen changes

  useEffect(() => {
    setButtonText(getText2[language]);
  }, []);

  function headerToTop() {
    if (headerRef.current) {
      headerRef.current.style.top = "0px";
    }
  }

  function headerToDown() {
    if (headerRef.current) {
      headerRef.current.style.top = "32px";
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (window.innerWidth > 800) {
        if (scrollPosition > 60) {
          headerToTop();
        } else {
          headerToDown();
        }
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        headerToTop();
      }
    });
  }

  // HANDLER FUNCTIONS
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setIsMenuOpen(false);
    });
  }

  return (
    <div
      style={{
        minHeight: isMenuOpen ? menuOpenHeight : isWideScreen ? "10vh" : "9vh",
        overflowY: "hidden",
        maxHeight: maxHeight,
        backgroundColor: isMenuOpen ? "white" : "rgba(255, 255, 255, 0.6)",
      }}
      ref={headerRef}
      id="header"
      className="fixed left-0 right-0 z-[10] flex h-[75vh] w-[100vw] flex-col overflow-x-hidden rounded-bl-lg rounded-br-lg text-xl font-medium leading-[28.8px] text-gray-500 shadow-sm transition-all duration-300 lg:left-[4%] lg:right-[4%] lg:top-8 lg:h-12 lg:w-[92%] lg:flex-row lg:items-center lg:justify-between lg:rounded-lg lg:px-6 lg:text-xl lg:shadow-none"
    >
      <div className="lg:min-h-auto mb-3 mt-0 flex max-h-[9vh] min-h-[9vh] w-full items-center justify-between px-[12%] md:mt-3 md:min-h-[6vh] lg:mb-0 lg:h-full lg:w-auto lg:justify-center lg:p-2">
        <div className="flex h-full items-center lg:h-auto">
          {/* Company logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={90}
              height={50}
              onClick={closeMenu}
              className="mt-0 w-full lg:mt-[-20px] lg:w-full"
            />
          </Link>
        </div>
        {/* Menu button */}
        <div className="visible flex h-full items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="relative flex h-5 w-5 flex-col justify-between overflow-y-hidden"
          >
            {isMenuOpen ? (
              // Diplay and "X" symbol if the menu is open
              <div className="h-full w-full translate-y-2">
                {/* <span className="absolute translate-y-[250%] block rotate-[45deg] transition-all bg-black w-full h-[5px]"></span>
                <span className="absolute translate-y-[250%] block rotate-[135deg] transition-all bg-black w-full h-[5px]"></span> */}
                <span className="absolute block h-[3px] w-full rotate-[45deg] bg-gray-500 transition-transform"></span>
                <span className="absolute block h-[3px] w-full rotate-[134deg] bg-gray-500 transition-transform"></span>
              </div>
            ) : (
              // Display three horizontail lines if the menu is not open
              <>
                <span className="block h-[3px] w-full bg-gray-500"></span>
                <span className="block h-[3px] w-full bg-gray-500"></span>
                <span className="block h-[3px] w-full bg-gray-500"></span>
              </>
            )}
          </button>
        </div>
      </div>
      <div
        style={{
          maxHeight: maxHeight,
        }}
        className="mt-0 h-full w-full flex-1 px-[10%] lg:w-auto lg:items-center lg:px-1 lg:text-[13px]"
      >
        <div className="flex h-full w-full flex-1 flex-col items-center justify-between py-8 lg:w-auto lg:flex-row lg:py-0">
          <ul className="flex w-full flex-col items-center gap-8 lg:w-auto lg:flex-row lg:gap-1 lg:text-[16px]">
            {leftLinks.map((link, index) => (
              <li
                key={index}
                className="block w-full px-3 text-start lg:mr-8 lg:inline"
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block w-full transition-all duration-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col gap-8 lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:text-[16px]">
            {rightLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={closeMenu}
                className="block w-full px-3 text-start transition-all duration-300 lg:inline lg:text-center"
              >
                {link.text}
              </Link>
            ))}

            <div className="mt-3 lg:mt-0">
              {/* <Link
                href={formLink}
                target="_blank"
                onClick={closeMenu}
                className="ml-4 w-full text-nowrap rounded-[50px] bg-slate-500 px-6 py-3 text-lg text-white transition-colors duration-150 hover:bg-gray-600 lg:block lg:w-auto lg:px-3 lg:py-1 lg:text-[12px]"
              >
                {buttonText}
              </Link> */}
              <AnimatedButton
                href={formLink}
                target="_blank"
                onClick={closeMenu}
                withGradient={false}
                className="ml-4 w-full p-0 text-nowrap rounded-[50px] bg-slate-500 px-6 py-3 text-lg text-white transition-colors duration-150 hover:bg-gray-600 lg:block lg:w-auto lg:px-3 lg:py-1 lg:text-[12px]"
              >
                {buttonText}
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
