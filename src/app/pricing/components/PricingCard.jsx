"use client";

import { useBillingCycle, useCurrency } from "@/hooks/CurrencyContext";
import { useLanguage } from "@/hooks/LanguageContext";
import Image from "next/image";
const checkMark = "/images/pricing/check-mark.png";

export default function PricingCard({ plan }) {
  const { selectedCurrency } = useCurrency();
  const { billingCycle } = useBillingCycle();
  const { language } = useLanguage();
  const getPaymentDuration = {
    en: "/month",
    fr: "/mois",
    es: "/mes",
  };
  const paymentDuration = getPaymentDuration[language];
  const premiumStyles =
    "relative rounded-lg overflow-hidden bg-white before:absolute before:inset-[-50%] before:bg-custom-conic before:animate-spin-slow";

  const {
    description,
    planCategory,
    planName,
    prices,
    perks,
    buttonText,
    info,
  } = plan;

  // Get the price based on the selected currency
  const currencyData = prices[selectedCurrency];

  // Get the currency price for the given plan
  function getValue() {
    if (
      parseInt(currencyData.value) === 0 ||
      billingCycle?.toLowerCase() === "monthly"
    ) {
      return currencyData.value;
    }

    let discount = 0.18 * parseInt(currencyData.value);
    return parseInt(currencyData.value) - discount;
  }

  // Get the symbol of the current currency
  function getSymbol() {
    return currencyData.symbol;
  }

  // Check for whether to style differently or not
  function isPremium() {
    return (
      planName.toLowerCase() === "premium" ||
      planName.toLowerCase() === "plus" ||
      planName.toLowerCase() === "standard"
    );
  }

  return (
    <div
      style={{
        minHeight: "38rem",
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
        className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center shadow-sm"
      >
        <div className="flex justify-center">
          <p
            className={`mb-7 rounded-full border-black bg-gray-200 px-4 py-2 text-lg font-semibold text-gray-700 ${planCategory.toLowerCase() === "mobile app" ? "border border-blue-500 text-blue-500" : ""}`}
          >
            {planCategory}
          </p>
        </div>
        <h3 className="mb-4 text-lg font-semibold text-gray-700">{planName}</h3>
        <p className="text-4xl font-bold text-[#356BB7]">
          {getValue()} {getSymbol()}&nbsp;
          <span className="text-sm font-normal text-foreground">
            {paymentDuration}
          </span>
        </p>
        <div className="my-4 flex h-[4rem]">
          <p className="py-2 text-[14px] font-normal text-foreground">
            {description}
          </p>
        </div>
        <button
          style={{
            background: isPremium()
              ? "linear-gradient(to right, #FEAC5E, #C779D0, #4BC0C8)"
              : "#356BB7",
          }}
          className="my-5 w-full rounded-md bg-[#356BB7] px-6 py-2 text-white transition-colors duration-150 hover:bg-blue-500"
        >
          {buttonText}
        </button>
        <div className="space-y-3 text-start text-sm text-gray-600">
          {info ? (
            <p className="font-medium">{info}</p>
          ) : (
            <ul>
              {perks.map((perk, index) => (
                <li
                  key={index}
                  className="mb-3 flex items-center gap-3 font-semibold"
                >
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
          )}
        </div>
      </div>
    </div>
  );
}
