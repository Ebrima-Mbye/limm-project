import Image from "next/image";
import branchImage from "../../photos/pricing/branch-image.svg";
import PricingCard from "./PricingCard";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function PriceTree(props) {
  const appType = props.appType || "MOBILE APP";
  const plans = props.plans || [];

  return (
    <AnimatedContainer>
      <div className="mb-8 flex flex-col items-center p-6">
        {/* Section Heading */}
        <h2 className="mb-4 text-[24px] font-semibold leading-[27px] text-[#256BB7]">
          {appType}
        </h2>
        <Image src={branchImage} alt="branch image" className="mb-5" />

        {/* Pricing Cards */}
        <div className="max-w-f4xl grid grid-cols-1 gap-14 md:grid-cols-2">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </AnimatedContainer>
  );
}
