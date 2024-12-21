import Image from "next/image";
import mainImage from "../photos/pricing/stylish-black-girl.png";
import PlanFrequencySelection from "./components/PlanFrequencySelection";
import PriceTree from "./components/PriceTree";
import LimmPerks from "./components/LimmPerks";
import { plansForMobileApp, plansForTabletApp } from "./components/plans";
import BlackFooter from "../components/BlackFooter";

export default function Page() {
  const supportedCurrencies = ["XOF", "GMD", "USD", "EUR"];

  return (
    <section className="pt-32">
      <div className="w-full px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row  mb-10">
          <div className="flex-1 mb-4">
            <p className="text-center md:text-start font-semibold md:font-medium text-4xl md:text-[65px] md:leading-[70px]">
              Pricing that Fits your Business needs
            </p>
          </div>
          <div className="flex-1">
            <p className="text-2xl md:text-[32px] leading-[38.4px]">
              Tailored monthly subscriptions for maximum value. Need help for
              better decision making? Book a Demo.
            </p>
          </div>
        </div>

        <div className="w-full mb-10">
          <Image src={mainImage} alt="stylish black woman" className="" />
        </div>

        <div className="mb-12 flex gap-3 justify-center items-center">
          <PlanFrequencySelection />
          <div className="mx-2 md:mx-6 w-[-1px] border-gray-500 h-12 border-[1px]"></div>
          <p className="text-[18px] leading-[21.6px] mr-[-6px]">Currency: </p>
          <select
            id="currency-selector"
            className="border-black border-2 text-center font-bold px-2 py-2 rounded-full"
          >
            {supportedCurrencies.map((currency, index) => (
              <option key={index} value={currency} className="">
                {currency}
              </option>
            ))}
          </select>
        </div>

        <PriceTree appType="MOBILE APP" plans={plansForMobileApp} />
        <PriceTree appType="POS TABLET APP" plans={plansForTabletApp} />

        <div>
          <h3 className="mt-24 text-2xl md:text-4xl lg:text-[45px] leading-[55.2px] font-medium">
            All Limm plans come with...
          </h3>

          <LimmPerks />
        </div>
      </div>

      <BlackFooter />
    </section>
  );
}
