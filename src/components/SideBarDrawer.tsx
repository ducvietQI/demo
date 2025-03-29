import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { memo } from "react";
import { CloseXIcon } from "./Icons";

const menuItems = [
  {
    title: "GIỚI THIỆU",
    items: [
      "Giới Thiệu",
      "SBS Profile",
      "Sơ đồ tổ chức",
      "Giá trị cốt lõi",
      "SBS Life Style",
      "Showroom nội thất SBS",
      "Xưởng nội thất SBS",
    ],
  },
  {
    title: "DỊCH VỤ",
    items: [
      "Thiết kế & thi công nội thất",
      "Thiết kế kiến trúc",
      "Thi công phần thô",
      "Thi công hoàn thiện",
      "Xây nhà trọn gói Đà Nẵng",
      "Xây nhà trọn gói TP HCM",
      "Xây nhà trọn gói Đồng Nai",
      "Xây nhà trọn gói Bình Dương",
    ],
  },
  {
    title: "DỰ ÁN",
    items: [
      "Công trình thi công",
      "So sánh ảnh 3D và thực tế",
      "Khoảnh khắc thi công",
      "Công tác bảo trì",
    ],
  },
];

const SideBarDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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
        <Typography variant="h6" fontWeight="bold">
          TRANG CHỦ
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "black" }}>
          <CloseXIcon />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />

      {/* Danh sách menu */}
      <List>
        {menuItems.map((section, idx) => (
          <Box key={idx} sx={{ px: 1 }}>
            <Typography
              variant="h6"
              sx={{
                display: "block",
                fontWeight: "bold",
                color: "text.black",
                px: 2,
                py: 1,
              }}
            >
              {section.title}
            </Typography>
            {section.items.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ px: 2, py: 0.5 }}>
                  <ListItemText
                    sx={{
                      color: "text.black",
                      fontSize: 14,
                    }}
                    primary={text}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default memo(SideBarDrawer);
