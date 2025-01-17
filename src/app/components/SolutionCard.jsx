import Image from "next/image";
import Link from "next/link";

export default function HomeSolutionCard(props) {
  const { bg, color, btnColor, btnTextColor, title, identifier, text } = props;
  function getArrow() {
    if (identifier.toLowerCase() === "restaurant") {
      return "/images/restaurant_arrow.svg";
    } else if (identifier.toLowerCase() === "retail") {
      return "/images/retail_arrow.svg";
    } else if (identifier.toLowerCase() === "services") {
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
        <div className="mb-4 mt-0 flex flex-col justify-between lg:mb-10 lg:mt-3 lg:flex-row lg:items-center lg:justify-start">
          <Image
            src={getArrow(title)}
            alt={title}
            width={35}
            height={30}
            className=""
          />
        </div>
        <div className="text-[26px] font-medium lg:mb-0 lg:h-8">{title}</div>
        <div className="mt-16 flex flex-col justify-between text-[16px]">
          <p className="mb-12 text-sm leading-relaxed">{text}</p>
          <div>
            <Link
              href="/"
              className="rounded-[20px] px-4 py-3 leading-[28.5px]"
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
