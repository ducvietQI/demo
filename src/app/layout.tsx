import { BaiJamjuree } from "@/fonts";
import AppProvider from "@/provider/AppProvider";
import "@/styles/index.scss";
import { generateBasicMetadata } from "@/utils/server.utils";
import type { Metadata } from "next";
import Script from "next/script";

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
      <head>
        <Script
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v22.0&appId=544401131482492"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </head>
      <body className={BaiJamjuree.variable}>
        <div id="fb-root"></div>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
