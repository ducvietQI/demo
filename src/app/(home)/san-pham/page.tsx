import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import ProductPage from "@/components/sn-product/ProductPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE } from "@/models/home.type";
import { Stack } from "@mui/material";

const Product = async () => {
  const res = await apiRequester.get(ApiConst.BANNER_LIST, {
    type: BANNER_TYPE.PRODUCT,
    size: GlobalsConst.DEFAULT_SIZE,
  });

  const banners = Array.isArray(res?.payload) ? res.payload : [];

  return (
    <Stack>
      <BannerSection banners={banners} />
      <ProductPage />
    </Stack>
  );
};

export default Product;
