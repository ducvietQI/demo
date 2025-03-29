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
    <div className="relative w-full">
      <AppHeader />
      <Stack>
        <div className="relative z-10">{children}</div>
        <AppFooter />
      </Stack>
    </div>
  );
}
