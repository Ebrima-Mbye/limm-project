import Image from "next/image";
import image1 from "../photos/man-calculating.png";
import image2 from "../photos/woman-in-clothing-shop.png";
import bookIcon from "../photos/bookkeeping-icon.svg";
import inventoryIcon from "../photos/inventory-icon.svg";

export default function HomeHero() {
  return (
    <section className="px-12 pt-20 pb-4 mx-4 overflow-y-clip bg-gray-100 rounded-lg">
      {/* <HomeHeader /> */}
      <div className="">
        <div className="mt-16 mb-6">
          <p className="text-5xl font-medium text-start">
            Empowering Businesses with Innovative <br /> Solutions.
          </p>
        </div>
        <div className="flex h-[300px] gap-3 mb-6 ">
          <div className="flex-[2] rounded-lg overflow-y-clip px-3 py-4 bg-cyan-200 text-cyan-600 ">
            <p className="mb-14 text-xl font-medium">Bookkeeping</p>
            <Image src={bookIcon} alt="bookkeeping icon" className="h-12" />
            <p className="mt-8 text-[16px]">
              Ditch the spreadsheet and messy records. Limm automates
              bookkeeping, saving you time and ensuring accuracy.
            </p>
          </div>
          <div className="flex-[3] ">
            <Image
              src={image1}
              alt="man calculating"
              className="h-full mx-auto"
            />
          </div>
          <div className="flex-[2] rounded-lg overflow-y-clip px-3 py-4 bg-orange-300 text-orange-500 ">
            <p className="mb-14 text-xl font-medium">Inventory Management</p>
            <Image src={inventoryIcon} alt="inventory icon" className="h-12" />
            <p className="mt-8 text-[16px]">
              Limm&apos;s smart inventory management keeps you in control, minimizing
              stockouts and optimizing ordering.
            </p>
          </div>
          <div className="flex-[3] ">
            <Image
              src={image2}
              alt="woman in clothing shop"
              className="h-full mx-auto"
            />
          </div>
        </div>
        <div className="text-[14px]">
          <p className="text-start font-bold mb-1">
            One Platform for Payments, Inventory, and Staff Management for SMWs
          </p>
          <p className="text-slate-400">
            Built for Africa, powered by technology. Mimm is nyour one-stop shop
            for <br /> streamlining operations, growing your business, and
            thriving in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
}
