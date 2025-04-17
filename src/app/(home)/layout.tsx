"use client";
import { AppFooter } from "@/components";
import AppHeader from "@/components/AppHeader";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack position="relative" pt={{ xs: "55px", md: "90px" }}>
      <AppHeader />
      <div className="relative z-10">{children}</div>
      <AppFooter />

      <IconButton
        sx={{
          position: "fixed",
          right: 40,
          bottom: 40,
          zIndex: 2000,
          width: 70,
          height: 70,
          boxShadow: "0 0 15px rgba(255, 186, 0, 0.8)",
          "&:hover": {
            backgroundColor: "white",
            transform: "scale(1.1)",
          },
        }}
        onClick={() => {
          window.location.href = "tel:0355983021";
        }}
      >
        <Image src="/images/phone.png" layout="fill" alt="phone" />
      </IconButton>
      <IconButton
        sx={{
          position: "fixed",
          right: 40,
          bottom: 130,
          zIndex: 2000,
          width: 70,
          height: 70,
          backgroundColor: "#ffba00",
          boxShadow: "0 0 15px rgba(255, 186, 0, 0.8)",
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
          layout="fill"
          objectFit="cover"
          alt="zalo"
        />
      </IconButton>
    </Stack>
  );
}
