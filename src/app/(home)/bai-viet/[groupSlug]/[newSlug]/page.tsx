import apiRequester from "@/api/apiRequester";
import { ApiConst, GlobalsConst } from "@/constant";
import { Metadata } from "next";
import stringFormat from "string-format";
import { headers } from "next/headers";
import { INews } from "@/models/project.type";
import NewDetailPage from "@/components/sn-news/NewsDetailPage";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ newSlug: string }>;
};

async function fetchData(newSlug: string) {
  try {
    const response = await apiRequester.get<INews>(
      stringFormat(ApiConst.NEWS_DETAIL, { slug: newSlug })
    );

    return response.status === GlobalsConst.STT_OK ? response?.payload : null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { newSlug } = await params;
  const data = await fetchData(newSlug);
  const headersList = await headers();

  const host = headersList.get("host") || "default-domain.com";

  // Fallback metadata nếu không có dữ liệu từ API
  const fallbackTitle = "Quanghoanhome - Thiết kế nhà đẹp";
  const fallbackDescription =
    "Quanghoanhome chuyên thiết kế nhà đẹp, kiến trúc và nội thất tại Hà Nội.";

  return {
    title: data?.seoMetaData?.title || fallbackTitle,
    description: data?.seoMetaData?.description || fallbackDescription,
    keywords:
      data?.seoMetaData?.keywords || "thiết kế nhà, nội thất, kiến trúc",
    openGraph: {
      title: data?.seoMetaData?.title || fallbackTitle,
      description: data?.seoMetaData?.description || fallbackDescription,
      url: `https://${host}/faq/${newSlug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}${data?.avatar.url}`,
          width: 1200,
          height: 630,
          alt: data?.seoMetaData?.title,
        },
      ],
    },
  };
}

const NewsDetail = async ({ params }: PageProps) => {
  const { newSlug } = await params;
  const data = await fetchData(newSlug);
  if (!data) {
    notFound();
  }

  return <NewDetailPage data={data} />;
};

export default NewsDetail;
