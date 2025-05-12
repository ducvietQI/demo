"use client";

import { RouteConstant } from "@/constant";
import { IProduct } from "@/models/product.type";
import {
  Box,
  Container,
  ContainerProps,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({
  array,
  title,
  containerprops,
}: {
  array?: IProduct[];
  title?: string;
  containerprops?: ContainerProps;
}) => {
  return (
    <Stack mt={3}>
      <Container {...containerprops}>
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
            {array &&
              array.map((product, index) => (
                <Grid2 size={{ xs: 6, md: 3 }} key={index} data-aos="fade-up">
                  <ProductCard data={product} />
                </Grid2>
              ))}
          </Grid2>

          {/* {visibleProducts < products.length && (
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
          )} */}
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductSection;
