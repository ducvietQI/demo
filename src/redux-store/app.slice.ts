import { CompanyProfile, IService } from "@/models/home.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  serviceData: IService[];
  footerData: CompanyProfile;
}

const initialState: IAppState = {
  serviceData: [],
  footerData: {} as CompanyProfile,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeServiceData: (
      state: IAppState,
      action: PayloadAction<IService[]>
    ) => {
      state.serviceData = action.payload;
    },

    changeFooterData: (
      state: IAppState,
      action: PayloadAction<CompanyProfile>
    ) => {
      state.footerData = action.payload;
    },

    reset: (state) => {
      state.serviceData = [];
      state.footerData = {} as CompanyProfile;
    },
  },
});
const appReducer = appSlice.reducer;
export default appReducer;
