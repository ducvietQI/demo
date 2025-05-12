import apiRequester from "@/api/apiRequester";
import { ApiConst } from "@/constant";
import { IProject } from "@/models/project.type";
import { Metadata } from "next";
import stringFormat from "string-format";
import { headers } from "next/headers";
import ProjectDetailPage from "@/components/sn-project/ProjectDetailPage";

type PageProps = {
  params: Promise<{ projectSlug: string }>;
};

async function fetchData(projectSlug: string) {
  try {
    const response = await apiRequester.get<IProject>(
      stringFormat(ApiConst.PROJECT_DETAIL, { slug: projectSlug })
    );
    return response?.payload || null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { projectSlug } = await params;
  const data = await fetchData(projectSlug);
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
      url: `https://${host}/faq/${projectSlug}`,
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

const ProjectDetail = async ({ params }: PageProps) => {
  const { projectSlug } = await params;
  const data = await fetchData(projectSlug);

  if (!data) return null;
  return <ProjectDetailPage data={data} />;
};

export default ProjectDetail;
