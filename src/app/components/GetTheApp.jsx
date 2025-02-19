import iphone14 from "@/photos/iPhone 14.png";
import Image from "next/image";
import GetTheAppLinks from "@/components/GetTheAppLinks";

export default function GetTheApp() {
  // This component is only visible in small and middle screens.
  return (
    <>
      <div className="mx-3 flex h-32 rounded-xl bg-black pl-4 text-white md:h-40 md:justify-between md:text-2xl lg:hidden">
        <div className="flex flex-[2] flex-col items-center justify-center md:flex-1 md:items-start">
          <p className="mb-5 font-bold">DOWNLOAD THE APP NOW</p>
          <GetTheAppLinks />
        </div>
        <div className="relative flex-1">
          <Image
            src={iphone14}
            alt="iphone 14"
            className="absolute top-[-30%]"
          />
        </div>
      </div>
    </>
  );
}
