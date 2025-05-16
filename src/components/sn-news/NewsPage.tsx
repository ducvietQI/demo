"use client";

import apiRequester from "@/api/apiRequester";
import { ApiConst, GlobalsConst } from "@/constant";
import { useTabletDown } from "@/hooks";
import { INews, IPaginationList } from "@/models/project.type";
import { newsActions, useAppDispatch, useAppSelector } from "@/redux-store";
import { Box, Button, Container, Grid2, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import NewsCard from "../sn-home/NewsSection/NewsCard";

const NewsPage = ({
  data,
  newsGroupSlug,
  responseNewsGroupDetail,
}: {
  data: IPaginationList<INews>;
  newsGroupSlug?: string;
  responseNewsGroupDetail?: INews;
}) => {
  const dispatch = useAppDispatch();
  const isTabletDown = useTabletDown();
  const [loading, setLoading] = useState(false);
  const { newsList, currentPage, totalPages, hasMore } = useAppSelector(
    (state) => ({
      newsList: state.newsReducer.newsList,
      currentPage: state.newsReducer.currentPage,
      totalPages: state.newsReducer.totalPages,
      hasMore: state.newsReducer.hasMore,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(
      newsActions.changePagination({
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      })
    );
    dispatch(newsActions.changenewsList(data.items));
    dispatch(newsActions.setHasMore(data.currentPage < data.totalPages));

    return () => {
      dispatch(newsActions.reset());
    };
  }, [data, dispatch]);

  const fetchMoreNews = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiRequester.get<IPaginationList<INews>>(
        ApiConst.NEWS_LIST,
        {
          blogGroupSlug: newsGroupSlug || "",
          page: currentPage + 1,
          size: GlobalsConst.DEFAULT_SIZE,
        }
      );

      const newNews = response?.payload?.items || [];
      dispatch(newsActions.changenewsList(newNews));
      dispatch(
        newsActions.changePagination({
          currentPage: currentPage + 1,
          totalPages: response?.payload?.totalPages || totalPages,
        })
      );
      dispatch(
        newsActions.setHasMore(currentPage + 1 < response?.payload?.totalPages)
      );
    } catch (error) {
      console.error("Error fetching more news:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, totalPages, newsGroupSlug, dispatch]);

  return (
    <Stack position="relative" pb={{ xs: 3, md: 5 }}>
      {isTabletDown ? (
        <>
          <Box
            p="10px"
            bgcolor="primary.main"
            fontSize="20px"
            textAlign="center"
            fontWeight={700}
          >
            {responseNewsGroupDetail?.title || "Phản hồi của khách hàng"}
          </Box>
          <Box p={1.5} bgcolor="bg.grey" fontSize="14px" textAlign="center">
            {responseNewsGroupDetail?.description ||
              " Đối với khách hàng, chúng tôi luôn tận tâm tạo ra những giá trị cho Quý khách hàng thân yêu. Quanghoanhome gồm đội ngũ kiến trúc sư, kỹ sư, chuyên gia trang trí nội thất có trên 5 năm kinh nghiệm hoạt động"}
          </Box>
        </>
      ) : (
        <Stack alignItems="center" position="relative">
          <Box
            p="10px"
            position="absolute"
            bgcolor="primary.main"
            fontSize="20px"
            width="70%"
            textAlign="center"
            top={-51}
            fontWeight={700}
            zIndex={2}
            boxSizing="border-box"
          >
            {responseNewsGroupDetail?.title || "Phản hồi của khách hàng"}
          </Box>
          <Box
            p={3}
            bgcolor="#e5dfdf"
            fontSize="14px"
            width="70%"
            fontWeight={500}
            textAlign="center"
            boxSizing="border-box"
          >
            {responseNewsGroupDetail?.description ||
              " Đối với khách hàng, chúng tôi luôn tận tâm tạo ra những giá trị cho Quý khách hàng thân yêu. Quanghoanhome gồm đội ngũ kiến trúc sư, kỹ sư, chuyên gia trang trí nội thất có trên 5 năm kinh nghiệm hoạt động"}
          </Box>
        </Stack>
      )}

      <Container>
        <Grid2 my={5} container columnSpacing={2} rowSpacing={2}>
          {newsList.map((item, index) => (
            <Grid2
              size={{ xs: 12, md: 4 }}
              key={index}
              sx={{
                position: "relative",
                cursor: "pointer",
                height: { xs: 340, md: 400 },
              }}
            >
              <NewsCard data={item} />
            </Grid2>
          ))}
        </Grid2>

        {hasMore && (
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              sx={{
                fontSize: 14,
                minWidth: 200,
                fontWeight: 600,
              }}
              onClick={fetchMoreNews}
            >
              {loading ? "Đang tải..." : "Xem thêm"}
            </Button>
          </Box>
        )}
      </Container>
    </Stack>
  );
};

export default NewsPage;
