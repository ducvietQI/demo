import apiRequester from "@/api/apiRequester";
import ServiceDetailPage from "@/components/sn-service/ServiceDetailPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { IService } from "@/models/home.type";
import { headers } from "next/headers";
import { Metadata } from "next";
import stringFormat from "string-format";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function fetchData(slug: string) {
  try {
    const response = await apiRequester.get<IService>(
      stringFormat(ApiConst.SERVICE_DETAIL, { slug })
    );

    return response.status === GlobalsConst.STT_OK ? response?.payload : null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchData(slug);
  const headersList = await headers();

  // Fallback metadata nếu không có dữ liệu từ API
  const fallbackTitle = "Quanghoanhome - Thiết kế nhà đẹp";
  const fallbackDescription =
    "Quanghoanhome chuyên thiết kế nhà đẹp, kiến trúc và nội thất tại Hà Nội.";

  return {
    title: data?.seoMetaData?.title || fallbackTitle,
    description: data?.seoMetaData?.description || fallbackDescription,
    keywords:
      data?.seoMetaData?.keywords || "thiết kế nhà, nội thất, kiến trúc",
  };
}

const DetailService = async ({ params }: PageProps) => {
  const { slug } = await params;
  const data = await fetchData(slug);
  if (!data) {
    notFound();
  }

  return <ServiceDetailPage data={data} />;
};

export default DetailService;
