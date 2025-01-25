"use client";

import Image from "next/image";
import Link from "next/link";
import { getText } from "@/data/bookADemo.js";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { useDeviceSize } from "@/components/DeviceSizeContext";

export default function HomeSolutionCard(props) {
  const paddingY = "2rem";
  const paddingX = "1.5rem";
  const [showText, setShowText] = useState(false);
  const { isWideScreen } = useDeviceSize();
  const { language } = useLanguage();
  const buttonText = getText[language];

  const { bg, color, btnColor, btnTextColor, title, identifier, text } = props;
  function getArrow() {
    if (identifier.toLowerCase() === "restaurant") {
      return "/images/restaurant_arrow.svg";
    } else if (identifier.toLowerCase() === "retail") {
      return "/images/retail_arrow.svg";
    } else if (identifier.toLowerCase() === "services") {
      return "/images/service_arrow.svg";
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: bg,
          color: color,
          minHeight: isWideScreen ? "500px" : "400px",
          maxHeight: isWideScreen ? "500px" : "400px",
        }}
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
        className="relative flex flex-col justify-between rounded-[20px] lg:mb-0"
      >
        <div
          className="absolute z-10"
          style={{
            height: showText ? "15%" : "90%",
            transition: "height 0.4s linear, padding 0.4s linear",
            padding: `${showText ? "0" : "5rem"} 0`,
            top: paddingY,
            left: paddingX,
            right: paddingX,
            bottom: paddingY,
            backgroundColor: bg,
            display: "flex",
            flexDirection: "column",
            justifyContent: showText ? "space-between" : "center",
          }}
        >
          <div className="mb-4 flex flex-col items-start justify-between self-start lg:mb-10 lg:flex-row lg:items-center lg:justify-start">
            <Image
              src={getArrow(title)}
              alt={title}
              width={35}
              height={30}
              className=""
              style={{
                transition: "width 0.5s linear",
                width: showText ? "30px" : "100px", // Shink the image when the card is hovered
              }}
            />
          </div>
          <div
            className="text-[26px] font-medium lg:mb-0 lg:h-8"
            style={{
              fontSize: (() => {
                return showText ? "1.5rem" : "2.5rem";
              })(),
              transition: "font-size 0.5s linear",
            }}
          >
            {title}
          </div>
        </div>
        <div
          className="mt-16 flex flex-col justify-between text-[16px]"
          style={{
            position: "absolute",
            bottom: paddingY,
            right: paddingX,
            left: paddingX,
          }}
        >
          <p className="mb-12 text-sm leading-relaxed">{text}</p>
          <div>
            <Link
              href="/"
              className="rounded-[20px] px-4 py-3 leading-[28.5px]"
              style={{
                backgroundColor: btnColor,
                color: btnTextColor,
              }}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
