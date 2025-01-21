"use client";

import Image from "next/image";
import AnimatedContainer from "../components/AnimatedContainer";
import HardwareDeviceText from "../components/HardwareDeviceText";
import { useDeviceSize } from "../components/DeviceSizeContext";
import { hardwareDevices, header } from "../data/hardwareDevices.js";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/myCookies.js";

export default function HardwareDevices() {
  const isWideScreen = useDeviceSize();
  const [hardwareDevicesData, setHardwareDevicesData] = useState([]);
  const [headerData, setHeaderData] = useState({});
  const defaultLanguage = "en";

  useEffect(() => {
    const language = getCookie("language") || defaultLanguage; // Default to 'en'
    setHeaderData(header[language]);
    setHardwareDevicesData(hardwareDevices[language]);
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
          <p className="text-[18px] font-semibold">{headerData.heading}</p>
          <p className="text-foreground">{headerData.subHeading}</p>
        </div>
        <div className="w-full">
          {hardwareDevicesData &&
            hardwareDevicesData.map((device) => (
              // A HARDWARE DEVICE
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
                        color:
                          parseInt(device.id) % 2 === 1 ? "#D9D9D9" : "black",
                      }}
                      className="mb-5 text-xl font-semibold"
                    >
                      {device.name}
                    </p>
                    <p
                      style={{
                        color:
                          parseInt(device.id) % 2 === 1 ? "white" : "black",
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

                {/* HARWARE DEVICE TEXT */}
                <HardwareDeviceText device={device} />
              </div>
            ))}
        </div>
      </div>
    </AnimatedContainer>
  );
}
