"use client";

import { useState } from "react";
import { Box, Button, Stack, Typography, Grid2 } from "@mui/material";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon } from "../Icons";
import { useTabletDown } from "@/hooks";

const ConstructionWorkSection = () => {
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
    <Stack
      direction="row"
      bgcolor="#fff"
      pb={{ xs: "15px", md: 10 }}
      pt={{ xs: "15px", md: "unset" }}
    >
      <Grid2 container spacing={3} px={{ xs: "15px", md: 0 }}>
        {!isTabletDown && (
          <Grid2 size={8}>
            {renderSwiper(imagesGroup1, "group1")}
            <Box sx={{ mt: 3 }}>{renderSwiper(imagesGroup2, "group2")}</Box>
          </Grid2>
        )}

        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            borderTop: "1px solid",
            pr: "calc((100vw - 1250px) / 2)",
            borderColor: "primary.main",
          }}
        >
          <Typography
            fontSize="27px"
            fontWeight={700}
            color="primary.main"
            pt={2}
          >
            Công trình thi công
          </Typography>
          <Typography pt={2} color="primary.black" fontSize="16px">
            Tất cả công trình thi công do Quanghoanhome thực hiện đều đảm bảo
            những giải pháp mới và tối ưu nhất nhằm mang đến một sản phẩm kiên
            cố, bền vững. Mặc dù thi công nhà phố nhưng từ hạng mục lớn nhỏ đều
            được áp dụng kỹ thuật thi công nhà cao tầng Coteccons. Hơn thế nữa,
            các công trình được thiết kế - thi công trọn gói sẽ giống với bản vẽ
            thiết kế ít nhất 95%.
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

        {isTabletDown && (
          <Grid2 size={12}>{renderSwiper(imagesGroup1, "group1")}</Grid2>
        )}
      </Grid2>
    </Stack>
  );
};

export default ConstructionWorkSection;

const imagesGroup1 = [
  {
    src: "/images/19.webp",
    title: "T’s House – Công trình thi công trọn gói giống bản vẽ hơn 95%",
    description:
      "Xây dựng một ngôi nhà không chỉ là việc hiện thực hóa một bản thiết kế đẹp mà còn là quá trình biến từng đường nét, từng chi tiết trở...",
  },
  {
    src: "/images/20.webp",
    title:
      "Chìa khóa trao tay Hubic’s House – 4 công trình, 2 thế hệ, 1 niềm tin trọn vẹn",
    description:
      "Xây nhà không chỉ là tạo dựng không gian sống, mà còn là hành trình đặt nền móng cho những giá trị bền vững. Với gia đình anh H, tổ...",
  },
  {
    src: "/images/21.webp",
    title:
      "Công trình thi công trọn gói 5×14,9m sở hữu không gian Sáng – Xanh – Thoáng",
    description:
      "Công trình thực tế với không Trong nhịp sống đô thị hiện đại, một ngôi nhà không chỉ đơn thuần là nơi trú ngụ mà còn là không gian để...",
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
    src: "/images/22.webp",
    title: "Hình ảnh thực tế ngôi nhà 2 tầng 1 tum sáng thoáng tối đa",
    description:
      "Giữa nhịp sống hiện đại, một không gian vừa thoáng đãng, gần gũi thiên nhiên vừa mang phong cách tối giản đang trở thành lựa chọn lý tưởng của nhiều...",
  },
  {
    src: "/images/23.webp",
    title: "Nhà vườn giữa lòng thành phố",
    description:
      "Không gian xanh mát giúp cân bằng cuộc sống và mang lại nguồn năng lượng tích cực.",
  },
  {
    src: "/images/24.webp",
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
  {
    src: "/images/18.webp",
    title: "Hài hòa giữa hiện đại và truyền thống",
    description:
      "Thiết kế lấy cảm hứng từ kiến trúc truyền thống nhưng vẫn đáp ứng các tiêu chuẩn sống hiện đại.",
  },
];
