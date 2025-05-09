import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import NewsPage from "@/components/sn-news/NewsPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE, IBanner } from "@/models/home.type";
import { INews, IPaginationList } from "@/models/project.type";
import { Stack } from "@mui/material";

async function fetchData(): Promise<{
  bannersList: IBanner[];
  newsResponse: IPaginationList<INews>;
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

    const newsResponse = await apiRequester.get<IPaginationList<INews>>(
      ApiConst.NEWS_LIST,
      {
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    return { bannersList, newsResponse: newsResponse?.payload };
  } catch (error) {
    return {
      bannersList: [],
      newsResponse: {} as IPaginationList<INews>,
    };
  }
}

const News = async () => {
  const { bannersList, newsResponse } = await fetchData();

  return (
    <Stack>
      <BannerSection banners={bannersList} />
      <NewsPage data={newsResponse} />
    </Stack>
  );
};

export default News;
