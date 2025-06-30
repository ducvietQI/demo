"use client";

import { NewsBreadcrumb } from "@/components/sn-news";
import { INews } from "@/models/project.type";
import { Container, Rating, Stack, Typography } from "@mui/material";
import AppHTMLRender from "../AppHTMLRender";
import AppSocailMedia from "../AppSocailMedia";
import { useState, useEffect } from "react";
import apiRequester from "@/api/apiRequester";
import { enqueueSnackbar } from "notistack";
import stringFormat from "string-format";
import { NEWS_INCREASE_VIEW } from "@/constant/api.const";

const NewDetailPage = ({ data }: { data: INews }) => {
  const [userVoted, setUserVoted] = useState(false);
  const [userVoteValue, setUserVoteValue] = useState<number | null>(null);
  const [averageVote, setAverageVote] = useState(
    data?.rating?.averageVote || 0
  );
  const [totalVote, setTotalVote] = useState(data?.rating?.totalVote || 0);

  // Hàm post vote cho news
  async function postNewsRate(newsId: string, vote: number) {
    return apiRequester.post<any>(
      stringFormat("/api/public/blogs/{id}/rate", { id: newsId }),
      { vote }
    );
  }

  // Hàm xử lý rating chỉ cho vote 1 lần
  const handleRating = async (_event: any, newValue: number | null) => {
    if (!userVoted && typeof newValue === "number") {
      setUserVoteValue(newValue);
      setUserVoted(true);
      try {
        const res = await postNewsRate(data.id, newValue);
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

  // Helper làm tròn lên 1 số thập phân
  function ceil1Decimal(num: number) {
    return Math.ceil(num * 10) / 10;
  }

  useEffect(() => {
    if (data.id) {
      apiRequester.post(stringFormat(NEWS_INCREASE_VIEW, { id: data.id }), {});
    }
  }, [data.id]);

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

export default NewDetailPage;
