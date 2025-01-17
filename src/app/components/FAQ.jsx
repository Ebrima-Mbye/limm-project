import Image from "next/image";
import mainImage from "../photos/Smiling-senegalese-business-owner.png";
import FAQCard from "./FAQCard";
import { questions } from "../data/faq.js";
import { cookies } from "next/headers";

export default async function HomeFAQ() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const questionsData = questions[language];
  return (
    <section className="mx-auto mt-24 max-w-[1250px]">
      <div className="mx-4 lg:mx-auto">
        <h2 className="text-[50px] font-[500]">FAQs</h2>
        <hr className="mb-8 border-[1px] border-[#001738]" />
      </div>

      <div className="g:pl-12 grid grid-cols-1 gap-20 lg:grid-cols-3">
        <div className="col-span-2 mx-auto w-full p-1 md:p-3 lg:max-w-[751px]">
          {questionsData.map((questionEntry, index) => (
            <div key={index}>
              <FAQCard
                question={questionEntry.question}
                answer={questionEntry.answer}
              />
            </div>
          ))}
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
