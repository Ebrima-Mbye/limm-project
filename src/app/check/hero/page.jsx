"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/autoplay"; // Autoplay styles

import { Autoplay } from "swiper/modules"; // Import Autoplay module
import Image from "next/image";
import HeroCard from "./HeroCard";
import bookIcon from "@/photos/bookkeeping-icon.svg";
import inventoryIcon from "@/photos/inventory-icon.svg";
import invoiceIcon from "@/photos/invoice-icon.svg";
import { cards } from "@/data/hero.js";

import FullPage from "@/components/FullPage";
import image1 from "@/photos/man-calculating.png";
import image2 from "@/photos/woman-in-clothing-shop.png";
import image3 from "@/photos/femalesewing.webp";
import { useLanguage } from "@/components/LanguageContext";
import { useDeviceSize } from "@/components/DeviceSizeContext";

const App = () => {
  const { isSmallScreen, isMiddleScreen } = useDeviceSize();
  const { language } = useLanguage();
  const cardsData = cards[language];

  return (
    <FullPage className="flex items-center px-2">
      <Swiper
        spaceBetween={20} // Gap between slides
        slidesPerView={isSmallScreen ? 1 : isMiddleScreen ? 2 : 4} // Adjust number of slides per view based on screen size
        loop={true} // Infinite loop
        autoplay={{
          delay: 2000, // Delay between slides (ms)
          disableOnInteraction: false, // Keep autoplay running even when user interacts
        }}
        speed={1000} // Slide transition speed (ms)
        modules={[Autoplay]} // Enable autoplay
        className="h-[400px]" // Fixed height for the swiper
      >
        {/* HeroCard slides */}
        <SwiperSlide className="h-full">
          <HeroCard
            title={cardsData[0].title}
            text={cardsData[0].text}
            icon={bookIcon}
            bgColor="rgb(165 243 252)"
            textColor="rgb(14 165 233)"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Image
            src={image1}
            alt="hero image"
            className="h-full w-full rounded-[20px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <HeroCard
            title={cardsData[1].title}
            text={cardsData[1].text}
            icon={inventoryIcon}
            bgColor="rgb(252 211 77)"
            textColor="rgb(217 119 6)"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Image
            src={image2}
            alt="hero image"
            className="h-full w-full rounded-[20px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            title={cardsData[2].title}
            text={cardsData[2].text}
            icon={invoiceIcon}
            bgColor="rgba(0, 255, 0, 0.5)" // Lime Green
            textColor="#008000" // Green
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Image
            src={image3}
            alt="hero image"
            className="h-full w-full rounded-[20px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </FullPage>
  );
};

export default App;
