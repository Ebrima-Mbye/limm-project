"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedContainer({ children }) {
  const ref = useRef(null); // To track the element
  const lastScrollY = useRef(0); // To track the last scroll position
  const [scrollDirection, setScrollDirection] = useState("down"); // State to store scroll direction

  useEffect(() => {
    if (ref.current) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Update scroll direction
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        lastScrollY.current = currentScrollY;

        if (ref.current) {
          const rect = ref?.current.getBoundingClientRect();

          if (rect.top > window.innerHeight) {
            // If the element is completely above the viewport, reset animation
            ref.current.classList.remove("visible");
          }

          if (
            scrollDirection === "down" && // Trigger animation only on downward scroll
            rect.top < window.innerHeight + 150 &&
            rect.bottom > 0
          ) {
            ref.current.classList.add("visible");
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Run on load to handle elements already in the viewport

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollDirection]); // Add scrollDirection as a dependency

  return (
    <div
      ref={ref}
      className="mb-12 translate-y-52 transform opacity-0 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
}
