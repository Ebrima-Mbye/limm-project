"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import arrowLeft from "../../photos/login/arrow-left.png";
import logo from "../../photos/limm.logo.logo 1.png";
import MyPasswordField from "../../components/MyPasswordField";

export default function LoginPage() {
  const router = useRouter();
  const supportedLanguages = ["En", "Fr", "Ar"];
  const navigateToHomePage = () => {
    router.push("/");

    setTimeout(() => {
      router.refresh();
    }, 500);
  };

  // This Page has more z-index that the main header Component. This way this page effectively hides the header
  return (
    <div className="z-[101] w-[100vw] fixed flex flex-col h-screen justify-center items-center bg-inherit realtive">
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
          className="border-gray-500 border-2 text-center font-bold px-2 py-2 rounded-full bg-inherit"
        >
          {supportedLanguages.map((language, index) => (
            <option key={index} value={language} className="bg-gray-300">
              {language}
            </option>
          ))}
        </select>
      </div>

      {/* Login Card */}
      <div className="z-[3] w-full max-w-sm px-8 py-12 bg-[#EDEFF3] rounded-lg shadow-md">
        {/* Logo */}
        <div className="w-full flex flex-col justify-center items-center mb-7">
          <Image src={logo} alt="logo" className="mb-6" />
          <p className="text-gray-500 mt-2 text-[28px] font-medium leading-[38.4px]">
            Login
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border-[#AAB7C9] px-4 py-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <MyPasswordField placeholder="Password" />
            <div className="text-right mt-2 mb-9">
              <Link
                href="#"
                className="underline text-[14px] leading-[19.2px] text-[#356BB7] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#356BB7] text-white py-2 rounded-[12px] hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>

        {/* Sign up Link */}
        <div className="text-center mt-6">
          <Link
            href="/register"
            className="text-[#356BB7] font-bold leading-[28.8px] hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
