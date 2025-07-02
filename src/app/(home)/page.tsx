import apiRequester from "@/api/apiRequester";
import {
  BannerSection,
  ConstructionWorkSection,
  DesignProjectSection,
  NewsSection,
  ProductSection,
  TabSection,
} from "@/components";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE, IBanner, IService } from "@/models/home.type";
import { IProduct } from "@/models/product.type";
import { IPaginationList, INews, ICategories } from "@/models/project.type";
import { Stack } from "@mui/material";

async function fetchData(): Promise<{
  bannersList: IBanner[];
  newsResponse: INews[];
  serviceData: IService[];
  productList1: IProduct[];
  productList2: IProduct[];
  productList3: IProduct[];
  categogiesTopList: ICategories[];
}> {
  try {
    const categogiesResponse = await apiRequester.get<ICategories[]>(
      ApiConst.CATEGORIES_TOP_LIST
    );

    const categorySlug = categogiesResponse.payload.map((cat) => cat.slug);

    const [productRes1, productRes2, productRes3] = await Promise.all([
      apiRequester.get<IPaginationList<IProduct>>(ApiConst.PRODUCT_LIST, {
        categorySlug: categorySlug[0],
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }),
      apiRequester.get<IPaginationList<IProduct>>(ApiConst.PRODUCT_LIST, {
        categorySlug: categorySlug[1],
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }),
      apiRequester.get<IPaginationList<IProduct>>(ApiConst.PRODUCT_LIST, {
        categorySlug: categorySlug[2],
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }),
    ]);

    const bannersResponse = await apiRequester.get<IBanner[]>(
      ApiConst.BANNER_LIST,
      {
        type: BANNER_TYPE.HOME,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    const bannersList = Array.isArray(bannersResponse?.payload)
      ? bannersResponse.payload
      : [];

    const newsResponse = await apiRequester.get<INews[]>(
      ApiConst.NEWS_LIST_NEWSEST
    );

    const serviceResponse = await apiRequester.get(
      ApiConst.BUSINESSES_OVERVIEW_LIST,
      { size: GlobalsConst.DEFAULT_SIZE }
    );
    const serviceData = serviceResponse.payload as IService[];

    return {
      bannersList,
      newsResponse: newsResponse?.payload,
      serviceData,
      productList1: productRes1.payload.items,
      productList2: productRes2.payload.items,
      productList3: productRes3.payload.items,
      categogiesTopList: categogiesResponse.payload,
    };
  } catch (error) {
    return {
      bannersList: [],
      newsResponse: [],
      serviceData: [],
      productList1: [],
      productList2: [],
      productList3: [],
      categogiesTopList: [],
    };
  }
}

const Home = async () => {
  const {
    bannersList,
    newsResponse,
    serviceData,
    categogiesTopList,
    productList1,
    productList2,
    productList3,
  } = await fetchData();

  return (
    <Stack>
      <BannerSection banners={bannersList} />
      {serviceData.length && <TabSection serviceData={serviceData} />}
      {serviceData[0] && <DesignProjectSection serviceData={serviceData[0]} />}
      {serviceData[1] && (
        <ConstructionWorkSection serviceData={serviceData[1]} />
      )}
      {/* {Boolean(productList1.length) && (
        <ProductSection
          array={productList1}
          title={categogiesTopList[0]?.title || "Sản phẩm"}
        />
      )} */}
      {Boolean(productList2.length) && (
        <ProductSection
          array={productList2}
          title={categogiesTopList[1]?.title || "Sản phẩm"}
        />
      )}
      {Boolean(productList3.length) && (
        <ProductSection
          array={productList3}
          title={categogiesTopList[2]?.title || "Sản phẩm"}
        />
      )}

      <NewsSection data={newsResponse} />
    </Stack>
  );
};

export default Home;
