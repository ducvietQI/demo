"use client";

import { useTabletDown } from "@/hooks";
import { IPaginationList, IIFAQ } from "@/models/project.type";
import { faqActions, useAppDispatch, useAppSelector } from "@/redux-store";
import { Stack, Box, Container, Button } from "@mui/material";
import { useEffect, useCallback, useState } from "react";
import apiRequester from "@/api/apiRequester";
import { ApiConst, GlobalsConst } from "@/constant";
import FAQComponent from "./FAQComponent";

const FaqPage = ({ data }: { data: IPaginationList<IIFAQ> }) => {
  const dispatch = useAppDispatch();
  const isTabletDown = useTabletDown();
  const [loading, setLoading] = useState(false);
  const { faqList, currentPage, totalPages, hasMore } = useAppSelector(
    (state) => state.faqReducer
  );

  useEffect(() => {
    dispatch(
      faqActions.changePagination({
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      })
    );
    dispatch(faqActions.changeFAQList(data.items));
    dispatch(faqActions.setHasMore(data.currentPage < data.totalPages));

    return () => {
      dispatch(faqActions.reset());
    };
  }, [data, dispatch]);

  const fetchMoreFAQs = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiRequester.get<IPaginationList<IIFAQ>>(
        ApiConst.FAQ_LIST,
        {
          page: currentPage + 1,
          size: GlobalsConst.DEFAULT_SIZE + 1,
        }
      );

      const newFAQs = response?.payload?.items || [];
      dispatch(faqActions.changeFAQList(newFAQs));
      dispatch(
        faqActions.changePagination({
          currentPage: currentPage + 1,
          totalPages: response?.payload?.totalPages || totalPages,
        })
      );
      dispatch(
        faqActions.setHasMore(currentPage + 1 < response?.payload?.totalPages)
      );
    } catch (error) {
      console.error("Error fetching more FAQs:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, totalPages, dispatch]);

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
            Câu Hỏi Thường Gặp
          </Box>
          <Box p={1.5} bgcolor="bg.grey" fontSize="14px" textAlign="center">
            Dưới đây là danh sách các câu hỏi thường gặp để giúp bạn hiểu rõ hơn
            về dịch vụ của chúng tôi.
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
            FAQ
          </Box>
          <Box
            p={3}
            bgcolor="#e5dfdf"
            fontSize="18px"
            width="70%"
            fontWeight={500}
            textAlign="center"
            boxSizing="border-box"
          >
            Nơi giải đáp thắc mắc của khách hàng trước, trong và sau khi thi
            công
          </Box>
        </Stack>
      )}

      <Container>
        <Stack spacing={2} mt={3}>
          {faqList.map((faq, index) => (
            <FAQComponent key={index} index={index} data={faq} />
          ))}
        </Stack>

        {hasMore && (
          <Stack mt={4} alignItems="center">
            <Button
              variant="contained"
              onClick={fetchMoreFAQs}
              disabled={loading}
              sx={{
                fontSize: 14,
                minWidth: 200,
                fontWeight: 600,
              }}
            >
              {loading ? "Đang tải..." : "Xem thêm"}
            </Button>
          </Stack>
        )}
      </Container>
    </Stack>
  );
};

export default FaqPage;
