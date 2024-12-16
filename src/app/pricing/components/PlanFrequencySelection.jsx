"use client"

import { useState } from "react"

export default function PlanFrequencySelection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="flex items-center space-x-3">
        <span className="text-gray-700">Monthly</span>
        <label className="relative inline-block w-[53px] h-[30px]">
            <input type="checkbox" 
            checked={isAnnual}
            onChange={() => setIsAnnual(!isAnnual)}
            className="peer sr-only"
            />
            <div className="w-full h-full bg-blue-500 rounded-full peer-checked:bg-gray-300 transition"></div>
            <div className="absolute top-[3px] left-[3px] w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition"></div>
        </label>
        <p className="mt-5 text-[18px] leading-[20.6px]">Annual <br /> <span className="text-[#356BB7] text-[14px] font-bold leading-[16.8px]">(18% off)</span></p>
    </div>
  )
}
