import PricingCard from "./PricingCard";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function PriceTree(props) {
  const plans = props.plans || [];

  return (
    <AnimatedContainer>
      <div className="mb-8 flex flex-col items-center p-6">
        {/* Pricing Cards */}
        <div className="max-w-f4xl grid grid-cols-1 gap-14 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </AnimatedContainer>
  );
}
