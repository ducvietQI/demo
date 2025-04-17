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
import { usePathname, useRouter } from "next/navigation";
import { RouteConstant } from "@/constant";

const menuItems: Record<string, string> = {
  "TRANG CHỦ": RouteConstant.HOME,
  "DỊCH VỤ": RouteConstant.SERVICE,
  "DỰ ÁN": RouteConstant.PROJECT,
  "SẢN PHẨM": RouteConstant.PRODUCT,
  "BÀI VIẾT": RouteConstant.NEWS,
  "GIỚI THIỆU": RouteConstant.INTRODUCE,
  "LIÊN HỆ": RouteConstant.CONTACT,
};

const AppHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isTabletDown = useTabletDown();

  return (
    <AppBar
      color="default"
      sx={{
        bgcolor: "#ffffff",
        color: "text.black",
        boxShadow: "0 1px 0 0 #e1e5ea",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            height: { xs: 55, md: 90 },
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
            <Image src="/images/logo.png" fill alt="logo" />
          </Box>

          {!isTabletDown && (
            <Stack
              pl={8.5}
              direction="row"
              spacing={4}
              sx={{ justifyContent: "center" }}
            >
              {Object.entries(menuItems).map(([label, path]) => {
                const isActive = pathname === path;

                return (
                  <Typography
                    key={label}
                    variant="h6"
                    onClick={() => router.push(path)}
                    sx={{
                      fontWeight: isActive ? 700 : 500,
                      cursor: "pointer",
                      color: isActive ? "primary.main" : "text.black",
                      borderBottom: isActive ? "2px solid" : "none",
                      borderColor: isActive ? "primary.main" : "transparent",
                      pb: 0.5,

                      ":hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {label}
                  </Typography>
                );
              })}
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
