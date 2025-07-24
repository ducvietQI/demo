import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { memo } from "react";

const ArrowToTopIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 16 16"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(ArrowToTopIcon);
