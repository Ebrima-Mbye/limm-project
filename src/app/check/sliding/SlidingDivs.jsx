"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SlidingDivs = () => {
  const divs = ["Div 1", "Div 2", "Div 3", "Div 4", "Div 5"];
  const [visibleDivs, setVisibleDivs] = useState(divs); // Maintain the cycling divs
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move the first div to the end of the array for wrapping effect
      setVisibleDivs((prev) => {
        const updated = [...prev];
        const first = updated.shift(); // Remove the first div
        updated.push(first); // Add it to the end
        return updated;
      });

      // Update the index for animations
      setCurrentIndex((prev) => (prev + 1) % divs.length);
    }, 1500); // Pause for 1.5 seconds between movements

    return () => clearInterval(interval); // Cleanup on unmount
  }, [divs.length]);

  return (
    <div className="overflow-hidden w-full flex justify-center items-center">
      <div className="relative flex">
        <AnimatePresence initial={false}>
          {visibleDivs.map((content, index) => (
            <motion.div
              key={`${content}-${currentIndex}-${index}`} // Unique key for each div
              initial={{ x: "100%" }} // Start off-screen
              animate={{ x: "0%" }} // Slide into view
              exit={{ x: "-100%" }} // Slide out of view
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth animation
              className="bg-blue-500 text-white rounded-md mx-2 p-4 text-center w-40 h-20 flex items-center justify-center"
            >
              {content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlidingDivs;
