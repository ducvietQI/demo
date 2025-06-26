import { IProduct } from "./product.type";

interface ImageItem {
  url: string;
  caption: string;
}

export interface IAvatar {
  url: string;
  caption: string;
}

interface Rating {
  totalVote: number;
  averageVote: number;
}

interface SeoMetaData {
  title: string;
  description: string;
  keywords: string;
}

export interface IBusinessProjects {
  acreage: string;
  buildingArea: string;
  client: string;
  costs: string;
  location: string;
  numberFloor: string;
  scope: string;
}

export interface IProject {
  id: string;
  code: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  avatar: IAvatar;
  images: ImageItem[];
  view: number;
  rating: Rating;
  projectGroupId: string;
  projectGroup: {
    id: string;
    slug: string;
    title: string;
  };
  seoMetaData: SeoMetaData;
  businessProjects: any[];
  state: number;
  createdBy: string;
  creationTime: string;
  modifiedBy: string | null;
  modificationTime: string;
  projectInformation: IBusinessProjects;
}

export interface IPaginationList<T> {
  items: T[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

export interface IIFAQ {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  order: number;
  rating: Rating;
  seoMetaData: SeoMetaData;
  state: number;
  businessFrequentlyQuestions: any[];
  createdBy: string;
  creationTime: string;
  modifiedBy: string | null;
  modificationTime: string;
}

export interface INews {
  id: string;
  code: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  avatar: IAvatar;
  view: number;
  blogGroupId: string;
  blogGroup: {
    avatar: IAvatar;
    code: string;
    description: string;
    id: string;
    seoMetaData: SeoMetaData;
    slug: string;
    title: string;
  };
  rating: Rating;
  seoMetaData: SeoMetaData;
  state: number;
  createdBy: string;
  creationTime: string;
  modifiedBy: string | null;
  modificationTime: string;
}

export interface ICategories {
  id: string;
  title: string;
  slug: string;
  products: IProduct[];
}
