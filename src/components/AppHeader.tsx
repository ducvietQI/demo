"use client";

import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { SearchIcon } from "./Icons";

const menuItems = [
  "TRANG CHỦ",
  "GIỚI THIỆU",
  "DỊCH VỤ",
  "DỰ ÁN",
  "BÁO GIÁ",
  "KIẾN THỨC",
  "PHẢN HỒI",
  "NỘI THẤT",
  "TUYỂN DỤNG",
];

const AppHeader = () => {
  return (
    <AppBar
      color="default"
      sx={{ backgroundColor: "bg.main", color: "text.primary" }}
    >
      <Container>
        <Toolbar sx={{ height: 90, justifyContent: "space-between" }}>
          {/* Logo */}
          <Box className="relative size-[70px]">
            <Image src="/images/logo.svg" fill alt="logo" />
          </Box>

          {/* Navigation Menu */}
          <Stack
            direction="row"
            spacing={4}
            sx={{ flexGrow: 1, justifyContent: "center" }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                variant="h6"
                sx={{
                  fontWeight: 500,
                  cursor: "pointer",

                  ":hover": {
                    color: "primary.main",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>

          {/* Contact + Icons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, cursor: "pointer" }}
            >
              0999 888 999
            </Typography>
            <SearchIcon
              sx={{
                fontSize: 16,
                cursor: "pointer",
              }}
            />
            <Image
              src="/images/icon_bar.png"
              alt="icon_bar"
              width={25}
              height={25}
              priority={true}
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
