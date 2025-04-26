"use client";

import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import AOS from "aos";
import { useState } from "react";
import ProductCard, { ProductCardProps } from "./ProductCard";
import Link from "next/link";
import { RouteConstant } from "@/constant";

const ProductSection = ({
  array,
  title,
}: {
  array?: ProductCardProps[];
  title?: string;
}) => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
    setTimeout(() => AOS.refresh(), 0);
    window.scrollBy({ top: 100, behavior: "smooth" });
  };

  const converArray = array || products;

  return (
    <Stack mt={3}>
      <Container>
        <Stack bgcolor="#fff" alignItems="left" p={2}>
          <Stack
            direction="row"
            borderBottom="1px solid #ffba00"
            justifyContent="space-between"
          >
            <Typography
              color="primary"
              fontWeight={700}
              fontSize={{ xs: 16, md: 20 }}
            >
              {title || "Sản phẩm"}
            </Typography>

            <Box
              component={Link}
              href={RouteConstant.PRODUCT}
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              Xem thêm {">>"}
            </Box>
          </Stack>

          <Grid2 container mt={4} columnSpacing={2} rowSpacing={4}>
            {converArray.slice(0, visibleProducts).map((product, index) => (
              <Grid2 size={{ xs: 6, md: 3 }} key={index} data-aos="fade-up">
                <ProductCard {...product} />
              </Grid2>
            ))}
          </Grid2>

          {visibleProducts < products.length && (
            <Button
              variant="contained"
              data-aos="zoom-in"
              sx={{
                mt: 4,
                width: 202,
                height: 48,
                bgcolor: "common.white",
                borderRadius: "unset",
                border: "1px solid",
                borderColor: "primary.main",
                color: "primary.main",
              }}
              onClick={handleShowMore}
            >
              Show more
            </Button>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductSection;

export const products: ProductCardProps[] = [
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
    imgSrc: "/images/Potty.webp",
    imgAlt: "Kệ TV MOHO HOBRO 301 ",
    title: "Kệ TV MOHO HOBRO 301 ",
    description: "Minimalist flower pot",
    price: 6290000,
    isNew: true,
  },
];
