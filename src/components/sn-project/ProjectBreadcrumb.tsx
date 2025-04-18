import { RouteConstant } from "@/constant";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const ProjectBreadcrumb = () => {
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
        Dự án chi tiết
      </Typography>
    </Breadcrumbs>
  );
};

export default ProjectBreadcrumb;
