import apiRequester from "@/api/apiRequester";
import FAQDetailPage from "@/components/sn-faq/FAQDetailPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { IIFAQ } from "@/models/project.type";
import { Metadata } from "next";
import stringFormat from "string-format";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function fetchData(slug: string) {
  try {
    const response = await apiRequester.get<IIFAQ>(
      stringFormat(ApiConst.FAQ_DETAIL, { slug })
    );
    return response.status === GlobalsConst.STT_OK ? response?.payload : null;
  } catch (error) {
    console.error(`Error fetching FAQ detail for slug: ${slug}`, error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchData(slug);
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
      url: `https://${host}/faq/${slug}`,
      images: [
        {
          url: `https://${host}/images/logo.png`,
          width: 300,
          height: 300,
          alt: "Logo-favicon",
        },
      ],
    },
  };
}

const FAQDetail = async ({ params }: PageProps) => {
  const { slug } = await params;
  const data = await fetchData(slug);
  if (!data) {
    notFound();
  }

  return <FAQDetailPage data={data} />;
};

export default FAQDetail;
