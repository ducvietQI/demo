"use client";

import { IIFAQ } from "@/models/project.type";
import { Container, Rating, Stack, Typography } from "@mui/material";
import AppSocailMedia from "../AppSocailMedia";
import FAQBreadcrumb from "./FAQBreadcrumb";

const FAQDetailPage = ({ data }: { data: IIFAQ }) => {
  return (
    <Container>
      <Stack py={5} spacing={2}>
        <FAQBreadcrumb title={data.title} />

        <Typography variant="h2" fontWeight={700}>
          {data.title}
        </Typography>

        <AppSocailMedia />

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
          />
          <Typography variant="h3">
            Đánh giá: {data.rating.averageVote}/5. Số lượt vote:{" "}
            {data.rating.totalVote}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default FAQDetailPage;
