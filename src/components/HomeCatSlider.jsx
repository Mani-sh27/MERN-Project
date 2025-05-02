import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const categories = [
  { label: 'Fashion', img: 'https://serviceapi.spicezgold.com/download/1744509970781_fash.png' },
  { label: 'Electronics', img: 'https://serviceapi.spicezgold.com/download/1741660988059_ele.png' },
  { label: 'Bags', img: 'https://serviceapi.spicezgold.com/download/1741661045887_bag.png' },
  { label: 'Footwear', img: 'https://serviceapi.spicezgold.com/download/1741661061379_foot.png' },
  { label: 'Groceries', img: 'https://serviceapi.spicezgold.com/download/1741661077633_gro.png' },
  { label: 'Beauty', img: 'https://serviceapi.spicezgold.com/download/1741661092792_beauty.png' },
  { label: 'Wellness', img: 'https://serviceapi.spicezgold.com/download/1741661105893_well.png' },
  { label: 'Jewellery', img: 'https://serviceapi.spicezgold.com/download/1741661120743_jw.png' },
];

export default function CategorySwiper() {
  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper py-4"
    >
      {categories.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex mt-5 flex-col items-center shadow-xl me-6 ms-6 rounded-md cursor-pointer py-8 bg-white hover:shadow-sm transition">
            <img src={item.img} alt={item.label} className="h-16 mb-2" />
            <p className="text-sm font-medium">{item.label}</p>
          </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
