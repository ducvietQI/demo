"use client";
import { memo } from "react";
import { IconButton } from "@mui/material";
import { CloseIcon } from "../Icons";

const SnackbarCloseButton = ({
  handleClose,
  ...otherProps
}: {
  handleClose: () => void;
}) => {
  return (
    <IconButton
      sx={{
        color: "common.black",
        fontSize: "12px",
        width: 24,
        height: 24,
      }}
      onClick={handleClose}
      className="testcloseicon"
      {...otherProps}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default memo(SnackbarCloseButton);
