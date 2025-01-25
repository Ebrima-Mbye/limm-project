"use client";

import FullPage from "@/components/FullPage";
import SlidingDivs from "./SlidingDivs";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [parentWidth, setParentWidth] = useState(null);
  const [parentLeft, setParentLeft] = useState(null);
  const parentRef = useRef();

  useEffect(() => {
    const updateParentDimensions = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
        setParentLeft(parentRef.current.getBoundingClientRect().left); // Get parent's left position
      }
    };

    updateParentDimensions(); // Set initial dimensions
    window.addEventListener("resize", updateParentDimensions); // Update on resize
    return () => window.removeEventListener("resize", updateParentDimensions);
  }, []);

  return (
    <FullPage className="border-box p-12">
      <main
        ref={parentRef}
        className="flex h-[500px] w-full flex-col items-center justify-center border border-red-500"
      >
        <h1 className="mb-4 text-2xl font-bold">Sliding Divs Demo</h1>
        {parentWidth !== null && parentLeft !== null && (
          <SlidingDivs parentWidth={parentWidth} parentLeft={parentLeft} />
        )}
      </main>
    </FullPage>
  );
}
