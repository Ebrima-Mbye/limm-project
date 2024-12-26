import Image from "next/image";
import branchImage from "../../photos/pricing/branch-image.svg";
import PricingCard from "./PricingCard";
import AnimatedContainer from "@/app/components/AnimatedContainer";

export default function PriceTree(props) {
  const appType = props.appType || "MOBILE APP";
  const plans = props.plans || [];

  return (
    <AnimatedContainer>
      <div className="mb-8 flex flex-col items-center p-6">
        {/* Section Heading */}
        <h2 className="mb-4 font-semibold text-[24px] leading-[27px] text-[#256BB7]">
          {appType}
        </h2>
        <Image src={branchImage} alt="branch image" className="mb-5" />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-f4xl">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </AnimatedContainer>
  );
}
