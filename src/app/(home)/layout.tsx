"use client";
import AppHeader from "@/components/AppHeader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full">
      <AppHeader />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
