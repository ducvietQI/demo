"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { GlobalsConst } from "@/constant";
import { headers } from "next/headers";
import type { Metadata } from "next";

export const getSessionAction = async () => {
  try {
    return await getSession();
  } catch {
    // redirect(PathConstant.LOGOUT);
  }
};

export async function getSession() {
  const cookieStore = await cookies(); // Sử dụng await để lấy giá trị thực tế
  const session = {
    accessToken:
      cookieStore.get(GlobalsConst.COOKIE_STORAGE.AccessToken)?.value || "",
    // refreshToken:
    //   cookieStore.get(GlobalsConst.COOKIE_STORAGE.RefreshToken)?.value || "",
    // expiredTime: new Date(
    //   cookieStore.get(GlobalsConst.COOKIE_STORAGE.ExpiredTime)?.value ||
    //     new Date()
    // ),
  };
  return session;
}

export async function generateBasicMetadata(): Promise<Metadata> {
  const host = await getHost();
  const title = {
    template: `%s Quanghoanhome`,
    default: `Quanghoanhome`,
  };

  const description =
    "Quanghoanhome thiết kế nhà đẹp Đà Nẵng - Quảng Nam. Chuyên thiết kế xây dựng nhà đẹp, thiết kế kiến trúc, thiết kế nội thất, thi công trọn gói nhà phố.";

  return {
    title,
    description,
    keywords: [
      "Nhà",
      "thi công",
      "thiết kế nhà",
      "xây dựng",
      "nhà đẹp",
      "thiết kế kiến trúc",
      "nhà phố",
    ],
    metadataBase: new URL(host),
    openGraph: {
      url: host,
      title,
      description,
      images: [
        {
          url: `${host}/images/logo.svg`,
          width: 300,
          height: 300,
          alt: "Logo-favicon",
        },
      ],
      // siteName: AppConfig.name,
      // emails: AppConfig.email,
    },

    icons: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      // {
      //     rel: 'icon',
      //     type: 'image/png',
      //     sizes: '16x16',
      //     url: '/favicon-16x16.png',
      // },
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  };
}

async function getHostFromHeader(): Promise<string> {
  const headersList = await headers();
  const host = headersList.get("Host") || headersList.get("x-forwarded-host");
  return host || "";
}
export default async function getHost(): Promise<string> {
  const isClient = typeof window !== "undefined";
  let host = "";
  if (isClient) {
    host = window.location.origin;
  } else {
    host = await getHostFromHeader();
  }
  if (!host.startsWith("http")) {
    host = `https://${host}`;
  }
  return host;
}
