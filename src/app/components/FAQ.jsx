import Image from "next/image";
import mainImage from "../photos/Smiling-senegalese-business-owner.png";
import FAQCard from "./FAQCard";

export default function HomeFAQ() {
  return (
    <section className="mx-auto mt-24 max-w-[1250px]">
      <div className="mx-4 lg:mx-auto">
        <h2 className="text-[50px] font-[500]">FAQs</h2>
        <hr className="mb-8 border-[1px] border-[#001738]" />
      </div>

      <div className="g:pl-12 grid grid-cols-1 gap-20 lg:grid-cols-3">
        <div className="col-span-2 mx-auto w-full p-1 md:p-3 lg:max-w-[751px]">
          <FAQCard question="Can I use Limm on multiple devices ?" />
          <FAQCard question="Can I access it on both my phone and register ?" />
          <FAQCard question="Is Limm suitable for businesses with multiple staff members ?" />
          <FAQCard
            question="How long does it take to setup my account and start using Limm ?"
            answer="You can start using Limm as soon as you subscribe to a plan."
          />
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <Image
            src={mainImage}
            alt="Smiling-senegalese-business-owner"
            className="hidden w-full lg:block"
          />
        </div>
      </div>
    </section>
  );
}
