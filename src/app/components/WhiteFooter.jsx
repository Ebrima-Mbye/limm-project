import Image from "next/image";
import FooterBottom from "./FooterBottom";
import logo from "../photos/limm.logo.logo 1.png";
import facebookLogo from "../photos/restaurants/facebook-blue.png";
import twitterLogo from "../photos/restaurants/twitter-blue.png";
import instagramLogo from "../photos/restaurants/instagram-blue.png";
import tiktokLogo from "../photos/restaurants/tiktok-blule.png";
import footerLinks from "../data/links";
import Link from "next/link";

export default function Footer() {
  const socialHandles = [facebookLogo, instagramLogo, tiktokLogo, twitterLogo];

  return (
    <div className="mt-36 flex flex-col">
      {/* <hr className="mt-12 mb-5 border-[1px] border-black" /> */}
      <div className="flex flex-col justify-center gap-2 md:justify-between lg:flex-row">
        <div className="mb-10 flex items-center p-2 md:items-start">
          <div className="">
            <Image src={logo} alt="logo" className="w-full md:w-auto" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-3 md:gap-8 lg:flex-row">
          {footerLinks.map((footerlink, i1) => (
            <div key={i1} className="flex flex-col">
              <h1 className="mb-2 text-[15px] font-semibold">
                {footerlink.category}
              </h1>
              {footerlink.links.map((link, i2) => (
                <Link
                  key={i2}
                  className="my-1 text-[13px] font-normal leading-[19.2px]"
                  href={link.href}
                >
                  {link.linkText}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden py-7 font-serif md:block">
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
      <div className="flex h-12 items-center justify-center gap-16 lg:justify-end lg:gap-8">
        {socialHandles.map((socialHandle, index) => (
          <Image
            key={index}
            src={socialHandle}
            alt={socialHandle}
            className="h-7 w-7"
          />
        ))}
      </div>
      <FooterBottom isWhite={true} />
    </div>
  );
}
