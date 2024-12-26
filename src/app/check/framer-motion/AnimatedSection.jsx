"use client";

import { useEffect, useRef } from "react";

const AnimatedSection = ({ children }) => {
  const ref = useRef(null); // To track the element

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      // Check if the element is in the viewport
      // we add some offset for safety
      if (rect.top < window.innerHeight + 20 && rect.bottom > 0) {
        ref.current.classList.add("visible");
      } else {
        ref.current.classList.remove("visible");
      }
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
      className="transform translate-y-52 opacity-0 transition-all duration-700 ease-out mb-12"
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
