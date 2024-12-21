import Image from "next/image";
import Link from "next/link";
import arrow from "../../photos/restaurants/arrow.png";
import { useEffect, useState } from "react";

export default function BusinessCard(props) {
  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    //Check if the screen width is greater than 800px
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 800);
    };

    // Run the check on component mount
    handleResize();

    // Add an event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getFlexDirection(id) {
    if (id === "1" && isWideScreen) {
      return "row-reverse";
    } else if (!isWideScreen) {
      return "column";
    }
  }
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
            <Image
              src={phoneImage}
              alt="image of phone"
              className="absolute top-[-100px] left-[-120px]"
            />
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
        <Link href="/" className="flex gap-2 items-center">
          <span className="text-[#356BB7]">
            Find the plan that best fits your restaurant
          </span>
          <Image
            src={arrow}
            alt="Arrow Image"
            className="max-w-[33px] max-h-[11px]"
          />{" "}
        </Link>
      </div>
    </div>
  );
}
