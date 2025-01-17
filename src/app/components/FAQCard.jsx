"use client";

import Image from "next/image";
import plusSign from "../photos/plus-sign.png";
import minusSign from "../photos/minus-sign.png";
import { useEffect, useState } from "react";

export default function FAQCard({ question, answer, initialShowAnswer }) {
  const [showAnswer, setShowAnswer] = useState(initialShowAnswer || false);
  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  useEffect(() => {
    if (showAnswer) {
    }
  }, [showAnswer]);
  return (
    <div className="items center mb-4 flex justify-between rounded-lg border border-gray-300 p-4">
      <div className="mr-1 flex flex-col gap-2">
        <p className="text-[15px] sm:text-lg lg:text-lg">{question}</p>
        {showAnswer && (
          <p className="text-[12px] text-gray-500 lg:text-[17px]">{answer}</p>
        )}
      </div>
      <div
        onClick={toggleShowAnswer}
        className="cursor-pointer flex items-center justify-center"
      >
        {showAnswer ? (
          <Image
            onClick={toggleShowAnswer}
            src={minusSign}
            alt="minus symbol"
            className="cursor-pointer max-h-[4px] max-w-[20px]"
          />
        ) : (
          <Image
            onClick={toggleShowAnswer}
            src={plusSign}
            alt="plus symbol"
            className="cursor-pointer max-h-[20px] max-w-[20px]"
          />
        )}
      </div>
    </div>
  );
}
