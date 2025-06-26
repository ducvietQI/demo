"use client";

import { RouteConstant } from "@/constant";
import { formatNameSpace, formatNumber } from "@/utils/format.utils";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { memo, useMemo, useState } from "react";
import Image from "next/image";
import stringFormat from "string-format";
import { IProduct } from "@/models/product.type";

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  const productLabel = useMemo(() => {
    if (data.isNew) {
      return { label: "New", bgColor: "#2EC1AC" };
    }
  }, [data.isNew]);

  // const discountedPrice = useMemo(() => {
  //   return sale ? price - (price * sale) / 100 : price;
  // }, [price, sale]);

  const handleClick = () => {
    console.log(data);

    // router.push(
    //   stringFormat(RouteConstant.PRODUCT_DETAIL, {
    //     groupSlug: "nhom-san-pham",
    //     pathName: data.slug,
    //   })
    // );
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        position: "relative",
        borderRadius: "unset",
        "&:hover .product-image": {
          transform: "scale(1.05)",
        },
        boxShadow: "none",

        "&:hover .hoverButton": {
          opacity: 1,
        },
        "&:hover .hoverIcons": {
          opacity: 1,
        },
      }}
    >
      <CardActionArea onClick={handleClick}>
        <Box
          sx={{
            height: { xs: 180, md: 265 },
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={data?.avatar?.url || "/images/no-image.webp"}
            alt={data.avatar.caption}
            fill
            className="product-image"
            style={{
              objectFit: "cover",
              transition: "transform 0.4s ease-in-out",
            }}
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw" // Tối ưu kích thước theo màn hình
            loading="lazy" // Tải ảnh khi cần thiết
          />
        </Box>
        <CardContent sx={{ bgcolor: "#fff", p: 0, pt: 1 }}>
          <Typography
            gutterBottom
            fontSize={18}
            fontWeight={500}
            component="div"
            color="text.black"
            className="text-ellipsis-2-row "
          >
            {data.name}
          </Typography>
          {/* <Typography variant="h5" color="text.black">
            {data.description}
          </Typography> */}

          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontSize={14} fontWeight={600} color="#f94c43">
              {formatNumber(data.salePrice)}₫
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through" }}
              color="text.disable"
              fontSize={13}
            >
              {formatNumber(data.price)}₫
            </Typography>
          </Stack>

          <Stack
            mt={1}
            direction="row"
            justifyContent="space-between"
            spacing={2}
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
              value={data.rating.averageVote}
              readOnly
            />
            <Typography color="text.black" variant="h6">
              Đã bán: {data.totalBuy}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>

      {productLabel?.label && (
        <Box
          sx={{
            width: 48,
            height: 22,
            bgcolor: productLabel.bgColor,
            position: "absolute",
            left: 10,
            top: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 11,
          }}
        >
          {productLabel.label}
        </Box>
      )}
    </Card>
  );
};

export default memo(ProductCard);

export type ProductCardProps = {
  data: IProduct;
};
