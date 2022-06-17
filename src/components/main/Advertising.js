import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BennarArea = styled.div`

`
function Advertising() {
  return (        
    <BennarArea>
      <Swiper
      className="banner"
      spaceBetween={50} // 슬라이드 간격
      slidesPerView={1} // 한번에 출력하는 슬라이드 개수
      autoplay={{ delay: 5000 }}
      //navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide><img className='adc' src={'/ad1.png'}></img></SwiperSlide>
      <SwiperSlide><img className='adc' src={'/ad2.png'}></img></SwiperSlide>
      <SwiperSlide><img className='adc' src={'/ad3.png'}></img></SwiperSlide>
      <SwiperSlide><img className='adc' src={'/ad4.png'}></img></SwiperSlide>
    </Swiper>
    </BennarArea>
  );
}

export default Advertising;