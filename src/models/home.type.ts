import { ReactNode } from "react";
import { Rating } from "./product.type";
import { IAvatar } from "./project.type";

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
  NEWS,
  FAQ,
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
  youtube: string | null;
}

export interface SeoMetaData {
  title: string;
  description: string;
  keywords: string;
}

export enum SnackbarTypeEnum {
  ErrorServer,
  Warning,
  Success,
}

export type ContentServerProps = {
  id?: string;
  title?: string;
  children: ReactNode;
  type: SnackbarTypeEnum;
};

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

export interface Image {
  url: string;
  caption: string;
}

export interface Workflow {
  name: string;
  description: string;
  image: Image;
  order: number;
}

export interface IService {
  id: string;
  code: string;
  title: string;
  slug: string;
  description: string;
  view: number;
  businessFrequentlyQuestions: BusinessFrequentlyQuestion[];
  link: string;
  content: string;
  rating: Rating;
  seoMetaData: SeoMetaData;
  workflows: Workflow[];
  projectGroupId: string;
  projectGroup: ProjectGroup;
  businessState: number;
  createdBy: string;
  creationTime: string;
  modifiedBy: string | null;
  modificationTime: string;
}

export interface ProjectGroup {
  id: string;
  code: string;
  title: string;
  slug: string;
  description: string;
  projects: Project[];
}

export interface Project {
  id: string;
  code: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  avatar: IAvatar;
}
export interface BusinessFrequentlyQuestion {
  id: string;
  code: string | null;
  title: string;
  slug: string;
  description: string;
}
