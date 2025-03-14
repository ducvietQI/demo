"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const BannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      spaceBetween={0}
      effect="fade"
      navigation={true}
      modules={[EffectFade, Navigation]}
      className="relative w-full h-screen"
      speed={2000}
      fadeEffect={{
        crossFade: true,
      }}
      loop={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {slideImages.map((src, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          <Image
            src={src}
            alt={`slide-${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h1
              className={`text-white leading-[66px] max-w-7xl text-6xl font-bold text-center transition-opacity uppercase duration-2000 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {textSlides[index]}
            </h1>
          </div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSection;

const textSlides = [
  "Chú trọng vào thiết kế mang tính ứng dụng cao",
  "Sáng tạo và đổi mới trong từng chi tiết",
  "Hiệu suất và tối ưu hóa trải nghiệm người dùng",
  "Phong cách thiết kế tối giản nhưng đầy ấn tượng",
  "Chất lượng luôn là ưu tiên hàng đầu",
  "Chú trọng đến tính bền vững và môi trường",
];

const slideImages = [
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
  "/images/slide-4.jpg",
  "/images/slide-5.jpg",
  "/images/slide-6.jpg",
];
