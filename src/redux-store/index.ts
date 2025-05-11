import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import homeReducer from "./home.slice";
import { EnvConstant } from "@/constant";
import appReducer, { appSlice } from "./app.slice";
import projectReducer, { projectSlice } from "./project.slice";
import faqReducer, { faqSlice } from "./faq.slice";
import newsReducer, { newsSlice } from "./news.slice";
import productReducer, { productSlice } from "./product.slice";

/* ------------- Assemble The Actions ------------- */
export const appActions = appSlice.actions;
export const projectActions = projectSlice.actions;
export const productActions = productSlice.actions;
export const faqActions = faqSlice.actions;
export const newsActions = newsSlice.actions;

/* ------------- Assemble The Reducers ------------- */
const reducer = {
  homeReducer,
  appReducer,
  projectReducer,
  faqReducer,
  newsReducer,
  productReducer,
};

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    devTools: EnvConstant.IS_DEV,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
