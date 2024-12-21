"use client";

import Image from "next/image";
import Link from "next/link";
import arrow from "../photos/restaurants/arrow.png";
import { useEffect, useState } from "react";

export default function BusinessCard(props) {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isTopLeft, setIsTopLeft] = useState(false);
  const [isBottomRight, setIsBottomRight] = useState(false);

  useEffect(() => {
    //Check if the screen width is greater than 800px
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 800);
    };

    // Run the check on component mount
    handleResize();

    // Add an event listener to handle window resize
    window.addEventListener("resize", handleResize);

    setIsTopLeft(props.subImagePosition === "top-left");
    setIsBottomRight(props.subImagePosition === "bottom-right");

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getFlexDirection(index) {
    if (index % 2 !== 0 && isWideScreen) {
      return "row-reverse";
    } else if (!isWideScreen) {
      return "column";
    } else {
      return "row";
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: getFlexDirection(props.index),
      }}
      //   grid gap-8 grid-cols-1 lg:grid-cols-2
      className="gap-8 mt-24 border-red-500 border"
    >
      <div className="border-yellow-500 border flex-1 flex justify-center p-4">
        <div className="border-red-500 border relative">
          <Image src={props.mainImage} alt="man calculating" className="" />
          {props.withSecondImage ? (
            <div
              style={{
                position: "absolute",
                top: isTopLeft ? "-35%" : "auto",
                left: isTopLeft ? "-20%" : "auto",
                right: isBottomRight ? "-35%" : "auto",
                bottom: isBottomRight ? "-20%" : "auto",
              }}
              //   className="hidden md:block absolute top-[-35%] left-[-20%] md:top-[-100px] md:left-[-120px]"
              className="hidden md:block"
            >
              {props.subImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="image of phone"
                  className="w-full"
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="border-red-500 border flex-1 flex flex-col px-1 md:pl-14 lg:px-2 justify-center items-start">
        <h3 className="font-semibold text-2xl">{props.heading}</h3>
        <p className="leading-[38px] text-[18px] mt-4 mb-5">{props.text}</p>
        <Link href={props.href} className="flex gap-2 items-center">
          <span className="text-[#356BB7] text-[14px] md:text-[16px]">
            Find the plan that best fits your restaurant
          </span>
          <Image
            src={arrow}
            alt="Arrow Image"
            className="max-w-[33px] max-h-[11px]"
          />{" "}
        </Link>
      </div>
    </div>
  );
}
