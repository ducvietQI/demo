import { RouteConstant } from "@/constant";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const NewsBreadcrumb = ({ title }: { title: string }) => {
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
        href={RouteConstant.NEWS}
      >
        Bài viết
      </Link>
      <Typography color="text.black" fontSize={18}>
        {title}
      </Typography>
    </Breadcrumbs>
  );
};

export default NewsBreadcrumb;
