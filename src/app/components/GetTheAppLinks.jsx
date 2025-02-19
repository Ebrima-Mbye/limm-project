"use client";

import { useDeviceSize } from "@/hooks/DeviceSizeContext";
import Image from "next/image";

const getItOnApple = "/images/apple-dark-modern.png";
const getItOnGoogle = "/images/google-dark-modern.png";

export default function GetTheAppLinks() {
  const { isSmallScreen } = useDeviceSize();
  return (
    <div className="flex h-8 w-full justify-around gap-2 self-start px-0 md:h-12 md:w-3/5 md:gap-4 md:pr-5">
      <Image
        src={getItOnApple}
        width={isSmallScreen ? 100 : 500}
        height={isSmallScreen ? 15 : 30}
        alt="get the app on apple"
        className="h-auto cursor-pointer rounded-lg border border-gray-500 md:flex-1"
      />
      <Image
        src={getItOnGoogle}
        width={isSmallScreen ? 100 : 500}
        height={isSmallScreen ? 15 : 30}
        alt="get twe app on google"
        className="h-auto cursor-pointer rounded-lg border border-gray-500 md:flex-1"
      />
    </div>
  );
}
