"use client";

import Image from "next/image";
const showIcon = "/images/eye-icon.svg";
const hideIcon = "/images/eye-password-hide.svg";
import { useState } from "react";

export default function MyPasswordField({ placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#AAB7C9] bg-background px-4 py-2 focus:right-2 focus:outline-none focus:ring-blue-400"
      />
      <div
        className="absolute inset-y-2 right-4 flex cursor-pointer items-center"
        onClick={toggleShowPassword}
      >
        <Image
          src={showPassword ? hideIcon : showIcon}
          alt="eye icon"
          width={20}
          height={20}
          className=""
        />
      </div>
    </div>
  );
}
