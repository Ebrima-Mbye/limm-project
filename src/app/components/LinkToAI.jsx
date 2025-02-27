"use client";

import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import { useState, useRef } from "react";

export default function LinkToAI() {
  const [iconHovered, setIconHovered] = useState(false);
  const timeoutRef = useRef(null); // Use useRef to store the timeout ID

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIconHovered(true);
    }, 500); // 500ms delay (adjust as needed)
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel the timeout
      timeoutRef.current = null;
    }
    setIconHovered(false);
  };

  return (
    <Link
      href="/limm-ai"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-4 right-4 z-[10000] rounded-full bg-blue-500 p-3 text-white shadow-lg transition-colors duration-300 hover:bg-blue-600"
    >
      {iconHovered && (
        <span className="absolute right-0 top-[-2.5rem] w-32 rounded-md bg-gray-600 p-2 text-xs transition-all delay-500 duration-500">
          Chat with Limm AI
        </span>
      )}
      <MessageCircleQuestion className="h-6 w-6" />
    </Link>
  );
}
