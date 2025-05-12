"use client";
import { AppHTMLRender, ProductSection } from "@/components";
import { IProduct } from "@/models/product.type";
import { IPaginationList } from "@/models/project.type";
import { formatNumber } from "@/utils/format.utils";
import {
  Button,
  Chip,
  Container,
  Divider,
  Grid2,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import ImageGallery from "react-image-gallery";

const ProductDetailPage = ({
  data,
  relateProductList,
}: {
  data: IProduct;
  relateProductList: IPaginationList<IProduct>;
}) => {
  const images = useMemo(() => {
    return data?.images.length
      ? data?.images.map((item) => ({
          original: item.url || "/images/product-1.webp",
          thumbnail: item.url || "/images/22.webp",
        }))
      : [];
  }, [data]);

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
                  {data.name}
                </Typography>
                {data.isNew && (
                  <Chip label="NEW" color="warning" size="small" />
                )}
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 16,
                      color: "#f94c43",
                    },
                  }}
                  size="large"
                  name="simple-controlled"
                  value={data.rating.averageVote}
                  readOnly
                />

                <Typography variant="h4" color="text.black">
                  Đã bán: {data.totalBuy}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Chip
                  sx={{
                    fontSize: 14,
                  }}
                  label={`-${getDiscountPercent(data.price, data.salePrice)}%`}
                  color="warning"
                  size="small"
                />
                <Typography color="error" fontWeight={700} fontSize={24}>
                  {formatNumber(data.salePrice)}₫
                </Typography>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  color="text.secondary"
                >
                  {formatNumber(data.price)}₫
                </Typography>
              </Stack>

              {/* <Typography variant="h3" color="text.secondary">
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
              </Stack> */}

              <Divider />

              {/* <Typography variant="h4">
                <strong>Kích thước:</strong> Dài 160 × Rộng 60 × Cao 200 cm
              </Typography>
              <Typography variant="h4">
                <strong>Chất liệu:</strong> Gỗ công nghiệp phủ Melamine CARB-P2
                (*)
              </Typography> */}
              <Typography variant="h4" color="text.secondary">
                {data.description}
              </Typography>

              <Divider />

              {/* Buttons */}
              <Stack spacing={2}>
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
                  Liên Hệ
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
          <AppHTMLRender htmlRender={data?.content} />
        </Stack>

        <ProductSection
          array={relateProductList.items}
          title="Sản phẩm liên quan"
          containerprops={{
            sx: {
              px: "0px !important",
            },
          }}
        />
      </Stack>
    </Container>
  );
};

export default ProductDetailPage;

function getDiscountPercent(price: number, salePrice: number): number {
  if (price <= 0 || salePrice <= 0 || salePrice >= price) return 0;
  return Math.round(((price - salePrice) / price) * 100);
}
