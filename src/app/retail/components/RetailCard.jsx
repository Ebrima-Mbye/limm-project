import Image from "next/image";
import Link from "next/link";
import arrow from "../../photos/restaurants/arrow.png";
import layer1 from "../../photos/retail/layer-1.png";
import layer2 from "../../photos/retail/layer-2.png";
import checkoutImage from "../../photos/retail/checkout.png";

export default function RetailCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.reversed ? "row-reverse" : "row",
      }}
      //   grid gap-8 grid-cols-1 lg:grid-cols-2
      className="gap-8 mt-24"
    >
      <div className="flex-1">
        <div className="relative">
          <Image src={props.mainImage} alt="man calculating" className="" />
          {props.withSecondImage ? (
            <div className="absolute bottom-[-80px] right-[-45px] flex flex-col">
              <Image src={layer1} alt="layer 1" className="mb-[-20px]" />
              <Image src={layer2} alt="layer 2" className="mb-[-20px]" />
              <Image src={checkoutImage} alt="Checkout image" className="" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col px-2 justify-center items-start">
        <h3 className="font-semibold text-2xl">{props.heading}</h3>
        <p className="leading-[38px] text-[18px] font-thin mt-4 mb-5">
          {props.text}
        </p>
        <Link href="/" className="flex gap-2">
          <span className="text-[#356BB7]">
            Find the plan that best fits your restaurant
          </span>
          <Image src={arrow} alt="Arrow Image" className="" />
        </Link>
      </div>
    </div>
  );
}
