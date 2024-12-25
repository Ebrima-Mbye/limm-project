import Image from "next/image";
import checkMark from "../../photos/pricing/check-mark.png";

export default function PricingCard({ plan }) {
  const premiumStyles =
    "relative rounded-lg overflow-hidden bg-white before:absolute before:inset-[-50%] before:bg-custom-conic before:animate-spin-slow";
  const { planName, price, perks, bottonText } = plan;
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
          minHeight: "calc(100% - 6px)",
          width: "calc(100% - 6px)",
          maxWidth: "320px",
        }}
        className="border border-gray-200 rounded-lg p-6 text-center shadow-sm bg-white"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-4">{planName}</h3>
        <p className="text-4xl font-bold text-[#356BB7]">
          {price} F{" "}
          <span className="text-sm font-normal text-[#AAAAAA]">/month</span>
        </p>
        <button className="my-5 bg-[#356BB7] hover:bg-blue-500 transition-colors duration-150 text-white px-6 py-2 w-full rounded-md">
          {bottonText}
        </button>
        <ul className="text-start text-gray-600 text-sm space-y-2">
          {perks.map((perk, index) => (
            <li key={index} className="flex gap-3 items-center md:text-lg">
              <Image
                src={checkMark}
                alt="check mark"
                className="max-w-[24px] max-h-[24px]"
              />
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
