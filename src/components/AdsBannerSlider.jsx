import React from 'react';
import BannerBox from './BannerBox';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import  { Swiper,SwiperSlide } from'swiper/react';
import 'swiper/css/pagination';
const AdsBannerSlider = () => {
  
    const categories = [
      {
        img: 'https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp',
        link: '/'
      },
      {
        img: 'https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp',
        link: '/'
      },
      {
        img: 'https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp',
        link: '/'
      },
      {
        img: 'https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp',
        link: '/'
      }
    ];

  return (
    <div>
      <Swiper
      slidesPerView={4}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper py-4"
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      grabCursor={false}
        allowTouchMove={false}
    >
      {categories.map((item, id) => (
        <SwiperSlide className='w-[80%]' key={id}>
          <BannerBox img={item.img} link={item.link}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default AdsBannerSlider