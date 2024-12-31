import Image from "next/image";
import mainImage from "../photos/Smiling-senegalese-business-owner.png";
import FAQCard from "./FAQCard";

export default function HomeFAQ() {
  return (
    <section className="max-w-[1250px] mx-auto mt-24">
      <div className="mx-4 lg:mx-auto">
        <h2 className="text-[50px] font-[500]">FAQs</h2>
        <hr className="border-[1px] border-[#001738] mb-8" />
      </div>

      <div className="g:pl-12 gap-20 grid grid-cols-1 lg:grid-cols-3">
        <div className="w-full mx-auto p-1 md:p-3 lg:max-w-[751px] col-span-2">
          <FAQCard question="Can I use Limm on multiple devices ?" />
          <FAQCard question="Can I access it on both my phone and register ?" />
          <FAQCard question="Is Limm suitable for businesses with multiple staff members ?" />
          <FAQCard
            question="How long does it take to setup my account and start using Limm ?"
            answer="You can start using Limm as soon as you subscribe to a plan."
          />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <Image
            src={mainImage}
            alt="Smiling-senegalese-business-owner"
            className="w-full hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
