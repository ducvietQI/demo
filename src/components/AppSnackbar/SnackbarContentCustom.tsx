"use client";

import { ContentServerProps, SnackbarTypeEnum } from "@/models/home.type";
import { Alert, AlertProps, Box, Typography } from "@mui/material";
import { memo, useMemo } from "react";
import { ErrorSnackBarIcon, SuccessIcon, WarningNotifyIcon } from "../Icons";
import SnackbarCloseButton from "./SnackbarCloseButton";

const SnackbarContentCustom = ({
  id,
  children,
  title,
  type,
  handleClose = () => {},
}: ContentServerProps & {
  handleClose: () => void;
}) => {
  const { statusString, alertProps } = useMemo<{
    statusString: string;
    alertProps: AlertProps;
  }>(() => {
    if (type === SnackbarTypeEnum.ErrorServer) {
      return {
        statusString: "Thất bại",
        alertProps: {
          severity: "error",
          icon: <ErrorSnackBarIcon />,
        },
      };
    }
    if (type === SnackbarTypeEnum.Success) {
      return {
        statusString: "Thành công",
        alertProps: {
          severity: "success",
          icon: <SuccessIcon />,
        },
      };
    }
    return {
      statusString: "Cảnh báo",
      alertProps: {
        severity: "warning",
        icon: <WarningNotifyIcon />,
      },
    };
  }, [type]);
  return (
    <Box width={"395px"}>
      <Alert
        className=""
        classes={{
          root: "rootAlert rounded-4",
          message: "alertMessage w-full",
          standardSuccess: "standardSuccessAlert",
          standardError: "standardErrorAlert",
          standardInfo: "standardInfoAlert",
          standardWarning: "standardWarningAlert",
          icon: "iconAlert",
        }}
        {...alertProps}
      >
        <Box className="flex flex-row justify-between gap-2 items-center w-full">
          <Box className="flex gap-1 flex-col">
            <Typography fontWeight="700" variant="h4">
              {title || statusString}
            </Typography>
            {children}
          </Box>
          <SnackbarCloseButton handleClose={handleClose} />
        </Box>
      </Alert>
    </Box>
  );
};

export default memo(SnackbarContentCustom);
