import Image from "next/image";
import mainImage from "../photos/man-pointing-with-background.png";
import appStoreImage from "../photos/get-it-on-apple.png";
import googlePlayStoreImage from "../photos/get-it-on-google.png";

export default function HomeGetStarted() {
  return (
    <section className=" h-[100vh] p-12">
      <Image
        src={mainImage}
        alt="man pointing at phone"
        className="w-[800px] mx-auto"
      />
      <div className="my-12 font-bold text-blue-400 text-center">
        <a className="text-4xl text-[#356BB7] cursor-pointer" href="/">
          GET STARTED WITH THE APP NOW
        </a>
      </div>
      <div className="flex gap-14 justify-center items-center">
        <div className="">
          <Image
            src={appStoreImage}
            alt="app store image"
            className="w-[200px]"
          />
        </div>
        <div className="">
          <Image
            src={googlePlayStoreImage}
            alt="google play store image"
            className="w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}
