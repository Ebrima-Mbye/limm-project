"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Create a single Context for device size
const DeviceSizeContext = createContext();

// Context Provider Component
export const DeviceSizeProvider = ({ children }) => {
  const [deviceSize, setDeviceSize] = useState({
    isWideScreen: false,
    isMiddleScreen: false,
    isSmallScreen: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;

        setDeviceSize({
          isWideScreen: width > 800,
          isMiddleScreen: width > 600 && width <= 800,
          isSmallScreen: width <= 600,
        });
      };

      // Initial check
      handleResize();

      // Debounce resize listener
      const resizeListener = () => {
        clearTimeout(window.deviceResizeTimeout);
        window.deviceResizeTimeout = setTimeout(handleResize, 100);
      };

      // Listen for window resize
      window.addEventListener("resize", resizeListener);

      // Cleanup on component unmount
      return () => window.removeEventListener("resize", resizeListener);
    }
  }, []);

  return (
    <DeviceSizeContext.Provider value={deviceSize}>
      {children}
    </DeviceSizeContext.Provider>
  );
};

// Custom hook to use the device size
export const useDeviceSize = () => useContext(DeviceSizeContext);
