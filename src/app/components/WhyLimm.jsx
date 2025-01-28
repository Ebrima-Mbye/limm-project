import { cookies } from "next/headers";
import Image from "next/image";
const womanSmiling = "/images/woman-in-kitchen.png";
import pageDetails from "../data/whylimm";

export default async function WhyLimm() {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const pageData = pageDetails[language];

  // This element is only visible on small and middle screens
  return (
    <div className="mt-12 flex flex-col items-center">
      <p className="text-center text-xl font-semibold">{pageData.title}</p>
      <div>
        <p className="mb-10 text-center text-2xl font-medium">
          {pageData.subtitle}
        </p>
      </div>
      <div className="px-5 text-xl md:px-14">
        <div>
          {pageData.texts.map((textObject, index) => (
            <div key={index}>
              <p className="mb-4 font-semibold leading-[19.5px]">
                {textObject.heading}
              </p>
              <p className="mb-12 text-[18px] leading-[19.5px]">
                {textObject.text}
              </p>
              {/* The last text does not need a hr under it */}
              {index < pageData.texts.length - 1 && (
                <hr className="border-3 mb-10 mt-1 w-full border-gray-300" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Image
            src={womanSmiling}
            alt="smiling woman"
            width={1200}
            height={200}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
