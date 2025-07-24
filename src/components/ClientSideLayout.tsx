"use client";

import { Stack, IconButton, Fade } from "@mui/material";
import AppFooter from "./AppFooter";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { CompanyProfile, IService } from "@/models/home.type";
import { appActions, useAppDispatch } from "@/redux-store";
import { ArrowDownIcon, ArrowToTopIcon } from "./Icons";

const ClientSideLayout = ({
  children,
  footerData,
  serviceData,
}: {
  children: ReactNode;
  footerData?: CompanyProfile;
  serviceData: IService[];
}) => {
  const dispatch = useAppDispatch();
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    dispatch(appActions.changeServiceData(serviceData));
  }, []);

  useEffect(() => {
    if (!footerData) return;
    dispatch(appActions.changeFooterData(footerData));
  }, [footerData]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack position="relative" pt={{ xs: "55px", md: "90px" }}>
      <div className="relative z-10 min-h-screen">{children}</div>

      {footerData && <AppFooter footerData={footerData} />}
      <IconButton
        className="fcta-dt-nen-nut"
        sx={{
          position: "fixed",
          right: { xs: 10, md: 20 },
          bottom: { xs: 10, md: 20 },
          zIndex: 2000,
          width: { xs: 40, md: 60 },
          height: { xs: 40, md: 60 },
          "&:hover": {
            backgroundColor: "white",
            transform: "scale(1.1)",
          },
        }}
        onClick={() => {
          window.location.href = Array.isArray(footerData?.hotline)
            ? `tel:${footerData.hotline[0]}`
            : "";
        }}
      >
        <Image
          src="/images/phone.png"
          fill
          alt="phone"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </IconButton>
      <IconButton
        className="fcta-zalo-nen-nut"
        sx={{
          position: "fixed",
          right: { xs: 10, md: 20 },
          bottom: { xs: 60, md: 110 },
          zIndex: 2000,
          width: { xs: 40, md: 60 },
          height: { xs: 40, md: 60 },
          backgroundColor: "#3f8edf",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#fff3cd",
            transform: "scale(1.1)",
          },
        }}
        onClick={() => {
          footerData?.social?.zalo &&
            window.open(
              `https://zalo.me/${footerData.social.zalo.trim()}`,
              "_blank"
            );
        }}
      >
        <Image
          src="/images/zalo.png"
          fill
          alt="zalo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </IconButton>

      <Fade in={showGoToTop}>
        <IconButton
          onClick={handleGoToTop}
          sx={{
            position: "fixed",
            right: { xs: 10, md: 25 },
            bottom: { xs: 120, md: 200 },
            opacity: 0.8,
            zIndex: 2000,
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
          }}
          size="large"
          aria-label="Go to top"
        >
          <ArrowDownIcon
            sx={{ fontSize: { xs: 16, md: 24 }, transform: "rotate(180deg)" }}
          />
        </IconButton>
      </Fade>
    </Stack>
  );
};

export default ClientSideLayout;
