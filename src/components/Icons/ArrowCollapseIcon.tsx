import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { memo } from "react";

const ArrowCollapseIcon = ({ sx, ...otherProps }: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 511.735 511.735"
      sx={{ fontSize: "inherit", fill: "currentColor", ...sx }}
      {...otherProps}
    >
      <g>
        <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04    c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213    C512.734,381.753,512.734,375.247,508.788,371.087z" />
      </g>
    </SvgIcon>
  );
};

export default memo(ArrowCollapseIcon);
