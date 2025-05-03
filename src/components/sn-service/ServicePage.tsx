"use client";
import { useTabletDown } from "@/hooks";
import { Box, Container, Grid2, Stack } from "@mui/material";
import ServiceCard from "./ServiceCard";
import AppPagination from "../AppPagination";

const ServicePage = () => {
  const isTabletDown = useTabletDown();

  return (
    <Stack position="relative">
      {isTabletDown && (
        <>
          <Box
            p="10px"
            bgcolor="primary.main"
            fontSize="20px"
            textAlign="center"
            fontWeight={700}
          >
            Dịch vụ
          </Box>
          <Box p={1.5} bgcolor="bg.grey" fontSize="14px" textAlign="center">
            Để đáp ứng nhu cầu của khách hàng, Quanghoanhome cung cấp những dịch
            vụ như: thiết kế kiến trúc, thi công nhà phố, thiết kế và thi công
            trọn gói,… tại Đà Nẵng, TP.HCM và nhiều tỉnh thành khác.
          </Box>
        </>
      )}
      <Container>
        {!isTabletDown && (
          <Stack alignItems="center" position="relative">
            <Box
              p="10px"
              position="absolute"
              bgcolor="primary.main"
              fontSize="20px"
              width="70%"
              textAlign="center"
              top={-51}
              fontWeight={700}
              zIndex={2}
              boxSizing="border-box"
            >
              Dịch vụ
            </Box>
            <Box
              p={3}
              bgcolor="#e5dfdf"
              fontSize="14px"
              width="70%"
              fontWeight={500}
              textAlign="center"
              boxSizing="border-box"
            >
              Để đáp ứng nhu cầu của khách hàng, Quanghoanhome cung cấp những
              dịch vụ như: thiết kế kiến trúc, thi công nhà phố, thiết kế và thi
              công trọn gói,… tại Đà Nẵng, TP.HCM và nhiều tỉnh thành khác.
            </Box>
          </Stack>
        )}

        <Grid2 my={5} container columnSpacing={2} rowSpacing={2}>
          {imagesGroup2.map((item, index) => {
            return (
              <Grid2
                size={{ xs: 12, md: 4 }}
                key={index}
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  height: { xs: 340, md: 400 },
                }}
              >
                <ServiceCard {...item} />
              </Grid2>
            );
          })}
        </Grid2>

        <Stack alignItems="center" mb={5}>
          <AppPagination />
        </Stack>
      </Container>
    </Stack>
  );
};

export default ServicePage;

const imagesGroup2 = [
  {
    id: 1,
    imgSrc: "/images/22.webp",
    title: "Hình ảnh thực tế ngôi nhà 2 tầng 1 tum sáng thoáng tối đa",
    description:
      "Giữa nhịp sống hiện đại, một không gian vừa thoáng đãng, gần gũi thiên nhiên vừa mang phong cách tối giản đang trở thành lựa chọn lý tưởng của nhiều...",
  },
  {
    id: 2,
    imgSrc: "/images/23.webp",
    title: "Nhà vườn giữa lòng thành phố",
    description:
      "Không gian xanh mát giúp cân bằng cuộc sống và mang lại nguồn năng lượng tích cực.",
  },
  {
    id: 3,
    imgSrc: "/images/24.webp",
    title: "Nét đẹp tối giản, tinh tế",
    description:
      "Kiến trúc tối giản nhưng không kém phần sang trọng, tạo nên không gian sống đầy cảm hứng.",
  },
  {
    id: 4,
    imgSrc: "/images/13.webp",
    title: "Biệt thự hiện đại với không gian mở",
    description:
      "Sự kết hợp hoàn hảo giữa ánh sáng tự nhiên và nội thất sang trọng tạo nên một không gian sống lý tưởng.",
  },
  {
    id: 5,
    imgSrc: "/images/14.webp",
    title: "Thiết kế thông minh – Nâng tầm trải nghiệm sống",
    description:
      "Tận dụng tối đa ánh sáng và gió tự nhiên, giúp không gian luôn thông thoáng và thoải mái.",
  },
  {
    id: 6,
    imgSrc: "/images/15.webp",
    title: "Không gian xanh trong từng góc nhà",
    description:
      "Cây xanh không chỉ giúp thanh lọc không khí mà còn mang lại cảm giác thư thái, dễ chịu.",
  },
  {
    id: 7,
    imgSrc: "/images/16.webp",
    title: "Thiết kế nhà phố tối ưu không gian",
    description:
      "Mọi góc nhỏ trong căn nhà đều được bố trí hợp lý để mang lại sự tiện nghi và thoải mái.",
  },
  {
    id: 8,
    imgSrc: "/images/17.webp",
    title: "Phong cách Nhật Bản trong thiết kế nhà ở",
    description:
      "Một không gian sống đơn giản, thanh lịch nhưng đầy đủ công năng và sự tiện nghi.",
  },
  {
    id: 9,
    imgSrc: "/images/18.webp",
    title: "Hài hòa giữa hiện đại và truyền thống",
    description:
      "Thiết kế lấy cảm hứng từ kiến trúc truyền thống nhưng vẫn đáp ứng các tiêu chuẩn sống hiện đại.",
  },
];
