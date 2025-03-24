"use client";

import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection = () => {
  return (
    <Stack height="90vh" position="relative">
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
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
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={`slide-${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Khung màu vàng */}
            <Box
              position="absolute"
              left="50%"
              bottom="0"
              sx={{
                transform: "translateX(-50%)",
                bgcolor: "#F4B400",
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "850px",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                borderBottom="2px solid black"
                width="100%"
              >
                {slide.title}
              </Typography>
              <Typography variant="body1" mt={1} maxWidth="80%">
                {slide.description}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default BannerSection;

// Dữ liệu slide (thay đổi tùy theo nội dung bạn muốn hiển thị)
const slideData = [
  {
    image: "/images/SLIDE-HOME1.jpg",
    title: "CHÚNG TÔI SINH RA VÌ HẠNH PHÚC CỦA CHÍNH BẠN",
    description:
      "SBS HOUSE là công ty hoạt động toàn diện trong lĩnh vực thiết kế - thi công nhà phố theo phong cách hiện đại tại Đà Nẵng - Quảng Nam. Với hơn 5 năm hoạt động, chúng tôi đã đồng hành cùng hàng ngàn khách hàng để tạo nên những tổ ấm đẹp và mang giá trị bền vững.",
  },
  {
    image: "/images/SLIDE-HOME2.jpg",
    title: "ĐỘI NGŨ KIẾN TRÚC SƯ & KỸ SƯ CHUYÊN NGHIỆP",
    description:
      "Chúng tôi may mắn sở hữu một đội ngũ kiến trúc sư, kỹ sư vững chuyên môn, giàu kinh nghiệm; hứa hẹn sẽ mang đến những công trình khiến bạn hài lòng nhất.",
  },
  {
    image: "/images/SLIDE-HOME3.jpg",
    title: "PHƯƠNG CHÂM HOẠT ĐỘNG HƯỚNG ĐẾN KHÁCH HÀNG",
    description:
      "Với phương châm luôn đặt lợi ích của khách hàng lên hàng đầu, mọi sản phẩm mà SBS HOUSE tạo ra đều hướng đến lợi ích của bạn.",
  },
];
