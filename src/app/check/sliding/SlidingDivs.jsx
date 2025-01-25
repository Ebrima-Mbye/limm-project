"use client";
import { useEffect, useState } from "react";

export default function SlidingDivs() {
  const boxWidth = 300;
  const boxSpacing = 16; // The gap between boxes
  const stepDistance = boxWidth + boxSpacing; // Total distance to move before pausing
  const divs = [1, 2, 3, 4, 5]; // Array to generate divs
  const [position, setPosition] = useState(0); // Track the sliding position
  const [isSliding, setIsSliding] = useState(true); // Toggle sliding animation

  useEffect(() => {
    let animationFrame;

    const slide = () => {
      if (isSliding) {
        // Increment position for smooth sliding
        setPosition((prev) => prev - 2); // Move 2px per frame
      }
      animationFrame = requestAnimationFrame(slide);
    };

    animationFrame = requestAnimationFrame(slide);

    return () => cancelAnimationFrame(animationFrame);
  }, [isSliding]);

  useEffect(() => {
    // Pause sliding every full step (boxWidth + boxSpacing)
    if (Math.abs(position) % stepDistance === 0 && position !== 0) {
      setIsSliding(false); // Stop sliding
      setTimeout(() => setIsSliding(true), 1000); // Wait for 1 second and resume
    }
  }, [position]);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden border border-red-500 bg-gray-100">
      <div
        className="absolute flex gap-4 border border-red-500"
        style={{
          transform: `translateX(${position}px)`, // Inline translate for smooth animation
          transition: isSliding ? "transform 0.1s linear" : "none", // Smooth movement only when sliding
        }}
      >
        {divs.map((item, index) => (
          <div
            key={index}
            className={`flex flex-1 items-center justify-center rounded-none border border-red-500 bg-green-500 text-6xl text-white shadow-lg`}
            style={{ width: `${boxWidth}px`, height: "300px" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
