import { RouteConstant } from "@/constant";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { memo } from "react";

const ProjectBreadcrumb = ({ title }: { title: string }) => {
  return (
    <Breadcrumbs
      sx={{
        fontSize: 18,
      }}
      aria-label="breadcrumb"
    >
      <Link
        sx={{ "&:hover": { color: "primary.main" } }}
        underline="none"
        color="inherit"
        href={RouteConstant.HOME}
      >
        Trang chủ
      </Link>
      <Link
        sx={{ "&:hover": { color: "primary.main" } }}
        underline="none"
        color="inherit"
        href={RouteConstant.PROJECT}
      >
        Dự án
      </Link>
      <Typography color="text.black" fontSize={18}>
        {title}
      </Typography>
    </Breadcrumbs>
  );
};

export default memo(ProjectBreadcrumb);
