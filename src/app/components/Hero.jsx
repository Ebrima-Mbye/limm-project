import Image from "next/image";
import image1 from "../photos/man-calculating.png";
import image2 from "../photos/woman-in-clothing-shop.png";
import bookIcon from "../photos/bookkeeping-icon.svg";
import inventoryIcon from "../photos/inventory-icon.svg";
import { cookies } from "next/headers";
import { pageHeading } from "../data/hero.js"

export default async function HomeHero() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const cards = {
    en: [
      {
        title: "Bookkeeping",
        text: "Ditch the spreadsheet and messy records. Limm automates bookkeeping, saving you time and ensuring accuracy.",
      },
      {
        title: "Inventory Management",
        text: "Limm&apos;s smart inventory management keeps you in control, minimizing stockouts and optimizing ordering.",
      },
    ],
    fr: [
      {
        title: "Comptabilité",
        text: "Abandonnez les feuilles de calcul et les registres désordonnés. Limm automatise la comptabilité, vous faisant gagner du temps et garantissant la précision.",
      },
      {
        title: "Gestion des stocks",
        text: "La gestion intelligente des stocks de Limm vous garde maître de la situation, minimisant les ruptures de stock et optimisant les commandes.",
      },
    ],
    es: [
      {
        title: "Contabilidad",
        text: "Deja atrás las hojas de cálculo y los registros desordenados. Limm automatiza la contabilidad, ahorrándote tiempo y garantizando precisión.",
      },
      {
        title: "Gestión de inventarios",
        text: "La gestión inteligente de inventarios de Limm te mantiene en control, minimizando las faltas de stock y optimizando los pedidos.",
      },
    ],
  };

  const heading = pageHeading(language);
  const cardsData = cards[language];
  return (
    // <section className="lg:h-[97vh] px-6 md:px-12 pt-20 pb-28 md:pb-4 mx-4 overflow-y-clip bg-gray-100 rounded-lg">
    <section className="mt-0 min-h-screen overflow-y-clip rounded-lg bg-gray-100 px-3 pb-28 pt-20 md:px-12 md:pb-8 lg:mx-4 lg:mt-4">
      <div className="">
        <div className="mb-12 mt-16 md:mb-6">
          <p className="text-start text-6xl font-medium leading-[4rem] text-gray-800">
            {heading}
          </p>
        </div>
        <div className="my-10 hidden gap-6 rounded-[20px] md:flex">
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
            One Platform for Payments, Inventory, and Staff Management for SMWs
          </p>
          <p className="text-slate-500">
            Built for Africa, powered by technology. Limm is your one-stop shop
            for <br /> streamlining operations, growing your business, and
            thriving in the digital age.
          </p>
        </div>
        <div className="mt-16 md:hidden lg:mt-0">
          <button className="ml-4 text-nowrap rounded-[50px] bg-slate-500 px-6 py-3 text-[20px] text-white lg:px-3 lg:py-1 lg:text-[12px]">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
