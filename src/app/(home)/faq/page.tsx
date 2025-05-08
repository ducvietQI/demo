import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import FaqPage from "@/components/sn-faq/FaqPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE, IBanner } from "@/models/home.type";
import { IIFAQ, IPaginationList } from "@/models/project.type";
import { Stack } from "@mui/material";

async function fetchData(): Promise<{
  bannersList: IBanner[];
  FAQResponse: IPaginationList<IIFAQ>;
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

    const faqResponse = await apiRequester.get<IPaginationList<IIFAQ>>(
      ApiConst.FAQ_LIST,
      {
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    return { bannersList, FAQResponse: faqResponse?.payload };
  } catch (error) {
    return {
      bannersList: [],
      FAQResponse: {} as IPaginationList<IIFAQ>,
    };
  }
}

const Faq = async () => {
  const { bannersList, FAQResponse } = await fetchData();

  return (
    <Stack>
      <BannerSection banners={bannersList} />
      <FaqPage data={FAQResponse} />
    </Stack>
  );
};

export default Faq;
