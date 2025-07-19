"use client";

import { CompanyProfile } from "@/models/home.type";
import { useAppSelector } from "@/redux-store";
import {
  Box,
  Container,
  Divider,
  Grid2,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { memo } from "react";

const SocialIconButton = ({
  href,
  iconSrc,
  alt,
}: {
  href: string;
  iconSrc: string;
  alt: string;
}) => {
  return (
    <IconButton
      onClick={() => (href ? window.open(href, "_blank") : null)}
      sx={{
        color: "white",
        background: "none",
        ":hover": {
          background: "none",
        },
      }}
    >
      <Image
        src={iconSrc}
        height={iconSrc.includes("ig.png") ? 18 : 30}
        width={iconSrc.includes("ig.png") ? 18 : 30}
        alt={alt}
      />
    </IconButton>
  );
};

const AppFooter = ({ footerData }: { footerData: CompanyProfile }) => {
  const { serviceData } = useAppSelector((state) => state.appReducer);

  return (
    <Box
      bgcolor="#635f5f"
      color="white"
      py={{ xs: 1, md: 6 }}
      px={{ xs: 2, md: 10 }}
    >
      <Container>
        <Grid2 container spacing={10}>
          {/* <Grid2 size={{ xs: 12, md: 2 }}>
            <Stack alignItems={{ xs: "center", md: "flex-start" }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 45, md: 100 },
                  width: { xs: 65, md: 100 },
                }}
              >
                <Image
                  src="/images/logo.png"
                  sizes="(max-width: 600px) 55px, (max-width: 960px) 80px, 140px"
                  fill
                  alt="logo"
                />
              </Box>
            </Stack>
          </Grid2> */}

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Typography
                fontWeight={600}
                color="primary"
                borderTop="1px solid"
                borderColor="primary.main"
                fontSize="16px"
                pt="30px"
                mt="20px"
                letterSpacing="-0.7px"
              >
                {footerData.title}
              </Typography>
              <Typography color="white" fontSize="14px">
                {footerData.description}
              </Typography>

              {serviceData && serviceData.length > 0 && (
                <Typography
                  fontWeight={600}
                  color="primary"
                  fontSize="16px"
                  letterSpacing="-0.7px"
                  mt={2}
                >
                  DỊCH VỤ
                </Typography>
              )}
              {serviceData.length > 0 &&
                serviceData.map((item) => (
                  <Link
                    key={item.id}
                    href="#"
                    color="#fff"
                    fontSize="14px"
                    underline="none"
                  >
                    {item.title}
                  </Link>
                ))}
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Typography
                fontWeight={600}
                color="primary"
                borderTop="1px solid"
                borderColor="primary.main"
                fontSize="16px"
                pt="30px"
                mt="20px"
                letterSpacing="-0.7px"
              >
                THÔNG TIN LIÊN HỆ
              </Typography>
              {Array.isArray(footerData.hotline) &&
                footerData.hotline.map((item, i) => (
                  <Typography key={i} fontSize="14px" color="primary">
                    📞 {item}
                  </Typography>
                ))}
              {footerData.email && (
                <Typography fontSize="14px" color="primary">
                  📧 {footerData.email}
                </Typography>
              )}

              <Typography
                fontWeight={600}
                color="primary"
                borderTop="1px solid"
                borderColor="primary.main"
                fontSize="16px"
                pt="30px"
                mt="20px"
                letterSpacing="-0.7px"
              >
                Địa chỉ
              </Typography>
              {Array.isArray(footerData.addresses) &&
                footerData.addresses.map((item, i) => (
                  <Typography key={i} color="white" fontSize="14px">
                    ⭐{" "}
                    {item.detail ? `${item.detail}, ${item.city}` : item.city}
                  </Typography>
                ))}
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <div
              className="fb-page"
              data-href={footerData.social?.facebook || ""}
              data-tabs=""
              data-height="150"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote
                cite={footerData.social?.facebook || ""}
                className="fb-xfbml-parse-ignore"
              >
                <a href={footerData.social?.facebook || ""}></a>
              </blockquote>
            </div>

            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-end" }}
              mt={2}
              spacing={{ xs: 0, md: 1 }}
            >
              <SocialIconButton
                href={footerData.social?.instagram || ""}
                iconSrc="/images/ig.png"
                alt="Instagram Icon"
              />
              <SocialIconButton
                href={footerData.social?.youtube || ""}
                iconSrc="/images/yt.png"
                alt="Facebook Icon"
              />
              <SocialIconButton
                href={footerData.social?.tiktok || ""}
                iconSrc="/images/ar.png"
                alt="TikTok Icon"
              />
              <SocialIconButton
                href={`https://zalo.me/${footerData.social?.zalo}` || ""}
                iconSrc="/images/zalo.png"
                alt="Zalo Icon"
              />
            </Stack>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 2, bgcolor: "gray" }} />

        <Typography fontSize="12px" color="text.white">
          © Copyright 2024-2025. Bản quyền nội dung thuộc Quanghoanhome
        </Typography>
      </Container>
    </Box>
  );
};

export default memo(AppFooter);
