import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ad1URL from '../../images/ad1.png';
import ad2URL from '../../images/ad2.png';
import ad3URL from '../../images/ad3.png';
import ad4URL from '../../images/ad4.png';

SwiperCore.use([Navigation, Pagination, Autoplay]);

class Advertising extends Component {
  render() {
    return (        
      <div className='ad'>
        <Swiper
        className="banner"
        spaceBetween={50} // 슬라이드 간격
        slidesPerView={1} // 한번에 출력하는 슬라이드 개수
        autoplay={{ delay: 5000 }}
        //navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img className='adc' src={ad1URL}></img></SwiperSlide>
        <SwiperSlide><img className='adc' src={ad2URL}></img></SwiperSlide>
        <SwiperSlide><img className='adc' src={ad3URL}></img></SwiperSlide>
        <SwiperSlide><img className='adc' src={ad4URL}></img></SwiperSlide>
      </Swiper>
      </div>
    );
  }
}

export default Advertising;