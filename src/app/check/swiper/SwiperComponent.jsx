"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// Import modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SwiperComponent() {
  const imageStyles = {
    borderRadius: "10px",
  };

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000, // Delay between slides (in milliseconds)
        disableOnInteraction: false, // Continue autoplay after interaction
      }}
      speed={3500} // Transition animation speed (1.5 seconds here)
      className="w-[80%]"
    >
      <SwiperSlide>
        <Image
          src="/image-1.jpeg"
          alt="image of something"
          width={600}
          height={200}
          style={imageStyles}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image-1.jpeg"
          alt="image of something"
          width={600}
          height={200}
          style={imageStyles}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image-1.jpeg"
          alt="image of something"
          width={600}
          height={200}
          style={imageStyles}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image-1.jpeg"
          alt="image of something"
          width={600}
          height={200}
          style={imageStyles}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image-1.jpeg"
          alt="image of something"
          width={600}
          height={200}
          style={imageStyles}
        />
      </SwiperSlide>
    </Swiper>
  );
}
