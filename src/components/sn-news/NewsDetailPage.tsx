"use client";

import { EyeIcon } from "@/components/Icons";
import { NewsBreadcrumb } from "@/components/sn-news";
import { INews } from "@/models/project.type";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AppHTMLRender from "../AppHTMLRender";

const NewDetailPage = ({ data }: { data: INews }) => {
  console.log(data);

  return (
    <Container>
      <Stack py={5} spacing={2}>
        <NewsBreadcrumb title={data.title} />

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
            value={data.rating.averageVote}
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

export default NewDetailPage;
