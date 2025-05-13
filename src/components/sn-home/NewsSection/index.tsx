"use client";

import { useTabletDown } from "@/hooks";
import { INews } from "@/models/project.type";
import { Container, Stack, Typography } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsCard from "./NewsCard";

const NewsSection = ({ data }: { data: INews[] }) => {
  const isTabletDown = useTabletDown();

  return (
    <Stack my={3}>
      <Container>
        <Stack bgcolor="#fff" spacing={2} p={2}>
          <Typography
            variant="h2"
            color="primary"
            borderBottom="1px solid #ffba00"
            fontWeight={700}
          >
            Bài viết
          </Typography>

          <Swiper
            slidesPerView={isTabletDown ? 1 : 3}
            spaceBetween={30}
            modules={[Navigation]}
            navigation
            pagination={{ clickable: true }}
            style={{ width: "100%", height: "365px" }}
            className="news-section"
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    height: "100%",
                  }}
                >
                  <NewsCard data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </Stack>
  );
};

export default NewsSection;
