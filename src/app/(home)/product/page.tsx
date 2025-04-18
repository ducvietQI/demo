import { FilterIcon } from "@/components/Icons";
import ProductCard, {
  ProductCardProps,
} from "@/components/sn-home/ProductSection/ProductCard";
import CategoryFilter from "@/components/sn-product/CategoryFilter";
import ColorFilter from "@/components/sn-product/ColorFilter";
import PriceFilter from "@/components/sn-product/PriceFilter";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ProductPage = () => {
  return (
    <Stack>
      <Box
        sx={{
          position: "relative",
          height: { xs: 126, md: "60vh" },
        }}
      >
        <Image
          src="/images/banner-product.webp"
          alt={"banner-service"}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </Box>

      <Container>
        <Stack py={{ xs: 2, md: 10 }} position="relative">
          <Typography variant="h1" fontWeight={600} color="primary">
            Tất cả sản phẩm
          </Typography>

          <Grid2
            mt={4}
            container
            direction={"row"}
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
          >
            <Grid2 size={{ xs: 5.5, md: 2.4 }}>
              <Typography fontWeight={500} variant="h2">
                <FilterIcon /> Bộ lọc
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 5.5, md: 2.4 }}>
              <CategoryFilter />
            </Grid2>

            <Grid2 size={{ xs: 5.5, md: 2.4 }}>
              <ColorFilter />
            </Grid2>

            <Grid2 size={{ xs: 5.5, md: 2.4 }}>
              <PriceFilter />
            </Grid2>
          </Grid2>

          <Grid2 container mt={4} columnSpacing={2} rowSpacing={4}>
            {products.map((product, index) => (
              <Grid2 size={{ xs: 6, md: 3 }} key={index} data-aos="fade-up">
                <ProductCard {...product} />
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductPage;

const products: ProductCardProps[] = [
  {
    id: 1,
    imgSrc: "/images/syltherine.webp",
    title: "Giường Ngủ Gỗ MOHO VLINE 601 Nhiều Kích Thước",
    description: "Stylish cafe chair",
    price: 6290000,
    sale: 30,
  },
  {
    id: 2,
    imgSrc: "/images/leviosa.webp",
    title: "Giường Ngủ Gỗ Tràm MOHO HOBRO 301",
    description: "Stylish cafe chair",
    price: 6290000,
  },
  {
    id: 3,
    imgSrc: "/images/lolito.webp",
    title: "Set Tủ Quần Áo Gỗ MOHO VIENNA 201 4 Cánh 4 Màu",
    description: "Luxury big sofa",
    price: 6290000,
    sale: 50,
  },
  {
    id: 4,
    imgSrc: "/images/respira.webp",
    title: "Ghế Sofa MOHO LYNGBY Góc L",
    description: "Outdoor bar table and stool",
    price: 6290000,
    isNew: true,
    sale: 25,
  },
  {
    id: 5,
    imgSrc: "/images/muggo.webp",
    title: "Tủ Giày - Tủ Trang Trí Gỗ MOHO VLINE 601",
    description: "Night lamp",
    price: 6290000,
  },
  {
    id: 6,
    imgSrc: "/images/grifo.webp",
    title: "Tủ Giày – Tủ Trang Trí Gỗ MOHO VIENNA 204",
    description: "Small mug",
    price: 6290000,
    isNew: true,
  },
  {
    id: 7,
    imgSrc: "/images/pingky.webp",
    title: "Tủ Kệ Tivi Gỗ MOHO UBEDA 201",
    description: "Cute bed set",
    price: 6290000,
    sale: 50,
  },
  {
    id: 8,
    imgSrc: "/images/potty.webp",
    title: "Potty",
    description: "Minimalist flower pot",
    price: 6290000,
    isNew: true,
  },
  {
    id: 9,
    imgSrc: "/images/muggo.webp",
    title: "Tủ Giày - Tủ Trang Trí Gỗ MOHO VLINE 601",
    description: "Night lamp",
    price: 6290000,
  },
  {
    id: 10,
    imgSrc: "/images/grifo.webp",
    title: "Tủ Giày – Tủ Trang Trí Gỗ MOHO VIENNA 204",
    description: "Small mug",
    price: 6290000,
    isNew: true,
  },
  {
    id: 11,
    imgSrc: "/images/pingky.webp",
    title: "Tủ Kệ Tivi Gỗ MOHO UBEDA 201",
    description: "Cute bed set",
    price: 6290000,
    sale: 50,
  },
  {
    id: 12,
    imgSrc: "/images/potty.webp",
    title: "Potty",
    description: "Minimalist flower pot",
    price: 6290000,
    isNew: true,
  },
];
