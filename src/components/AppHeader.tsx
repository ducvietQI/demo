"use client";

import { RouteConstant } from "@/constant";
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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ToggleMenu } from "./Icons";
import SideBarDrawer from "./SideBarDrawer";

const menuItems: Record<
  string,
  { path: string; submenu?: { label: string; path: string }[] }
> = {
  "TRANG CHỦ": { path: RouteConstant.HOME },
  "DỊCH VỤ": {
    path: RouteConstant.SERVICE,
    submenu: [
      { label: "Thiết kế kiến trúc", path: "/service/design" },
      { label: "Thi công xây dựng", path: "/service/construction" },
    ],
  },
  "DỰ ÁN": { path: RouteConstant.PROJECT },
  "SẢN PHẨM": { path: RouteConstant.PRODUCT },
  "BÀI VIẾT": { path: RouteConstant.NEWS },
  "GIỚI THIỆU": { path: RouteConstant.INTRODUCE },
  "LIÊN HỆ": { path: RouteConstant.CONTACT },
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
            display: "flex",
            justifyContent: "space-between",
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
              width: { xs: 55, md: 140 },
              cursor: "pointer",
            }}
            component={Link}
            href={RouteConstant.HOME}
          >
            <Image
              src="/images/logo.png"
              sizes="(max-width: 600px) 55px, (max-width: 960px) 80px, 140px"
              fill
              alt="logo"
              priority
            />
          </Box>

          {!isTabletDown && (
            <Stack
              pl={8.5}
              direction="row"
              spacing={4}
              sx={{ justifyContent: "center", position: "relative" }}
            >
              {Object.entries(menuItems).map(([label, { path, submenu }]) => {
                const isActive = pathname === path;

                return (
                  <Box
                    key={label}
                    sx={{
                      position: "relative",
                      ":hover > .submenu": {
                        display: "block", // Hiển thị submenu khi hover
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        variant="h6"
                        onClick={() => router.push(path)}
                        sx={{
                          fontWeight: isActive ? 700 : 500,
                          cursor: "pointer",
                          color: isActive ? "primary.main" : "text.black",
                          borderBottom: isActive ? "2px solid" : "none",
                          borderColor: isActive
                            ? "primary.main"
                            : "transparent",
                          pb: 0.5,
                          ":hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {label}
                      </Typography>
                      {submenu && (
                        <Box
                          component="span"
                          sx={{
                            width: 0,
                            height: 0,
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid",
                            borderTopColor: "text.black",
                            transition: "border-top-color 0.3s",
                            ":hover": {
                              borderTopColor: "primary.main",
                            },
                          }}
                        />
                      )}
                    </Stack>

                    {/* Submenu */}
                    {submenu && (
                      <Stack
                        className="submenu"
                        spacing={1}
                        sx={{
                          display: "none",
                          opacity: 0,
                          transform: "translateY(-10px) translateX(-50%)",
                          transition: "opacity 0.3s, transform 0.3s",
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          bgcolor: "white",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                          borderRadius: 1,
                          zIndex: 10,
                          p: 2,
                          minWidth: 200,
                        }}
                      >
                        {submenu.map((item) => (
                          <Typography
                            key={item.label}
                            onClick={() => router.push(item.path)}
                            sx={{
                              fontSize: "14px",
                              cursor: "pointer",
                              color: "text.black",
                              ":hover": {
                                color: "primary.main",
                              },
                            }}
                          >
                            {item.label}
                          </Typography>
                        ))}
                      </Stack>
                    )}
                  </Box>
                );
              })}
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
            {isTabletDown ? (
              <ToggleMenu
                sx={{
                  fontSize: 16,
                  cursor: "pointer",
                  color: "text.black",
                }}
                onClick={() => setIsOpen(true)}
              />
            ) : null}

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
