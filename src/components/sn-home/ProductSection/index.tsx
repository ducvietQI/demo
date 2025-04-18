"use client";

import { Button, Container, Grid2, Stack, Typography } from "@mui/material";
import AOS from "aos";
import { useState } from "react";
import ProductCard, { ProductCardProps } from "./ProductCard";

const ProductSection = ({ title }: { title?: string }) => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
    setTimeout(() => AOS.refresh(), 0);
    window.scrollBy({ top: 100, behavior: "smooth" });
  };

  return (
    <Stack bgcolor="#fff" py={{ xs: "15px", md: "50px" }}>
      <Container>
        <Stack alignItems="left">
          <Typography
            variant="h2"
            color="primary"
            borderBottom="1px solid #ffba00"
            fontWeight={700}
          >
            {title || "Sản phẩm"}
          </Typography>

          <Grid2 container mt={4} columnSpacing={2} rowSpacing={4}>
            {products.slice(0, visibleProducts).map((product, index) => (
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
];
