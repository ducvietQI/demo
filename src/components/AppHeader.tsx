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
import { MenuItem } from "@/models/home.type";

const AppHeader = ({ menuItems }: { menuItems: MenuItem[] }) => {
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
            // justifyContent: "space-between",
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
              width: { xs: 55, md: 120 },
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
              {menuItems.map((item) => {
                const isActive = pathname === item.link;

                return (
                  <Box
                    key={item.id}
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
                        onClick={() =>
                          router.push(
                            item.link.startsWith("/")
                              ? item.link
                              : `/${item.link}`
                          )
                        }
                        sx={{
                          fontWeight: isActive ? 700 : 500,
                          cursor: "pointer",
                          textTransform: "uppercase",
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
                        {item.title}
                      </Typography>
                    </Stack>

                    {/* Submenu */}
                    {item.children && item.children.length > 0 && (
                      <Stack
                        className="submenu"
                        spacing={1}
                        sx={{
                          display: "none",
                          opacity: 0,
                          transition:
                            "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                          position: "absolute",
                          top: "100%",
                          left: "-50%",
                          bgcolor: "white",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                          borderRadius: 1,
                          zIndex: 10,
                          p: 2,
                          minWidth: 200,
                        }}
                      >
                        {item.children.map((child) => (
                          <Typography
                            key={child.id}
                            onClick={() => router.push(child.link)}
                            sx={{
                              textTransform: "uppercase",
                              fontSize: "14px",
                              cursor: "pointer",
                              color: "text.black",
                              ":hover": {
                                color: "primary.main",
                              },
                            }}
                          >
                            {child.title}
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
          {isTabletDown && (
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                variant="h6"
                sx={{ fontWeight: 500, cursor: "pointer" }}
              >
                0999 888 999
              </Typography>
              <ToggleMenu
                sx={{
                  fontSize: 16,
                  cursor: "pointer",
                  color: "text.black",
                }}
                onClick={() => setIsOpen(true)}
              />

              <SideBarDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
