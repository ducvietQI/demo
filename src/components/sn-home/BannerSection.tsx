"use client";

import apiRequester from "@/api/apiRequester";
import { ApiConst } from "@/constant";
import { useTabletDown } from "@/hooks";
import { IBanner } from "@/models/home.type";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection = () => {
  const isTabletDown = useTabletDown();

  const [banners, setBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await apiRequester.get<IBanner[]>(ApiConst.BANNER_LIST, {
          type: 0,
          size: 20,
        });
        const data = Array.isArray(res?.payload) ? res.payload : [];
        setBanners(data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

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
            key={index}
            className="relative w-full h-full flex flex-col"
          >
            {isTabletDown ? (
              <Stack>
                <Box position="relative" height={242} width="100%">
                  <Image
                    src={slide.image.url}
                    alt={`slide-${index + 1}`}
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
                alt={`slide-${index + 1}`}
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
