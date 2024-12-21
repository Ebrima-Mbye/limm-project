import Image from "next/image";
import plusSign from "../photos/plus-sign.png";
import minusSign from "../photos/minus-sign.png";

export default function FAQCard({ question, answer }) {
  return (
    <div className="rounded-lg mb-4 flex justify-between items center p-4 border-gray-300 border">
      <div className="flex flex-col gap-2 mr-1">
        <p className="text-[15px] sm:text-lg lg:text-[24px]">{question}</p>
        <p className="text-[12px] sm:text-[16px] lg:text-xl text-gray-500 ">
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
