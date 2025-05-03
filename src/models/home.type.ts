export interface IBannerImage {
  url: string;
  caption: string;
}

export interface IBanner {
  code: string;
  title: string;
  description: string;
  image: IBannerImage;
  order: number;
  type: number;
  state: number;
  createdBy: string;
  creationTime: string;
  modifiedBy: string | null;
  modificationTime: string | null;
  id: string;
}

export enum BANNER_TYPE {
  HOME,
  SERVICES,
  PROJECT,
  PRODUCT,
}

export interface MenuItem {
  id: string;
  title: string;
  link: string;
  description: string;
  order: number;
  parentId: string | null;
  children?: MenuItem[];
}

export interface Address {
  city: string;
  detail: string | null;
  longitude: number | null;
  latitude: number | null;
}

export interface SocialLinks {
  facebook: string | null;
  instagram: string | null;
  zalo: string | null;
  tiktok: string | null;
}

export interface SeoMetaData {
  title: string;
  description: string;
  keywords: string;
}

export interface CompanyProfile {
  title: string;
  description: string;
  introduction: string;
  email: string;
  hotline: string[];
  addresses: Address[];
  social: SocialLinks;
  seoMetaData: SeoMetaData;
  createdBy: string;
  creationTime: string;
  modifiedBy: string | null;
  modificationTime: string | null;
  id: string;
}
