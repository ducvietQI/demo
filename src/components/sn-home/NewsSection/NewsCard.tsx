"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { memo } from "react";

const NewsCard = ({
  imgSrc,
  imgAlt = "img-alt",
  title,
  description,
}: NewsCardProps) => {
  // const router = useRouter();

  const handleClick = () => {
    console.log(title);

    // const path = PRODUCT_DETAIL_PAGE.replace("[id]", title);
    // router.push(path);
  };

  return (
    <Card
      sx={{
        height: "100%", // Đảm bảo card chiếm full chiều cao SwiperSlide
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "unset",
        boxShadow: "none",
        position: "relative",
        "&:hover .product-image": {
          transform: "scale(1.05)",
        },
        "&:hover .hoverButton": {
          opacity: 1,
        },
        "&:hover .hoverIcons": {
          opacity: 1,
        },
      }}
    >
      <CardActionArea
        onClick={handleClick}
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <CardMedia
          className="product-image"
          component="img"
          image={imgSrc}
          alt={imgAlt}
          loading="lazy"
          sx={{
            height: 196,
            width: "100%",
            objectFit: "cover",
            overflow: "hidden",
            transition: "transform 0.4s ease-in-out",
            position: "relative",
          }}
        />

        <CardContent
          sx={{
            bgcolor: "#fff",
            border: "1px solid #eeeeee",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: "12px 15px",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h3"
              fontWeight={600}
              component="div"
              color="text.black"
              sx={{
                fontSize: "16px",
                lineHeight: 1.4,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              color="text.black"
              sx={{ fontSize: "14px", lineHeight: 1.5 }}
            >
              {description}
            </Typography>
          </Box>

          <Box
            sx={{
              textAlign: "right",
              fontSize: "13px",
              fontWeight: 500,
              mt: 2,
              color: "text.black",
              borderBottom: "1px solid #161616",
              width: "fit-content",
            }}
          >
            XEM THÊM
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default memo(NewsCard);

export type NewsCardProps = {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  description: string;
};
