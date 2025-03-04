"use client";

// Login page UI
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebaseConfig"; // Firebase config file

import logo from "@/photos/limm.logo.logo 1.png";
import AuthTopBar from "../components/AuthTopBar";
import MyPasswordField from "@/components/MyPasswordField";
import SubmitButton from "./components/SubmitButton";
import { useLanguage } from "@/hooks/LanguageContext";

export default function LoginPage() {
  // const router = useRouter();
  const { language } = useLanguage();

  const getForgotPasswordText = {
    en: "Forgot Password?",
    fr: "Mot de passe oublié ?",
    es: "¿Olvidaste tu contraseña?",
  };

  const forgotPasswordText = getForgotPasswordText[language];

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setError("");

    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   alert("Login successful!");
    //   router.push("/");
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="fixed top-0 z-[101] flex h-screen w-[100vw] flex-col items-center justify-center bg-background">
      <AuthTopBar />
      <div className="z-[3] w-full max-w-sm rounded-lg border border-gray-200 bg-background p-8 shadow-md">
        <div className="mb-6 flex w-full flex-col items-center justify-center">
          <Image src={logo} alt="logo" className="mb-3" />
          <p className="mb-2 mt-2 text-[28px] font-medium leading-[38.4px] text-gray-500">
            Login
          </p>
        </div>

        <form className="" onSubmit={handleSubmit}>
          {/* {error && <p className="text-red-500">{error}</p>} */}

          <div className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-[#AAB7C9] px-4 py-2"
              required
            />
            <MyPasswordField
              name="password"
              placeholder="Password"
              // value={email}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="mb-8 mt-3 text-end text-[14px] text-blue-800">
            {forgotPasswordText}
          </p>

          <SubmitButton text="Login" />
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/register"
            className="font-bold text-[#356BB7] hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
