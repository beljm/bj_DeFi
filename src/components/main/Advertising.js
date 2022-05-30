import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

class Advertising extends Component {
  render() {
    return (        
      <div className='ad'>
        <Swiper
        className="banner"
        spaceBetween={50} // 슬라이드 간격
        slidesPerView={1} // 한번에 출력하는 슬라이드 개수
        navigation
        pagination={{ clickable: true }}
        height={50}
      >
        <SwiperSlide>ad1</SwiperSlide>
        <SwiperSlide>ad2</SwiperSlide>
        <SwiperSlide>ad3</SwiperSlide>
        <SwiperSlide>ad4</SwiperSlide>
      </Swiper>
      </div>
    );
  }
}

export default Advertising;