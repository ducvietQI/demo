"use client";

import { EyeIcon } from "@/components/Icons";
import { ProjectBreadcrumb } from "@/components/sn-project";
import { IProject } from "@/models/project.type";
import {
  Box,
  Collapse,
  Container,
  List,
  ListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useMemo, useState } from "react";
import ImageGallery from "react-image-gallery";

const ProjectDetailPage = ({ data }: { data: IProject }) => {
  const [open, setOpen] = useState(false);

  const images = useMemo(() => {
    return data?.images.length
      ? data?.images.map((item) => ({
          original: item.url,
          // thumbnail: item.url,
          description: item.caption,
        }))
      : [];
  }, [data]);

  return (
    <Container>
      <Stack py={5} spacing={2}>
        <ProjectBreadcrumb title={data.title} />
        <Typography variant="h2" fontWeight={700}>
          {data.title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Image src="/images/fb.png" height={30} width={30} alt="fb-icon" />
          <Image src="/images/yt.png" height={30} width={30} alt="yt-icon" />
          <Image src="/images/ar.png" height={30} width={30} alt="tt-icon" />
          <EyeIcon sx={{ fontSize: 20 }} />
          <Typography variant="h5">{data.view}</Typography>
        </Stack>

        <ImageGallery items={images} showIndex lazyLoad={false} />

        <Box bgcolor="black" color="white" py={3} textAlign="center">
          <Typography variant="h6" color="orange">
            Thông tin công trình
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            {data.description}
          </Typography>
        </Box>

        <Stack direction="row" justifyContent="space-between" bgcolor="#F5B940">
          {[
            {
              icon: "/images/icon-7.png",
              title: "Vị trí công trình",
              desc: data.projectInformation.location,
            },
            {
              icon: "/images/icon-8.png",
              title: "Số tầng",
              desc: data.projectInformation.numberFloor,
            },
            {
              icon: "/images/icon-9.png",
              title: "Diện tích đất",
              desc: data.projectInformation.acreage,
            },
            {
              icon: "/images/icon-10.png",
              title: "Diện tích xây dựng",
              desc: data.projectInformation.buildingArea,
            },
            {
              icon: "/images/icon-11.png",
              title: "Chi phí xây dựng",
              desc: data.projectInformation.costs,
            },
          ].map((item, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              spacing={1}
              py={2}
              px={2}
              flex={1}
              borderLeft={index !== 0 ? "1px solid white" : "none"}
            >
              <Image src={item.icon} alt="icon" width={50} height={50} />
              <Box>
                <Typography fontSize={16} fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography fontSize={16} variant="body2">
                  {item.desc}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>

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
                1. Kiến trúc mở, đưa ánh sáng và gió trời vào từng căn hộ
                <List disablePadding sx={{ pl: 3 }}>
                  <ListItem disableGutters sx={listItemSx}>
                    1.1. Kiến trúc khối hiện đại cho căn hộ 5 tầng 1 tum
                  </ListItem>
                  <ListItem disableGutters sx={listItemSx}>
                    1.2. Sự linh hoạt ứng dụng màu sắc, vật liệu cho công trình
                  </ListItem>
                </List>
              </ListItem>

              <ListItem disableGutters sx={listItemSx}>
                2. Không gian căn hộ xanh và thư giãn giữa Đà Nẵng hiện đại
              </ListItem>
              <ListItem disableGutters sx={listItemSx}>
                3. Thiết kế tối ưu cho mục đích đầu tư căn hộ cho thuê
              </ListItem>
            </List>
          </Collapse>
        </Box>

        <Typography variant="h4">{data.content}</Typography>

        <Stack spacing={2} alignItems="center">
          <Rating
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 30,
              },
            }}
            size="large"
            name="simple-controlled"
            value={data.rating.averageVote}
            readOnly
          />
          <Typography variant="h3">
            Đánh giá: {data.rating.averageVote}/5. Số lượt vote:
            {data.rating.totalVote}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProjectDetailPage;

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
