"use client";

import { useTabletDown } from "@/hooks";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection = () => {
  const isTabletDown = useTabletDown();

  return (
    <Stack height={{ xs: "fit-content", md: "60vh" }} position="relative">
      <Swiper
        loop={true}
        // navigation={true}
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
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative w-full h-full flex flex-col"
          >
            {isTabletDown ? (
              <Stack>
                <Box position="relative" height={242} width="100%">
                  <Image
                    src={slide.image}
                    alt={`slide-${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0} // Ưu tiên tải slide đầu tiên
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 80vw, 60vw" // Tối ưu kích thước theo màn hình
                  />
                </Box>
                {/* <Stack
                  sx={{
                    bgcolor: "#F4B400",
                    color: "black",
                  }}
                >
                  <Typography
                    fontSize="18px"
                    fontWeight={700}
                    borderBottom="2px solid black"
                    p="10px"
                    textAlign="center"
                  >
                    CHÚNG TÔI SINH RA VÌ HẠNH PHÚC CỦA CHÍNH BẠN
                  </Typography>
                  <Typography variant="h6" textAlign="center" p="15px">
                    Quanghoanhome là công ty hoạt động toàn diện trong lĩnh vực
                    thiết kế - thi công nhà phố theo phong cách hiện đại tại Đà
                    Nẵng - Quảng Nam. Với hơn 5 năm hoạt động, chúng tôi đã đồng
                    hành cùng hàng ngàn khách hàng để tạo nên những tổ ấm đẹp và
                    mang giá trị bền vững.
                  </Typography>
                </Stack> */}
              </Stack>
            ) : (
              <Image
                src={slide.image}
                alt={`slide-${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            )}
            {/* Khung màu vàng với nội dung chia cột */}
            {/* {!isTabletDown && (
              <Box
                position="absolute"
                left="50%"
                bottom="0"
                sx={{
                  transform: "translateX(-50%)",
                  bgcolor: "#F4B400",
                  color: "black",
                  textAlign: "center",
                  width: "850px",
                  borderTop: "2px solid black",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  borderBottom="2px solid black"
                  width="100%"
                  p="10px"
                >
                  CHÚNG TÔI SINH RA VÌ HẠNH PHÚC CỦA CHÍNH BẠN
                </Typography>
                <Grid2 container spacing={2}>
                  <Grid2
                    size={6}
                    sx={{ borderRight: "1px solid black", p: "15px" }}
                  >
                    <Typography variant="h6">
                      Quanghoanhome là công ty hoạt động toàn diện trong lĩnh vực
                      thiết kế - thi công nhà phố theo phong cách hiện đại tại
                      Đà Nẵng - Quảng Nam. Với hơn 5 năm hoạt động, chúng tôi đã
                      đồng hành cùng hàng ngàn khách hàng để tạo nên những tổ ấm
                      đẹp và mang giá trị bền vững.
                    </Typography>
                  </Grid2>
                  <Grid2 size={6} sx={{ p: "15px" }}>
                    <Typography variant="h6">
                      Chúng tôi may mắn sở hữu một đội ngũ kiến trúc sư, kỹ sư
                      vững chuyên môn, giàu kinh nghiệm; hứa hẹn sẽ mang đến
                      những công trình khiến bạn hài lòng nhất. Với phương châm
                      luôn đặt lợi ích của khách hàng lên hàng đầu, mọi sản phẩm
                      mà Quanghoanhome tạo ra đều hướng đến lợi ích của bạn.
                    </Typography>
                  </Grid2>
                </Grid2>
              </Box>
            )} */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default BannerSection;

// Dữ liệu slide với nội dung giữ nguyên cho tất cả các slide
const slideData = [
  { image: "/images/SLIDE-HOME1.webp" },
  { image: "/images/SLIDE-HOME2.webp" },
  { image: "/images/SLIDE-HOME3.webp" },
];
