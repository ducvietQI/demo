import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { ArrowRightIcon } from "../Icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTabletDown } from "@/hooks";

const SignificantSection = () => {
  const isTabletDown = useTabletDown();

  return (
    <Stack
      bgcolor="#fff"
      pb={{ xs: "15px", md: "100px" }}
      pl="calc((100vw - 1250px) / 2)"
    >
      {!isTabletDown && (
        <Box
          sx={{
            color: "primary.main",
            fontWeight: 600,
            fontSize: "100px",
            lineHeight: 1,
            mb: 10,
          }}
        >
          SIMPLE
          <br />
          BUT SIGNIFICANT
        </Box>
      )}
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 6 }}>
          {isTabletDown && (
            <Grid2 size={12} p="30px" bgcolor="#f3f3f3">
              <Typography
                variant="h4"
                fontSize={"30px"}
                fontWeight={600}
                color="primary.main"
                lineHeight="43px"
              >
                Điểm khác biệt
                <br /> thi công của SBS
              </Typography>
              <Typography
                variant="body1"
                color="black"
                borderTop="1px solid"
                borderBottom="1px solid"
                borderColor="primary.main"
                pt="20px"
                pb="25px"
                mt="30px"
                mb="40px"
                fontSize="14px"
              >
                Để có những công trình chất lượng, chúng tôi luôn cải tiến, đổi
                mới từng ngày. Trong cùng một phân khúc nhà phố, SBS HOUSE tự
                hào vì có những điểm khác biệt trong giải pháp, kỹ thuật thi
                công. Chính những điểm khác biệt nhỏ này tạo nên một khác biệt
                rất lớn, từ đó cho ra đời những công trình chuẩn chỉnh, bền vững
                với thời gian.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  minWidth: "fit-content",
                  borderRadius: 0,
                  fontSize: "14px",
                  color: "white",
                  ":hover": { color: "text.black", bgcolor: "primary.main" },
                }}
                endIcon={<ArrowRightIcon />}
              >
                XEM THÊM
              </Button>
            </Grid2>
          )}

          <Swiper slidesPerView={1} loop>
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "250px", md: "100%" },
                  }}
                >
                  <Image
                    src={slide}
                    alt={slide}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid2>
        {!isTabletDown && (
          <Grid2 size={6} p="30px" bgcolor="#f3f3f3">
            <Typography
              variant="h4"
              fontSize={"30px"}
              fontWeight={600}
              color="primary.main"
              lineHeight="43px"
            >
              Điểm khác biệt
              <br /> thi công của SBS
            </Typography>
            <Typography
              variant="body1"
              color="text.black"
              borderTop="1px solid"
              borderBottom="1px solid"
              borderColor="primary.main"
              pt="20px"
              pb="25px"
              mt="30px"
              mb="40px"
              fontSize="14px"
            >
              Để có những công trình chất lượng, chúng tôi luôn cải tiến, đổi
              mới từng ngày. Trong cùng một phân khúc nhà phố, SBS HOUSE tự hào
              vì có những điểm khác biệt trong giải pháp, kỹ thuật thi công.
              Chính những điểm khác biệt nhỏ này tạo nên một khác biệt rất lớn,
              từ đó cho ra đời những công trình chuẩn chỉnh, bền vững với thời
              gian.
            </Typography>
            <Button
              variant="contained"
              sx={{
                minWidth: "fit-content",
                borderRadius: 0,
                fontSize: "14px",
                color: "white",
                ":hover": { color: "text.black", bgcolor: "primary.main" },
              }}
              endIcon={<ArrowRightIcon />}
            >
              XEM THÊM
            </Button>
          </Grid2>
        )}
        <Grid2 size={{ xs: 12, md: 6 }} p="30px" bgcolor="#f3f3f3">
          <Typography
            variant="h4"
            fontSize={"30px"}
            fontWeight={600}
            color="primary.main"
            lineHeight="43px"
          >
            Lễ động thổ
            <br /> Lễ ký hợp đồng
          </Typography>
          <Typography
            variant="body1"
            color="bkacj"
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor="primary.main"
            pt="20px"
            pb="25px"
            mt="30px"
            mb="40px"
            fontSize="14px"
          >
            Lễ động thổ, lễ ký hợp đồng luôn được chuẩn bị chu đáo và trang
            trọng để quý khách hàng hiểu rằng SBS HOUSE trân trọng sự hợp tác
            cùng quý khách. Chúng tôi không thể mang đến cho quý khách giá thành
            rẻ, chúng tôi chỉ có thể mang đến sản phẩm tốt và dịch vụ chất lượng
            hàng đầu.
          </Typography>
          <Button
            variant="contained"
            sx={{
              minWidth: "fit-content",
              borderRadius: 0,
              fontSize: "14px",
              color: "white",
              ":hover": { color: "text.black", bgcolor: "primary.main" },
            }}
            endIcon={<ArrowRightIcon />}
          >
            XEM THÊM
          </Button>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Swiper
            modules={[Pagination]}
            pagination={true}
            spaceBetween={10}
            slidesPerView={1}
            loop
          >
            {slides2.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "250px", md: "100%" },
                  }}
                >
                  <Image
                    src={slide}
                    alt={slide}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default SignificantSection;

const slides = [
  "/images/sig-1.jpg",
  "/images/sig-2.jpg",
  "/images/sig-3.jpg",
  "/images/sig-4.jpg",
  "/images/sig-5.jpg",
];

const slides2 = ["/images/sig-6.jpg", "/images/sig-7.jpg", "/images/sig-8.jpg"];
