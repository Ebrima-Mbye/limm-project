import Image from "next/image";
const womanSmiling = "/images/woman-in-kitchen.png";

export default function WhyLimm() {
  // This element is only visible on small and middle screens
  return (
    <div className="mt-12 flex flex-col items-center">
      <p className="text-center text-xl font-semibold">WHY LIMM</p>
      <div>
        <p className="mb-10 text-center text-2xl font-medium">
          Unlocking your business potential
        </p>
      </div>
      <div className="px-5 text-xl md:px-14">
        <div>
          <p className="mb-5 font-semibold leading-[23.5px]">
            No more juggling between different systems
          </p>
        </div>
        <div>
          <p className="text-[18px] leading-[19.5px]">
            Handle every aspect of your business, from processing payments and
            managing stock to overseeing staff and handling salaries.
          </p>
        </div>
        <hr className="border-3 mb-10 mt-7 w-full border-[#A7A7A7]" />
        <div>
          <p className="mb-4 font-semibold leading-[19.5px]">
            Achieve financial clarity
          </p>
          <p className="mb-12 text-[18px] leading-[19.5px]">
            Take the stress out of accounting with our comprehensive financial
            tools. Easily track your sales, monitor business data, and manage
            your accounting—all in one place.
          </p>
        </div>
        <div className="mt-5">
          <Image
            src={womanSmiling}
            alt="smiling woman"
            width={1200}
            height={200}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
