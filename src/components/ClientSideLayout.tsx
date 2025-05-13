"use client";

import { Stack, IconButton } from "@mui/material";
import AppFooter from "./AppFooter";
import Image from "next/image";
import { ReactNode, useEffect } from "react";
import { CompanyProfile, IService } from "@/models/home.type";
import { appActions, useAppDispatch } from "@/redux-store";

const ClientSideLayout = ({
  children,
  footerData,
  serviceData,
}: {
  children: ReactNode;
  footerData: CompanyProfile;
  serviceData: IService[];
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appActions.changeServiceData(serviceData));
    dispatch(appActions.changeFooterData(footerData));
  }, []);

  return (
    <Stack position="relative" pt={{ xs: "55px", md: "90px" }}>
      <div className="relative z-10">{children}</div>

      <AppFooter footerData={footerData} />
      <IconButton
        sx={{
          position: "fixed",
          right: { xs: 10, md: 40 },
          bottom: { xs: 10, md: 40 },
          zIndex: 2000,
          width: 70,
          height: 70,
          "&:hover": {
            backgroundColor: "white",
            transform: "scale(1.1)",
          },
        }}
        onClick={() => {
          window.location.href = Array.isArray(footerData.hotline)
            ? `tel:${footerData.hotline[0]}`
            : "";
        }}
      >
        <Image
          src="/images/phone.png"
          fill
          alt="phone"
          style={{ objectFit: "cover" }}
        />
      </IconButton>
      <IconButton
        sx={{
          position: "fixed",
          right: { xs: 10, md: 40 },
          bottom: { xs: 95, md: 130 },
          zIndex: 2000,
          width: 70,
          height: 70,
          backgroundColor: "#3f8edf",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#fff3cd",
            transform: "scale(1.1)",
          },
        }}
        onClick={() => {
          footerData.social?.zalo &&
            window.open(`https://zalo.me/${footerData.social.zalo}`, "_blank");
        }}
      >
        <Image
          src="/images/zalo.png"
          fill
          alt="zalo"
          style={{ objectFit: "cover" }}
        />
      </IconButton>
    </Stack>
  );
};

export default ClientSideLayout;
