"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ApiConst, GlobalsConst } from "@/constant";
import { headers } from "next/headers";
import type { Metadata } from "next";
import apiRequester from "@/api/apiRequester";
import { CompanyProfile } from "@/models/home.type";

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
  try {
    const footerResponse = await apiRequester.get(
      ApiConst.FOOTER_LIST,
      undefined,
      { cache: "force-cache", revalidate: 60 * 60 }
    );

    const footerData = footerResponse.payload as CompanyProfile;

    if (!footerData || !footerData.seoMetaData) {
      throw new Error("Invalid footer data or missing seoMetaData");
    }

    const { seoMetaData } = footerData;

    if (
      !seoMetaData.title ||
      !seoMetaData.description ||
      !seoMetaData.keywords
    ) {
      console.error("Missing required seoMetaData fields:", seoMetaData);
      throw new Error("Missing required seoMetaData fields");
    }

    const keywords = seoMetaData.keywords
      ? typeof seoMetaData.keywords === "string"
        ? seoMetaData.keywords.split(",")
        : []
      : [];

    // Sử dụng giá trị mặc định cho host
    const host = "https://default-host.com";

    return {
      title: {
        template: `%s | ${seoMetaData.title}`,
        default: seoMetaData.title,
      },
      description: seoMetaData.description,
      keywords,
      openGraph: {
        title: seoMetaData.title,
        description: seoMetaData.description,
        url: host,
        images: [
          {
            url: `${host}/images/logo.svg`,
            width: 300,
            height: 300,
            alt: "Logo-favicon",
          },
        ],
      },
      icons: [
        {
          rel: "icon",
          url: "/favicon.ico",
        },
      ],
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);

    // Trả về metadata mặc định nếu có lỗi
    const host = "https://default-host.com";
    return {
      title: {
        template: `%s | Quanghoanhome`,
        default: "Quanghoanhome",
      },
      description:
        "Quanghoanhome thiết kế nhà đẹp Hà Nội. Chuyên thiết kế xây dựng nhà đẹp, thiết kế kiến trúc, thiết kế nội thất, thi công trọn gói nhà phố.",
      keywords: [
        "Nhà",
        "thi công",
        "thiết kế nhà",
        "xây dựng",
        "nhà đẹp",
        "thiết kế kiến trúc",
        "nhà phố",
      ],
      openGraph: {
        title: "Quanghoanhome",
        description:
          "Quanghoanhome thiết kế nhà đẹp Hà Nội. Chuyên thiết kế xây dựng nhà đẹp, thiết kế kiến trúc, thiết kế nội thất, thi công trọn gói nhà phố.",
        url: host,
        images: [
          {
            url: `${host}/images/logo.svg`,
            width: 300,
            height: 300,
            alt: "Logo-favicon",
          },
        ],
      },
      icons: [
        {
          rel: "icon",
          url: "/favicon.ico",
        },
      ],
    };
  }
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
    try {
      host = await getHostFromHeader();
    } catch (error) {
      console.error("Error fetching host from headers:", error);
      host = "https://default-host.com"; // Giá trị mặc định
    }
  }

  if (!host.startsWith("http")) {
    host = `https://${host}`;
  }
  return host;
}
