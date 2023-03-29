import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper';
import SliderCard from './sliderCard';
import { testimonial } from '../../util/Utility';
export default function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {testimonial.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderCard
                name={data.name}
                title={data.title}
                imgsrc={data.image}
              ></SliderCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
