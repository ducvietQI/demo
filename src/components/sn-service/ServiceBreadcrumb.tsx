import { RouteConstant } from "@/constant";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const ServiceBreadcrumb = () => {
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
        Dịch vụ
      </Link>
      <Typography color="text.black" fontSize={18}>
        Dịch vụ chi tiết
      </Typography>
    </Breadcrumbs>
  );
};

export default ServiceBreadcrumb;
