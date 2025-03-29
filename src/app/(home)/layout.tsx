"use client";
import { AppFooter } from "@/components";
import AppHeader from "@/components/AppHeader";
import { Stack } from "@mui/material";

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
    </Stack>
  );
}
