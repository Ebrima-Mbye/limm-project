import Image from "next/image";
import mainImage from "../photos/Smiling-senegalese-business-owner.png";
import FAQCard from "./FAQCard";

export default function HomeFAQ() {
  return (
    <section className="max-w-[1250px] mx-auto mt-24">
      <h2 className="text-[50px] font-[500]">FAQs</h2>
      <hr className="border-[1px] border-[#001738] mb-8" />

      <div className="pl-12 gap-20 grid grid-cols-1 lg:grid-cols-3">
        <div className="mx-auto p-3 max-w-[751px] col-span-2">
          <FAQCard question="Can I use Limm on multiple devices ?" />
          <FAQCard question="Can I access it on both my phone and register ?" />
          <FAQCard question="Is Limm suitable for businesses with multiple staff members ?" />
          <FAQCard question="How long does it take to setup my account and start using Limm ?" />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image
            src={mainImage}
            alt="Smiling-senegalese-business-owner"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}