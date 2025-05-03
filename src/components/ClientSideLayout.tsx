"use client";

import { Stack, IconButton } from "@mui/material";
import AppFooter from "./AppFooter";
import Image from "next/image";
import { ReactNode } from "react";

const ClientSideLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack position="relative" pt={{ xs: "55px", md: "90px" }}>
      <div className="relative z-10">{children}</div>

      <AppFooter />
      <IconButton
        sx={{
          position: "fixed",
          right: { xs: 10, md: 40 },
          bottom: { xs: 10, md: 40 },
          zIndex: 2000,
          width: 70,
          height: 70,
          // boxShadow: "0 0 15px rgba(255, 186, 0, 0.8)",
          "&:hover": {
            backgroundColor: "white",
            transform: "scale(1.1)",
          },
        }}
        onClick={() => {
          window.location.href = "tel:0355983021";
        }}
      >
        <Image
          src="/images/phone.png"
          fill
          alt="phone"
          style={{ objectFit: "cover" }} // Thay thế objectFit
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
          // boxShadow: "0 0 15px rgba(255, 186, 0, 0.8)",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#fff3cd",
            transform: "scale(1.1)",
          },
        }}
        onClick={() => {
          window.open("https://zalo.me/0355983021", "_blank");
        }}
      >
        <Image
          src="/images/zalo.png"
          fill
          alt="zalo"
          style={{ objectFit: "cover" }} // Thay thế objectFit
        />
      </IconButton>
    </Stack>
  );
};

export default ClientSideLayout;
