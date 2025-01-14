"use client";

import { useBillingCycle } from "@/components/CurrencyProvider";
import { useEffect, useState } from "react";

export default function PlanFrequencySelection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { setBillingCycle } = useBillingCycle();
  // Colors for the selected plan - monthly or yearly:
  const selectedColor = "#4BC0C8";
  const selectedStyles = {
    color: selectedColor,
    fontWeight: "bold",
  };

  useEffect(() => {
    setBillingCycle(isAnnual ? "Yearly" : "Monthly");

    // try {
    //   fetch("https://libretranslate.com/translate", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       q: "Hello, world!",
    //       source: "en",
    //       target: "es",
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
    // } catch (err) {
    //   console.error("Error fetching translation:", err);
    // }

    // Clean up on unmount
    return () => {
      setBillingCycle(null);
    };
  }, [isAnnual]);

  return (
    <div className="flex flex-col items-center space-x-3 md:flex-row">
      <span
        style={isAnnual ? {} : selectedStyles}
        className="mb-2 transition-all"
      >
        Monthly
      </span>
      <label className="relative inline-block h-[30px] w-[53px]">
        <input
          type="checkbox"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
          className="peer sr-only"
        />
        <div className="h-full w-full rounded-full bg-blue-500 transition"></div>
        <div className="absolute left-[3px] top-[3px] h-6 w-6 rounded-full bg-white shadow-md transition peer-checked:translate-x-6"></div>
      </label>
      <p
        style={isAnnual ? selectedStyles : {}}
        className="mt-2 flex flex-col transition-all md:mt-5"
      >
        <span>Annual</span>
        <span className="text-[13px] font-bold text-[#356BB7]">(18% off)</span>
      </p>
    </div>
  );
}
