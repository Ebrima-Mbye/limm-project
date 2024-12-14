import Image from "next/image";
import logo from "../photos/limm.logo.logo 1.png";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <div
      id="header"
      className="px-6 fixed w-[92%] top-8 left-[4%] right-[4%] bg-white rounded-lg flex justify-between items-center "
    >
      {/* // <div className="bg-white w-full rounded-lg flex justify-between items-center px-6"> */}
      <div className="p-2 flex items-start h-[50px]">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-2/3" />
        </Link>
      </div>
      <div className="h-full flex-1 text-[13px]">
        <div className="flex-1 flex items-center justify-between h-4/5">
          <ul className="flex items-center">
            <li className="text-slate-500 mr-8">
              <Link href="/retail">Retail</Link>
            </li>
            <li className="text-slate-500 mr-8">
              <Link href="/restaurants">Restaurants</Link>
            </li>
            <li className="text-slate-500 mr-8">
              <Link href="/">Services</Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Link
              className="block text-center text-slate-500 cursor-pointer"
              href="/"
            >
              Pricing
            </Link>
            <div className="w-[2px] h-6 bg-slate-100 mx-4"></div>
            <Link
              className="block text-center text-slate-500 cursor-pointer"
              href="/"
            >
              Login
            </Link>
            <button className="ml-4 text-[12px] bg-slate-500 text-white px-3 py-1 text-nowrap rounded-[50px]">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
