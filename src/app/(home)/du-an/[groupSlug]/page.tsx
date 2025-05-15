import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import ProjectPage from "@/components/sn-project/ProjectPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE, IBanner } from "@/models/home.type";
import { IPaginationList, IProject } from "@/models/project.type";
import { Stack } from "@mui/material";
import { notFound } from "next/navigation";
import stringFormat from "string-format";

type PageProps = {
  params: Promise<{ groupSlug: string }>;
};

async function fetchData(groupSlug: string): Promise<{
  bannersList: IBanner[];
  projectResponse: IPaginationList<IProject>;
  responseProjectGroupDetail: IProject | null;
}> {
  try {
    const bannersResponse = await apiRequester.get<IBanner[]>(
      ApiConst.BANNER_LIST,
      {
        type: BANNER_TYPE.PRODUCT,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    const bannersList = Array.isArray(bannersResponse?.payload)
      ? bannersResponse.payload
      : [];

    const projectResponse = await apiRequester.get<IPaginationList<IProject>>(
      ApiConst.PROJECT_LIST,
      {
        projectGroupSlug: groupSlug,
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    const responseProjectGroupDetail = await apiRequester.get<IProject>(
      stringFormat(ApiConst.PROJECT_GROUP_DETAIL, { slug: groupSlug })
    );

    return {
      bannersList,
      projectResponse: projectResponse?.payload,
      responseProjectGroupDetail:
        responseProjectGroupDetail.status === GlobalsConst.STT_OK
          ? responseProjectGroupDetail?.payload
          : null,
    };
  } catch (error) {
    return {
      bannersList: [],
      projectResponse: {} as IPaginationList<IProject>,
      responseProjectGroupDetail: {} as IProject,
    };
  }
}

const ProjectDetail = async ({ params }: PageProps) => {
  const { groupSlug } = await params;
  const { bannersList, projectResponse, responseProjectGroupDetail } =
    await fetchData(groupSlug);

  if (!responseProjectGroupDetail) {
    notFound();
  }

  return (
    <Stack>
      <BannerSection banners={bannersList} />
      <ProjectPage
        data={projectResponse}
        projectGroupSlug={groupSlug}
        responseProjectGroupDetail={responseProjectGroupDetail}
      />
    </Stack>
  );
};

export default ProjectDetail;
