"use client";

import Image from "next/image";
import AnimatedContainer from "../components/AnimatedContainer";
import hardwareDevices from "../data/hardwareDevices.js";
import { useEffect, useState } from "react";

export default function HardwareDevices() {
  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      //Check if the screen width is greater than 800px
      const handleResize = () => {
        setIsWideScreen(window.innerWidth > 800);
      };

      // Run the check on component mount
      handleResize();

      // Add an event listener to handle window resize
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  function getImageURL(device) {
    if (device.name.toLowerCase() === "limm bluetooth printer") {
      return "/images/limm_bluetooth.png";
    } else if (device.name.toLowerCase() === "limm register") {
      return "/images/limm_register.png";
    }
  }

  function getFlexDirection(id) {
    if (id === "1" && isWideScreen) {
      return "row-reverse";
    } else if (!isWideScreen) {
      return "column";
    }
  }
  function getBackgroundColor(id) {
    if (id === "1") {
      return "#356BB7";
    } else {
      return "#DFECFF";
    }
  }
  return (
    <AnimatedContainer>
      <div className="mt-16">
        <div className="text-center mb-12">
          <p className="text-[18px] text-[#AAB7C9]">HARDWARE DEVICES</p>
          <p className="text-foreground">
            Manage all aspects of your Business in one place
          </p>
        </div>
        <div className="w-full">
          {hardwareDevices.map((device) => (
            <div
              key={device.id}
              style={{
                flexDirection: getFlexDirection(device.id),
              }}
              className="mb-12 flex gap-4 flex-col lg:flex-row p-5 md:p-14 lg:p-12 rounded-[20px]  border-gray-100 border"
            >
              <div
                style={{
                  backgroundColor: getBackgroundColor(device.id),
                }}
                className="md:min-h-[400px] rounded-[20px] flex-1 py-6 px-4 lg:px-8 lg:p-4 flex flex-col justify-center items-center"
              >
                <div className="lg:flex-[0] flex-1">
                  <p
                    style={{
                      color: device.id === "1" ? "#D9D9D9" : "black",
                    }}
                    className="mb-5 font-semibold text-xl"
                  >
                    {device.name}
                  </p>
                  <p
                    style={{
                      color: device.id === "1" ? "white" : "black",
                    }}
                  >
                    {device.description}
                  </p>
                </div>
                <div className="p-4 h-1/2 items-center justify-center flex-1">
                  <Image
                    src={device.image}
                    width={300}
                    height={300}
                    alt="Scanner with background"
                    className="lg:min-w-[300px] lg:min-h-[300px]"
                  />
                </div>
              </div>
              {/* A HARDWARE DEVICE */}
              <div className="flex-1 p-4 h-4/5 v-4/5">
                <p className="hidden text-2xl font-bold text-[#325bb7]">
                  {device.name}
                </p>
                <p className="text-[19px] my-2">{device.description}</p>
                <hr className="mt-2 mb-3" />

                {device.details.map((detail, index) => (
                  <div key={index}>
                    <p className="text-xl font-medium mt-4 mb-1">
                      {detail.heading}
                    </p>
                    <p className="font-light text-[#AAB7C9] my-2">
                      {detail.text}
                    </p>
                  </div>
                ))}
                <div className="flex gap-3 items-center mt-10 ">
                  <button className="rounded-full px-4 py-2 text-white bg-[#006df0]">
                    Order now
                  </button>
                  <p>
                    for{" "}
                    <span className="text-xl font-medium">{device.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedContainer>
  );
}
