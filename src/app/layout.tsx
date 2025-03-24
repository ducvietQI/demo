import { BaiJamjuree } from "@/fonts";
import AppProvider from "@/provider/AppProvider";
import type { Metadata } from "next";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "Demo App",
  description: "created by DucViett",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={BaiJamjuree.variable}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
