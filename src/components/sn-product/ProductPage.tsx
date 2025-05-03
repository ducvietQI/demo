"use client";

import { Stack, Box, Grid2, Typography, Container } from "@mui/material";
import { FilterIcon } from "../Icons";
import ProductCard, {
  ProductCardProps,
} from "../sn-home/ProductSection/ProductCard";
import CategoryFilter from "./CategoryFilter";
import AppPagination from "../AppPagination";

const ProductPage = () => {
  return (
    <Stack position="relative">
      <Container>
        <Grid2 mt={4} container direction={"row"} spacing={2}>
          <Grid2 size={2.5} bgcolor="white" height="100%" pt={1.5}>
            <Typography fontWeight={500} variant="h2" pl={1.5}>
              <FilterIcon /> Bộ lọc
            </Typography>

            <CategoryFilter />
          </Grid2>

          <Grid2
            size={9.5}
            container
            columnSpacing={2}
            rowSpacing={4}
            bgcolor="white"
            p={2}
          >
            {products.map((product, index) => (
              <Grid2 size={{ xs: 6, md: 3 }} key={index} data-aos="fade-up">
                <ProductCard {...product} />
              </Grid2>
            ))}

            <Grid2 size={12} data-aos="fade-up">
              <Stack alignItems="center" mb={5}>
                <AppPagination />
              </Stack>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Stack>
  );
};

export default ProductPage;

const products: ProductCardProps[] = [
  {
    id: 1,
    imgSrc: "/images/syltherine.webp",
    imgAlt: "Giường Ngủ Gỗ MOHO VLINE 601 Nhiều Kích Thước",
    title: "Giường Ngủ Gỗ MOHO VLINE 601 Nhiều Kích Thước",
    description: "Stylish cafe chair",
    price: 6290000,
    sale: 30,
  },
  {
    id: 2,
    imgSrc: "/images/leviosa.webp",
    imgAlt: "Giường Ngủ Gỗ Tràm MOHO HOBRO 301",
    title: "Giường Ngủ Gỗ Tràm MOHO HOBRO 301",
    description: "Stylish cafe chair",
    price: 6290000,
  },
  {
    id: 3,
    imgSrc: "/images/lolito.webp",
    imgAlt: "Set Tủ Quần Áo Gỗ MOHO VIENNA 201 4 Cánh 4 Màu",
    title: "Set Tủ Quần Áo Gỗ MOHO VIENNA 201 4 Cánh 4 Màu",
    description: "Luxury big sofa",
    price: 6290000,
    sale: 50,
  },
  {
    id: 4,
    imgSrc: "/images/respira.webp",
    imgAlt: "Ghế Sofa MOHO LYNGBY Góc L",
    title: "Ghế Sofa MOHO LYNGBY Góc L",
    description: "Outdoor bar table and stool",
    price: 6290000,
    isNew: true,
    sale: 25,
  },
  {
    id: 5,
    imgSrc: "/images/muggo.webp",
    imgAlt: "Tủ Giày - Tủ Trang Trí Gỗ MOHO VLINE 601",
    title: "Tủ Giày - Tủ Trang Trí Gỗ MOHO VLINE 601",
    description: "Night lamp",
    price: 6290000,
  },
  {
    id: 6,
    imgSrc: "/images/grifo.webp",
    imgAlt: "Tủ Giày – Tủ Trang Trí Gỗ MOHO VIENNA 204",
    title: "Tủ Giày – Tủ Trang Trí Gỗ MOHO VIENNA 204",
    description: "Small mug",
    price: 6290000,
    isNew: true,
  },
  {
    id: 7,
    imgSrc: "/images/pingky.webp",
    imgAlt: "Tủ Kệ Tivi Gỗ MOHO UBEDA 201",
    title: "Tủ Kệ Tivi Gỗ MOHO UBEDA 201",
    description: "Cute bed set",
    price: 6290000,
    sale: 50,
  },
  {
    id: 8,
    imgSrc: "/images/potty.webp",
    imgAlt: "Potty - Minimalist flower pot",
    title: "Potty",
    description: "Minimalist flower pot",
    price: 6290000,
    isNew: true,
  },
  {
    id: 9,
    imgSrc: "/images/muggo.webp",
    imgAlt: "Tủ Giày - Tủ Trang Trí Gỗ MOHO VLINE 601",
    title: "Tủ Giày - Tủ Trang Trí Gỗ MOHO VLINE 601",
    description: "Night lamp",
    price: 6290000,
  },
  {
    id: 10,
    imgSrc: "/images/grifo.webp",
    imgAlt: "Tủ Giày – Tủ Trang Trí Gỗ MOHO VIENNA 204",
    title: "Tủ Giày – Tủ Trang Trí Gỗ MOHO VIENNA 204",
    description: "Small mug",
    price: 6290000,
    isNew: true,
  },
  {
    id: 11,
    imgSrc: "/images/pingky.webp",
    imgAlt: "Tủ Kệ Tivi Gỗ MOHO UBEDA 201",
    title: "Tủ Kệ Tivi Gỗ MOHO UBEDA 201",
    description: "Cute bed set",
    price: 6290000,
    sale: 50,
  },
  {
    id: 12,
    imgSrc: "/images/potty.webp",
    imgAlt: "Potty - Minimalist flower pot",
    title: "Potty",
    description: "Minimalist flower pot",
    price: 6290000,
    isNew: true,
  },
];
