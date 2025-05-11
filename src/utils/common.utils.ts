import { MenuItem } from "@/models/home.type";
import { ICategories } from "@/models/project.type";

export const createUrlWithParams = (
  baseUrl: string,
  params: { [key: string]: string | number | boolean }
): string => {
  const url = new URL(baseUrl);

  if (params) {
    Object.keys(params).forEach((key) => {
      if (
        params[key] !== undefined &&
        params[key] !== null &&
        params[key] !== ""
      ) {
        url.searchParams.append(key, params[key].toString());
      }
    });
  }
  return url.toString();
};

export const isClient = () => typeof window !== "undefined";

export const buildMenuTree = (menuItems: any[]): MenuItem[] => {
  const map = new Map<string, MenuItem>();
  const roots: any[] = [];

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
