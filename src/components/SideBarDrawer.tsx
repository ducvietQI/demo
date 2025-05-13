"use client";

import { RouteConstant } from "@/constant";
import {
  Box,
  Collapse,
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
import { memo, useState } from "react";
import { ArrowDownIcon, CloseXIcon } from "./Icons";
import { MenuItem } from "@/models/home.type";

const SideBarDrawer = ({
  isOpen,
  onClose,
  menuItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const renderMenuItems = (items: MenuItem[], level = 0) => {
    return items.map((item) => {
      const isActive = pathname === item.link;
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedIds.includes(item.id);

      return (
        <Box key={item.id}>
          <ListItem
            disablePadding
            onClick={() => {
              if (hasChildren) {
                toggleExpand(item.id);
              } else {
                onClose();
                router.push(item.link);
              }
            }}
          >
            <ListItemButton
              sx={{
                pl: 2 + level * 2,
                py: 1,
                bgcolor: isActive ? "white" : "transparent",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "primary.main" : "white",
                }}
              />
              {hasChildren &&
                (isExpanded ? (
                  <ArrowDownIcon
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      transform: "rotate(-180deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                ) : (
                  <ArrowDownIcon
                    sx={{
                      color: "white",
                      fontSize: "20px",
                    }}
                  />
                ))}
            </ListItemButton>
          </ListItem>

          {hasChildren && (
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <List disablePadding>
                {renderMenuItems(item.children!, level + 1)}
              </List>
            </Collapse>
          )}
        </Box>
      );
    });
  };

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

      <List>{renderMenuItems(menuItems)}</List>
    </Drawer>
  );
};

export default memo(SideBarDrawer);
