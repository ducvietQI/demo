import { RouteConstant } from "@/constant";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const BasicBreadcrumbs = () => {
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
        href={RouteConstant.SERVICE}
      >
        Core
      </Link>
      <Typography color="text.black" fontSize={18}>
        Bài viết chi tiết
      </Typography>
    </Breadcrumbs>
  );
};

export default BasicBreadcrumbs;
