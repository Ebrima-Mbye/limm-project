"use client";

import { getCookie } from "@/utils/myCookies.js";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedContainer from "../components/AnimatedContainer";
import HardwareDeviceText from "../components/HardwareDeviceText";
import { hardwareDevices, header } from "../data/hardwareDevices.js";
import { useDeviceSize } from "../hooks/DeviceSizeContext";

export default function HardwareDevices() {
  const { isWideScreen } = useDeviceSize();
  const [hardwareDevicesData, setHardwareDevicesData] = useState([]);
  const [headerData, setHeaderData] = useState({});
  const defaultLanguage = "en";

  useEffect(() => {
    const language = getCookie("language") || defaultLanguage; // Default to 'en'
    setHeaderData(header[language]);
    setHardwareDevicesData(hardwareDevices[language]);
  }, []);

  function getFlexDirection(id) {
    if (parseInt(id) % 2 === 1 && isWideScreen) {
      return "row-reverse";
    } else if (!isWideScreen) {
      return "column";
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
              // Container div for this hardware device
              <div
                key={device.id}
                style={{
                  // determine the flex direction based on the id - "row" or "row-reverse"
                  flexDirection: getFlexDirection(device.id),
                }}
                className="border-gray-300 border mb-12 flex flex-col gap-4 rounded-[20px] p-1 md:p-14 lg:flex-row lg:p-12"
              >
                {/* Container for the picture of the hardware device */}
                <div className="border-gray-300 border flex flex-1 items-center justify-center rounded-[20px] px-4 py-6 md:min-h-[400px] lg:px-8 lg:pb-4 lg:pt-6">
                  {/* Image of this hardware device */}
                  {/* <div className="flex min-h-full w-full flex-1 items-end justify-center rounded-2xl border border-gray-200 p-4"> */}
                  <Image
                    src={device.image}
                    width={300}
                    height={300}
                    alt="Scanner with background"
                    // className="lg:min-h-[300px] lg:min-w-[300px]"
                    className="w-[70%]"
                  />
                  {/* </div> */}
                </div>

                {/* HARWARE DEVICE TEXT */}
                {/* Textual information about this hardware device, along with a button to "order now" */}
                <HardwareDeviceText device={device} />
              </div>
            ))}
        </div>
      </div>
    </AnimatedContainer>
  );
}
