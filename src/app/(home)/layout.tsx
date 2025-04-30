import apiRequester from "@/api/apiRequester";
import AppHeader from "@/components/AppHeader";
import ClientSideLayout from "@/components/ClientSideLayout";
import { ApiConst } from "@/constant";
import { CommonUtils } from "@/utils";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await apiRequester.get(ApiConst.MENU_LIST, undefined, {
    cache: "no-cache",
  });

  const menuList = Array.isArray(res?.payload)
    ? CommonUtils.buildMenuTree(res.payload)
    : [];

  return (
    <>
      <AppHeader menuItems={menuList} />
      <ClientSideLayout>{children}</ClientSideLayout>
    </>
  );
}
