import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { memo } from "react";

const RightArrow = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ fontSize: "inherit", fill: "none", ...sx }}
      {...otherProps}
    >
      <path
        d="M4 12H20M20 12L16 8M20 12L16 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default memo(RightArrow);
