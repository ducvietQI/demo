import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import ServicePage from "@/components/sn-service/ServicePage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE, IBanner } from "@/models/home.type";
import { IPaginationList } from "@/models/project.type";
import { Stack } from "@mui/material";

async function fetchData(): Promise<{
  bannersList: IBanner[];
  serviceResponse: IPaginationList<any>;
}> {
  try {
    const bannersResponse = await apiRequester.get<IBanner[]>(
      ApiConst.BANNER_LIST,
      {
        type: BANNER_TYPE.NEWS,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    const bannersList = Array.isArray(bannersResponse?.payload)
      ? bannersResponse.payload
      : [];

    const serviceResponse = await apiRequester.get<IPaginationList<any>>(
      ApiConst.NEWS_LIST,
      {
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    return { bannersList, serviceResponse: serviceResponse?.payload };
  } catch (error) {
    return {
      bannersList: [],
      serviceResponse: {} as IPaginationList<any>,
    };
  }
}

const Service = async () => {
  const { bannersList, serviceResponse } = await fetchData();

  return (
    <Stack>
      <BannerSection banners={bannersList} />
      <ServicePage />
    </Stack>
  );
};

export default Service;
