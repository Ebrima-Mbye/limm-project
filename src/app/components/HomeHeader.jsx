import Image from "next/image";
import logo from "../photos/limm.logo.logo 1.png"

export default function HomeHeader() {
  return (
    <div className="bg-white w-full rounded-lg flex justify-between items-center px-6">
      <div className="p-2 flex items-start h-[50px]">
        <Image 
          src={logo}
          alt="Logo"
          className="w-2/3"
          />
      </div>
        <div className="h-full flex-1 text-[13px]">
          <div className=" flex-1 flex items-center justify-between h-4/5">
            <ul className="flex items-center">
              <li className="text-slate-500 mr-8"><a href="/">Retail</a></li>
              <li className="text-slate-500 mr-8"><a href="/">Restaurants</a></li>
              <li className="text-slate-500 mr-8"><a href="/">Services</a></li>
            </ul>
            {/* <ul className="flex items-center">
              <li className="text-[14px] text-slate-500 mr-8"><a href="/">Pricing</a></li>
              <div className="w-[2px] h-6 bg-slate-200 ml-[-10px] mr-"></div>
              <li className="text-[14px] text-slate-500 mr-8"><a href="/">Login</a></li>
              <button className="text-[14px] bg-gray-600 text-white px-3 py-1 text-nowrap rounded-lg">Book a Demo</button>
            </ul> */}
            <div className="flex items-center">
              <a className='block text-center text-slate-500 cursor-pointer' href='/'>Pricing</a>
              <div className="w-[2px] h-6 bg-slate-100 mx-4"></div>
              <a className='block text-center text-slate-500 cursor-pointer' href='/'>Login</a>
              <button className="ml-4 text-[12px] bg-slate-500 text-white px-3 py-1 text-nowrap rounded-[50px]">Book a Demo</button>
            </div>
          </div>
        </div>
    </div>
  )
}
