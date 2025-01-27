"use client";

import { useBillingCycle } from "@/hooks/CurrencyContext";
import { useLanguage } from "@/hooks/LanguageContext";
import { useEffect, useState } from "react";

export default function PlanFrequencySelection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { setBillingCycle } = useBillingCycle();
  const { language } = useLanguage();

  // Colors for the selected plan - monthly or yearly:
  const selectedStyles = {
    color: "#4BC0C8",
    fontWeight: "bold",
  };

  // Translations for the different languages limm supports
  const getMonthly = {
    en: "Monthly",
    fr: "Mensuel",
    es: "Mensualmente",
  };

  // Translations for the different languages limm supports
  const getAnnualy = {
    en: "Annually",
    fr: "Annuel",
    es: "Anualmente",
  };

  // Get the text matching the selected lanugage
  const monthly = getMonthly[language];
  const annually = getAnnualy[language];

  useEffect(() => {
    setBillingCycle(isAnnual ? "Yearly" : "Monthly");

    // Clean up on unmount
    return () => {
      setBillingCycle(null);
    };
  }, [isAnnual]);

  return (
    <div className="flex flex-col items-center space-x-3 p-2 md:flex-row md:p-4">
      {/* The label for "Monthly" */}
      <span
        style={isAnnual ? {} : selectedStyles}
        className="mb-2 transition-all"
      >
        {monthly}
      </span>
      {/* The toggle between "Monthly" and "Annually" */}
      <label className="relative inline-block h-[30px] w-[53px] cursor-pointer">
        <input
          type="checkbox"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
          className="peer sr-only"
        />
        <div className="h-full w-full rounded-full bg-blue-500 transition"></div>
        <div className="absolute left-[3px] top-[3px] h-6 w-6 rounded-full bg-white shadow-md transition peer-checked:translate-x-6"></div>
      </label>
      {/* The label for "Annually" */}
      <p
        style={isAnnual ? selectedStyles : {}}
        className="flex flex-col transition-all"
      >
        <span className="">{annually}</span>
        <span className="text-[13px] font-bold text-[#356BB7]">(18% off)</span>
      </p>
    </div>
  );
}
