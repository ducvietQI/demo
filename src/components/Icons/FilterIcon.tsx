import { SvgIcon, SvgIconProps } from "@mui/material";
import { memo } from "react";

const FilterIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 20 20"
      sx={{ fontSize: "inherit", ...sx }}
      {...otherProps}
    >
      <path
        fill="none"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        stroke="currentColor"
        d="M12 9v8l-4-4V9L2 3h16z"
      />
    </SvgIcon>
  );
};

export default memo(FilterIcon);
