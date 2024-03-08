import { configureStore } from "@reduxjs/toolkit";
import { dataOneApi } from "./api/dataOneApi";

export const store = configureStore({
  reducer: {
    [dataOneApi.reducerPath]: dataOneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataOneApi.middleware),
});
