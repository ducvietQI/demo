import { BaiJamjuree } from "@/fonts";
import AppProvider from "@/provider/AppProvider";
import type { Metadata } from "next";
import "@/styles/index.scss";
import { generateBasicMetadata } from "@/utils/server.utils";

export async function generateMetadata(): Promise<Metadata> {
  return generateBasicMetadata();
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
