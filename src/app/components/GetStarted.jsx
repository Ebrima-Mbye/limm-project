import Image from "next/image";
import mainImage from "../photos/man-pointing-with-background.png";
import appStoreImage from "../photos/get-it-on-apple.png";
import googlePlayStoreImage from "../photos/get-it-on-google.png";
import Link from "next/link";

export default function HomeGetStarted() {
  return (
    <section className="hidden p-12 md:block md:h-[100vh]">
      <Image
        src={mainImage}
        alt="man pointing at phone"
        className="mx-auto w-[800px]"
      />
      <div className="my-12 text-center font-bold text-blue-400">
        <Link className="cursor-pointer text-4xl text-[#356BB7]" href="/">
          GET STARTED WITH THE APP NOW
        </Link>
      </div>
      <div className="flex items-center justify-center gap-14">
        <div className="cursor-pointer">
          <div className="flex justify-center">
            <p>Apple:</p>
          </div>
          <Image
            src={appStoreImage}
            alt="app store image"
            className="w-[200px]"
          />
        </div>
        <div className="cursor-pointer">
          <div className="flex justify-center">
            <p>Android:</p>
          </div>
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
