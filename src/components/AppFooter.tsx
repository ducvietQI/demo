"use client";

import {
  Box,
  Grid2,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import Image from "next/image";

const AppFooter = () => {
  return (
    <Box bgcolor="bg.main" color="white" py={6} px={{ xs: 2, md: 10 }}>
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={2}>
            <Box className="relative size-[100px]">
              <Image src="/images/logo.svg" fill alt="logo" />
            </Box>
          </Grid2>

          {/* Cột 1: Logo và Dịch vụ */}
          <Grid2 size={3.3}>
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
                CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SBS
              </Typography>
              <Typography fontSize="14px">
                SBS HOUSE đơn vị thiết kế thi công trọn gói miền Trung và miền
                Nam
              </Typography>
              <Typography
                fontWeight={600}
                color="primary"
                fontSize="16px"
                letterSpacing="-0.7px"
                mt={2}
              >
                DỊCH VỤ
              </Typography>
              {[
                "Thiết kế và thi công nội thất",
                "Thiết kế kiến trúc",
                "Thi công phần thô",
                "Thi công hoàn thiện",
                "Thi công trọn gói",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  fontSize="14px"
                  underline="none"
                >
                  {item}
                </Link>
              ))}

              <Typography
                fontWeight={600}
                color="primary"
                fontSize="16px"
                letterSpacing="-0.7px"
                mt={2}
              >
                MẪU NHÀ ĐẸP
              </Typography>
              {[
                "Nhà phố 2 tầng",
                "Nhà phố 3 tầng",
                "Nhà phố 4 tầng",
                "Biệt thự đẹp",
                "Nhà cấp 4",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  color="inherit"
                  fontSize="14px"
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid2>

          {/* Cột 2: Mẫu nhà đẹp */}
          {/* <Grid2 size={3}>
                  <Stack spacing={2}>
                    <Typography fontWeight={600} color="warning.main">
                      MẪU NHÀ ĐẸP
                    </Typography>
                    {[
                      "Nhà phố 2 tầng",
                      "Nhà phố 3 tầng",
                      "Nhà phố 4 tầng",
                      "Biệt thự đẹp",
                      "Nhà cấp 4",
                    ].map((item) => (
                      <Link key={item} href="#" color="inherit" fontSize="14px">
                        {item}
                      </Link>
                    ))}
                  </Stack>
                </Grid2> */}

          {/* Cột 3: Thông tin liên hệ */}
          <Grid2 size={3.3}>
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
              <Typography fontSize="14px" color="primary">
                📞 <strong>0972 910 046</strong>
              </Typography>
              {[
                "284-286 Lê Quang Chí, Đà Nẵng",
                "Lầu 5, 137 Lê Quang Định, TP.HCM",
                "Tầng 12A, Tòa nhà dầu khí Nghệ An",
                "Showroom 1: 201 Nguyễn Hữu Thọ, Đà Nẵng",
                "Showroom 2: 184 Phạm Văn Đồng, Huế",
                "Showroom 3: 51 Lê Duẩn, Quảng Trị",
              ].map((item) => (
                <Typography key={item} fontSize="14px">
                  ⭐ {item}
                </Typography>
              ))}
            </Stack>
          </Grid2>

          {/* Cột 4: Social Media và Đối tác */}
          <Grid2 size={3}>
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
                ĐỐI TÁC TIN CẬY
              </Typography>

              {["SBS VILLA", "SBS DOOR", "BROCANVAS", "CMT GARDEN"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    color="inherit"
                    fontSize="14px"
                    underline="none"
                  >
                    {item}
                  </Link>
                )
              )}
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
          <Typography fontSize="12px" color="text.primary">
            © Copyright 2014-2025. Bản quyền nội dung thuộc SBS HOUSE
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton sx={{ color: "white" }}>
              {/* <Facebook /> */}
            </IconButton>
            <IconButton sx={{ color: "white" }}>{/* <YouTube /> */}</IconButton>
            <IconButton sx={{ color: "white" }}>
              {/* <Instagram /> */}
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AppFooter;
