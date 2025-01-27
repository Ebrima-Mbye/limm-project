import Image from "next/image";
import image1 from "@/photos/man-calculating.png";
import image2 from "@/photos/woman-in-clothing-shop.png";
import bookIcon from "@/photos/bookkeeping-icon.svg";
import inventoryIcon from "@/photos/inventory-icon.svg";
import { cookies } from "next/headers";
import { pageHeading, bottomText, cards } from "@/data/hero.js";
import { getText2 } from "@/data/bookADemo.js";

export default async function HomeHero() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const heading = pageHeading(language);
  const cardsData = cards[language];
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
        <div className="border-red-400 border my-10 hidden gap-6 rounded-[20px] md:flex">
          <div className="flex h-auto max-w-[300px] flex-col justify-between overflow-y-clip rounded-[20px] bg-cyan-200 p-6 text-cyan-700 md:h-[350px] lg:h-auto">
            <p className="mb text-xl font-medium">{cardsData[0].title}</p>
            <div className="flex h-12 flex-1 items-center">
              <Image src={bookIcon} alt="bookkeeping icon" className="" />
            </div>
            <p className="text-[18px]">{cardsData[0].text}</p>
          </div>
          <div className="">
            <Image
              src={image1}
              alt="man calculating"
              className="mx-auto hidden h-full lg:block"
            />
          </div>
          <div className="flex h-auto max-w-[300px] flex-col justify-between overflow-y-clip rounded-[20px] bg-orange-300 p-6 text-orange-700 md:h-[350px] lg:h-auto">
            <p className="mb text-xl font-medium">{cardsData[1].title}</p>
            <div className="flex h-12 flex-1 items-center">
              <Image src={inventoryIcon} alt="inventory icon" className="" />
            </div>
            <p className="text-[18px]">{cardsData[1].text}</p>
          </div>
          <div className="">
            <Image
              src={image2}
              alt="woman in clothing shop"
              className="hidden h-full rounded-r-[20px] lg:block"
            />
          </div>
        </div>
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
