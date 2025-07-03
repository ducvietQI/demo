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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quanghoanhome",
    url: "https://quanghoanhome.com",
    logo: "https://quanghoanhome.com/images/logo.png",
  };

  return (
    <html>
      <head>
        <Script
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v22.0&appId=544401131482492"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={BaiJamjuree.variable}>
        <div id="fb-root"></div>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
