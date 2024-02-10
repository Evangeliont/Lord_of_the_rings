import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { getDataOneApi } from "./services/getDataOneApi";
import slices from "./slice";
import loggerMiddleware from "../middleware/loggerMiddleware";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      [getDataOneApi.reducerPath]: getDataOneApi.reducer,
      slices,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(getDataOneApi.middleware)
        .concat(loggerMiddleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
