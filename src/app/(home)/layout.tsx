import apiRequester from "@/api/apiRequester";
import AppHeader from "@/components/AppHeader";
import ClientSideLayout from "@/components/ClientSideLayout";
import { ApiConst } from "@/constant";
import { CommonUtils } from "@/utils";

async function fetchMenuAndFooter() {
  try {
    const [menuResponse, footerResponse] = await Promise.all([
      apiRequester.get(ApiConst.MENU_LIST),
      apiRequester.get(ApiConst.FOOTER_LIST),
    ]);

    const menuList = Array.isArray(menuResponse?.payload)
      ? CommonUtils.buildMenuTree(menuResponse.payload)
      : [];

    const footerList = Array.isArray(footerResponse?.payload)
      ? CommonUtils.buildMenuTree(footerResponse.payload)
      : [];

    return { menuList, footerList };
  } catch (error) {
    console.error("Error fetching menu or footer data:", error);
    return { menuList: [], footerList: [] };
  }
}

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { menuList, footerList } = await fetchMenuAndFooter();

  return (
    <>
      <AppHeader menuItems={menuList} />
      <ClientSideLayout>{children}</ClientSideLayout>
    </>
  );
}
