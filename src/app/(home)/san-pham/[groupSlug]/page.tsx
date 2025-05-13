import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import ProductPage from "@/components/sn-product/ProductPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE, IBanner, MenuItem } from "@/models/home.type";
import { IProduct } from "@/models/product.type";
import { ICategories, IPaginationList } from "@/models/project.type";
import { CommonUtils } from "@/utils";
import { Stack } from "@mui/material";

type PageProps = {
  params: Promise<{ groupSlug: string }>;
};

async function fetchData(groupSlug: string): Promise<{
  bannersList: IBanner[];
  productResponse: IPaginationList<IProduct>;
  categoriesList: MenuItem[];
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

    const productResponse = await apiRequester.get<IPaginationList<IProduct>>(
      ApiConst.PRODUCT_LIST,
      {
        categorySlug: groupSlug,
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );

    const categogiesResponse = await apiRequester.get<
      IPaginationList<ICategories>
    >(ApiConst.CATEGORIES_LIST);

    const categoriesList = Array.isArray(categogiesResponse?.payload)
      ? CommonUtils.buildMenuTree(categogiesResponse.payload)
      : [];

    return {
      bannersList,
      productResponse: productResponse?.payload,
      categoriesList,
    };
  } catch (error) {
    return {
      bannersList: [],
      productResponse: {} as IPaginationList<IProduct>,
      categoriesList: [],
    };
  }
}

const Product = async ({ params }: PageProps) => {
  const { groupSlug } = await params;
  const { bannersList, productResponse, categoriesList } = await fetchData(
    groupSlug
  );

  return (
    <Stack>
      <BannerSection banners={bannersList} />
      <ProductPage
        data={productResponse}
        categoriesList={categoriesList}
        groupSlug={groupSlug}
      />
    </Stack>
  );
};

export default Product;
