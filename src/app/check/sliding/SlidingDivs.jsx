"use client";
import { useEffect, useState } from "react";

export default function SlidingDivs({ parentWidth, parentLeft }) {
  const boxWidth = 300;
  let animationInterval;
  const boxSpacing = 20; // Gap between boxes (4rem)
  const divs = [1, 2, 3, 4, 5]; // Array to generate divs
  const [pauseAnimation, setPauseAnimation] = useState(false);

  const [positions, setPositions] = useState([]); // Empty until the client sets it

  useEffect(() => {
    setPositions(
      // divs.map((_, index) => parentWidth + index * (boxWidth + boxSpacing)),
      divs.map((_, index) => index * (boxWidth + boxSpacing)),
    );
  }, [parentWidth]);

  useEffect(() => {
    if (positions.length === 0) return; // Skip if positions are not initialized

    const pausedBoxes = new Set(); // Track paused boxes
    animationInterval = setInterval(() => {
      if (!pauseAnimation) {
        setPositions((prevPositions) =>
          prevPositions.map((pos, index) => {
            if (pausedBoxes.has(index)) return pos; // Skip movement for paused boxes

            // If the box's right side is less than the container's left side, move it to the far right
            if (pos + boxWidth * 3 <= 0) {
              const maxPosition = Math.max(...prevPositions);
              return maxPosition + boxWidth + boxSpacing; // Add the box to the right
            }
            return pos - 2; // Continue sliding left
          }),
        );
      }
    }, 16); // ~60fps

    return () => clearInterval(animationInterval);
  }, [positions]);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden border border-red-500 bg-gray-100">
      {positions.length > 0 && // Ensure positions are initialized before rendering divs
        divs.map((item, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center border border-red-500 bg-green-500 text-6xl text-white shadow-lg"
            style={{
              width: `${boxWidth}px`,
              height: `${boxWidth}px`,
              transform: `translateX(${positions[index]}px)`,
            }}
          >
            {item}
          </div>
        ))}
    </div>
  );
}
