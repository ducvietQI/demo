import apiRequester from "@/api/apiRequester";
import { AppFooter } from "@/components";
import AppHeader from "@/components/AppHeader";
import { ApiConst } from "@/constant";
import { BANNER_TYPE, MenuItem } from "@/models/home.type";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await apiRequester.get(ApiConst.MENU_LIST);
  console.log(res);

  const menuList = Array.isArray(res?.payload)
    ? buildMenuTree(res.payload)
    : [];

  return (
    <>
      <AppHeader menuItems={menuList} />
      <div className="relative z-10">{children}</div>
      {/* <Stack position="relative" pt={{ xs: "55px", md: "90px" }}>
        <AppFooter />

        <IconButton
          sx={{
            position: "fixed",
            right: { xs: 10, md: 40 },
            bottom: { xs: 10, md: 40 },
            zIndex: 2000,
            width: 70,
            height: 70,
            boxShadow: "0 0 15px rgba(255, 186, 0, 0.8)",
            "&:hover": {
              backgroundColor: "white",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            window.location.href = "tel:0355983021";
          }}
        >
          <Image src="/images/phone.png" layout="fill" alt="phone" />
        </IconButton>
        <IconButton
          sx={{
            position: "fixed",
            right: { xs: 10, md: 40 },
            bottom: { xs: 95, md: 130 },
            zIndex: 2000,
            width: 70,
            height: 70,
            backgroundColor: "#ffba00",
            boxShadow: "0 0 15px rgba(255, 186, 0, 0.8)",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "#fff3cd",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            window.open("https://zalo.me/0355983021", "_blank");
          }}
        >
          <Image
            src="/images/zalo.png"
            layout="fill"
            objectFit="cover"
            alt="zalo"
          />
        </IconButton>
      </Stack> */}
    </>
  );
}

const buildMenuTree = (menuItems: MenuItem[]): MenuItem[] => {
  const map = new Map<string, MenuItem>();
  const roots: MenuItem[] = [];

  // Bước 1: Đưa toàn bộ menuItems vào Map để dễ truy cập
  menuItems.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  // Bước 2: Duyệt từng phần tử và sắp xếp vào cha tương ứng
  map.forEach((item) => {
    if (item.parentId) {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children!.push(item);
      }
    } else {
      roots.push(item);
    }
  });

  return roots;
};
