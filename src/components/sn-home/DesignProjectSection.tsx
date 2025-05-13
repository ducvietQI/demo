"use client";

import { Box, Button, Stack, Typography, Grid2 } from "@mui/material";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon } from "../Icons";
import { useTabletDown } from "@/hooks";
import { useMemo, useState } from "react";
import { IService } from "@/models/home.type";
import { GlobalsConst } from "@/constant";
import { useRouter } from "next/navigation";

const DesignProjectSection = ({ serviceData }: { serviceData?: IService }) => {
  const router = useRouter();
  const isTabletDown = useTabletDown();
  const [hoveredSlides, setHoveredSlides] = useState<{
    [key: string]: boolean;
  }>({});
  // const groupSlug = useMemo(() => {
  //   const slug = serviceData?.slug || "";
  //   const cleanSlug = slug.startsWith("/dich-vu")
  //     ? slug
  //     : `/dich-vu/${slug.replace(/^\/+/, "")}`;

  //   return cleanSlug;
  // }, [serviceData?.slug]);

  const handleMouseEnter = (group: string, index: number) => {
    setHoveredSlides((prev) => ({ ...prev, [`${group}-${index}`]: true }));
  };

  const handleMouseLeave = (group: string, index: number) => {
    setHoveredSlides((prev) => ({ ...prev, [`${group}-${index}`]: false }));
  };

  const [imagesGroup1, imagesGroup2] = useMemo(() => {
    const projects = serviceData?.projectGroup.projects || [];

    const mappedImages = projects.map((item) => ({
      src: item.avatar.url || GlobalsConst.NO_IMAGE,
      title: item.title,
      description: item.description,
      slug: item.slug,
    }));

    const midpoint = Math.ceil(mappedImages.length / 2);
    const firstGroup = mappedImages.slice(0, midpoint);
    const secondGroup = mappedImages.slice(midpoint);

    return [firstGroup, secondGroup];
  }, [serviceData]);

  const renderSwiper = (
    images: { src: string; title: string; description: string; slug: string }[],
    group: string
  ) => (
    <Swiper
      slidesPerView={isTabletDown ? 1 : 3}
      spaceBetween={30}
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", height: "280px" }}
    >
      {images.map((item, index) => {
        const isHovered = hoveredSlides[`${group}-${index}`];

        return (
          <SwiperSlide
            key={index}
            onMouseEnter={() => handleMouseEnter(group, index)}
            onMouseLeave={() => handleMouseLeave(group, index)}
            style={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={item.src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw" // Thêm sizes
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </Box>

            {/* Background vàng xuất hiện từ giữa */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: 0,
                bgcolor: "rgba(255, 193, 7, 0.85)", // Vàng
                transition: "height .2s ease-in-out, top .2s ease-in-out",
                ...(isHovered && { height: "100%", top: 0 }),
              }}
            />

            {/* Nội dung chỉ xuất hiện khi hover */}
            {isHovered && (
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  p: "15px",
                  width: "100%",
                  height: "100%",
                  transition: "opacity 0.3s ease-in-out",
                  justifyContent: "space-between",
                }}
              >
                <Stack spacing={2}>
                  <Typography fontSize="18px" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography
                    className="text-ellipsis-4-row"
                    fontSize="14px"
                    mt={1}
                  >
                    {item.description}
                  </Typography>
                </Stack>
                {/* <Button
                  sx={{
                    mt: 2,
                    color: "white",
                    minWidth: "fit-content",
                    width: "fit-content",
                    fontSize: 14,
                  }}
                  variant="text"
                  endIcon={<ArrowRightIcon />}
                  onClick={() => router.push(`${groupSlug}/${item.slug}`)}
                >
                  Xem thêm
                </Button> */}
              </Stack>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );

  return (
    <Stack direction="row" bgcolor="#fff" pb={{ xs: "15px", md: 10 }}>
      <Grid2 container spacing={3} px={{ xs: "15px", md: 0 }}>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            borderTop: "1px solid",
            pl: "calc((100vw - 1250px) / 2)",
            borderColor: "primary.main",
          }}
        >
          <Typography
            fontSize="27px"
            fontWeight={700}
            color="primary.main"
            pt={2}
          >
            {serviceData?.title}
          </Typography>
          <Typography pt={2} color="text.black" fontSize="16px">
            {serviceData?.description}
          </Typography>
          <Button
            sx={{
              minWidth: "fit-content",
              borderRadius: 0,
              fontSize: "14px",
              color: "white",
              mt: 2.5,
              ":hover": { color: "text.black", bgcolor: "primary.main" },
            }}
            onClick={() => {
              const slug = serviceData?.slug || "";
              const cleanSlug = slug.startsWith("/dich-vu")
                ? slug
                : `/dich-vu/${slug.replace(/^\/+/, "")}`;
              router.push(cleanSlug);
            }}
            variant="contained"
            endIcon={<ArrowRightIcon />}
          >
            Xem tất cả
          </Button>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          {renderSwiper(imagesGroup1, "group1")}
          {!isTabletDown && (
            <Box sx={{ mt: 3 }}>{renderSwiper(imagesGroup2, "group2")}</Box>
          )}
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default DesignProjectSection;
