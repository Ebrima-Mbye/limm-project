import { limmPerks } from "@/data/limmPerks.js";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function LimmPerks() {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'
  const perksData = limmPerks[language];

  return (
    <section className="mt-10 grid max-w-[850px] grid-cols-1 gap-3 md:gap-8 lg:grid-cols-3">
      {perksData.map((perkList, i1) => (
        <div key={i1} className="flex">
          <div className="">
            {perkList.map((perk, i2) => (
              <div key={i2} className="flex items-center justify-start gap-3">
                <Image
                  src={perk.perkIcon}
                  alt={perk.perkText}
                  width={25}
                  height={25}
                  className="h-14"
                />
                <p className="lg:text-nowrap">{perk.perkText}</p>
              </div>
            ))}
          </div>
          {i1 !== perkList.length - 1 && (
            <div className="hidden h-full w-[-1px] border border-black md:mx-2 lg:mx-14 lg:block"></div>
          )}
        </div>
      ))}
    </section>
  );
}
