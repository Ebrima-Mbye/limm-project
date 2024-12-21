import Image from "next/image";
import FooterBottom from "../components/FooterBottom";
import logo from "../photos/limm-logo-2.png";
import facebookLogo from "../photos/facebook-logo.svg";
import instagramLogo from "../photos/instagram-logo.svg";
import tiktokLogo from "../photos/tiktok-logo.svg";
import twitterLogo from "../photos/twitter-logo.svg";
import messageIcon from "../photos/message-icon.png";
import callIcon from "../photos/call-icon.png";

export default function BlackFooter() {
  return (
    <div className="px-10 text-center md:px-24 pt-12 mt-12 bg-[#001738] flex flex-col">
      <div className="mb-24 flex-1 grid gap-24 grid-cols-1 lg:grid-cols-2">
        <div className="text-center flex justify-center items-center lg:items-start px-2 md:px-12 flex-col">
          <Image src={logo} alt="logo" className="mb-4 w-[120px]" />
          <p className="text-[24px] w-full md:w-4/5 md:text-start font-medium text-white">
            Improving business management in Africa.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="md-mx-auto lg:w-2/3 w-full flex flex-col items-start justify-center gap-4">
            <div className="mb-10 w-full h-9 flex justify-between">
              <Image
                src={facebookLogo}
                alt="facebook logo"
                className="w-full h-full"
              />
              <Image
                src={instagramLogo}
                alt="instagram logo"
                className="w-full h-full"
              />
              <Image
                src={tiktokLogo}
                alt="tiktok logo"
                className="w-full h-full"
              />
              <Image
                src={twitterLogo}
                alt="twitter logo"
                className="w-full h-full"
              />
            </div>
            <div className="gap-5 flex justify-between items-center">
              <Image src={messageIcon} alt="message icon" className="" />
              <p className="text-white text-[18px]">limm.africa@gmail.com</p>
            </div>
            <div className="gap-5 flex justify-between items-center">
              <Image src={callIcon} alt="call icon" className="" />
              <p className="text-white text-[18px]">(+221) 77 400 77 15</p>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}
