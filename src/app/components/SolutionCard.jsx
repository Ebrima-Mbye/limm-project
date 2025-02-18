"use client";

// import { getText } from "@/data/bookADemo.js";
import { useDeviceSize } from "@/hooks/DeviceSizeContext";
import { useLanguage } from "@/hooks/LanguageContext";
import getStyles from "@/styles/SolutionCardStyles.js";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeSolutionCard(props) {
  const deviceSizeContext = useDeviceSize();
  const { isSmallScreen, isMiddleScreen, isWideScreen } = deviceSizeContext;
  const [showText, setShowText] = useState(false);
  const { language } = useLanguage();
  // const buttonText = getText[language];

  // Get the styles for this component from a styles folder
  const styles = getStyles(props, showText, deviceSizeContext);

  const { title, identifier, text } = props;

  const arrowMap = {
    restaurant: "/images/find-solutions/restaurant-icon.png",
    retail: "/images/find-solutions/retail-icon.png",
    services: "/images/find-solutions/services-icon.png",
  };

  useEffect(() => {
    if (isWideScreen) {
      setShowText(false);
    } else {
      setShowText(true);
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
            width={350}
            height={300}
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
        <p className="text-sm leading-relaxed">{text}</p>
        {/* <Link
          href="#"
          className="self-start hover:shadow-xl hover:scale-110 transition-all duration-300 rounded-[20px] px-4 py-2 leading-[28.5px]"
          style={styles.button}
        >
          {buttonText}
        </Link> */}
      </div>
    </div>
  );
}
