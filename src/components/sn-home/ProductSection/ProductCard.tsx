"use client";

import { CompareIcon, LikeIcon, ShareIcon } from "@/components/Icons";
import { formatNumber } from "@/utils/format.utils";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { memo, ReactNode, useMemo } from "react";

const ProductCard = ({
  imgSrc,
  imgAlt = "img-alt",
  title,
  description,
  price,
  sale,
  isNew,
}: ProductCardProps) => {
  const router = useRouter();

  const productLabel = useMemo(() => {
    if (sale) {
      return { label: `${sale} %`, bgColor: "rgb(244, 25, 25)" };
    } else if (isNew) {
      return { label: "New", bgColor: "#2EC1AC" };
    } else {
      return { label: null, bgColor: undefined };
    }
  }, [sale, isNew]);

  const discountedPrice = useMemo(() => {
    return sale ? price - (price * sale) / 100 : price;
  }, [price, sale]);

  const handleClick = () => {
    // const path = PRODUCT_DETAIL_PAGE.replace("[id]", title);
    // router.push(path);
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
        <CardMedia
          className="product-image"
          component="img"
          image={imgSrc}
          alt={imgAlt}
          sx={{
            height: 265,
            width: "100%",
            objectFit: "cover",
            overflow: "hidden",
            transition: "transform 0.4s ease-in-out",
          }}
        />
        <CardContent sx={{ bgcolor: "#fff", p: 0, pt: 1 }}>
          <Typography
            gutterBottom
            variant="h3"
            fontWeight={600}
            component="div"
            color="text.black"
          >
            {title}
          </Typography>
          <Typography variant="h5" color="text.black">
            {description}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontSize={20} fontWeight={600} color="primary">
              {formatNumber(discountedPrice)} $
            </Typography>
            {sale && (
              <Typography
                sx={{ textDecoration: "line-through" }}
                color="text.disable"
              >
                {formatNumber(price)} $
              </Typography>
            )}
          </Stack>
        </CardContent>
      </CardActionArea>

      {productLabel.label && (
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
  imgSrc: string;
  imgAlt?: string;
  title: string;
  description: string;
  price: number;
  sale?: number;
  isNew?: boolean;
};
