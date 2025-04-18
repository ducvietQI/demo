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
import stringFormat from "string-format";

const ProductCard = ({
  imgSrc,
  imgAlt = "img-alt",
  title,
  description,
  price,
  sale,
  isNew,
  id,
}: ProductCardProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number | null>(5);

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
    const pathName = formatNameSpace(title, id);
    router.push(stringFormat(RouteConstant.PRODUCT_DETAIL, { pathName }));
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
            overflow: "hidden",
          }}
        >
          <CardMedia
            className="product-image"
            component="img"
            image={imgSrc}
            alt={imgAlt}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease-in-out",
            }}
          />
        </Box>
        <CardContent sx={{ bgcolor: "#fff", p: 0, pt: 1 }}>
          <Typography
            gutterBottom
            fontSize={14}
            fontWeight={500}
            component="div"
            color="text.black"
          >
            {title}
          </Typography>
          {/* <Typography variant="h5" color="text.black">
            {description}
          </Typography> */}

          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontSize={14} fontWeight={600} color="#f94c43">
              {formatNumber(discountedPrice)}₫
            </Typography>
            {sale && (
              <Typography
                sx={{ textDecoration: "line-through" }}
                color="text.disable"
                fontSize={13}
              >
                {formatNumber(price)}₫
              </Typography>
            )}
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
              value={value}
              readOnly
            />
            <Typography color="text.black" variant="h6">
              Đã bán: 1
            </Typography>
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
  id: number;
  imgSrc: string;
  imgAlt?: string;
  title: string;
  description: string;
  price: number;
  sale?: number;
  isNew?: boolean;
};
