import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MarqueeSlider = () => {
  // Array of image URLs
  const images = [
    "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg",
    "https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg",
    "https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg",
    "https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg",
    "https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg",
    "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg",
  ];

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView="auto"
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        allowTouchMove={false}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide
            key={index}
            className="flex-shrink-0"
          >
            <img
              src={imageUrl}
              className="w-full rounded-2xl"
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  );
};

export default MarqueeSlider;