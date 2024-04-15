import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit doloremque nobis tenetur! Doloremque officiis amet mollitia sapiente eius dolores? Sunt eaque facere cum doloremque sit qui molestias doloribus assumenda dignissimos.",
  },
  {
    avatar: AVTR2,
    name: "David Juwe",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit doloremque nobis tenetur! Doloremque officiis amet mollitia sapiente eius dolores? Sunt eaque facere cum doloremque sit qui molestias doloribus assumenda dignissimos.",
  },
  {
    avatar: AVTR3,
    name: "Jesse Juwe",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit doloremque nobis tenetur! Doloremque officiis amet mollitia sapiente eius dolores? Sunt eaque facere cum doloremque sit qui molestias doloribus assumenda dignissimos.",
  },
  {
    avatar: AVTR4,
    name: "Bisi Johnson",
    review:
      "Lorem ipsum dolor sie, amet consectetur adipisicing elit. Odit doloremque nobis tenetur! Doloremque officiis amet mollitia sapiente eius dolores? Sunt eaque facere cum doloremque sit qui molestias doloribus assumenda dignissimos.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
