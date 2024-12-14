import Image from "next/image";
import plusSign from "../photos/plus-sign.png";

export default function FAQCard({ question }) {
  return (
    <div className="rounded-lg mb-4 flex justify-between items center p-4 border-gray-300 border-[1px]">
      <p className="max-w-[90%] text-[24px]">{question}</p>
      <Image src={plusSign} alt="plus sign" className="max-h-[20px] max-w-[20px]" />
    </div>
  );
}
