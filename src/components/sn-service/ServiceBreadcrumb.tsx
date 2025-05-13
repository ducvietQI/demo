import { RouteConstant } from "@/constant";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const ServiceBreadcrumb = ({ title }: { title?: string }) => {
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
      <Typography color="text.black" fontSize={18}>
        {title || ""}
      </Typography>
    </Breadcrumbs>
  );
};

export default ServiceBreadcrumb;
