import { cookies } from "next/headers";
import AnimatedContainer from "@/components/AnimatedContainer";
import restaurantIcon from "@/photos/restaurant.png";
import retailIcon from "@/photos/retail.png";
import servicesIcon from "@/photos/services.png";
import HardwareDevices from "@/components/HardwareDevices";
import SolutionCard from "./SolutionCard";
import { texts, header } from "@/data/findSolution.js";
import WhyLimm from "@/components/WhyLimm";

export default async function HomeFindSection() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const textData = texts[language];
  const headerData = header[language];

  const restaurantText = textData.restaurant;
  const retailText = textData.retail;
  const servicesText = textData.services;

  return (
    <section className="px-3 pt-16 lg:px-20">
      <div className="mx-auto mb-[100px] max-w-[1150px]">
        <div className="mb-11 text-center">
          <p className="text-[18px] font-semibold">{headerData.heading}</p>
          <p className="text-foreground">{headerData.subHeading}</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          <SolutionCard
            src={restaurantIcon}
            bg="#001738"
            color="white"
            title={restaurantText.heading}
            identifier="restaurant"
            text={restaurantText.subText}
            arrowColor="white"
            btnColor="#006DF0"
            btnTextColor="white"
          />
          <SolutionCard
            src={retailIcon}
            bg="#DFECFF"
            color="black"
            title={retailText.heading}
            identifier="retail"
            text={retailText.subText}
            arrowColor="black"
            btnColor="#001738"
            btnTextColor="white"
          />
          <SolutionCard
            src={servicesIcon}
            bg="#356BB7"
            color="white"
            title={servicesText.heading}
            identifier="services"
            text={servicesText.subText}
            arrowColor="white"
            btnColor="#E2E4E8"
            btnTextColor="black"
          />
        </div>
      </div>
    </section>
  );
}
