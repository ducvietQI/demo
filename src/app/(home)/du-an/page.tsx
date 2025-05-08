import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import ProjectPage from "@/components/sn-project/ProjectPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE, IBanner } from "@/models/home.type";
import { IPaginationList, IProject } from "@/models/project.type";
import { Stack } from "@mui/material";

async function fetchData(): Promise<{
  bannersList: IBanner[];
  projectResponse: IPaginationList<IProject>;
}> {
  try {
    const bannersResponse = await apiRequester.get<IBanner[]>(
      ApiConst.BANNER_LIST,
      {
        type: BANNER_TYPE.SERVICES,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    const bannersList = Array.isArray(bannersResponse?.payload)
      ? bannersResponse.payload
      : [];

    const projectResponse = await apiRequester.get<IPaginationList<IProject>>(
      ApiConst.PROJECT_LIST,
      {
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    return { bannersList, projectResponse: projectResponse?.payload };
  } catch (error) {
    return {
      bannersList: [],
      projectResponse: {} as IPaginationList<IProject>,
    };
  }
}

const Project = async () => {
  const { bannersList, projectResponse } = await fetchData();

  return (
    <Stack>
      <BannerSection banners={bannersList} />
      <ProjectPage data={projectResponse} />
    </Stack>
  );
};

export default Project;
