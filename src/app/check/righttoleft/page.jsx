"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import FullPage from "@/check/components/FullPage";

export default function Home() {
  const divWidths = [200, 100, 200, 100, 200]; // Alternating widths
  const divHeight = 50; // Uniform height
  const totalWidth = divWidths.reduce((sum, width) => sum + width, 0); // Total width of all divs
  const animationControls = useAnimation(); // Control the animation
  const speed = 50; // Speed in pixels per second (customizable)

  useEffect(() => {
    const loopAnimation = async () => {
      let accumulatedWidth = 0;

      for (let i = 0; i < divWidths.length; i++) {
        const currentWidth = divWidths[i];
        accumulatedWidth += currentWidth;

        // Calculate duration dynamically based on the width of the div
        const duration = currentWidth / speed;

        // Animate to the left by the accumulated width
        await animationControls.start({
          x: -accumulatedWidth, // Move to the left by the accumulated width
          transition: { duration: duration, ease: "linear" }, // Duration proportional to the div width
        });

        // Pause for 1 second after animating the current div
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      loopAnimation(); // Restart the animation
    };

    loopAnimation();
  }, [animationControls, divWidths, speed]);

  return (
    <FullPage>
      <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-gray-200">
        <motion.div
          className="flex flex-row gap-4"
          animate={animationControls}
          initial={{ x: 0 }} // Start position
          style={{
            display: "flex",
            width: `${totalWidth}px`, // Set the total width of the div container
          }}
        >
          {divWidths.map((width, index) => (
            <div
              key={index}
              style={{
                width: `${width}px`,
                height: `${divHeight}px`,
              }}
              className="bg-blue-500"
            />
          ))}
        </motion.div>
      </div>
    </FullPage>
  );
}
