import Image from "next/image";
const checkMark = "/images/pricing/check-mark.png";

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
          minHeight: "calc(100% - 6px)", // subtract padding
          width: "calc(100% - 6px)",
          maxWidth: "320px",
        }}
        className="border border-gray-200 rounded-lg p-6 text-center shadow-sm bg-white"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-4">{planName}</h3>
        <p className="text-4xl font-bold text-[#356BB7]">
          {price} F{" "}
          <span className="text-sm font-normal text-foreground">/month</span>
        </p>
        <button
          style={{
            background: isPremium()
              // ? "linear-gradient(to right, #356BB7, #ff9090, #356BB7)"
              ? "linear-gradient(to right, #FEAC5E, #C779D0, #4BC0C8)"
              : "#356BB7",
          }}
          className="my-5 bg-[#356BB7] hover:bg-blue-500 transition-colors duration-150 text-white px-6 py-2 w-full rounded-md"
        >
          {/* className="my-5 bg-[#356BB7] hover:bg-blue-500 transition-colors duration-150 text-white px-6 py-2 w-full rounded-md"> */}
          {bottonText}
        </button>
        <ul className="text-start text-gray-600 text-sm space-y-3">
          {perks.map((perk, index) => (
            <li key={index} className="flex gap-3 items-center font-semibold">
              <Image
                src={checkMark}
                alt="check mark"
                width={20}
                height={20}
                className="max-w-[20px] max-h-[20px]"
              />
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
