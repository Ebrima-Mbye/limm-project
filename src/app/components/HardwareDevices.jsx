"use client";

import Image from "next/image";
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
    if (isWideScreen) {
      return "inherit";
    } else if (id === "1") {
      return "#356BB7";
    } else {
      return "#DFECFF";
    }
  }
  return (
    <div className="">
      <div className="text-center mb-12">
        <p className="text-[18px] text-[#AAB7C9]">HARDWARE DEVICES</p>
        <p className="text-[#001738]">
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
            className="mb-12 flex gap-4 flex-col lg:flex-row p-5 md:p-14 lg:p-12 rounded-[20px]  border-gray-300 border"
          >
            <div
              style={{
                backgroundColor: getBackgroundColor(device.id),
              }}
              className="md:min-h-[400px] rounded-[20px] flex-1 py-6 px-4 lg:px-8 lg:p-4 flex flex-col justify-center items-center"
            >
              <div className="lg:hidden lg:flex-[0] flex-1">
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
                  src={isWideScreen ? device.bigImage : device.image}
                  alt="Scanner with background"
                  className=""
                />
              </div>
            </div>
            <div className="flex-1 p-4 h-4/5 v-4/5">
              <p className="hidden lg:block text-2xl font-bold text-[#325bb7]">
                {device.name}
              </p>
              <p className="hidden lg:block text-[19px] my-2">
                {device.description}
              </p>
              <hr className="mt-2 mb-3" />
              <p className="text-xl font-medium mt-4 mb-1">Touch Screen</p>
              <p className="font-light text-[#AAB7C9] my-2">
                Intuitive interface with a responsive touch screen, enhancing
                user interaction and operational efficiency.
              </p>
              <hr className="mt-2 mb-3" />
              <p className="text-xl font-medium">QR Code & Bar Code Scanner</p>
              <p className="my-2 text-[#AAB7C9]">
                Advanced scanning capabilities for quick and accurate reading of
                QR and bar codes, streamlining the checkout process.
              </p>
              <hr className="mt-2 mb-3" />
              <p className="text-xl font-medium">Thermal Receipt Printer</p>
              <p className="my-2 text-[#AAB7C9]">
                Reliable and fast printing of receipts with a thermal printer
                that ensures clear, long-lasting prints.
              </p>
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
  );
}
