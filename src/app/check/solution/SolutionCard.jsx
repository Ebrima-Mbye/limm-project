"use client";

import Image from "next/image";
import Link from "next/link";
import { getText } from "@/data/bookADemo.js";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { useDeviceSize } from "@/components/DeviceSizeContext";

export default function HomeSolutionCard({
  bg,
  color,
  btnColor,
  btnTextColor,
  title,
  identifier,
  text,
}) {
  const { isSmallScreen, isMiddleScreen, isWideScreen } = useDeviceSize();
  const [showText, setShowText] = useState(false);
  const { language } = useLanguage();
  const buttonText = getText[language];

  const arrowMap = {
    restaurant: "/images/restaurant_arrow.svg",
    retail: "/images/retail_arrow.svg",
    services: "/images/service_arrow.svg",
  };

  const styles = {
    container: {
      backgroundColor: bg,
      color: color,
      minHeight: isWideScreen ? "450px" : isMiddleScreen ? "350px" : "400px",
      maxHeight: isWideScreen ? "450px" : isMiddleScreen ? "350px" : "400px",
    },
    hoverOverlay: {
      zIndex: "10",
      backgroundColor: "inherit",
      height: showText && isWideScreen ? "25%" : showText ? "20%" : "90%",
      transition: "height 0.4s linear, padding 0.4s linear",
      padding: `${showText ? "0" : "5rem"} 0`,
      display: "flex",
      flexDirection: "column",
      top: "2rem",
      left: "1.5rem",
      right: "1.5rem",
      bottom: "2rem",
      justifyContent: showText ? "space-between" : "center",
    },
    arrow: {
      transition: "all 0.5s linear",
      width: showText ? "35px" : "100px",
    },
    title: {
      fontSize: showText ? "1.5rem" : "2.5rem",
      transition: "font-size 0.5s linear",
    },
    textSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "absolute",
      bottom: "1.5rem",
      right: "1.5rem",
      left: "1.5rem",
    },
    button: {
      backgroundColor: btnColor,
      color: btnTextColor,
    },
  };

  useEffect(() => {
    if (isSmallScreen || isMiddleScreen) {
      setShowText(true);
    } else if (isWideScreen) {
      setShowText(false);
    }
  }, [isSmallScreen, isMiddleScreen, isWideScreen]);

  const handleMouseEnter = () => {
    if (isWideScreen) setShowText(true);
  };

  const handleMouseLeave = () => {
    if (isWideScreen) setShowText(false);
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-between rounded-[20px]"
    >
      <div className="absolute z-10" style={styles.hoverOverlay}>
        <div className="mb-4 flex flex-col items-start md:mb-8 lg:flex-row lg:items-center">
          <Image
            src={arrowMap[identifier.toLowerCase()]}
            alt={title}
            width={35}
            height={30}
            style={styles.arrow}
          />
        </div>
        <div className="text-[26px] font-medium" style={styles.title}>
          {title}
        </div>
      </div>
      <div
        className="mt-16 flex flex-col text-[16px]"
        style={styles.textSection}
      >
        <p className="mb-12 text-sm leading-relaxed">{text}</p>
        <Link
          href="/"
          className="self-start rounded-[20px] px-4 py-2 leading-[28.5px]"
          style={styles.button}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
