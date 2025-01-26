"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Slider = () => {
  return (
    <div className="w-full bg-gray-100">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Show 5 slides at once
        autoplay={{
          delay: 0, // Start immediately
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={4000} // Speed of the slide transition (slower if you increase the value)
        loop={true} // Loop infinitely
        allowTouchMove={false} // Disable manual dragging/swiping
      >
        {/* Slides */}
        <SwiperSlide className="rounded-lg bg-blue-500 text-white shadow-lg">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="rounded-lg bg-green-500 text-white shadow-lg">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="rounded-lg bg-red-500 text-white shadow-lg">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="rounded-lg bg-purple-500 text-white shadow-lg">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="rounded-lg bg-orange-500 text-white shadow-lg">
          Slide 5
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// flex items-center justify-center 
// flex items-center justify-center 
// flex items-center justify-center 
// flex items-center justify-center 
// flex items-center justify-center

export default Slider;
