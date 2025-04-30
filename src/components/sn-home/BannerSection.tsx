"use client";

import { useTabletDown } from "@/hooks";
import { IBanner } from "@/models/home.type";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface BannerSectionProps {
  banners: IBanner[];
}

const BannerSection = ({ banners }: BannerSectionProps) => {
  const isTabletDown = useTabletDown();

  return (
    <Stack height={{ xs: "fit-content", md: "60vh" }} position="relative">
      <Swiper
        loop={true}
        effect="fade"
        modules={[Navigation, Autoplay, EffectFade]}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{
          userSelect: "none",
        }}
        className="relative w-full h-full"
      >
        {banners.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className="relative w-full h-full flex flex-col"
          >
            {isTabletDown ? (
              <Stack>
                <Box position="relative" height={242} width="100%">
                  <Image
                    src={slide.image.url}
                    alt={slide.image.caption}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 80vw, 60vw"
                  />
                </Box>
              </Stack>
            ) : (
              <Image
                src={slide.image.url}
                alt={slide.image.caption}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default BannerSection;
