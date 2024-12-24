import Image from "next/image";
import eyeIcon from "../photos/login/eye-icon.png";
import { useState } from "react";

export default function MyPasswordField({ placeholder}) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="w-full border-[#AAB7C9] px-4 py-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-400 bg-background"
      />
      <div
        className="absolute inset-y-2 right-4 items-center cursor-pointer"
        onClick={toggleShowPassword}
      >
        <Image src={eyeIcon} alt="eye icon" className="" />
      </div>
    </div>
  );
}
