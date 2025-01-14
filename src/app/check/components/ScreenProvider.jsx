"use client";

import { createContext, useEffect, useState, useContext } from "react";

const ScreenContext = createContext(undefined);

export const ScreenProvider = ({ Children }) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  // Function to handle screen change and  invoke callbacks
  const handleScreenChange = (defaultCallback, wideScreenCallback) => {
    if (isWideScreen) {
      wideScreenCallback();
    } else {
      defaultCallback();
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsWideScreen(window.innerWidth >= 1024); // Widescreen breakpoint
    };

    // Initial Check and Event listener
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Change listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  });

  return (
    <ScreenContext.Provider value={{ isWideScreen, handleScreenChange }}>
      {/* <FullPage>{Children}</FullPage> */}
      {Children}
    </ScreenContext.Provider>
  );
};

// Custom hook for using the context
export const useScreenContext = () => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error("useScreenContext must be within a ScreenProvider");
  }
  return context;
};
