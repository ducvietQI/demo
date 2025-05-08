import { ServiceModel } from "@/models/home.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  serviceData: ServiceModel[];
}

const initialState: IAppState = {
  serviceData: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeServiceData: (
      state: IAppState,
      action: PayloadAction<ServiceModel[]>
    ) => {
      state.serviceData = action.payload;
    },

    reset: (state) => {
      state.serviceData = [];
    },
  },
});
const appReducer = appSlice.reducer;
export default appReducer;
