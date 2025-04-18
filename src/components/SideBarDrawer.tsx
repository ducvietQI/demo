import { RouteConstant } from "@/constant";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { memo } from "react";
import { CloseXIcon } from "./Icons";

const menuItems: Record<string, string> = {
  "TRANG CHỦ": RouteConstant.HOME,
  "DỊCH VỤ": RouteConstant.SERVICE,
  "DỰ ÁN": RouteConstant.PROJECT,
  "SẢN PHẨM": RouteConstant.PRODUCT,
  "BÀI VIẾT": RouteConstant.NEWS,
  "GIỚI THIỆU": RouteConstant.INTRODUCE,
  "LIÊN HỆ": RouteConstant.CONTACT,
};

const SideBarDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          bgcolor: "primary.main",
          color: "white",
        },
      }}
    >
      {/* Header Drawer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1.5,
        }}
      >
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
          <Image src="/images/logo.png" fill alt="logo" />
        </Box>
        <IconButton onClick={onClose} sx={{ color: "black" }}>
          <CloseXIcon />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />

      {/* Danh sách menu */}
      <List>
        {Object.entries(menuItems).map(([label, path], index) => {
          const isActive = pathname === path;

          return (
            <ListItem
              key={index}
              disablePadding
              onClick={() => {
                onClose();
                router.push(path);
              }}
            >
              <ListItemButton
                sx={{
                  px: 2,
                  py: 1,
                  bgcolor: isActive ? "white" : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "primary.main" : "white",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default memo(SideBarDrawer);
