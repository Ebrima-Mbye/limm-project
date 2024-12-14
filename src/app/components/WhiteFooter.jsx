import Image from "next/image";
import FooterBottom from "./FooterBottom";
import logo from "../photos/limm.logo.logo 1.png";
import facebookLogo from "../photos/restaurants/facebook-blue.png";
import twitterLogo from "../photos/restaurants/twitter-blue.png";
import instagramLogo from "../photos/restaurants/instagram-blue.png";
import tiktokLogo from "../photos/restaurants/tiktok-blule.png";
import footerLinks from "./links";
import Link from "next/link";

export default function Footer() {
  const socialHandles = [facebookLogo, instagramLogo, tiktokLogo, twitterLogo];
  console.log(footerLinks);

  return (
    <div className="flex flex-col mt-12">
      <hr className="mt-12 mb-5 border-[1px] border-black" />
      <div className="flex gap-2 justify-between">
        <div className="p-2">
          <div>
            <Image src={logo} alt="logo" className="" />
          </div>
        </div>
        <div className="flex-1 flex gap-8 justify-end">
          {footerLinks.map((footerlink, i1) => (
            <div key={i1} className="flex flex-col">
              <h1 className="text-2xl font-medium mb-2">
                {footerlink.category}
              </h1>
              {footerlink.links.map((link, i2) => (
                <Link
                  key={i2}
                  className="text-[16px] my-1 font-normal leading-[19.2px]"
                  href={link.href}
                >
                  {link.linkText}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="py-7">
        <p>
          Limm is committed to providing a seamless and secure experience for
          small businesses, and users are expected to comply with applicable
          laws and regulations. Users are responsible for maintaining the
          confidentiality of their account information and are prohibited from
          engaging in any unlawful activities on the platform. Limm reserves the
          right to update, modify, or discontinue any part of the service at its
          discretion
        </p>
        <p>
          User data privacy is a top priority, and Limm will handle personal and
          business information in accordance with our Privacy Policy. Users are
          encouraged to review the terms regularly for any updates or changes
        </p>
      </div>
      <div className="h-12 flex justify-end items-center gap-8">
        {socialHandles.map((socialHandle, index) => (
          <Image
            key={index}
            src={socialHandle}
            alt={socialHandle}
            className="w-7 h-7"
          />
        ))}
      </div>
      <FooterBottom isWhite={true} />
    </div>
  );
}
