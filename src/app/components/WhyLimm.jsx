import Image from "next/image";
import womanSmiling from "../photos/smiling-woman-in-kitchen.png";

export default function WhyLimm() {
  // This element is only visible on small and middle screens
  return (
    <div className="lg:hidden mt-12 flex flex-col items-center">
      <p className="font-medium text-center text-xl text-[#A7A7A7]">WHY LIMM</p>
      <div>
        <p className="text-center font-medium text-2xl mb-10">
          Unlocking your business potential
        </p>
      </div>
      <div className="px-5 md:px-14 text-xl">
        <div>
          <p className="mb-5 text-[#767676] font-semibold leading-[23.5px]">
            No more juggling between different systems
          </p>
        </div>
        <div>
          <p className="leading-[19.5px] text-[18px]">
            Handle every aspect of your business, from processing payments and
            managing stock to overseeing staff and handling salaries.
          </p>
        </div>
        <hr className="mt-7 mb-10 border-3 w-full border-[#A7A7A7]" />
        <div>
          <p className="font-semibold leading-[19.5px] mb-4">
            Achieve financial clarity
          </p>
          <p className="leading-[19.5px] mb-12 text-[18px]">
            Take the stress out of accounting with our comprehensive financial
            tools. Easily track your sales, monitor business data, and manage
            your accounting—all in one place.
          </p>
        </div>
        <div className="mt-5">
          <Image src={womanSmiling} alt="smiling woman" className="w-full" />
        </div>
      </div>
    </div>
  );
}
