"use client";

import AnimatedButton from "@/components/AnimatedButton";
import { useCurrency } from "@/hooks/CurrencyContext";
import { useLanguage } from "@/hooks/LanguageContext";
import { formLink } from "@/utils/myLinks";
import { useEffect, useState } from "react";

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
  }, [language, getButtonText, getForText]);

  useEffect(() => {
    setPrice(device.price[selectedCurrency]);
  }, [selectedCurrency, device.price]);

  return (
    <div className="min-h-full flex-1 rounded-md p-4">
      <p className="text-2xl font-bold text-[#325bb7]">{device.name}</p>
      <p className="my-2 text-[19px]">{device.description}</p>
      <hr className="mb-3 mt-2" />

      {device.details.map((detail, index) => (
        <div key={index}>
          <p className="mb-1 mt-4 text-xl font-medium">{detail.heading}</p>
          <p className="my-2 font-light text-gray-500">{detail.text}</p>
          {/* Render a horizontal line if this is not the last detail */}
          {index !== device.details.length - 1 && <hr />}
        </div>
      ))}
      <div className="mt-10 flex items-center gap-3">
        <AnimatedButton href={formLink} className={`rounded-full`}>
          {buttonText}
        </AnimatedButton>
        <p>
          {forText} <span className="text-xl font-medium">{price}</span>
        </p>
      </div>
    </div>
  );
}
