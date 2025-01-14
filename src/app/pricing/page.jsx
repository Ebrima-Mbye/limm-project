import Image from "next/image";
const mainImage = "/images/pricing/stylish-black-girl.png";
import PlanFrequencySelection from "./components/PlanFrequencySelection";
import PriceTree from "./components/PriceTree";
import LimmPerks from "./components/LimmPerks";
import CurrencySelector from "./components/CurrencySelector";
import { plansForMobileApp, plansForTabletApp } from "../data/pricePlans.js";
import BlackFooter from "../components/BlackFooter";
import { CurrencyProvider } from "@/components/CurrencyProvider";

export default function Page() {
  return (
    <CurrencyProvider>
      <section className="pt-32">
        <div className="w-full px-4 md:px-12 lg:px-24">
          <div className="mb-10 flex flex-col items-center gap-1 lg:flex-row">
            <div className="mb-4 flex-1">
              <p className="text-center text-4xl font-semibold md:text-start md:text-[60px] md:font-medium md:leading-[65px] lg:text-[65px] lg:leading-[70px]">
                Pricing that Fits your Business needs
              </p>
            </div>
            <div className="flex-1">
              <p className="">
                Tailored monthly subscriptions for maximum value. Need help for
                better decision making? Book a Demo.
              </p>
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
            <p className="mr-[-6px]">Currency: </p>
            <CurrencySelector />
          </div>

          {/* <CurrencyProvider value={selectedCurrency}> */}
          <PriceTree appType="MOBILE APP" plans={plansForMobileApp} />
          <PriceTree appType="POS TABLET APP" plans={plansForTabletApp} />
          {/* </CurrencyProvider> */}

          <div>
            <h3 className="mt-24 text-xl font-medium leading-[55.2px] md:text-4xl lg:text-3xl">
              All Limm plans come with...
            </h3>

            <LimmPerks />
          </div>
        </div>

        <BlackFooter />
      </section>
    </CurrencyProvider>
  );
}
