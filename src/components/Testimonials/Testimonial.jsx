import "./testimonial.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      avatar: AVT1,
      name: "Tina Snow",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ut architecto est explicabo neque enim doloribus, ea quibusdam eum quod iusto, corporis accusantium rem eveniet soluta repudiandaeullam at id.",
    },
    {
      id: 2,
      avatar: AVT2,
      name: "Shatta wale",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ut architecto est explicabo neque enim doloribus, ea quibusdam eum quod iusto, corporis accusantium rem eveniet soluta repudiandaeullam at id.",
    },
    {
      id: 3,
      avatar: AVT3,
      name: "Kwame Despite",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ut architecto est explicabo neque enim doloribus, ea quibusdam eum quod iusto, corporis accusantium rem eveniet soluta repudiandaeullam at id.",
    },
    {
      id: 4,
      avatar: AVT4,
      name: "Despite costa",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ut architecto est explicabo neque enim doloribus, ea quibusdam eum quod iusto, corporis accusantium rem eveniet soluta repudiandaeullam at id.",
    },
  ];
  return (
    <>
      <section id="testimonial">
        <h5>Review from clients</h5>
        <h2>Testimonial</h2>
        <Swiper
          className="container testimonials_container"
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          
        >
          {testimonials?.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
