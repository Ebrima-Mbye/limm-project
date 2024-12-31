import Image from "next/image";
import plusSign from "../photos/plus-sign.png";
import minusSign from "../photos/minus-sign.png";

export default function FAQCard({ question, answer }) {
  return (
    <div className="items center mb-4 flex justify-between rounded-lg border border-gray-300 p-4">
      <div className="mr-1 flex flex-col gap-2">
        <p className="text-[15px] sm:text-lg lg:text-[24px]">{question}</p>
        <p className="text-[12px] text-gray-500 sm:text-[16px] lg:text-xl">
          {answer}
        </p>
      </div>
      {answer ? (
        <Image
          src={minusSign}
          alt="minus symbol"
          className="max-h-[4px] max-w-[20px]"
        />
      ) : (
        <Image
          src={plusSign}
          alt="plus symbol"
          className="max-h-[20px] max-w-[20px]"
        />
      )}
    </div>
  );
}
