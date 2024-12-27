import Image from "next/image";
import image1 from "../photos/man-calculating.png";
import image2 from "../photos/woman-in-clothing-shop.png";
import bookIcon from "../photos/bookkeeping-icon.svg";
import inventoryIcon from "../photos/inventory-icon.svg";

export default function HomeHero() {
  return (
    // <section className="lg:h-[97vh] px-6 md:px-12 pt-20 pb-28 md:pb-4 mx-4 overflow-y-clip bg-gray-100 rounded-lg">
    <section className="px-6 md:px-12 pt-20 pb-28 md:pb-8 mx-4 overflow-y-clip bg-gray-100 rounded-lg">
      {/* <HomeHeader /> */}
      <div className="">
        <div className="mt-16 mb-12 md:mb-6">
          <p className="text-6xl leading-[4rem] font-medium text-start text-gray-800">
            Empowering Businesses with Innovative <br /> Solutions.
          </p>
        </div>
        <div className="md:flex h-[300px] gap-6 my-10 hidden rounded-[10px]">
          <div
            className="max-w-[300px] rounded-lg overflow-y-clip 
              px-3 py-4 bg-cyan-200 text-cyan-700 flex flex-col justify-between"
          >
            <p className="mb text-xl font-medium">Bookkeeping</p>
            <div className="flex-1 flex items-center h-12">
              <Image src={bookIcon} alt="bookkeeping icon" className="" />
            </div>
            <p className="text-[18px]">
              Ditch the spreadsheet and messy records. Limm automates
              bookkeeping, saving you time and ensuring accuracy.
            </p>
          </div>
          <div className="">
            <Image
              src={image1}
              alt="man calculating"
              className="h-full mx-auto"
            />
          </div>
          <div
            className="max-w-[300px] rounded-lg overflow-y-clip 
              px-3 py-4 bg-orange-300 text-orange-700 flex flex-col justify-between"
          >
            <p className="mb text-xl font-medium">Inventory Management</p>
            <div className="flex-1 flex items-center h-12">
              <Image src={inventoryIcon} alt="inventory icon" className="" />
            </div>
            <p className="text-[18px]">
              Limm&apos;s smart inventory management keeps you in control,
              minimizing stockouts and optimizing ordering.
            </p>
          </div>

          <div className="">
            <Image
              src={image2}
              alt="woman in clothing shop"
              className="h-full mx-auto rounded-r-[20px]"
            />
          </div>
        </div>
        <div className="">
          <p className="text-start text-[20px] md:text-[22px] leading-[24.5px] font-medium mb-1">
            One Platform for Payments, Inventory, and Staff Management for SMWs
          </p>
          <p className="text-slate-500">
            Built for Africa, powered by technology. Limm is your one-stop shop
            for <br /> streamlining operations, growing your business, and
            thriving in the digital age.
          </p>
        </div>
        <div className="md:hidden mt-16 lg:mt-0 ">
          <button className="ml-4 text-[20px] lg:text-[12px] bg-slate-500 text-white px-6 py-3 lg:px-3 lg:py-1 text-nowrap rounded-[50px]">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
