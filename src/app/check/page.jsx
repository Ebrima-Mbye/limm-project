import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const MySwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50} // space between slides
      slidesPerView={1} // number of slides to show
      loop={true} // looping slides
    >
      <SwiperSlide>
        <img
          src="/images/sliding/mrbeast.svg"
          width={300}
          height={100}
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliding/mrbeast.svg"
          width={300}
          height={100}
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliding/mrbeast.svg"
          width={300}
          height={100}
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiperComponent;
