import { Gotham } from "@/fonts";
import "@/styles/index.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo App",
  description: "created by DucViett",
  other: {
    stylesheet:
      "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.5/fullpage.min.css",
    script:
      "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.5/fullpage.min.js",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Gotham.variable}>{children}</body>
    </html>
  );
}
