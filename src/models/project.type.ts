interface ImageItem {
  url: string;
  caption: string;
}

interface Avatar {
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

export interface IProject {
  id: string;
  code: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  avatar: Avatar;
  images: ImageItem[];
  view: number;
  rating: Rating;
  projectGroupId: string;
  projectGroup: any | null;
  seoMetaData: SeoMetaData;
  businessProjects: any[];
  state: number;
  createdBy: string;
  creationTime: string;
  modifiedBy: string | null;
  modificationTime: string;
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
