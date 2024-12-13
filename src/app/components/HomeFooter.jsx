import Image from "next/image";
import FooterBottom from "../components/FooterBottom";
import logo from "../photos/limm-logo-2.png";
import facebookLogo from "../photos/facebook-logo.svg";
import instagramLogo from "../photos/instagram-logo.svg";
import tiktokLogo from "../photos/tiktok-logo.svg";
import twitterLogo from "../photos/twitter-logo.svg";
import messageIcon from "../photos/message-icon.png";
import callIcon from "../photos/call-icon.png";

export default function HomeFooter() {
  return (
    <div className="px-24 pt-12 mt-12 bg-[#001738] flex flex-col">
      <div className="mb-24 flex-1 grid gap-24 grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-start px-12 flex-col">
          <Image src={logo} alt="logo" className="mb-4 w-[120px]" />
          <p className="text-[24px] w-4/5 font-medium text-white">
            Improving business management in Africa.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="mb-4 w-3/5 h-9 flex justify-between">
            <Image src={facebookLogo} alt="facebook logo" className="" />
            <Image src={instagramLogo} alt="instagram logo" className="" />
            <Image src={tiktokLogo} alt="tiktok logo" className="" />
            <Image src={twitterLogo} alt="twitter logo" className="" />
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
      <FooterBottom />
    </div>
  );
}
