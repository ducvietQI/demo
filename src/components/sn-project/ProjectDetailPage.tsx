"use client";

import apiRequester from "@/api/apiRequester";
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
import { useMemo, useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import AppHTMLRender from "../AppHTMLRender";
import AppSocailMedia from "../AppSocailMedia";
import { enqueueSnackbar } from "notistack";
import stringFormat from "string-format";
import { ApiConst } from "@/constant";
import { PROJECT_INCREASE_VIEW } from "@/constant/api.const";

const ProjectDetailPage = ({ data }: { data: IProject }) => {
  const [open, setOpen] = useState(false);
  const [userVoted, setUserVoted] = useState(false);
  const [userVoteValue, setUserVoteValue] = useState<number | null>(null);
  const [averageVote, setAverageVote] = useState(
    data?.rating?.averageVote || 0
  );
  const [totalVote, setTotalVote] = useState(data?.rating?.totalVote || 0);

  const images = useMemo(() => {
    return data?.images?.length
      ? data?.images.map((item) => ({
          original: item.url || "/images/22.webp",
        }))
      : [];
  }, [data]);

  const { tree: headingTree } = useMemo(
    () => parseHeadingTree(data.content),
    [data.content]
  );

  useEffect(() => {
    if (data.id) {
      apiRequester.post(
        stringFormat(ApiConst.PROJECT_INCREASE_VIEW, { id: data.id })
      );
    }
  }, [data.id]);

  // Hàm post vote cho project
  async function postProjectRate(projectId: string, vote: number) {
    return apiRequester.post<any>(
      stringFormat("/api/public/projects/{id}/rate", { id: projectId }),
      { vote }
    );
  }

  // Hàm xử lý rating chỉ cho vote 1 lần
  const handleRating = async (_event: any, newValue: number | null) => {
    if (!userVoted && typeof newValue === "number") {
      setUserVoteValue(newValue);
      setUserVoted(true);
      try {
        const res = await postProjectRate(data.id, newValue);
        if (res?.status === 200) {
          setAverageVote(res.payload.averageVote);
          setTotalVote(res.payload.totalVote);
          enqueueSnackbar({
            message: "Đánh giá thành công!",
            variant: "success",
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (data.id) {
      apiRequester.post(
        stringFormat(PROJECT_INCREASE_VIEW, { id: data.id }),
        {}
      );
    }
  }, [data.id]);

  return (
    <Container>
      <Stack py={5} spacing={2}>
        <ProjectBreadcrumb title={data.title} />
        <Typography variant="h2" fontWeight={700}>
          {data.title}
        </Typography>

        <AppSocailMedia view={data.view} />

        <ImageGallery
          // showPlayButton={false}
          items={images}
          showIndex
        />

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
            <HeadingTreeList data={headingTree} />
          </Collapse>
        </Box>

        {/* Render Content */}
        <AppHTMLRender htmlRender={data?.content} />

        <Stack spacing={2} alignItems="center">
          <Rating
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 30,
              },
            }}
            size="large"
            name="simple-controlled"
            value={
              userVoteValue !== null ? userVoteValue : ceil1Decimal(averageVote)
            }
            readOnly={userVoted}
            onChange={handleRating}
          />
          <Typography variant="h3">
            Đánh giá: {ceil1Decimal(averageVote)}/5. Số lượt vote:
            {totalVote}
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

export function parseHeadingTree(html: string) {
  const decoded = decodeHTMLEntities(html);
  const parser = new DOMParser();
  const doc = parser.parseFromString(decoded, "text/html");

  const headings = Array.from(doc.body.children)
    .filter((el) => ["H1", "H2", "H3"].includes(el.tagName))
    .map((el, i) => {
      const id = `heading-${i}`;
      el.setAttribute("id", id); // gán id vào DOM để dùng scroll
      return {
        id,
        tag: el.tagName.toLowerCase(),
        text: el.textContent?.trim() || "",
      };
    });

  const tree: any[] = [];
  let currentH1: any = null;
  let currentH2: any = null;

  for (const heading of headings) {
    if (heading.tag === "h1") {
      currentH1 = { ...heading, children: [] };
      tree.push(currentH1);
      currentH2 = null;
    } else if (heading.tag === "h2") {
      const h2Node = { ...heading, children: [] };
      if (currentH1) {
        currentH1.children.push(h2Node);
        currentH2 = h2Node;
      }
    } else if (heading.tag === "h3") {
      const h3Node = { ...heading };
      if (currentH2) {
        currentH2.children.push(h3Node);
      }
    }
  }

  return {
    tree,
    htmlWithId: doc.body.innerHTML, // cập nhật html có id để render lại
  };
}

// Helper để decode các thực thể HTML như &acirc; -> â
function decodeHTMLEntities(str: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

interface HeadingNode {
  id: string;
  tag: string;
  text: string;
  children?: HeadingNode[];
}

export const HeadingTreeList = ({ data }: { data: HeadingNode[] }) => {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    const container = document.getElementById(id);

    if (container) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <List disablePadding sx={{ pl: 2, pt: 1 }}>
      {data.map((item, index) => (
        <ListItem
          key={index}
          disableGutters
          sx={listItemSx}
          onClick={() => handleClick(item.id)}
        >
          {item.text}
          {item.children && item.children.length > 0 && (
            <List disablePadding sx={{ pl: 3 }}>
              <HeadingTreeList data={item.children} />
            </List>
          )}
        </ListItem>
      ))}
    </List>
  );
};

function ceil1Decimal(num: number) {
  return Math.ceil(num * 10) / 10;
}
