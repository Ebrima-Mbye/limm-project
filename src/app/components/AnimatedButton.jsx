"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AnimatedButton({
  onClick,
  className,
  text,
  href,
  target,
  children,
  withGradient = true,
}) {
  const [buttonStyle, setButtonStyle] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonStyle((prev) =>
        Object.keys(prev).length === 0
          ? {
              before: "before:translate-x-[100%] before:translate-y-[-100%]",
              after: "after:translate-x-[100%] after:translate-y-[-100%]",
            }
          : {},
      );
    }, 2500); // Toggles animation every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      href={href}
      target={target || "_blank"}
      onClick={onClick}
      className={`relative overflow-hidden rounded-full ${withGradient && "bg-gradient-to-r from-blue-950/75 via-cyan-700 to-blue-950/75"} px-6 py-3 font-semibold text-white transition-transform active:scale-95 ${className}`}
    >
      {text || children}
      <span
        className={`absolute inset-0 before:absolute before:h-32 before:w-[500px] before:origin-center before:translate-x-[-100%] before:translate-y-[100%] before:rotate-45 before:rounded-full before:bg-white/20 before:transition-transform before:duration-1000 before:ease-out before:content-[''] ${buttonStyle.before || ""}`}
      ></span>
      <span
        className={`absolute inset-0 after:absolute after:h-32 after:w-[500px] after:origin-center after:translate-x-[-100%] after:translate-y-[100%] after:rotate-45 after:rounded-full after:bg-white/20 after:transition-transform after:delay-300 after:duration-1000 after:ease-out after:content-[''] ${buttonStyle.after || ""}`}
      ></span>
    </Link>
  );
}
