"use client";
import { forwardRef } from "react";
import AppSnackbar from "./AppSnackbar";
import { CustomContentProps } from "notistack";
import { SnackbarTypeEnum } from "@/models/home.type";

const AppSnackbarError = forwardRef<
  HTMLDivElement,
  CustomContentProps & { type?: SnackbarTypeEnum }
>(({ type = SnackbarTypeEnum.ErrorServer, ...props }, ref) => {
  return <AppSnackbar {...props} type={type} ref={ref} />;
});

AppSnackbarError.displayName = "AppSnackbarError";
export default AppSnackbarError;
