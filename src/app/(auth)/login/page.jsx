"use client";

import Image from "next/image";
import Link from "next/link";
import AuthTopBar from "../components/AuthTopBar";
// import logo from "../../photos/limm.logo.logo 1.png";
const logo = "/images/limm.logo.logo 1.png";
import MyPasswordField from "../../components/MyPasswordField";

export default function LoginPage() {
  // This Page has more z-index that the main header Component. This way this page effectively hides the header
  return (
    <div className="realtive fixed top-0 z-[101] flex h-screen w-[100vw] flex-col items-center justify-center bg-inherit">
      {/* Top Left Link */}
      <AuthTopBar />

      {/* Login Card */}
      <div className="z-[3] w-full max-w-sm rounded-lg border border-foreground bg-background px-8 py-12 shadow-md">
        {/* Logo */}
        <div className="mb-7 flex w-full flex-col items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={40}
            className="mb-6"
          />
          <p className="mt-2 text-[28px] font-medium leading-[38.4px] text-gray-500">
            Login
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-[#AAB7C9] bg-background px-4 py-2 focus:right-2 focus:outline-none focus:ring-blue-400"
            />
          </div>

          <div>
            <MyPasswordField placeholder="Password" />
            <div className="mb-9 mt-2 text-right">
              <Link
                href="#"
                className="text-[14px] leading-[19.2px] text-[#356BB7] underline hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-[12px] bg-[#356BB7] py-2 text-white transition-colors duration-300 hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Sign up Link */}
        <div className="mt-6 text-center">
          <Link
            href="/register"
            className="font-bold leading-[28.8px] text-[#356BB7] hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
