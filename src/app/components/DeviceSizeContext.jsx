"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for device size
const DeviceSizeContext = createContext();

// Context Provider Component
export const DeviceSizeProvider = ({ children }) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const isWide = window.innerWidth > 800;
        setIsWideScreen(isWide); // Update the state
      };

      // Initial check
      handleResize();

      // Listen for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <DeviceSizeContext.Provider value={isWideScreen}>
      {children}
    </DeviceSizeContext.Provider>
  );
};

// Custom hook to use the device size
export const useDeviceSize = () => useContext(DeviceSizeContext);
