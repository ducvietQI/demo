"use client";

import NewsCard from "@/components/sn-home/NewsSection/NewsCard";
import { Stack, Box, Grid2, Container } from "@mui/material";
import Image from "next/image";
import { useTabletDown } from "@/hooks";

const NewsPage = () => {
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
            Phản hồi của khách hàng
          </Box>
          <Box p={1.5} bgcolor="bg.grey" fontSize="14px" textAlign="center">
            Đối với khách hàng, chúng tôi luôn tận tâm tạo ra những giá trị cho
            Quý khách hàng thân yêu. Quanghoanhome gồm đội ngũ kiến trúc sư, kỹ
            sư, chuyên gia trang trí nội thất có trên 5 năm kinh nghiệm hoạt
            động
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
                Phản hồi của khách hàng
              </Box>
              <Box
                p={3}
                bgcolor="bg.grey"
                fontSize="14px"
                width="70%"
                textAlign="center"
              >
                Đối với khách hàng, chúng tôi luôn tận tâm tạo ra những giá trị
                cho Quý khách hàng thân yêu. Quanghoanhome gồm đội ngũ kiến trúc
                sư, kỹ sư, chuyên gia trang trí nội thất có trên 5 năm kinh
                nghiệm hoạt động
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
                    height: { xs: 340, md: 500 },
                  }}
                >
                  <NewsCard {...item} />
                </Grid2>
              );
            })}
          </Grid2>
        </Stack>
      </Container>
    </Stack>
  );
};

export default NewsPage;

const imagesGroup2 = [
  {
    id: 1,
    imgSrc: "/images/fb-1.webp",
    title: "Feedback yêu thương của gia chủ Bình Phước gửi về",
    description:
      "Quanghoanhome cảm thấy vô cùng biết ơn và hạnh phúc khi nhận được phản hồi tích cực từ gia chủ ở Bình Phước.....",
  },
  {
    id: 2,
    imgSrc: "/images/fb-2.webp",
    title:
      "Nơi kết nối yêu thương và hiện thực hóa giấc mơ tổ ấm của gia chủ Bình Thuận",
    description:
      "Chúng tôi xin chân thành cảm ơn gia chủ tại Bình Thuận đã gửi về những phản hồi tích cực dành cho Quanghoanhome. Đây là niềm động viên to lớn,...",
  },
  {
    id: 3,
    imgSrc: "/images/fb-3.jpg",
    title:
      "Chúc mừng gia đình anh chị đã hoàn thành mục tiêu 1 vợ, 2 lầu, 3 con, 4 bánh",
    description:
      "Chúc mừng gia đình anh chị đã hoàn thành mục tiêu 1 vợ, 2 lầu, 3 con, 4 bánh. Một tổ ấm, một niềm mong ước, một mục tiêu hướng đến tương lai tươi sáng,...",
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
