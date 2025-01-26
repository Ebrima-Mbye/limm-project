import HeroCard from "./HeroCard";
import bookIcon from "@/photos/bookkeeping-icon.svg";
import inventoryIcon from "@/photos/inventory-icon.svg";
import { cards } from "@/data/hero.js";
import { cookies } from "next/headers";
import FullPage from "@/components/FullPage";
import image1 from "@/photos/man-calculating.png";
import image2 from "@/photos/woman-in-clothing-shop.png";
import Image from "next/image";

const App = async () => {
  // Wait for cookies before accessing them
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "en"; // Default to 'en'

  const cardsData = cards[language];
  return (
    <FullPage className="flex items-center justify-center px-24">
      <div className="lg:max-h-[500px] flex flex-nowrap gap-4 border border-red-500">
        <HeroCard
          title={cardsData[0].title}
          text={cardsData[0].text}
          icon={bookIcon}
          bgColor="rgb(165 243 252)" // cyan-200
          textColor="rgb(14 165 233)" // cyan-700
        />
        <div className="h-full flex-shrink-0">
          <Image src={image1} alt="hero image" />
        </div>
        <HeroCard
          title={cardsData[1].title}
          text={cardsData[1].text}
          icon={inventoryIcon}
          bgColor="rgb(252 211 77)" // orange-300
          textColor="rgb(217 119 6)" // orange-700
        />
        <div className="h-full flex-shrink-0">
          <Image src={image2} alt="hero image" />
        </div>
        <HeroCard
          title={cardsData[1].title}
          text={cardsData[1].text}
          icon={inventoryIcon}
          bgColor="rgb(252 211 77)" // orange-300
          textColor="rgb(217 119 6)" // orange-700
        />
      </div>
    </FullPage>
  );
};

export default App;
