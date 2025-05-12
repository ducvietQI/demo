import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import NewsPage from "@/components/sn-news/NewsPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE, IBanner } from "@/models/home.type";
import { INews, IPaginationList } from "@/models/project.type";
import { Stack } from "@mui/material";
import stringFormat from "string-format";

type PageProps = {
  params: Promise<{ groupSlug: string }>;
};

async function fetchData(groupSlug: string): Promise<{
  bannersList: IBanner[];
  newsResponse: IPaginationList<INews>;
  responseNewsGroupDetail: INews;
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
        blogGroupSlug: groupSlug,
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    const responseNewsGroupDetail = await apiRequester.get<INews>(
      stringFormat(ApiConst.NEWS_GROUP_DETAIL, { groupSlug })
    );

    return {
      bannersList,
      newsResponse: newsResponse?.payload,
      responseNewsGroupDetail: responseNewsGroupDetail?.payload,
    };
  } catch (error) {
    return {
      bannersList: [],
      newsResponse: {} as IPaginationList<INews>,
      responseNewsGroupDetail: {} as INews,
    };
  }
}

const News = async ({ params }: PageProps) => {
  const { groupSlug } = await params;
  const { bannersList, newsResponse, responseNewsGroupDetail } =
    await fetchData(groupSlug);

  return (
    <Stack>
      <BannerSection banners={bannersList} />
      <NewsPage
        data={newsResponse}
        newsGroupSlug={groupSlug}
        responseNewsGroupDetail={responseNewsGroupDetail}
      />
    </Stack>
  );
};

export default News;
