import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: 400, subsets: ["latin"] });

export default function HomeSolutionCard(props) {
  const { bg, color, arrowColor, btnColor, btnTextColor, src, title, text } =
    props;
  function getArrow() {
    if (title.toLowerCase() === "for restaurants") {
      return "/images/restaurant_arrow.svg";
    } else if (title.toLowerCase() === "for retail") {
      return "/images/retail_arrow.svg";
    } else if (title.toLowerCase() === "for services") {
      return "/images/service_arrow.svg";
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: bg,
          color: color,
          fontFamily: roboto,
        }}
        className="min-h-[400px] lg:min-h-[200px] flex flex-col rounded-[20px] px-10 py-5 lg:mb-0"
      >
        {/* <div className="flex-1 flex flex-col justify-between lg:justify-start lg:flex-row lg:items-center"> */}
        <div className="mt-0 lg:mt-3 mb-4 lg:mb-10 flex flex-col justify-between lg:justify-start lg:flex-row lg:items-center">
          <Image
            src={getArrow(title)}
            alt={title}
            width={35}
            height={30}
            className=""
          />
          {/* <Image src={src} alt={text} className="w-[70px] hidden lg:block" /> */}
        </div>
        <div className="lg:h-8 lg:mb-0 text-[26px] font-medium">{title}</div>
        {/* <div className="lg:hidden text-[16px]"> */}
        <div className="text-[16px] mt-16">
          <p className="mb-12 text-sm">
            Forget tangled spreadsheets and messy inventory. Limm streamlines
            your restaurant operations from head to tail. Manage ingredients
            with real-time inventory, analyze customer data for winning menu
            tweaks.
          </p>
          <button
            className="px-4 py-2 leading-[28.5px] rounded-[20px]"
            style={{
              backgroundColor: btnColor,
              color: btnTextColor,
            }}
          >
            Book Demo
          </button>
        </div>
      </div>
    </>
  );
}