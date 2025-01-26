"use client";
import FullPage from "@/components/FullPage";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const LogoSlider = () => {
  const logosRef = useRef(null);
  const imageWidth = 200;
  const imageHeight = 50;

  useEffect(() => {
    if (logosRef.current) {
      const copy = logosRef.current.cloneNode(true);
      logosRef.current.parentNode.appendChild(copy);
      console.log(logosRef.current.parentNode);
    }
  }, []);

  return (
    <FullPage>
      <div className="relative overflow-hidden whitespace-nowrap border border-red-400 bg-white py-16">
        {/* <div className="absolute left-0 top-0 z-10 h-full w-64 bg-gradient-to-l from-transparent to-white"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-64 bg-gradient-to-r from-transparent to-white"></div> */}

        <div
          className="inline-block"
          // className="animate-slide inline-block"
          // style={{ animation: "slide 35s linear infinite" }}
          ref={logosRef}
        >
          <Image
            width={imageWidth}
            height={imageHeight}
            src="/images/sliding/3m.svg"
            alt="3M"
            className="mx-10 inline-block h-12"
          />
          <Image
            width={imageWidth}
            height={imageHeight}
            src="/images/sliding/barstool-store.svg"
            alt="Barstool Store"
            className="mx-10 inline-block h-12"
          />
          <Image
            width={imageWidth}
            height={imageHeight}
            src="/images/sliding/budweiser.svg"
            alt="Budweiser"
            className="mx-10 inline-block h-12"
          />
          <Image
            width={imageWidth}
            height={imageHeight}
            src="/images/sliding/buzzfeed.svg"
            alt="Buzzfeed"
            className="mx-10 inline-block h-12"
          />
          <Image
            width={imageWidth}
            height={imageHeight}
            src="/images/sliding/forbes.svg"
            alt="Forbes"
            className="mx-10 inline-block h-12"
          />
          <Image
            width={imageWidth}
            height={imageHeight}
            src="/images/sliding/macys.svg"
            alt="Macys"
            className="mx-10 inline-block h-12"
          />
          <Image
            width={imageWidth}
            height={imageHeight}
            src="/images/sliding/menshealth.svg"
            alt="Men's Health"
            className="mx-10 inline-block h-12"
          />
          <Image
            width={imageWidth}
            height={imageHeight}
            src="/images/sliding/mrbeast.svg"
            alt="Mr. Beast"
            className="mx-10 inline-block h-12"
          />
        </div>
      </div>
    </FullPage>
  );
};

export default LogoSlider;

// Tailwind CSS animation
<style global jsx>{`
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`}</style>;
