"use client";

import { useEffect, useRef } from "react";

export default function AnimatedContainer({ children }) {
  const ref = useRef(null); // To track the element
  const throttleTimeout = useRef(null); // For throttling

  useEffect(() => {
    const handleScroll = () => {
      if (throttleTimeout.current) return; // Skip if already throttled

      throttleTimeout.current = setTimeout(() => {
        const rect = ref?.current.getBoundingClientRect();
        // Check if the element is in the viewport
        if (rect.top < window.innerHeight + 150 && rect.bottom > 0) {
          ref.current.classList.add("visible");
        } else {
          ref.current.classList.remove("visible");
        }

        throttleTimeout.current = null; // Reset throttle
      }, 100); // Adjust throttle duration as needed
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load to handle elements already in the viewport

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="mb-12 translate-y-52 transform opacity-0 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
}
