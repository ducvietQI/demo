import { IIFAQ } from "@/models/project.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFAQState {
  faqList: IIFAQ[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}

const initialState: IFAQState = {
  faqList: [],
  currentPage: 0,
  totalPages: 0,
  hasMore: true,
};

const reducers = {
  changePagination: (
    state: IFAQState,
    action: PayloadAction<{ currentPage: number; totalPages: number }>
  ) => {
    state.currentPage = action.payload.currentPage;
    state.totalPages = action.payload.totalPages;
  },

  changeFAQList: (state: IFAQState, action: PayloadAction<IIFAQ[]>) => {
    state.faqList = [...state.faqList, ...action.payload];
  },

  setHasMore: (state: IFAQState, action: PayloadAction<boolean>) => {
    state.hasMore = action.payload;
  },

  reset: (state: IFAQState) => {
    state.faqList = [];
    state.currentPage = 0;
    state.totalPages = 0;
    state.hasMore = true;
  },
};

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers,
});

export const faqActions = faqSlice.actions;
const faqReducer = faqSlice.reducer;
export default faqReducer;
