import restaurantIcon from "../photos/restaurant.png";
import retailIcon from "../photos/retail.png";
import servicesIcon from "../photos/services.png";
import HomeSolutionCard from "./HomeSolutionCard";
import WhyLimm from "./WhyLimm";
import HardwareDevices from "./HardwareDevices";

export default function HomeFindSection() {
  return (
    <section className="px-7 lg:px-14 pt-16">
      <div className="mb-[100px] max-w-[1000px] mx-auto">
        <div className="text-center mb-11">
          <p className="text-[18px] text-[#AAB7C9]">SEGMENTS</p>
          <p className="text-[#001738]">
            Find the Solution that best fits your Business
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <HomeSolutionCard
            src={restaurantIcon}
            bg="#001738"
            color="white"
            text="For Restaurant"
            arrowColor="white"
            btnColor="#006DF0"
            btnTextColor="white"
          />
          <HomeSolutionCard
            src={retailIcon}
            bg="#DFECFF"
            color="black"
            text="For Retail"
            arrowColor="black"
            btnColor="#001738"
            btnTextColor="white"
          />
          <HomeSolutionCard
            src={servicesIcon}
            bg="#356BB7"
            color="white"
            text="For Services"
            arrowColor="white"
            btnColor="#E2E4E8"
            btnTextColor="black"
          />
        </div>
        <WhyLimm />
      </div>
      <HardwareDevices />
    </section>
  );
}
