import { IProduct } from "@/models/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitState {
  productList: IProduct[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}

const initialState: IInitState = {
  productList: [],
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

  changeproductList: (state: IInitState, action: PayloadAction<IProduct[]>) => {
    state.productList = [...state.productList, ...action.payload];
  },

  setHasMore: (state: IInitState, action: PayloadAction<boolean>) => {
    state.hasMore = action.payload;
  },

  reset: (state: IInitState) => {
    state.productList = [];
    state.currentPage = 0;
    state.totalPages = 0;
    state.hasMore = true;
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers,
});
const productReducer = productSlice.reducer;
export default productReducer;
