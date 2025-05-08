import { IProject } from "@/models/project.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitState {
  projectList: IProject[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}

const initialState: IInitState = {
  projectList: [],
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

  changeProjectList: (state: IInitState, action: PayloadAction<IProject[]>) => {
    state.projectList = [...state.projectList, ...action.payload];
  },

  setHasMore: (state: IInitState, action: PayloadAction<boolean>) => {
    state.hasMore = action.payload;
  },

  reset: (state: IInitState) => {
    state.projectList = [];
    state.currentPage = 0;
    state.totalPages = 0;
    state.hasMore = true;
  },
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers,
});
const projectReducer = projectSlice.reducer;
export default projectReducer;
