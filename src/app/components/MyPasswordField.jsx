"use client";

import Image from "next/image";
import { useState } from "react";
const showIcon = "/images/eye-icon.svg"; // Make sure the path is correct
const hideIcon = "/images/eye-password-hide.svg"; // Make sure the path is correct

export default function MyPasswordField({ placeholder, name, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-md border border-[#AAB7C9] bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div
        className="absolute inset-y-2 right-4 flex cursor-pointer items-center"
        onClick={() => setShowPassword(!showPassword)}
      >
        <Image
          src={showPassword ? hideIcon : showIcon}
          alt="eye icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
