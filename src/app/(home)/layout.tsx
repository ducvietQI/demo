import apiRequester from "@/api/apiRequester";
import AppHeader from "@/components/AppHeader";
import ClientSideLayout from "@/components/ClientSideLayout";
import { ApiConst, GlobalsConst } from "@/constant";
import { CompanyProfile, IService, MenuItem } from "@/models/home.type";
import { CommonUtils } from "@/utils";

async function fetchMenuAndFooter(): Promise<{
  menuList: MenuItem[];
  footerData: CompanyProfile;
  serviceData: IService[];
}> {
  try {
    const menuResponse = await apiRequester.get(ApiConst.MENU_LIST);
    const menuList = Array.isArray(menuResponse?.payload)
      ? CommonUtils.buildMenuTree(menuResponse.payload)
      : [];

    const footerResponse = await apiRequester.get(ApiConst.FOOTER_LIST);
    const footerData = footerResponse.payload as CompanyProfile;

    const serviceResponse = await apiRequester.get(
      ApiConst.BUSINESSES_OVERVIEW_LIST,
      { size: GlobalsConst.DEFAULT_SIZE }
    );
    const serviceData = serviceResponse.payload as IService[];

    return { menuList, footerData, serviceData };
  } catch (error) {
    console.error("Error fetching menu or footer data:", error);
    return { menuList: [], footerData: {} as CompanyProfile, serviceData: [] };
  }
}

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { menuList, footerData, serviceData } = await fetchMenuAndFooter();

  return (
    <>
      <AppHeader menuItems={menuList} />
      <ClientSideLayout footerData={footerData} serviceData={serviceData}>
        {children}
      </ClientSideLayout>
    </>
  );
}
