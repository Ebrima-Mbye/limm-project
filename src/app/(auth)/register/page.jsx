"use client";

// Register page
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig"; // Ensure you have this setup

import logo from "@/photos/limm.logo.logo 1.png";
import selectIcon from "@/photos/login/select-icon.png";
import MyPasswordField from "@/components/MyPasswordField";
import AuthTopBar from "../components/AuthTopBar";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "", // Added for the user's full name
    sector: "Sector of Activity",
    country: "Select Country",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const supportedSectors = [
    "Sector of Activity",
    "Restaurant",
    "Consultancy",
    "Law",
  ];
  const supportedCountries = [
    "Select Country",
    "Gambia",
    "Senegal",
    "Mauritania",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Add full name to Firebase Auth registration
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      // Handle successful registration by passing the full name
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name, // Send the full name
          sector: formData.sector,
          country: formData.country,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Registration successful!");
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        name: "", // Reset name
        sector: "Sector of Activity",
        country: "Select Country",
      });
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 z-[101] flex h-screen w-[100vw] flex-col items-center justify-center bg-background">
      <AuthTopBar />
      <div className="z-[3] w-full max-w-sm rounded-lg border border-gray-200 bg-background p-8 shadow-md">
        <div className="mb-6 flex w-full flex-col items-center justify-center">
          <Image src={logo} alt="logo" className="mb-3" />
          <p className="mb-2 mt-2 text-[28px] font-medium leading-[38.4px] text-gray-500">
            Sign up
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-[#AAB7C9] bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-[#AAB7C9] bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <MyPasswordField
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <MyPasswordField
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <div className="relative">
            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="block w-full appearance-none rounded-lg border border-[#AAB7C9] bg-background px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            >
              {supportedSectors.map((sector, index) => (
                <option key={index} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-4 right-4">
              <Image src={selectIcon} alt="select icon" />
            </div>
          </div>

          <div className="relative">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="block w-full appearance-none rounded-lg border border-[#AAB7C9] bg-background px-3 py-2 text-foreground focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            >
              {supportedCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-4 right-4">
              <Image src={selectIcon} alt="select icon" />
            </div>
          </div>

          <div className="mt-2 text-[13px]">
            By continuing, you acknowledge having read and accepted our&nbsp;
            <Link href="#" className="text-[#356BB7] underline">
              Terms and Conditions
            </Link>
            &nbsp;and&nbsp;
            <Link href="#" className="text-[#356BB7] underline">
              Privacy Policy
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[12px] bg-[#356BB7] py-2 text-white transition-colors duration-300 hover:bg-blue-600"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="font-bold text-[#356BB7] hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
