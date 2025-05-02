import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import ProductItems from './ProductItems';
const ProductSlider = (props) => {
  return (
    <section className='productSlider'>
          <Swiper
              slidesPerView={props.items}
              spaceBetween={10}
              pagination={{ clickable: true }}
              modules={[Navigation]}
              className="mySwiper py-4"
            > 
            
            <SwiperSlide>
                <ProductItems />
            </SwiperSlide>
              
            </Swiper>

    </section>
  )
}

export default ProductSlider