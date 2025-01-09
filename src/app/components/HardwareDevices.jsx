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
        <div className="mb-12 text-center">
          <p className="text-[18px] font-semibold">HARDWARE DEVICES</p>
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
              className="mb-12 flex flex-col gap-4 rounded-[20px] border border-gray-100 p-1 md:p-14 lg:flex-row lg:p-12"
            >
              <div
                style={{
                  backgroundColor: getBackgroundColor(device.id),
                }}
                className="flex flex-1 flex-col items-center justify-center rounded-[20px] px-4 py-6 md:min-h-[400px] lg:p-4 lg:px-8"
              >
                <div className="flex-1 lg:flex-[0]">
                  <p
                    style={{
                      color: device.id === "1" ? "#D9D9D9" : "black",
                    }}
                    className="mb-5 text-xl font-semibold"
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
                <div className="h-1/2 flex-1 items-center justify-center p-4">
                  <Image
                    src={device.image}
                    width={300}
                    height={300}
                    alt="Scanner with background"
                    className="lg:min-h-[300px] lg:min-w-[300px]"
                  />
                </div>
              </div>
              {/* A HARDWARE DEVICE */}
              <div className="v-4/5 h-4/5 flex-1 p-4">
                <p className="hidden text-2xl font-bold text-[#325bb7]">
                  {device.name}
                </p>
                <p className="my-2 text-[19px]">{device.description}</p>
                <hr className="mb-3 mt-2" />

                {device.details.map((detail, index) => (
                  <div key={index}>
                    <p className="mb-1 mt-4 text-xl font-medium">
                      {detail.heading}
                    </p>
                    <p className="my-2 font-light text-gray-500">
                      {detail.text}
                    </p>
                  </div>
                ))}
                <div className="mt-10 flex items-center gap-3">
                  <button className="rounded-full bg-[#006df0] px-4 py-2 text-white">
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
