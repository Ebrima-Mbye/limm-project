"use client";

import { useBillingCycle, useCurrency } from "@/components/CurrencyProvider";
import Image from "next/image";
const checkMark = "/images/pricing/check-mark.png";

export default function PricingCard({ plan }) {
  const { selectedCurrency } = useCurrency();
  const { billingCycle } = useBillingCycle();
  const premiumStyles =
    "relative rounded-lg overflow-hidden bg-white before:absolute before:inset-[-50%] before:bg-custom-conic before:animate-spin-slow";

  const { planName, prices, perks, bottonText } = plan;

  const currencyData = prices[selectedCurrency];
  function getValue() {
    if (
      parseInt(currencyData.value) === 0 ||
      billingCycle.toLowerCase() === "monthly"
    ) {
      return currencyData.value;
    }

    let discount = 0.18 * parseInt(currencyData.value);
    return parseInt(currencyData.value) - discount;
  }
  function getSymbol() {
    return currencyData.symbol;
  }

  function isPremium() {
    return (
      planName.toLowerCase() === "premium" || planName.toLowerCase() === "pro"
    );
  }
  return (
    <div
      style={{
        minHeight: "27rem",
        boxSizing: "border-box",
      }}
      className={isPremium() ? premiumStyles : ""}
    >
      <div
        style={{
          position: isPremium() ? "absolute" : "static",
          inset: isPremium() ? "3px" : "auto",
          minHeight: "calc(100% - 6px)", // subtract padding
          width: "calc(100% - 6px)",
          maxWidth: "320px",
        }}
        className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
      >
        <h3 className="mb-4 text-lg font-semibold text-gray-700">{planName}</h3>
        <p className="text-4xl font-bold text-[#356BB7]">
          {getValue()} {getSymbol()}&nbsp;
          <span className="text-sm font-normal text-foreground">/month</span>
        </p>
        <button
          style={{
            background: isPremium()
              ? // ? "linear-gradient(to right, #356BB7, #ff9090, #356BB7)"
                "linear-gradient(to right, #FEAC5E, #C779D0, #4BC0C8)"
              : "#356BB7",
          }}
          className="my-5 w-full rounded-md bg-[#356BB7] px-6 py-2 text-white transition-colors duration-150 hover:bg-blue-500"
        >
          {/* className="my-5 bg-[#356BB7] hover:bg-blue-500 transition-colors duration-150 text-white px-6 py-2 w-full rounded-md"> */}
          {bottonText}
        </button>
        <ul className="space-y-3 text-start text-sm text-gray-600">
          {perks.map((perk, index) => (
            <li key={index} className="flex items-center gap-3 font-semibold">
              <Image
                src={checkMark}
                alt="check mark"
                width={20}
                height={20}
                className="max-h-[20px] max-w-[20px]"
              />
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
