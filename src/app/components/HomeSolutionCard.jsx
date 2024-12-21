import Image from "next/image";
import whiteArrow from "../photos/find-solutions/white-arrow.png";
import blackArrow from "../photos/find-solutions/black-arrow.png";

export default function HomeSolutionCard(props) {
  const { bg, color, arrowColor, btnColor, btnTextColor, src, text } = props;

  return (
    <>
      <div
        style={{
          backgroundColor: bg,
          color: color,
        }}
        className="min-h-[400px] lg:min-h-[200px] flex flex-col rounded-[20px] p-5 lg:mb-0"
      >
        {/* <div className="flex-1 flex flex-col justify-between lg:justify-start lg:flex-row lg:items-center"> */}
        <div className="mt-0 lg:mt-3 mb-4 lg:mb-12 flex flex-col justify-between lg:justify-start lg:flex-row lg:items-center">
          <Image
            src={arrowColor === "white" ? whiteArrow : blackArrow}
            alt={text}
            className="lg:hidden md:block"
          />
          <Image src={src} alt={text} className="w-[70px] hidden lg:block" />
        </div>
        <div className="lg:h-8 mb-16 lg:mb-0 text-[26px] font-medium">
          {text}
        </div>
        <div className="lg:hidden text-[16px]">
          <p className="mb-12">
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
