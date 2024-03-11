import { configureStore } from "@reduxjs/toolkit";
import { dataOneApi } from "./api/dataOneApi";
import { userSlice } from "./slices/uesrSlice";

export const store = configureStore({
  reducer: {
    [dataOneApi.reducerPath]: dataOneApi.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataOneApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
