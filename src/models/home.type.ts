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
