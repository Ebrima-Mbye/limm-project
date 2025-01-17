"use client";

import Image from "next/image";
import Link from "next/link";
import arrow from "../photos/restaurants/arrow.png";
import { useEffect, useState } from "react";
import AnimatedContainer from "./AnimatedContainer";

export default function BusinessCard(props) {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isTopLeft, setIsTopLeft] = useState(false);
  const [isBottomRight, setIsBottomRight] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the screen width is greater than 800px
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
    }
  }, [props.subImagePosition]);

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
    <AnimatedContainer>
      <div
        style={{
          display: "flex",
          flexDirection: getFlexDirection(props.index),
        }}
        //   grid gap-8 grid-cols-1 lg:grid-cols-2
        className="mt-16 gap-3 md:gap-8"
      >
        <div className="flex flex-1 justify-center p-4">
          <div className="relative">
            <Image src={props.mainImage} alt="man calculating" className="" />
            {props.withSecondImage ? (
              <div
                style={{
                  position: "absolute",
                  top: isTopLeft ? "-35%" : "auto",
                  left: isTopLeft ? "-20%" : "auto",
                  right: isBottomRight ? "-25%" : "auto",
                  bottom: isBottomRight ? "-15%" : "auto",
                  width: isBottomRight ? "350px" : "auto",
                }}
                //   className="hidden md:block absolute top-[-35%] left-[-20%] md:top-[-100px] md:left-[-120px]"
                className="hidden flex-col md:flex"
              >
                {props.subImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="image of phone"
                    width={300}
                    height={300}
                    style={{
                      width: isBottomRight ? "100%" : "auto",
                      maxWidth: isBottomRight ? "300px" : "auto",
                    }}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-center px-1 md:pl-14 lg:px-2">
          <h3 className="mb-2 text-3xl font-semibold">{props.heading}</h3>
          <p className="leading-[38px]mt-4 mb-5">{props.text}</p>
          <Link href={props.href} className="flex items-center gap-2">
            <span className="text-[15px] text-[#356BB7]">
              Find the plan that best fits your restaurant
            </span>
            <Image
              src={arrow}
              alt="Arrow Image"
              className="max-h-[11px] max-w-[33px]"
            />{" "}
          </Link>
        </div>
      </div>
    </AnimatedContainer>
  );
}
