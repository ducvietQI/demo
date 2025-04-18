"use client";

import ProjectCard from "@/components/sn-project/ProjectCard";
import { useTabletDown } from "@/hooks";
import { Box, Container, Grid2, Stack } from "@mui/material";
import Image from "next/image";

const ProjectPage = () => {
  const isTabletDown = useTabletDown();

  return (
    <Stack>
      <Box
        sx={{
          position: "relative",
          height: { xs: 126, md: "60vh" },
        }}
      >
        <Image
          src="/images/service-banner.jpg"
          alt={"banner-service"}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </Box>

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
            Để đáp ứng nhu cầu của khách hàng, SBS cung cấp những dịch vụ như:
            thiết kế kiến trúc, thi công nhà phố, thiết kế và thi công trọn
            gói,… tại Đà Nẵng, TP.HCM và nhiều tỉnh thành khác.
          </Box>
        </>
      )}

      <Container>
        <Stack alignItems="center" position="relative">
          {!isTabletDown && (
            <>
              <Box
                p="10px"
                position="absolute"
                bgcolor="primary.main"
                fontSize="20px"
                width="70%"
                textAlign="center"
                top={-51}
                fontWeight={700}
              >
                Mẫu Nhà Đẹp
              </Box>
              <Box
                p={3}
                bgcolor="bg.grey"
                fontSize="14px"
                width="70%"
                textAlign="center"
              >
                Với hơn 6 năm hoạt động, chúng tôi đã thiết kế hàng trăm công
                trình từ nhà phố đến khách sạn, nhà hàng, building,… Mỗi công
                trình đều chứa đựng tâm huyết của đội ngũ kiến trúc sư cùng kỹ
                sư tại SBS.
              </Box>
            </>
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
                  <ProjectCard {...item} />
                </Grid2>
              );
            })}
          </Grid2>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProjectPage;

const imagesGroup2 = [
  {
    id: 1,
    imgSrc: "/images/10.webp",
    title: "Hình ảnh thực tế ngôi nhà 2 tầng 1 tum sáng thoáng tối đa",
    description:
      "Giữa nhịp sống hiện đại, một không gian vừa thoáng đãng, gần gũi thiên nhiên vừa mang phong cách tối giản đang trở thành lựa chọn lý tưởng của nhiều...",
  },
  {
    id: 2,
    imgSrc: "/images/11.webp",
    title: "Nhà vườn giữa lòng thành phố",
    description:
      "Không gian xanh mát giúp cân bằng cuộc sống và mang lại nguồn năng lượng tích cực.",
  },
  {
    id: 3,
    imgSrc: "/images/12.webp",
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
    imgSrc: "/images/16.webp",
    title: "Thiết kế thông minh – Nâng tầm trải nghiệm sống",
    description:
      "Tận dụng tối đa ánh sáng và gió tự nhiên, giúp không gian luôn thông thoáng và thoải mái.",
  },
  {
    id: 6,
    imgSrc: "/images/17.webp",
    title: "Không gian xanh trong từng góc nhà",
    description:
      "Cây xanh không chỉ giúp thanh lọc không khí mà còn mang lại cảm giác thư thái, dễ chịu.",
  },
  {
    id: 7,
    imgSrc: "/images/19.webp",
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
