"use client";

import { NewsBreadcrumb } from "@/components/sn-news";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { EyeIcon } from "@/components/Icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";

const NewsDetailPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number | null>(0);

  return (
    <Container>
      <Stack py={5} spacing={2}>
        <NewsBreadcrumb />

        <Typography variant="h2" fontWeight={700}>
          Feedback yêu thương của gia chủ Bình Phước gửi về
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Image src="/images/fb.png" height={30} width={30} alt="fb-icon" />
          <Image src="/images/yt.png" height={30} width={30} alt="yt-icon" />
          <Image src="/images/ar.png" height={30} width={30} alt="tt-icon" />
          <EyeIcon sx={{ fontSize: 20 }} />
          <Typography variant="h5">69</Typography>
        </Stack>

        <ImageGallery items={images} showIndex />

        <Typography variant="h4">
          Quanghoanhome cảm thấy vô cùng biết ơn và hạnh phúc khi nhận được phản
          hồi tích cực từ gia chủ ở Bình Phước. Bên cạnh dịch vụ thiết kế và thi
          công nhà trọn gói, chúng tôi vẫn luôn sẵn sàng thiết kế từ xa và hỗ
          trợ tư vấn thi công cho khách hàng trên toàn 63 tỉnh thành của Việt
          Nam. Mới đây, chúng tôi đã nhận được một bộ sưu tập hình ảnh thực tế
          từ công trình của gia đình tại Bình Phước, một hình ảnh đẹp đến nao
          lòng, khiến bất kỳ ai làm trong ngành này cũng cảm thấy tự hào và hạnh
          phúc.
        </Typography>

        <Stack position="relative" height={1050}>
          <Image
            src="/images/fb-1.webp"
            layout="fill"
            alt="service-3"
            loading="lazy"
            objectFit="contain"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Hình ảnh gia đình hạnh phúc, hài lòng khi tổ ấm được hoàn thành gửi
            hình ảnh về Quanghoanhome
          </Box>
        </Stack>

        <Typography variant="h4">
          Niềm vui này không chỉ đến từ việc được tin tưởng lựa chọn thiết kế
          ngôi nhà, mặc cho khoảng cách địa lý hàng trăm kilômét, mà còn từ việc
          thấy công sức và đam mê của mình đã giúp gia chủ hiện thực hóa được
          ngôi nhà mơ ước của họ. Niềm hạnh phúc ấy còn được nhân lên khi chúng
          tôi được đồng hành cùng gia chủ trong suốt quá trình xây dựng, chứng
          kiến từng bước họ tiến gần hơn tới mục tiêu cuối cùng.
        </Typography>

        <Stack position="relative" height={680}>
          <Image
            src="/images/feedback-khach-hang-3.webp"
            layout="fill"
            alt="service-3"
            loading="lazy"
            objectFit="contain"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Không gian nội thất hiện đại và ấm áp đã kịp hoàn thành để đón năm
            mới bình yên cho gia đình
          </Box>
        </Stack>

        <Typography variant="h4">
          T’s House, sản phẩm của sự kiên trì và tình yêu thương mà hai vợ chồng
          chủ nhà đã dành cho nhau, nay đã trở thành một không gian sống lý
          tưởng cho các thành viên trong gia đình. Chúng tôi tin tưởng rằng,
          ngôi nhà này sẽ là nền tảng vững chắc cho những mục tiêu và ước mơ
          trong tương lai của gia đình, nơi mà mọi người cùng nhau chia sẻ, đồng
          hành và hỗ trợ lẫn nhau.
        </Typography>

        <Stack position="relative" height={680}>
          <Image
            src="/images/feedback-khach-hang-15.webp"
            layout="fill"
            alt="service-3"
            loading="lazy"
            objectFit="contain"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Dù không phải là người chụp ảnh chuyên nghiệp nhưng qua những bức
            ảnh gia chủ gửi về cho Quanghoanhome cũng có thể cho mọi người cảm
            nhận được không gian hiện đại, thoáng đãng bên trong mọi góc của
            ngôi nhà.
          </Box>
        </Stack>

        <Typography variant="h4">
          Chúng tôi chân thành cảm ơn gia đình đã trao cho Quanghoanhome niềm
          tin to lớn và cơ hội để đồng hành cùng họ trong hành trình đặc biệt
          này. Chúc cho T’s House luôn ngập tràn tiếng cười, yêu thương và hạnh
          phúc. Chúng tôi tự hào khi được là một phần của câu chuyện thành công
          này.
        </Typography>

        <Stack spacing={2} alignItems="center">
          <Rating
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 30, // kích thước sao
              },
            }}
            size="large"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant="h3"> Đánh giá: 5/5. Số lượt vote: 1</Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NewsDetailPage;

const images = [
  {
    original: "/images/fb-1.webp",
    thumbnail: "/images/fb-1.webp",
  },
  {
    original: "/images/feedback-khach-hang-2.webp",
    thumbnail: "/images/feedback-khach-hang-2.webp",
  },
  {
    original: "/images/feedback-khach-hang-3.webp",
    thumbnail: "/images/feedback-khach-hang-3.webp",
  },
  {
    original: "/images/feedback-khach-hang-4.webp",
    thumbnail: "/images/feedback-khach-hang-4.webp",
  },
  {
    original: "/images/feedback-khach-hang-6.webp",
    thumbnail: "/images/feedback-khach-hang-6.webp",
  },
  {
    original: "/images/feedback-khach-hang-7.webp",
    thumbnail: "/images/feedback-khach-hang-7.webp",
  },
  {
    original: "/images/feedback-khach-hang-7.webp",
    thumbnail: "/images/feedback-khach-hang-7.webp",
  },
  {
    original: "/images/feedback-khach-hang-9.webp",
    thumbnail: "/images/feedback-khach-hang-9.webp",
  },
  {
    original: "/images/feedback-khach-hang-14.webp",
    thumbnail: "/images/feedback-khach-hang-14.webp",
  },
  {
    original: "/images/feedback-khach-hang-15.webp",
    thumbnail: "/images/feedback-khach-hang-15.webp",
  },
];
