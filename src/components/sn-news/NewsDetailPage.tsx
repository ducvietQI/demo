"use client";

import { NewsBreadcrumb } from "@/components/sn-news";
import { INews } from "@/models/project.type";
import { Container, Rating, Stack, Typography } from "@mui/material";
import AppHTMLRender from "../AppHTMLRender";
import AppSocailMedia from "../AppSocailMedia";

const NewDetailPage = ({ data }: { data: INews }) => {
  return (
    <Container>
      <Stack py={5} spacing={2}>
        <NewsBreadcrumb title={data.title} />

        <Typography variant="h2" fontWeight={700}>
          {data.title}
        </Typography>

        <AppSocailMedia view={data.view} />

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
