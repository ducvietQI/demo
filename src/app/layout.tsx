import { BaiJamjuree } from "@/fonts";
import AppProvider from "@/provider/AppProvider";
import type { Metadata } from "next";
import "@/styles/index.scss";
import { CommonUtils } from "@/utils";

export async function generateMetadata(): Promise<Metadata> {
  return CommonUtils.generateBasicMetadata();
}

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
