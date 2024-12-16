"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import arrowLeft from "../../photos/login/arrow-left.png";
import logo from "../../photos/limm.logo.logo 1.png";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const supportedLanguages = ["En", "Fr", "Ar"];
  const supportedSectors = [
    "Sector of Activity",
    "Restaurant",
    "Consultancy",
    "Law",
  ];
  const suppertedCountries = ["Gambia", "Senegal", "Mauritania"];
  const navigateToHomePage = () => {
    router.push("/");

    setTimeout(() => {
      router.refresh();
    }, 500);
  };

  return (
    <div className="w-[100vw] fixed flex flex-col h-screen justify-center items-center bg-gray-50 realtive">
      {/* Top Left Link */}
      <div className="absolute top-8 left-8 flex items-center">
        <button
          onClick={navigateToHomePage}
          className="text-gray-500 hover:text-gray-800 transition-colors flex gap-3"
        >
          <Image src={arrowLeft} alt="arrow left" className="" />
          <p className="[text-[24px] text-[#64758D] font-bold leading-[28.8px]">
            Back to main page
          </p>
        </button>
      </div>

      {/* Top right Language Toggle */}
      <div className="absolute top-8 right-8">
        <select
          id="currency-selector"
          className="border-black border-2 text-center font-bold px-2 py-2 rounded-full"
        >
          {supportedLanguages.map((language, index) => (
            <option key={index} value={language} className="">
              {language}
            </option>
          ))}
        </select>
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-sm p-8 bg-[#EDEFF3] rounded-lg shadow-lg">
        {/* Logo */}
        <div className="w-full flex flex-col justify-center items-center mb-6">
          <Image src={logo} alt="logo" className="mb-3" />
          <p className="text-gray-500 mt-2 mb-2 text-[28px] font-medium leading-[38.4px]">
            Sign up
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="placeholder:text-[#AAB7C9] w-full border-[#AAB7C9] px-4 py-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="placeholder:text-[#AAB7C9] w-full border-[#AAB7C9] px-4 py-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="placeholder:text-[#AAB7C9] w-full border-[#AAB7C9] px-4 py-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <select className="text-[#AAB7C9] border-[#AAB7C9] w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              {supportedSectors.map((supportedSector, index) => (
                <option key={index} value={supportedSector}>
                  {supportedSector}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select className="text-[#AAB7C9] border-[#AAB7C9] w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              {suppertedCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="text-[13px] mt-2">
              By continuing you are acknowledging having read and accepted our
              <Link href="#" className="text-[#356BB7] underline">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#356BB7] underline">
                Privacy Policy
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#356BB7] text-white py-2 rounded-[12px] hover:bg-blue-600 transition-colors"
          >
            Sign up
          </button>
        </form>

        {/* Sign up Link */}
        <div className="text-center mt-6">
          <Link
            href="/login"
            className="text-[#356BB7] font-bold leading-[28.8px] hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
