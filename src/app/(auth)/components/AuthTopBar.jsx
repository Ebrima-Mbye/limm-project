"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
const logo = "/images/limm.logo.logo 1.png";
const arrowLeft = "/images/login/arrow-left.png";

export default function AuthTopBar() {
  const { language } = useLanguage();
  const [linkText, setLinkText] = useState();

  const getLinkText = {
    en: "Back to Home",
    fr: "Retour à l'accueil",
    es: "Volver al inicio",
  };

  useEffect(() => {
    setLinkText(getLinkText[language]);
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 flex w-full items-center justify-between p-5">
      <div className="">
        <Link
          href="/"
          className="flex gap-3 text-gray-500 transition-colors hover:text-gray-800"
        >
          <Image
            src={arrowLeft}
            alt="arrow left"
            className=""
            width={25}
            height={25}
          />
          <p className="[text-[24px] font-bold leading-[28.8px] text-[#64758D]">
            {linkText}
          </p>
        </Link>
      </div>

      <div className="">
        <div className="flex items-center lg:h-auto">
          {/* Company logo */}
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={40}
            className="mt-0 w-full lg:w-full"
          />
        </div>
      </div>
    </div>
  );
}
