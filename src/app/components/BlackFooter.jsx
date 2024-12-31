import Image from "next/image";
import FooterBottom from "../components/FooterBottom";
import logo from "../photos/limm-logo-2.png";
import facebookLogo from "../photos/facebook-logo.svg";
import instagramLogo from "../photos/instagram-logo.svg";
import tiktokLogo from "../photos/tiktok-logo.svg";
import twitterLogo from "../photos/twitter-logo.svg";
import messageIcon from "../photos/message-icon.png";
import callIcon from "../photos/call-icon.png";
import Link from "next/link";

export default function BlackFooter() {
  const email = "limm.africa@gmail.com";
  const phoneNumber = "(+221) 77 400 77 15";
  return (
    <div className="mt-12 flex flex-col bg-[#001738] px-10 pt-12 text-center md:px-24">
      <div className="mb-24 grid flex-1 grid-cols-1 gap-24 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center px-2 text-center md:px-12 lg:items-start">
          <Image src={logo} alt="logo" className="mb-4 w-[120px]" />
          <p className="w-full text-center font-medium text-white lg:text-start">
            Improving business management <br /> in Africa.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="md-mx-auto flex w-full flex-col items-start justify-center gap-4 lg:w-2/3">
            <div className="mb-10 flex h-9 w-full justify-between">
              <Image
                src={facebookLogo}
                alt="facebook logo"
                className="h-full w-full"
              />
              <Image
                src={instagramLogo}
                alt="instagram logo"
                className="h-full w-full"
              />
              <Image
                src={tiktokLogo}
                alt="tiktok logo"
                className="h-full w-full"
              />
              <Image
                src={twitterLogo}
                alt="twitter logo"
                className="h-full w-full"
              />
            </div>
            <div className="flex items-center justify-between gap-5">
              <Image src={messageIcon} alt="message icon" className="" />
              <Link href="/" className="cursor-pointer text-white">
                {email}
              </Link>
            </div>
            <div className="flex items-center justify-between gap-5">
              <Image src={callIcon} alt="call icon" className="" />
              <p className="text-white">{phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}
