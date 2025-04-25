import { useTabletDown } from "@/hooks";
import { Container, Stack, Typography } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  const isTabletDown = useTabletDown();

  return (
    <Stack bgcolor="#fff" pb={{ xs: "15px", md: "50px" }}>
      <Container>
        <Stack spacing={2}>
          <Typography
            variant="h2"
            color="primary"
            borderBottom="1px solid #ffba00"
            fontWeight={700}
          >
            Bài viết
          </Typography>

          <Swiper
            slidesPerView={isTabletDown ? 1 : 3}
            spaceBetween={30}
            modules={[Navigation]}
            navigation
            pagination={{ clickable: true }}
            style={{ width: "100%", height: "365px" }}
            className="news-section"
          >
            {imagesGroup2.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    height: "100%",
                  }}
                >
                  <NewsCard {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </Stack>
  );
};

export default NewsSection;

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
