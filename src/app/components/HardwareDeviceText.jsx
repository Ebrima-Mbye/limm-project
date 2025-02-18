"use client";
import { useEffect, useState } from "react";
import { useCurrency } from "@/hooks/CurrencyContext";
import { useLanguage } from "@/hooks/LanguageContext";

export default function HardwareDeviceText({ device }) {
  const { selectedCurrency } = useCurrency();
  const { language } = useLanguage();
  const [price, setPrice] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [forText, setForText] = useState("");

  const getButtonText = {
    en: "Order now",
    fr: "Commander",
    es: "Ordenar",
  };

  const getForText = {
    en: "for",
    fr: "pour",
    es: "para",
  };

  useEffect(() => {
    setButtonText(getButtonText[language]);
    setForText(getForText[language]);
  }, [language]);

  useEffect(() => {
    setPrice(device.price[selectedCurrency]);
  }, [selectedCurrency]);

  return (
    <div className="min-h-full flex-1 rounded-md p-4">
      <p className="hidden text-2xl font-bold text-[#325bb7]">{device.name}</p>
      <p className="my-2 text-[19px]">{device.description}</p>
      <hr className="mb-3 mt-2" />

      {device.details.map((detail, index) => (
        <div key={index}>
          <p className="mb-1 mt-4 text-xl font-medium">{detail.heading}</p>
          <p className="my-2 font-light text-gray-500">{detail.text}</p>
        </div>
      ))}
      <div className="mt-10 flex items-center gap-3">
        <button
          className={`rounded-full border-4 border-white bg-blue-600 from-black via-blue-900 to-blue-600 bg-[size:150%] bg-[position:0%] px-4 py-2 text-white transition-all duration-300 hover:bg-gradient-to-r hover:bg-[position:100%]`}
        >
          {buttonText}
        </button>
        <p>
          {forText} <span className="text-xl font-medium">{price}</span>
        </p>
      </div>
    </div>
  );
}
