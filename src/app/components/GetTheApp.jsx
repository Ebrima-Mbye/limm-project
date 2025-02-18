import iphone14 from "../photos/iPhone 14.png";
const getItOnApple = "/images/apple-dark.png";
const getItOnGoogle = "/images/google-dark.png";
import Image from "next/image";

export default function GetTheApp() {
  // This component is only visible in small and middle screens.
  return (
    <>
      <div className="mx-3 flex h-32 rounded-xl bg-black pl-4 text-white md:h-40 md:justify-between md:text-2xl lg:hidden">
        <div className="flex flex-[2] flex-col items-center justify-center md:flex-1 md:items-start">
          <p className="mb-5 font-bold">DOWNLOAD THE APP NOW</p>
          <div className="flex w-full justify-around">
            <Image
              src={getItOnApple}
              width={200}
              height={30}
              alt="get the app on apple"
              className="w-1/3 rounded-lg border-gray-500 border cursor-pointer"
            />
            <Image
              src={getItOnGoogle}
              width={200}
              height={30}
              alt="get twe app on google"
              className="w-1/3 rounded-lg border-gray-500 border cursor-pointer"
            />
          </div>
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
