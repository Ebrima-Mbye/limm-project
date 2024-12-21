import iphone14 from "../photos/iPhone 14.png";
import getItOnApple from "../photos/get-it-on-apple-white.png";
import getItOnGoogle from "../photos/get-it-on-google-white.png";
import Image from "next/image";

export default function GetTheApp() {
  // This component is only visible in small and middle screens.
  return (
    <div className="pl-4 lg:hidden md:text-2xl md:h-40 rounded-xl mx-3 flex md:justify-between h-32 border-red-400 bg-black text-white">
      <div className="flex-[2] md:flex-1 md:items-start flex flex-col justify-center items-center">
        <p className="font-bold mb-5">DOWNLOAD THE APP NOW</p>
        <div className="flex justify-around w-full">
          <Image
            src={getItOnApple}
            alt="get the app on apple"
            className="w-1/3"
          />
          <Image
            src={getItOnGoogle}
            alt="get twe app on google"
            className="w-1/3"
          />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src={iphone14} alt="iphone 14" className="absolute top-[-30%]" />
      </div>
    </div>
  );
}
