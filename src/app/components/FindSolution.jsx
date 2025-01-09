import AnimatedContainer from "../components/AnimatedContainer";
import restaurantIcon from "../photos/restaurant.png";
import retailIcon from "../photos/retail.png";
import servicesIcon from "../photos/services.png";
import HardwareDevices from "./HardwareDevices";
import SolutionCard from "./SolutionCard";
import WhyLimm from "./WhyLimm";

export default function HomeFindSection() {
  const restaurantText =
    "Forget tangled spreadsheets and messy inventory! Limm streamlines your restaurant operations from head to tail. Manage ingredients with real-time inventory, analyze customer data for winning menu tweaks.";
  const retailText =
    "Say goodbye to stockouts and lost sales! Track inventory effortlessly and boost sales with data-driven insights. Whether you're managing a bustling boutique or a corner shop, Limm empowers you to run your business smarter, not harder.";
  const servicesText =
    "Drowning in paperwork and missed invoices? Limm is your service business superhero! Manage your business with ease, track time accurately, and bill like a boss. Gain valuable insights to improve client satisfaction and watch your service business soar.";
  return (
    <section className="px-3 pt-16 lg:px-20">
      <div className="mx-auto mb-[100px] max-w-[1150px]">
        <div className="mb-11 text-center">
          <p className="text-[18px] font-semibold">SEGMENTS</p>
          <p className="text-foreground">
            Find the Solution that best fits your Business
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          <SolutionCard
            src={restaurantIcon}
            bg="#001738"
            color="white"
            title="For Restaurants"
            text={restaurantText}
            arrowColor="white"
            btnColor="#006DF0"
            btnTextColor="white"
          />
          <SolutionCard
            src={retailIcon}
            bg="#DFECFF"
            color="black"
            title="For Retail"
            text={retailText}
            arrowColor="black"
            btnColor="#001738"
            btnTextColor="white"
          />
          <SolutionCard
            src={servicesIcon}
            bg="#356BB7"
            color="white"
            title="For Services"
            text={servicesText}
            arrowColor="white"
            btnColor="#E2E4E8"
            btnTextColor="black"
          />
        </div>
      </div>
      <AnimatedContainer>
        <WhyLimm />
      </AnimatedContainer>
      <AnimatedContainer>
        <HardwareDevices />
      </AnimatedContainer>
    </section>
  );
}
