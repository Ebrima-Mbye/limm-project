"use client";

import { useState } from "react";

export default function PlanFrequencySelection() {
  const [isAnnual, setIsAnnual] = useState(false);
  // Colors for the selected plan - monthly or yearly:
  const selectedColor = "#4BC0C8";
  const unselectedColor = "rgb(100, 100, 100)";
  const selectedStyles = {
    color: selectedColor,
    fontWeight: "bold",
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-x-3">
      <span
        style={isAnnual ? {} : selectedStyles}
        className="mb-2 transition-all"
      >
        Monthly
      </span>
      <label className="relative inline-block w-[53px] h-[30px]">
        <input
          type="checkbox"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
          className="peer sr-only"
        />
        <div className="w-full h-full bg-blue-500 rounded-full transition"></div>
        <div className="absolute top-[3px] left-[3px] w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition"></div>
      </label>
      <p
        style={isAnnual ? selectedStyles : {}}
        className="mt-2 md:mt-5 flex flex-col transition-all"
      >
        <span>Annual</span>
        <span className="text-[#356BB7] font-bold text-[13px]">(18% off)</span>
      </p>
    </div>
  );
}
