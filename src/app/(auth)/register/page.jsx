"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../photos/limm.logo.logo 1.png";
import selectIcon from "../../photos/login/select-icon.png";
import MyPasswordField from "../../components/MyPasswordField";
import AuthTopBar from "../components/AuthTopBar";

export default function RegisterPage() {
  const supportedSectors = [
    "Sector of Activity",
    "Restaurant",
    "Consultancy",
    "Law",
  ];
  const suppertedCountries = [
    "Select Country",
    "Gambia",
    "Senegal",
    "Mauritania",
  ];

  return (
    <div className="w-[100vw] bg-background z-[101] fixed top-0 flex flex-col h-screen justify-center items-center realtive">
      {/* Top Left Link */}
      <AuthTopBar />

      {/* Signup Card */}
      <div className="z-[3] bg-background w-full max-w-sm p-8 rounded-lg shadow-md border-foreground border">
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
              className="text-foreground bg-background w-full border-[#AAB7C9] px-4 py-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-400"
            />
          </div>

          <MyPasswordField placeholder="Password" />
          <MyPasswordField placeholder="Confirm Password" />

          <div className="relative">
            <select className="text-forground bg-background border border-[#AAB7C9] w-full block appearance-none py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:fing-2 focus:ring-blue-500 focus:border-blue-500">
              {supportedSectors.map((sector, index) => (
                <option key={index} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-4 right-4 items-center pointer-events-none">
              <Image src={selectIcon} alt="select icon" className="" />
            </div>
          </div>

          <div>
            <div className="relative">
              <select
                placeholder="hi"
                defaultValue="Hi"
                className="text-foreground border border-[#AAB7C9] w-full block appearance-none bg-background py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:fing-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {suppertedCountries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-4 right-4 items-center pointer-events-none">
                <Image src={selectIcon} alt="select icon" className="" />
              </div>
            </div>
            <div className="text-[13px] mt-2">
              By continuing you are acknowledging having read and accepted
              our&nbsp;
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
            className="w-full bg-[#356BB7] text-white py-2 rounded-[12px] hover:bg-blue-600 transition-colors duration-300"
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
