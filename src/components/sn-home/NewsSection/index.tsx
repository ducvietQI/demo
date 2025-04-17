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
    imgSrc: "/images/22.webp",
    title: "Hình ảnh thực tế ngôi nhà 2 tầng 1 tum sáng thoáng tối đa",
    description:
      "Giữa nhịp sống hiện đại, một không gian vừa thoáng đãng, gần gũi thiên nhiên vừa mang phong cách tối giản đang trở thành lựa chọn lý tưởng của nhiều...",
  },
  {
    imgSrc: "/images/23.webp",
    title: "Nhà vườn giữa lòng thành phố",
    description:
      "Không gian xanh mát giúp cân bằng cuộc sống và mang lại nguồn năng lượng tích cực.",
  },
  {
    imgSrc: "/images/24.webp",
    title: "Nét đẹp tối giản, tinh tế",
    description:
      "Kiến trúc tối giản nhưng không kém phần sang trọng, tạo nên không gian sống đầy cảm hứng.",
  },
  {
    imgSrc: "/images/13.webp",
    title: "Biệt thự hiện đại với không gian mở",
    description:
      "Sự kết hợp hoàn hảo giữa ánh sáng tự nhiên và nội thất sang trọng tạo nên một không gian sống lý tưởng.",
  },
  {
    imgSrc: "/images/14.webp",
    title: "Thiết kế thông minh – Nâng tầm trải nghiệm sống",
    description:
      "Tận dụng tối đa ánh sáng và gió tự nhiên, giúp không gian luôn thông thoáng và thoải mái.",
  },
  {
    imgSrc: "/images/15.webp",
    title: "Không gian xanh trong từng góc nhà",
    description:
      "Cây xanh không chỉ giúp thanh lọc không khí mà còn mang lại cảm giác thư thái, dễ chịu.",
  },
  {
    imgSrc: "/images/16.webp",
    title: "Thiết kế nhà phố tối ưu không gian",
    description:
      "Mọi góc nhỏ trong căn nhà đều được bố trí hợp lý để mang lại sự tiện nghi và thoải mái.",
  },
  {
    imgSrc: "/images/17.webp",
    title: "Phong cách Nhật Bản trong thiết kế nhà ở",
    description:
      "Một không gian sống đơn giản, thanh lịch nhưng đầy đủ công năng và sự tiện nghi.",
  },
  {
    imgSrc: "/images/18.webp",
    title: "Hài hòa giữa hiện đại và truyền thống",
    description:
      "Thiết kế lấy cảm hứng từ kiến trúc truyền thống nhưng vẫn đáp ứng các tiêu chuẩn sống hiện đại.",
  },
];
