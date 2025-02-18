import type { Metadata } from "next";
import { Gotham } from "@/fonts";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "Demo App",
  description: "created by DucViett",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Gotham.variable}>{children}</body>
    </html>
  );
}
