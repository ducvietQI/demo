import { Pagination } from "@mui/material";

const AppPagination = () => {
  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-root": {
          fontSize: "16px",
          bgcolor: "#bdbbbb",
          color: "white",
        },
        "& .MuiPaginationItem-ellipsis": {
          bgcolor: "transparent",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .MuiPaginationItem-icon": {
          fontSize: "16px",
        },
        "& .Mui-selected": {
          bgcolor: "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        },
      }}
      count={10}
      color="primary"
    />
  );
};

export default AppPagination;
