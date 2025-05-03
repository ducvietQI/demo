import apiRequester from "@/api/apiRequester";
import AppHeader from "@/components/AppHeader";
import ClientSideLayout from "@/components/ClientSideLayout";
import { ApiConst } from "@/constant";
import { MenuItem, CompanyProfile } from "@/models/home.type";
import { CommonUtils } from "@/utils";

async function fetchMenuAndFooter(): Promise<{
  menuList: MenuItem[];
  footerData: CompanyProfile;
}> {
  try {
    const menuResponse = await apiRequester.get(ApiConst.MENU_LIST);
    const menuList = Array.isArray(menuResponse?.payload)
      ? CommonUtils.buildMenuTree(menuResponse.payload)
      : [];

    const footerResponse = await apiRequester.get(ApiConst.FOOTER_LIST);
    const footerData = footerResponse.payload as CompanyProfile;

    return { menuList, footerData };
  } catch (error) {
    console.error("Error fetching menu or footer data:", error);
    return { menuList: [], footerData: {} as CompanyProfile };
  }
}

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { menuList, footerData } = await fetchMenuAndFooter();

  return (
    <>
      <AppHeader menuItems={menuList || []} />
      <ClientSideLayout footerData={footerData || {}}>
        {children}
      </ClientSideLayout>
    </>
  );
}
