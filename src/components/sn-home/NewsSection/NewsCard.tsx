"use client";

import { RouteConstant } from "@/constant";
import { INews } from "@/models/project.type";
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
import stringFormat from "string-format";

const NewsCard = ({ data }: NewsCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(
      stringFormat(RouteConstant.NEWS_DETAIL, { pathName: data.slug })
    );
  };

  return (
    <Card
      sx={{
        height: "100%",
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
        <Box
          sx={{
            height: 168,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <CardMedia
            className="product-image"
            component="img"
            image={`${data?.avatar.url}`}
            alt={data?.avatar.caption}
            loading="lazy"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              overflow: "hidden",
              transition: "transform 0.4s ease-in-out",
              position: "relative",
            }}
          />
        </Box>

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
              {data?.title}
            </Typography>
            <Typography
              variant="h5"
              color="text.black"
              className="text-ellipsis-4-row"
              sx={{ fontSize: "14px", lineHeight: 1.5 }}
            >
              {data?.description}
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
  data: INews;
};
