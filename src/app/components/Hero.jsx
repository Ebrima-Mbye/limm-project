import { cookies } from "next/headers";
import { pageHeading, bottomText } from "@/data/hero.js";
import { getText2 } from "@/data/bookADemo.js";
import HeroCards from "@/components/HeroCards";

export default async function HomeHero() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const heading = pageHeading(language);
  const bottomTextData = bottomText[language];
  const buttonText = getText2[language];

  return (
    <section className="mt-0 min-h-screen overflow-y-clip rounded-lg bg-gray-100 px-3 pb-28 pt-20 md:px-12 md:pb-8 lg:mx-4 lg:mt-4">
      <div className="">
        <div className="mb-12 mt-16 md:mb-6">
          <p className="text-start text-6xl font-medium leading-[4rem] text-gray-800">
            {heading}
          </p>
        </div>
        <HeroCards className="mb-10" />
        <div className="">
          <p className="mb-1 text-start text-[20px] font-medium leading-[24.5px] md:text-[22px]">
            {bottomTextData.heading}
          </p>
          <p className="text-slate-500">{bottomTextData.subText}</p>
        </div>
        <div className="mt-16 md:hidden lg:mt-0">
          <button className="ml-4 text-nowrap rounded-[50px] bg-slate-500 px-6 py-3 text-[20px] text-white lg:px-3 lg:py-1 lg:text-[12px]">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
