"use client";

import apiRequester from "@/api/apiRequester";
import { ApiConst, GlobalsConst } from "@/constant";
import { useTabletDown } from "@/hooks";
import { IPaginationList, IProject } from "@/models/project.type";
import { projectActions, useAppDispatch, useAppSelector } from "@/redux-store";
import { Box, Button, Container, Grid2, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import ProjectCard from "./ProjectCard";

const ProjectPage = ({
  data,
  projectGroupSlug,
  responseProjectGroupDetail,
}: {
  data: IPaginationList<IProject>;
  projectGroupSlug?: string;
  responseProjectGroupDetail?: IProject;
}) => {
  const dispatch = useAppDispatch();
  const isTabletDown = useTabletDown();
  const [loading, setLoading] = useState(false);
  const { projectList, currentPage, totalPages, hasMore } = useAppSelector(
    (state) => ({
      projectList: state.projectReducer.projectList,
      currentPage: state.projectReducer.currentPage,
      totalPages: state.projectReducer.totalPages,
      hasMore: state.projectReducer.hasMore,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(
      projectActions.changePagination({
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      })
    );
    dispatch(projectActions.changeProjectList(data.items));

    return () => {
      dispatch(projectActions.reset());
    };
  }, []);

  const fetchMoreProjects = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const response = await apiRequester.get<IPaginationList<IProject>>(
        ApiConst.PROJECT_LIST,
        {
          projectGroupSlug: projectGroupSlug || "",
          page: currentPage + 1,
          size: GlobalsConst.DEFAULT_SIZE,
        }
      );
      const newProjects = response?.payload?.items || [];
      dispatch(projectActions.changeProjectList(newProjects));
      const newCurrentPage = currentPage + 1;
      dispatch(
        projectActions.changePagination({
          currentPage: newCurrentPage,
          totalPages: response?.payload?.totalPages || totalPages,
        })
      );
      dispatch(
        projectActions.setHasMore(
          newCurrentPage < (response?.payload?.totalPages || 0)
        )
      );
    } catch (error) {
      console.error("Error fetching more projects:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, totalPages, projectGroupSlug, hasMore, loading]);

  return (
    <Stack position="relative">
      {isTabletDown && (
        <>
          <Box
            p="10px"
            bgcolor="primary.main"
            fontSize="20px"
            textAlign="center"
            fontWeight={700}
          >
            {responseProjectGroupDetail?.title || "Mẫu Nhà Đẹp"}
          </Box>
          <Box p={1.5} bgcolor="bg.grey" fontSize="14px" textAlign="center">
            {responseProjectGroupDetail?.description ||
              "Với hơn 6 năm hoạt động, chúng tôi đã thiết kế hàng trăm công trình từ nhà phố đến khách sạn, nhà hàng, building,… Mỗi công trình đều chứa đựng tâm huyết của đội ngũ kiến trúc sư cùng kỹ sư tại Quanghoanhome."}
          </Box>
        </>
      )}

      <Container>
        {!isTabletDown && (
          <Stack alignItems="center" position="relative">
            <Box
              p="10px"
              position="absolute"
              bgcolor="primary.main"
              fontSize="24px"
              width="70%"
              textAlign="center"
              top={-51}
              fontWeight={700}
              zIndex={2}
              boxSizing="border-box"
            >
              {responseProjectGroupDetail?.title || "Mẫu Nhà Đẹp"}
            </Box>
            <Box
              p={3}
              bgcolor="#e5dfdf"
              fontSize="16px"
              width="70%"
              fontWeight={500}
              textAlign="center"
              boxSizing="border-box"
            >
              {responseProjectGroupDetail?.description ||
                "Với hơn 6 năm hoạt động, chúng tôi đã thiết kế hàng trăm công trình từ nhà phố đến khách sạn, nhà hàng, building,… Mỗi công trình đều chứa đựng tâm huyết của đội ngũ kiến trúc sư cùng kỹ sư tại Quanghoanhome."}
            </Box>
          </Stack>
        )}

        <Grid2 my={5} container columnSpacing={2} rowSpacing={2}>
          {projectList.map((item, index) => (
            <Grid2
              size={{ xs: 12, md: 4 }}
              key={index}
              sx={{
                position: "relative",
                cursor: "pointer",
                height: { xs: 340, md: 400 },
              }}
            >
              <ProjectCard data={item} />
            </Grid2>
          ))}
        </Grid2>

        {hasMore && (
          <Stack alignItems="center" mb={5}>
            <Button
              variant="contained"
              onClick={fetchMoreProjects}
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

export default ProjectPage;
