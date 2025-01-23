"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/photos/limm.logo.logo 1.png";
import selectIcon from "@/photos/login/select-icon.png";
import MyPasswordField from "@/components/MyPasswordField";
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
    <div className="realtive fixed top-0 z-[101] flex h-screen w-[100vw] flex-col items-center justify-center bg-background">
      {/* Top Left Link */}
      <AuthTopBar />

      {/* Signup Card */}
      <div className="z-[3] w-full max-w-sm rounded-lg border border-gray-200 bg-background p-8 shadow-md">
        {/* Logo */}
        <div className="mb-6 flex w-full flex-col items-center justify-center">
          <Image src={logo} alt="logo" className="mb-3" />
          <p className="mb-2 mt-2 text-[28px] font-medium leading-[38.4px] text-gray-500">
            Sign up
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-[#AAB7C9] bg-background px-4 py-2 text-foreground focus:right-2 focus:outline-none focus:ring-blue-400"
            />
          </div>

          <MyPasswordField placeholder="Password" />
          <MyPasswordField placeholder="Confirm Password" />

          <div className="relative">
            <select className="text-forground focus:fing-2 block w-full appearance-none rounded-lg border border-[#AAB7C9] bg-background px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500">
              {supportedSectors.map((sector, index) => (
                <option key={index} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-4 right-4 items-center">
              <Image src={selectIcon} alt="select icon" className="" />
            </div>
          </div>

          <div>
            <div className="relative">
              <select
                placeholder="hi"
                defaultValue="Hi"
                className="focus:fing-2 block w-full appearance-none rounded-lg border border-[#AAB7C9] bg-background px-3 py-2 text-foreground shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                {suppertedCountries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-4 right-4 items-center">
                <Image src={selectIcon} alt="select icon" className="" />
              </div>
            </div>
            <div className="mt-2 text-[13px]">
              By continuing you are acknowledging having read and accepted
              our&nbsp;
              <Link href="#" className="text-[#356BB7] underline">
                Terms and Conditions
              </Link>
              &nbsp;and&nbsp;
              <Link href="#" className="text-[#356BB7] underline">
                Privacy Policy
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-[12px] bg-[#356BB7] py-2 text-white transition-colors duration-300 hover:bg-blue-600"
          >
            Sign up
          </button>
        </form>

        {/* Sign up Link */}
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="font-bold leading-[28.8px] text-[#356BB7] hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
