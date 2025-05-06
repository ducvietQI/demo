import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import NewsPage from "@/components/sn-news/NewsPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE } from "@/models/home.type";
import { Stack } from "@mui/material";

const News = async () => {
  const res = await apiRequester.get(ApiConst.BANNER_LIST, {
    type: BANNER_TYPE.NEWS,
    size: GlobalsConst.DEFAULT_SIZE,
  });

  const banners = Array.isArray(res?.payload) ? res.payload : [];
  return (
    <Stack>
      <BannerSection banners={banners} />
      <NewsPage />
    </Stack>
  );
};

export default News;
