import { INews } from "@/models/project.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitState {
  newsList: INews[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}

const initialState: IInitState = {
  newsList: [],
  currentPage: 0,
  totalPages: 0,
  hasMore: true,
};

const reducers = {
  changePagination: (
    state: IInitState,
    action: PayloadAction<{ currentPage: number; totalPages: number }>
  ) => {
    state.currentPage = action.payload.currentPage;
    state.totalPages = action.payload.totalPages;
  },

  changenewsList: (state: IInitState, action: PayloadAction<INews[]>) => {
    state.newsList = [...state.newsList, ...action.payload];
  },

  setHasMore: (state: IInitState, action: PayloadAction<boolean>) => {
    state.hasMore = action.payload;
  },

  reset: (state: IInitState) => {
    state.newsList = [];
    state.currentPage = 0;
    state.totalPages = 0;
    state.hasMore = true;
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers,
});
const newsReducer = newsSlice.reducer;
export default newsReducer;
