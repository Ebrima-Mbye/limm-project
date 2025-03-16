import Image from "next/image";
const mainImage = "/images/pricing/stylish-black-girl.png";
import PlanFrequencySelection from "./components/PlanFrequencySelection";
import PriceTree from "./components/PriceTree";
import LimmPerks from "./components/LimmPerks";
import CurrencySelector from "./components/CurrencySelector";
import { getPricingPlans } from "../data/pricingPage";
import BlackFooter from "../components/BlackFooter";
import { header } from "@/data/pricing.js";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const pricingPlans = getPricingPlans[language];
  // const mobilePlans = pricingPlans.filter(plan => plan.planCategory === "Mobile app");
  // const posPlans = pricingPlans.filter(plan => plan.planCategory === "POS");

  const headerData = header[language];
  return (
    <section className="pt-32">
      <div className="w-full px-4 md:px-12 lg:px-24">
        <div className="mb-10 flex flex-col items-center gap-1 lg:flex-row">
          <div className="mb-4 flex-1">
            <p className="text-center text-4xl font-bold md:text-start md:text-[60px] md:leading-[65px] lg:text-[65px] lg:font-medium lg:leading-[70px]">
              {headerData.heading}
            </p>
          </div>
          <div className="flex-1">
            <p className="">{headerData.subHeading}</p>
          </div>
        </div>

        <div className="mb-10 w-full">
          <Image
            src={mainImage}
            alt="stylish black woman"
            className=""
            width={2000}
            height={100}
          />
        </div>

        <div className="mb-12 flex items-center justify-center gap-3">
          <PlanFrequencySelection />
          <div className="mx-2 h-12 w-[-1px] border-[1px] border-gray-500 md:mx-6"></div>
          <CurrencySelector />
        </div>

        <PriceTree appType="MOBILE APP" plans={pricingPlans} />
        {/* <PriceTree appType="POS" plans={posPlans} /> */}

        <div>
          <LimmPerks />
        </div>
      </div>

      <BlackFooter />
    </section>
  );
}
