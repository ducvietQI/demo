"use client";

import { CompanyProfile } from "@/models/home.type";
import {
  Box,
  Container,
  Divider,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { memo } from "react";

const AppFooter = ({ footerData }: { footerData: CompanyProfile }) => {
  return (
    <Box
      bgcolor="#635f5f"
      color="white"
      py={{ xs: 1, md: 6 }}
      px={{ xs: 2, md: 10 }}
    >
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <Stack alignItems={{ xs: "center", md: "flex-start" }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 45, md: 80 },
                  width: { xs: 65, md: 120 },
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
          </Grid2>

          <Grid2 size={{ xs: 12, md: 3.3 }}>
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
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 3.3 }}>
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
                    📞 <strong>{item}</strong>
                  </Typography>
                ))}
              <Typography fontSize="14px" color="primary">
                📧 <strong>{footerData.email}</strong>
              </Typography>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 3.3 }}>
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
        </Grid2>

        <Divider sx={{ my: 2, bgcolor: "gray" }} />

        {/* Phần cuối */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize="12px" color="text.white">
            © Copyright 2024-2025. Bản quyền nội dung thuộc Quanghoanhome
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={() =>
                footerData.social.facebook
                  ? window.open(footerData.social.facebook, "_blank")
                  : null
              }
              sx={{ color: "white" }}
            >
              <Image
                src="/images/fb.png"
                height={30}
                width={30}
                alt="fb-icon"
              />
            </IconButton>
            <IconButton
              onClick={() =>
                footerData.social.tiktok
                  ? window.open(footerData.social.tiktok, "_blank")
                  : null
              }
              sx={{ color: "white" }}
            >
              <Image
                src="/images/ar.png"
                height={30}
                width={30}
                alt="yt-icon"
              />
            </IconButton>
            <IconButton
              onClick={() =>
                footerData.social.zalo
                  ? window.open(footerData.social.zalo, "_blank")
                  : null
              }
              sx={{ color: "white" }}
            >
              <Image
                src="/images/zalo.png"
                height={30}
                width={30}
                alt="zalo-icon"
              />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default memo(AppFooter);
