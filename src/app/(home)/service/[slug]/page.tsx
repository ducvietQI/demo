"use client";

import { EyeIcon } from "@/components/Icons";
import { BasicBreadcrumbs } from "@/components/sn-service";
import { RouteConstant } from "@/constant";
import {
  Container,
  IconButton,
  Stack,
  Typography,
  Collapse,
  Box,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const ServiceDetailPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Stack py={5} spacing={2}>
        <BasicBreadcrumbs />

        <Typography variant="h2" fontWeight={700}>
          Công ty thiết kế nội thất quận 5 đẹp, uy tín và chuyên nghiệp
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Image src="/images/fb.png" height={30} width={30} alt="fb-icon" />
          <Image src="/images/yt.png" height={30} width={30} alt="yt-icon" />
          <Image src="/images/ar.png" height={30} width={30} alt="tt-icon" />
          <EyeIcon sx={{ fontSize: 20 }} />
          <Typography variant="h5">69</Typography>
        </Stack>

        {/* === Mục lục nội dung === */}
        <Box
          sx={{
            backgroundColor: "#f5ba3e",
            padding: 2,
            borderRadius: 1,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Mục lục nội dung{" "}
            <Typography
              component="span"
              sx={{
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 400,
                color: "blue",
              }}
              onClick={() => setOpen(!open)}
            >
              [{open ? "Ẩn" : "Hiện"}]
            </Typography>
          </Typography>

          <Collapse in={open}>
            <List disablePadding sx={{ pl: 2, pt: 1 }}>
              <ListItem disableGutters sx={listItemSx}>
                1. Công ty thiết kế nội thất quận 5 uy tín và chuyên nghiệp
              </ListItem>

              <ListItem disableGutters sx={listItemSx}>
                2. Những mẫu thiết kế nội thất đẹp, tiện nghi của SBS HOUSE
                <List disablePadding sx={{ pl: 3 }}>
                  <ListItem disableGutters sx={listItemSx}>
                    2.1. Mẫu thiết kế nội thất nhà phố
                  </ListItem>
                  <ListItem disableGutters sx={listItemSx}>
                    2.2. Mẫu thiết kế nội thất biệt thự
                  </ListItem>
                  <ListItem disableGutters sx={listItemSx}>
                    2.3. Mẫu thiết kế nội thất căn hộ duplex
                  </ListItem>
                </List>
              </ListItem>

              <ListItem disableGutters sx={listItemSx}>
                3. Báo giá thiết kế nội thất quận 5 và thi công trọn gói
                <List disablePadding sx={{ pl: 3 }}>
                  <ListItem disableGutters sx={listItemSx}>
                    3.1. Bảng giá thiết kế nội thất quận 5
                  </ListItem>
                  <ListItem disableGutters sx={listItemSx}>
                    3.2. Báo giá thi công nội thất quận 5 trọn gói
                  </ListItem>
                </List>
              </ListItem>

              <ListItem disableGutters sx={listItemSx}>
                4. Thời gian thiết kế và thi công nội thất quận 5, HCM
              </ListItem>
            </List>
          </Collapse>
        </Box>
      </Stack>
    </Container>
  );
};

export default ServiceDetailPage;

const listItemSx = {
  display: "list-item",
  fontSize: 14,
  color: "#fff",
  cursor: "pointer",
  "&:hover": {
    color: "text.black",
    textDecoration: "underline",
  },
};
