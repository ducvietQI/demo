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
  const [isOpen, setIsOpen] = useState(false);
  const isTabletDown = useTabletDown();

  return (
    <AppBar
      color="default"
      sx={{ backgroundColor: "bg.main", color: "text.primary" }}
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
              height: { xs: 35, md: 70 },
              width: { xs: 35, md: 70 },
            }}
          >
            <Image src="/images/logo.svg" fill alt="logo" />
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
          )}

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
              <Image
                src="/images/icon_bar.png"
                alt="icon_bar"
                width={25}
                height={25}
                priority={true}
              />
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
