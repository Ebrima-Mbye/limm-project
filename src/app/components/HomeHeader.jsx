import Image from "next/image";
import logo from "../photos/limm.logo.logo 1.png";
import Link from "next/link";

export default function HomeHeader() {
  const leftNavLinks = [
    {
      text: "Retail",
      href: "/retail",
    },
    {
      text: "Restaurants",
      href: "/restaurants",
    },
    {
      text: "Services",
      href: "/services",
    },
  ];
  return (
    <div
      id="header"
      className=" h-[75vh] w-[100vw] flex flex-col md:flex-row items-start md:justify-between md:items-center text-[#9A9FAD] text-[24px] leading-[28.8px]
       font-medium px-6 fixed bg-white rounded-lg top-0 left-0 right-0 md:h-12 md:w-[92%] 
       md:top-8 md:left-[4%] md:right-[4%] order-4 border-gray-400 shadow-lg md:shadow-none"
    >
      {/* // <div className="bg-white w-full rounded-lg flex justify-between items-center px-6"> */}
      <div className="p-2 flex justify-center md:items-center pt-6 md:pt-0 h-[50px] mb-10 md:mb-0 md:h-full">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-full md:w-2/3" />
        </Link>
      </div>
      <div className="h-full flex-1 md:text-[13px] w-full md:w-auto md:items-center">
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between py-8 md:py-0 h-full w-full md:w-auto">
          <ul className="flex items-center flex-col md:flex-row w-full md:w-auto gap-6 md:gap-1 md:text-[16px]">
            {leftNavLinks.map((link, index) => (
              <li
                key={index}
                className="md:mr-8 block w-full
                           md:inline text-start px-3"
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>

          <div className="flex md:justify-center md:items-center flex-col md:flex-row md:text-[16px] w-full md:w-auto gap-3">
            <Link
              className="block md:text-center text-start px-3 md:inline"
              href="/pricing"
            >
              Pricing
            </Link>
            {/* Vertical Line */}
            <div className="md:w-[2px] w-0 h-0 md:h-6 bg-slate-100 md:mx-1"></div>
            <Link
              className="block md:text-center text-start px-3 md:inline"
              href="/login"
            >
              Login
            </Link>
            <div className="mt-3">
              <button className="ml-4 text-[12px] bg-slate-500 text-white px-3 py-1 text-nowrap rounded-[50px]">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
