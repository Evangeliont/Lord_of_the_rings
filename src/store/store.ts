import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { getDataOneApi } from "./services/getDataOneApi";
// import polling from "../features/polling/pollingSlice";
// import auth from "../features/auth/authSlice";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      [getDataOneApi.reducerPath]: getDataOneApi.reducer,
      // polling,
      // auth,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getDataOneApi.middleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
