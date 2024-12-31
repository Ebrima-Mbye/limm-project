import Image from "next/image";
import Link from "next/link";

export default function HomeSolutionCard(props) {
  const { bg, color, btnColor, btnTextColor, title } = props;
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
        }}
        className="flex flex-col justify-between rounded-[20px] px-6 py-7 lg:mb-0"
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
        </div>
        <div className="lg:h-8 lg:mb-0 text-[26px] font-medium">{title}</div>
        <div className="text-[16px] mt-16 flex flex-col justify-between">
          <p className="mb-12 text-sm font-mono">
            Forget tangled spreadsheets and messy inventory. Limm streamlines
            your restaurant operations from head to tail. Manage ingredients
            with real-time inventory, analyze customer data for winning menu
            tweaks.
          </p>
          <div>
            <Link
              href="/"
              className="px-4 py-3 leading-[28.5px] rounded-[20px]"
              style={{
                backgroundColor: btnColor,
                color: btnTextColor,
              }}
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
