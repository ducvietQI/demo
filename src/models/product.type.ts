export interface MediaItem {
  url: string;
  caption: string;
}

export interface Rating {
  totalVote: number;
  averageVote: number;
}

export interface SeoMetaData {
  title: string;
  description: string;
  keywords: string;
}

export interface IProduct {
  id: string;
  code: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  avatar: MediaItem;
  images: MediaItem[];
  price: number;
  salePrice: number;
  isNew: boolean;
  rating: Rating;
  totalBuy: number;
  categoryId: string;
  category: any | null;
  seoMetaData: SeoMetaData;
  state: number;
  createdBy: string;
  creationTime: string;
  modifiedBy: string | null;
  modificationTime: string | null;
}
