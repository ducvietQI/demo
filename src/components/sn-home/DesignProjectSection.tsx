"use client";

import { Box, Button, Stack, Typography, Grid2 } from "@mui/material";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon } from "../Icons";
import { useTabletDown } from "@/hooks";
import { useState } from "react";
import { ServiceModel } from "@/models/home.type";

const DesignProjectSection = ({
  serviceData,
}: {
  serviceData: ServiceModel[];
}) => {
  const isTabletDown = useTabletDown();
  const [hoveredSlides, setHoveredSlides] = useState<{
    [key: string]: boolean;
  }>({});

  const handleMouseEnter = (group: string, index: number) => {
    setHoveredSlides((prev) => ({ ...prev, [`${group}-${index}`]: true }));
  };

  const handleMouseLeave = (group: string, index: number) => {
    setHoveredSlides((prev) => ({ ...prev, [`${group}-${index}`]: false }));
  };

  const renderSwiper = (
    images: { src: string; title: string; description: string }[],
    group: string
  ) => (
    <Swiper
      slidesPerView={isTabletDown ? 1 : 3}
      spaceBetween={30}
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", height: "280px" }}
    >
      {images.map((item, index) => {
        const isHovered = hoveredSlides[`${group}-${index}`];

        return (
          <SwiperSlide
            key={index}
            onMouseEnter={() => handleMouseEnter(group, index)}
            onMouseLeave={() => handleMouseLeave(group, index)}
            style={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={item.src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw" // Thêm sizes
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </Box>

            {/* Background vàng xuất hiện từ giữa */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: 0,
                bgcolor: "rgba(255, 193, 7, 0.85)", // Vàng
                transition: "height .2s ease-in-out, top .2s ease-in-out",
                ...(isHovered && { height: "100%", top: 0 }),
              }}
            />

            {/* Nội dung chỉ xuất hiện khi hover */}
            {isHovered && (
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  p: "15px",
                  width: "100%",
                  height: "100%",
                  transition: "opacity 0.3s ease-in-out",
                  justifyContent: "space-between",
                }}
              >
                <Stack spacing={2}>
                  <Typography fontSize="18px" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography fontSize="14px" mt={1}>
                    {item.description}
                  </Typography>
                </Stack>
                <Button
                  sx={{
                    mt: 2,
                    color: "white",
                    minWidth: "fit-content",
                    width: "fit-content",
                    fontSize: 14,
                  }}
                  variant="text"
                  endIcon={<ArrowRightIcon />}
                >
                  Xem thêm
                </Button>
              </Stack>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );

  return (
    <Stack direction="row" bgcolor="#fff" pb={{ xs: "15px", md: 10 }}>
      <Grid2 container spacing={3} px={{ xs: "15px", md: 0 }}>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            borderTop: "1px solid",
            pl: "calc((100vw - 1250px) / 2)",
            borderColor: "primary.main",
          }}
        >
          <Typography
            fontSize="27px"
            fontWeight={700}
            color="primary.main"
            pt={2}
          >
            Công trình thiết kế
          </Typography>
          <Typography pt={2} color="text.black" fontSize="16px">
            Mỗi năm, Quanghoanhome thực hiện hàng trăm công trình thiết kế ở mọi
            miền đất nước. Phong cách thiết kế chính của Quanghoanhome là hiện
            đại - tối giản - tiện nghi - thông thoáng. Ngoài ra, những ý tưởng
            và sở thích của gia chủ cũng được ưu tiên hàng đầu, để tạo nên một
            công trình nhà ở độc bản, mang đậm dấu ấn cá nhân.
          </Typography>
          <Button
            sx={{
              minWidth: "fit-content",
              borderRadius: 0,
              fontSize: "14px",
              color: "white",
              mt: 2.5,
              ":hover": { color: "text.black", bgcolor: "primary.main" },
            }}
            variant="contained"
            endIcon={<ArrowRightIcon />}
          >
            Xem tất cả
          </Button>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          {renderSwiper(imagesGroup1, "group1")}
          {!isTabletDown && (
            <Box sx={{ mt: 3 }}>{renderSwiper(imagesGroup2, "group2")}</Box>
          )}
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default DesignProjectSection;

const imagesGroup1 = [
  {
    src: "/images/1.webp",
    title: "V’s Villa 2 mặt tiền, 4 mùa trọn vẹn cùng thiên nhiên",
    description:
      "Trong nhịp sống hiện đại hối hả, con người càng trân quý hơn những phút giây bình yên...",
  },
  {
    src: "/images/2.webp",
    title: "Kiến trúc xanh giữa lòng đô thị",
    description:
      "Một không gian sống hài hòa với thiên nhiên, nơi con người tìm lại sự cân bằng và thư thái.",
  },
  {
    src: "/images/3.webp",
    title: "Thiết kế mở, đón trọn ánh sáng tự nhiên",
    description:
      "Mọi góc nhỏ trong căn nhà đều trở thành nơi thư giãn, tận hưởng ánh nắng ban mai.",
  },
  {
    src: "/images/4.webp",
    title: "Nét đẹp hoài cổ trong không gian hiện đại",
    description:
      "Sự kết hợp giữa phong cách cổ điển và tiện nghi đương đại mang đến trải nghiệm sống đẳng cấp.",
  },
  {
    src: "/images/5.webp",
    title: "Biệt thự Indochine – Giao thoa văn hóa Á – Âu",
    description:
      "Từng đường nét kiến trúc được chăm chút tỉ mỉ, gợi nhớ vẻ đẹp của thời kỳ Đông Dương.",
  },
  {
    src: "/images/6.webp",
    title: "Nhà phố 5x23m – Giải pháp tối ưu cho không gian hẹp",
    description:
      "Thiết kế thông minh giúp tận dụng tối đa diện tích, mang lại sự tiện nghi và thoải mái.",
  },
  {
    src: "/images/7.webp",
    title: "Không gian sống tối giản nhưng đầy đủ tiện ích",
    description:
      "Xu hướng tối giản không chỉ mang đến sự gọn gàng mà còn giúp tinh thần thư thái hơn.",
  },
  {
    src: "/images/8.webp",
    title: "Villa sang trọng giữa lòng thành phố",
    description:
      "Một nơi ở yên bình, tách biệt khỏi nhịp sống hối hả nhưng vẫn đầy đủ tiện nghi hiện đại.",
  },
  {
    src: "/images/9.webp",
    title: "Góc nhỏ thư giãn trong chính ngôi nhà của bạn",
    description:
      "Một không gian mở, nơi thiên nhiên len lỏi vào từng góc nhỏ, mang đến sự thư thái tuyệt đối.",
  },
];

const imagesGroup2 = [
  {
    src: "/images/18.webp",
    title: "Hơi thở Địa Trung Hải trong từng đường nét",
    description:
      "Một không gian sống mang đến sự tươi mát, phóng khoáng với gam màu biển cả.",
  },
  {
    src: "/images/11.webp",
    title: "Nhà vườn giữa lòng thành phố",
    description:
      "Không gian xanh mát giúp cân bằng cuộc sống và mang lại nguồn năng lượng tích cực.",
  },
  {
    src: "/images/12.webp",
    title: "Nét đẹp tối giản, tinh tế",
    description:
      "Kiến trúc tối giản nhưng không kém phần sang trọng, tạo nên không gian sống đầy cảm hứng.",
  },
  {
    src: "/images/13.webp",
    title: "Biệt thự hiện đại với không gian mở",
    description:
      "Sự kết hợp hoàn hảo giữa ánh sáng tự nhiên và nội thất sang trọng tạo nên một không gian sống lý tưởng.",
  },
  {
    src: "/images/14.webp",
    title: "Thiết kế thông minh – Nâng tầm trải nghiệm sống",
    description:
      "Tận dụng tối đa ánh sáng và gió tự nhiên, giúp không gian luôn thông thoáng và thoải mái.",
  },
  {
    src: "/images/15.webp",
    title: "Không gian xanh trong từng góc nhà",
    description:
      "Cây xanh không chỉ giúp thanh lọc không khí mà còn mang lại cảm giác thư thái, dễ chịu.",
  },
  {
    src: "/images/16.webp",
    title: "Thiết kế nhà phố tối ưu không gian",
    description:
      "Mọi góc nhỏ trong căn nhà đều được bố trí hợp lý để mang lại sự tiện nghi và thoải mái.",
  },
  {
    src: "/images/17.webp",
    title: "Phong cách Nhật Bản trong thiết kế nhà ở",
    description:
      "Một không gian sống đơn giản, thanh lịch nhưng đầy đủ công năng và sự tiện nghi.",
  },
];
