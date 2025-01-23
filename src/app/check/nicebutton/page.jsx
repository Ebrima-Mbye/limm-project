"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FullPage from "../components/FullPage";

export default function Page() {
  const buttonRef = useRef(null);
  const glowRef = useRef(null);
  const pulseRef = useRef(null);

  const buttonText = "Get Started";

  useEffect(() => {
    const button = buttonRef.current;
    const glow = glowRef.current;
    const pulse = pulseRef.current;

    // Hover effect: Glowing background animation
    button.addEventListener("mouseenter", () => {
      gsap.to(glow, {
        opacity: 0.3,
        duration: 0.3,
        ease: "power2.out",
      });

      // Pulse effect to make it alive
      gsap.to(pulse, {
        scale: 1.05,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // Reset the pulse
      gsap.to(pulse, {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      });
    });

    // Click effect: Border animation (scale up)
    button.addEventListener("mousedown", () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.in",
      });

      gsap.to(glow, {
        scale: 1.2,
        duration: 0.15,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseup", () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(glow, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out",
      });
    });

    return () => {
      button.removeEventListener("mouseenter", () => {});
      button.removeEventListener("mouseleave", () => {});
      button.removeEventListener("mousedown", () => {});
      button.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <FullPage>
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <button
          ref={buttonRef}
          className="relative overflow-hidden rounded-full bg-[#006df0] px-6 py-3 text-white transition-all duration-300 focus:outline-none"
        >
          {/* Glowing border animation */}
          <span
            ref={glowRef}
            className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-300 opacity-0"
          ></span>

          {/* Pulse layer */}
          <span
            ref={pulseRef}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 opacity-0 blur-3xl"
          ></span>

          {/* Button content */}
          <span className="relative z-10 text-2xl font-semibold">{buttonText}</span>

          {/* Glowing background animation */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-300 opacity-0 transition-opacity duration-300"></span>
        </button>
      </div>
    </FullPage>
  );
}
