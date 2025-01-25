"use client";

import { useState, useEffect } from "react";
import FullPage from "@/components/FullPage";

export default function Page() {
  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsWideScreen(window.innerWidth >= 1024); // Widescreen breakpoint
    };

    // Initial Check and Event listener
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Change listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleButtonClick = () => {
    console.log("Screen size: ", isWideScreen ? " WIDE " : " SMALL");
  };

  return (
    <FullPage>
      <div className="">
        <p>Screen Size: {isWideScreen ? "Wide" : "Small"}</p>
        <button onClick={handleButtonClick}>Check Screen Size</button>
      </div>
    </FullPage>
  );
}
