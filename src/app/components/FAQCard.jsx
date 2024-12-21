import Image from "next/image";
import plusSign from "../photos/plus-sign.png";
import minusSign from "../photos/minus-sign.png";

export default function FAQCard({ question, answer }) {
  return (
    <div className="rounded-lg mb-4 flex justify-between items center p-4 border-gray-300 border">
      <div className="flex flex-col gap-2">
        <p className="max-w-[90%] text-[15px] lg:text-[24px]">{question}</p>
        <p className="max-w-[90%] text-[12px] text-gray-500 block lg:hidden">
          {answer}
        </p>
      </div>
      {answer ? (
        <Image
          src={minusSign}
          alt="minus symbol"
          className="max-h-[5px] max-w-[20px]"
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
