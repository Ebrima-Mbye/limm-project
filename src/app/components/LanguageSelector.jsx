"use client";

import { useLanguage } from "@/hooks/LanguageContext";
import Image from "next/image";
import globeIcon from "../photos/globeIcon.png";
import globeBlack from "../photos/globe-black.png";

export default function LanguageSelector({ isWhite }) {
  const { language, updateLanguage } = useLanguage();

  const supportedLanguages = [
    { name: "English", value: "en" },
    { name: "French", value: "fr" },
    { name: "Spanish", value: "es" },
  ];

  const handleChange = (e) => {
    updateLanguage(e.target.value);
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0, // Scroll to the top of the page
      });
    }
    setTimeout(() => {
      location.reload(); // Reload the page after some delay, to refetch from the server
    }, 500);
  };

  return (
    <div className="flex flex-[2] items-center justify-end pr-8">
      <p className="mr-5">Language:</p>
      {/* <div className="flex w-[120px] gap-3 rounded-md border border-gray-500 px-3 py-1"> */}
      <div className="flex w-[120px] gap-3 rounded-md border border-gray-500 px-3 py-[0.3rem]">
        <Image
          src={isWhite ? globeBlack : globeIcon}
          alt="globe icon"
          className=""
        />
        <select
          value={language}
          onChange={handleChange}
          style={{
            backgroundColor: isWhite ? "white" : "#001738",
          }}
          className="bg-inherit text-[13px]"
        >
          {supportedLanguages.map((language, index) => (
            <option
              key={index}
              style={{
                color: isWhite ? "black" : "white",
              }}
              className=""
              value={language.value}
            >
              {language.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
