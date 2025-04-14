"use client";

import { Button, Container, Grid2, Stack, Typography } from "@mui/material";
import AOS from "aos";
import { useState } from "react";
import ProductCard, { ProductCardProps } from "./ProductCard";

const ProductSection = () => {
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
          <Typography variant="h2" color="primary" fontWeight={700}>
            Sản phẩm
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
    imgSrc: "/images/syltherine.png",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500,
    sale: 30,
  },
  {
    imgSrc: "/images/leviosa.png",
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500,
  },
  {
    imgSrc: "/images/lolito.png",
    title: "Lolito",
    description: "Luxury big sofa",
    price: 7000,
    sale: 50,
  },
  {
    imgSrc: "/images/respira.png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: 500,
    isNew: true,
  },
  {
    imgSrc: "/images/grifo.png",
    title: "Grifo",
    description: "Night lamp",
    price: 1500,
  },
  {
    imgSrc: "/images/muggo.png",
    title: "Muggo",
    description: "Small mug",
    price: 150,
    isNew: true,
  },
  {
    imgSrc: "/images/pingky.png",
    title: "Pingky",
    description: "Cute bed set",
    price: 7000,
    sale: 50,
  },
  {
    imgSrc: "/images/potty.png",
    title: "Potty",
    description: "Minimalist flower pot",
    price: 500,
    isNew: true,
  },
];
