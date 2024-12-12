import Image from "next/image";
import restaurantIcon from "../photos/restaurant.png";
import retailIcon from "../photos/retail.png";
import servicesIcon from "../photos/services.png";
import HomeSolutionCard from "./HomeSolutionCard";
import scannerWithBg from "../photos/scanner-with-bg.png";
import bluetoothPrinter from "../photos/bluetooth-printer.png"

export default function HomeFindSection() {
  return (
    <section className="px-14">
      <div className="mb-[100px] h-[300px] max-w-[1000px] mx-auto">
        <div className="text-center mb-11">
          <p className="text-[18px] text-[#AAB7C9]">SEGMENTS</p>
          <p className="text-[#001738]">
            Find the Solution that best fits your Business
          </p>
        </div>
        <div className="h-[200px] grid gap-8 grid-cols-1 md:grid-cols-3">
          <HomeSolutionCard
            src={restaurantIcon}
            bg="#001738"
            color="white"
            text="For Restaurant"
          />
          <HomeSolutionCard
            src={retailIcon}
            bg="#DFECFF"
            color="black"
            text="For Retail"
          />
          <HomeSolutionCard
            src={servicesIcon}
            bg="#356BB7"
            color="white"
            text="For Services"
          />
        </div>
      </div>
      <div>
        <div className="text-center mb-12">
          <p className="text-[18px] text-[#AAB7C9]">HARDWARE DEVICES</p>
          <p className="text-[#001738]">
            Manage all aspects of your Business in one place
          </p>
        </div>
        <div className="flex gap-24 flex-col lg:flex-row h-[580px] px-12 py-12 border-gray-200 border-2 rounded-[20px]">
          <div className="flex-1 h-full">
            <p className="text-2xl font-bold text-[#325bb7]">LIMM REGISTER</p>
            <p className="text-[19px] my-2">
              Our complete user-friendly point-of-sale Register machine with a
              touch screen, easy-to-use software options and built-in payments.
            </p>
            <hr className="mt-2 mb-3"/>
            <p className="text-xl font-semibold mt-4 mb-1">Touch Screen</p>
            <p className="font-light text-[#AAB7C9] my-2">
              Intuitive interface with a responsive touch screen, enhancing user
              interaction and operational efficiency.
            </p>
            <hr className="mt-2 mb-3"/>
            <p className="text-xl font-semibold">QR Code & Bar Code Scanner</p>
            <p className="my-2 text-[#AAB7C9]">
              Advanced scanning capabilities for quick and accurate reading of
              QR and bar codes, streamlining the checkout process.
            </p>
            <hr className="mt-2 mb-3"/>
            <p className="text-xl font-semibold">Thermal Receipt Printer</p>
            <p className="my-2 text-[#AAB7C9]">
              Reliable and fast printing of receipts with a thermal printer that
              ensures clear, long-lasting prints.
            </p>
            <div className="flex gap-3 items-center mt-10 ">
                <button className="rounded-full px-4 py-2 text-white bg-[#006df0]">Order now</button>
                <p>for <span className="text-xl font-semibold">250.000 F</span></p>
            </div>
          </div>
          <div className="flex-1 h-full">
            <Image
              src={scannerWithBg}
              alt="Scanner with background"
              className="h-full mx-auto"
            />
          </div>
        </div>
        <div className="mt-[100px] flex gap-24 flex-col-reverse lg:flex-row-reverse h-[580px] px-12 py-12 border-gray-200 border-2 rounded-[20px]">
          <div className="flex-1 h-full">
            <p className="text-2xl font-bold text-[#325bb7]">LIMM BLUETOOTH PRINTER</p>
            <p className="text-[19px] my-2">
            Mini Portable bluetooth receipt printer. Generate instant, receipts and labels for your busioness by connecting to the mobile app.
            </p>
            <hr className="mt-2 mb-3"/>
            <p className="text-xl font-semibold mt-4 mb-1">Portable</p>
            <p className="font-light text-[#AAB7C9] my-2">
            Fits in your pocket or bag, allowing you to print receipts anywhere, anytime.
            </p>
            <hr className="mt-2 mb-3"/>
            <p className="text-xl font-semibold">Fast and efficient</p>
            <p className="my-2 text-[#AAB7C9]">
            Prints receipts instantly with minimal wait time.
            </p>
            <hr className="mt-2 mb-3"/>
            <p className="text-xl font-semibold">Wireless connection</p>
            <p className="my-2 text-[#AAB7C9]">
            Connects seamlessly to your smartphone or tablet via Bluetooth for easy printing.
            </p>
            <div className="flex gap-3 items-center mt-10 ">
                <button className="rounded-full px-4 py-2 text-white bg-[#006df0]">Order now</button>
                <p>for <span className="text-xl font-semibold">250.000 F</span></p>
            </div>
          </div>
          <div className="flex-1 h-full">
            <Image
              src={bluetoothPrinter}
              alt="Bluetooth Printer"
              className="h-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
