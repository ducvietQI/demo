"use client";

import { useTabletDown } from "@/hooks";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { SearchIcon, ToggleMenu } from "./Icons";
import SideBarDrawer from "./SideBarDrawer";

const menuItems = [
  "TRANG CHỦ",
  "DỊCH VỤ",
  "DỰ ÁN",
  "SẢN PHẨM",
  "BÀI VIẾT",
  "GIỚI THIỆU",
  "LIÊN HỆ",
];

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTabletDown = useTabletDown();

  return (
    <AppBar
      color="default"
      sx={{
        bgcolor: "#ffffff", color: "text.black",
        boxShadow: '0 1px 0 0 #e1e5ea'
      }}
    >
      <Container>
        <Toolbar
          sx={{
            height: { xs: 55, md: 90 },
            justifyContent: "space-between",
            "&.MuiToolbar-root": {
              px: 0,
            },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              position: "relative",
              height: { xs: 35, md: 80 },
              width: { xs: 35, md: 140 },
            }}
          >
            <Image src="/images/logo.jpg" fill alt="logo" />
          </Box>

          {!isTabletDown && (
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
                    fontWeight: 700,
                    cursor: "pointer",

                    ":hover": {
                      color: "primary.main",
                      fontWeight: 700,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          )}

          {/* Contact + Icons */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* <Typography
              variant="h6"
              sx={{ fontWeight: 500, cursor: "pointer" }}
            >
              0999 888 999
            </Typography> */}
            <SearchIcon
              sx={{
                fontSize: 16,
                cursor: "pointer",
                color: "white",
              }}
            />
            {isTabletDown ? (
              <ToggleMenu
                sx={{
                  fontSize: 16,
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => setIsOpen(true)}
              />
            ) : (
              <></>
              // <Image
              //   src="/images/icon_bar.png"
              //   alt="icon_bar"
              //   width={25}
              //   height={25}
              //   priority={true}
              // />
            )}

            {isTabletDown && (
              <SideBarDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
