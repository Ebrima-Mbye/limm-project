"use client";

import Slider from "react-slick";

const CardCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8">
      <Slider {...settings}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/path/to/your-image.jpg"
            alt="Card 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Card 1</h3>
            <p className="text-gray-700">Description for Card 1</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/path/to/your-image.jpg"
            alt="Card 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Card 2</h3>
            <p className="text-gray-700">Description for Card 2</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/path/to/your-image.jpg"
            alt="Card 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Card 3</h3>
            <p className="text-gray-700">Description for Card 3</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </Slider>
    </div>
  );
};

export default CardCarousel;

// "use client"

// import React from "react";
// import Slider from "react-slick";

// export default function CardCarousel() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
