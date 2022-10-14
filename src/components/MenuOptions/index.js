import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

function MenuOptions() {
  const menus = [
    {
      id: 1,
      title: "Breakfast",
    },
    {
      id: 2,
      title: "Lunch",
    },
    {
      id: 3,
      title: "Supper",
    },
    {
      id: 4,
      title: "Dessert",
    },
    {
      id: 5,
      title: "Snacks",
    },
  ];
  const [menu, setMenu] = useState(menus);
  return (
    <div>
      <h3>Our best menu</h3>
      <Swiper
        // install Swiper modules
        // modules={[Pagination]}
        // spaceBetween={-4}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {menus.map((item) => (
          <SwiperSlide>
            <button>{item.title}</button>
            {/* <Card  /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MenuOptions;
