"use client";

import {
  Box,
  Grid2,
  Typography,
  Button,
  Stack,
  IconButton,
  Divider,
  Chip,
  Container,
  Rating,
} from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import { ProductSection } from "@/components";
import Image from "next/image";

const images = Array.from({ length: 8 }, (_, i) => ({
  original: `/images/product-${i + 1}.webp`,
  thumbnail: `/images/product-${i + 1}.webp`,
}));

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Container>
      <Stack py={5}>
        <Grid2 container spacing={4}>
          {/* Image Gallery */}
          <Grid2 className="custome-gallery" size={{ xs: 12, md: 6 }}>
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={false}
              thumbnailPosition="left"
            />
          </Grid2>

          {/* Product Info */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h2" fontWeight={700}>
                  Tủ Quần Áo Gỗ MOHO MONZA 4 Cánh 1m6
                </Typography>
                {/* <Chip label="NEW" color="warning" size="small" /> */}
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                <Rating
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 16,
                      color: "#f94c43",
                    },
                  }}
                  size="large"
                  name="simple-controlled"
                  value={5}
                  readOnly
                />

                <Typography variant="h4" color="text.black">
                  Đã bán: 13
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Chip
                  sx={{
                    fontSize: 14,
                  }}
                  label="-25%"
                  color="warning"
                  size="small"
                />
                <Typography color="error" fontWeight={700} fontSize={24}>
                  8,990,000đ
                </Typography>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  color="text.secondary"
                >
                  11,990,000đ
                </Typography>
              </Stack>

              <Typography variant="h3" color="text.secondary">
                Màu: Màu Tự Nhiên
              </Typography>
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    bgcolor: "#D8C9AE",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                />
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    bgcolor: "#3B2B1C",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                />
              </Stack>

              <Divider />

              <Typography variant="h4">
                <strong>Kích thước:</strong> Dài 160 × Rộng 60 × Cao 200 cm
              </Typography>
              <Typography variant="h4">
                <strong>Chất liệu:</strong> Gỗ công nghiệp phủ Melamine CARB-P2
                (*)
              </Typography>
              <Typography variant="h4" color="text.secondary">
                (*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm
                bảo gỗ không độc hại, an toàn cho sức khỏe người dùng và thân
                thiện với môi trường.
              </Typography>

              <Divider />

              {/* Quantity Control */}
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton
                  sx={{
                    width: 40,
                    height: 40,
                    fontSize: 30,
                    borderRadius: 0, // hình vuông
                    bgcolor: "transparent",
                    "&:hover": {
                      bgcolor: "#f8f8f8",
                    },
                    "&:active": {
                      bgcolor: "#f8f8f8",
                    },
                    border: "1px solid #ddd", // tùy chọn nếu muốn viền
                  }}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </IconButton>
                <Typography variant="h3">{quantity}</Typography>
                <IconButton
                  sx={{
                    width: 40,
                    height: 40,
                    fontSize: 30,
                    borderRadius: 0,
                    bgcolor: "transparent",
                    "&:hover": {
                      bgcolor: "#f8f8f8",
                    },
                    "&:active": {
                      bgcolor: "#f8f8f8",
                    },
                    border: "1px solid #ddd",
                  }}
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </IconButton>
              </Stack>

              {/* Buttons */}
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#2C567D",
                    "&:hover": { bgcolor: "#244866" },
                    color: "#fff",
                    height: 40,
                    fontSize: 16,
                  }}
                >
                  THÊM VÀO GIỎ
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#DE6138",
                    "&:hover": { bgcolor: "#c94f28" },
                    color: "#fff",
                    height: 40,
                    fontSize: 16,
                  }}
                >
                  MUA NGAY
                </Button>
              </Stack>

              <Typography variant="h4" color="text.secondary">
                ✔ Miễn phí giao hàng & lắp đặt tại tất cả quận huyện thuộc khu
                vực hỗ trợ
              </Typography>
              <Typography variant="h4" color="text.secondary">
                ✔ Miễn phí 1 đổi 1 - Bảo hành 2 năm - Bảo trì trọn đời (**)
              </Typography>
              <Typography variant="h4" color="text.secondary">
                (*) Không áp dụng cho danh mục Đồ Trang Trí
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
        <Stack mt={4} p={2} border="1px solid #ccc" spacing={2}>
          <Typography variant="h2" fontWeight={700}>
            TỦ QUẦN ÁO MOHO MONZA 1M6 (2 MÀU)
          </Typography>

          <Typography variant="h4">
            Bộ sưu tập MONZA mang đậm phong cách thiết kế{" "}
            <strong>Korean Minimalist</strong>, kết hợp với sự thanh lịch, tối
            giản của <strong>Scandinavian Modern</strong>. Với tinh thần{" "}
            <strong>"Less is More"</strong>, tủ MONZA là lựa chọn lý tưởng cho
            những ai tìm kiếm sự tinh tế, gọn gàng và tiện nghi trong không gian
            sống hiện đại.
          </Typography>

          <Stack position="relative" height={{ xs: 350, md: 1050 }}>
            <Image
              src="/images/product-9.webp"
              layout="fill"
              alt="service-3"
              loading="lazy"
              objectFit="contain"
            />
          </Stack>
          <Stack position="relative" height={{ xs: 500, md: 1922 }}>
            <Image
              src="/images/product-10.webp"
              layout="fill"
              alt="service-3"
              loading="lazy"
              objectFit="contain"
            />
          </Stack>

          <Typography variant="h4" fontWeight={700}>
            1. THÔNG SỐ KỸ THUẬT
          </Typography>
          <Stack position="relative" height={{ xs: 180, md: 640 }}>
            <Image
              src="/images/product-11.webp"
              layout="fill"
              alt="service-3"
              loading="lazy"
              objectFit="contain"
            />
          </Stack>

          <Typography variant="h4" fontWeight={700}>
            2. CHI TIẾT NGUYÊN VẬT LIỆU
          </Typography>

          <Typography variant="h5" fontWeight={700}>
            Gỗ công nghiệp
          </Typography>

          <Typography variant="h4">
            Sản phẩm sử dụng chất liệu <strong>gỗ công nghiệp </strong>(PB, MDF)
            đạt chuẩn <strong>CARB-P2</strong> an toàn tuyệt đối cho người sức
            khỏe người dùng và đạt <strong>chứng nhận FSC</strong> bảo vệ và
            phát triển rừng.
          </Typography>

          <Typography variant="h5" fontWeight={700}>
            Hợp kim nhôm
          </Typography>
          <Typography variant="h4">
            Thanh treo hợp kim nhôm, chống gỉ sét.
          </Typography>

          <Typography variant="h4" fontWeight={700}>
            3. ĐẶC ĐIỂM NỔI BẬT
          </Typography>

          <Typography variant="h5" fontWeight={700}>
            Thiết kế hiện đại, tinh tế
          </Typography>
          <Typography variant="h4">
            <strong> Korean style:</strong> thiết kế tối giản, tập trung vào sự
            thanh lịch và tinh tế, không cầu kỳ nhưng vẫn nổi bật nhờ các đường
            nét nhẹ nhàng và hài hòa.
          </Typography>

          <Typography variant="h5" fontWeight={700}>
            Tay nắm kim loại sang trọng và hiện đại:
          </Typography>

          <Typography variant="h4">
            Thiết kế đồng màu với bề mặt tủ, mang lại tính thẩm mỹ cao.
            <br />
            Kiểu dáng thanh mảnh nhưng chắc chắn, tạo điểm nhấn nổi bật cho sản
            phẩm.
          </Typography>

          <Stack position="relative" height={{ xs: 220, md: 762 }}>
            <Image
              src="/images/product-12.webp"
              layout="fill"
              alt="service-3"
              loading="lazy"
              objectFit="contain"
            />
          </Stack>

          <Typography variant="h5" fontWeight={700}>
            Màu sắc nhã nhặn, dễ phối hợp:
          </Typography>

          <Typography variant="h4">
            Ba phiên bản màu sắc: Màu gỗ tự nhiên thanh lịch, màu gỗ phối trắng
            hiện đại hoặc màu nâu trầm ấm cúng, phù hợp với mọi phong cách nội
            thất.
          </Typography>

          <Typography variant="h5" fontWeight={700}>
            Công năng lưu trữ tối ưu
          </Typography>

          <Typography variant="h4">
            Chiều cao lý tưởng – Tối ưu hóa không gian lưu trữ:
            <br />- Với chiều cao 2m, tủ MONZA được thiết kế vừa vặn với tầm vóc
            người Việt Nam, giúp dễ dàng thao tác khi sử dụng.
            <br />- Phần trên nóc tủ có thể tận dụng để thêm các thùng lưu trữ,
            tối ưu hóa không gian và giữ căn phòng luôn gọn gàng.
          </Typography>

          <Typography variant="h5" fontWeight={700}>
            Hệ thống layout tập trung thanh treo – Lựa chọn hoàn hảo cho gia
            đình công sở 4 người:
          </Typography>

          <Typography variant="h4">
            - Thanh treo đồ: Được thiết kế để đáp ứng nhu cầu lưu trữ đa dạng,
            từ áo sơ mi, quần âu cho đến đầm dạ hội hoặc áo dài.
            <br />- Ngăn kệ linh hoạt: Lý tưởng để lưu trữ túi xách, phụ kiện cá
            nhân hoặc các đồ dùng nhỏ, giúp tổ chức không gian sống khoa học và
            tiện lợi.
            <br />- Hệ thống thanh treo và ngăn kệ được bố trí khoa học, đặc
            biệt phù hợp với gia đình công sở, những người có nhu cầu phân loại
            trang phục rõ ràng.
          </Typography>

          <Stack position="relative" height={{ xs: 330, md: 762 }}>
            <Image
              src="/images/product-5.webp"
              layout="fill"
              alt="service-3"
              loading="lazy"
              objectFit="contain"
            />
          </Stack>
          <Stack position="relative" height={{ xs: 180, md: 540 }}>
            <Image
              src="/images/product-14.webp"
              layout="fill"
              alt="service-3"
              loading="lazy"
              objectFit="contain"
            />
          </Stack>
          <Stack position="relative" height={{ xs: 110, md: 380 }}>
            <Image
              src="/images/product-15.webp"
              layout="fill"
              alt="service-3"
              loading="lazy"
              objectFit="contain"
            />
          </Stack>
        </Stack>
        <ProductSection title="Sản phẩm liên quan" />
      </Stack>
    </Container>
  );
};

export default ProductDetailPage;
