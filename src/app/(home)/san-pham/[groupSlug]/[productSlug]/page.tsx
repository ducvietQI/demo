import apiRequester from "@/api/apiRequester";
import { ApiConst, GlobalsConst } from "@/constant";
import { IProduct } from "@/models/product.type";
import stringFormat from "string-format";
import { headers } from "next/headers";
import { Metadata } from "next";
import ProductDetailPage from "@/components/sn-product/ProductDetailPage";
import { IPaginationList } from "@/models/project.type";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ productSlug: string }>;
};

async function fetchData(productSlug: string): Promise<{
  detailProduct: IProduct | null;
  relateProductList: IPaginationList<IProduct>;
}> {
  try {
    const response = await apiRequester.get<IProduct>(
      stringFormat(ApiConst.PRODUCT_DETAIL, { slug: productSlug })
    );
    const categorySlug = response?.payload.slug;

    const relateProductList = await apiRequester.get<IPaginationList<IProduct>>(
      ApiConst.PRODUCT_LIST,
      {
        categorySlug,
        page: GlobalsConst.DEFAULT_PAGE,
        size: GlobalsConst.DEFAULT_SIZE,
      }
    );
    console.log(response);

    return {
      detailProduct:
        response.status === GlobalsConst.STT_OK ? response?.payload : null,
      relateProductList: relateProductList?.payload,
    };
  } catch (error) {
    return {
      detailProduct: {} as IProduct,
      relateProductList: {} as IPaginationList<IProduct>,
    };
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const { detailProduct } = await fetchData(productSlug);
  const headersList = await headers();

  const host = headersList.get("host") || "default-domain.com";

  // Fallback metadata nếu không có dữ liệu từ API
  const fallbackTitle = "Quanghoanhome - Thiết kế nhà đẹp";
  const fallbackDescription =
    "Quanghoanhome chuyên thiết kế nhà đẹp, kiến trúc và nội thất tại Hà Nội.";

  return {
    title: detailProduct?.seoMetaData?.title || fallbackTitle,
    description: detailProduct?.seoMetaData?.description || fallbackDescription,
    keywords:
      detailProduct?.seoMetaData?.keywords ||
      "thiết kế nhà, nội thất, kiến trúc",
    openGraph: {
      title: detailProduct?.seoMetaData?.title || fallbackTitle,
      description:
        detailProduct?.seoMetaData?.description || fallbackDescription,
      url: `https://${host}/faq/${productSlug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}${detailProduct?.avatar?.url}`,
          width: 1200,
          height: 630,
          alt: detailProduct?.seoMetaData?.title,
        },
      ],
    },
  };
}

const ProductDetail = async ({ params }: PageProps) => {
  const { productSlug } = await params;
  const { detailProduct, relateProductList } = await fetchData(productSlug);
  if (!detailProduct) {
    notFound();
  }

  return (
    <ProductDetailPage
      data={detailProduct}
      relateProductList={relateProductList}
    />
  );
};

export default ProductDetail;
