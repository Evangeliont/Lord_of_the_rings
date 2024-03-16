import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dataOneApi } from "./api/dataOneApi";
import { userSlice } from "./slices/userSlice";
import { favoriteSlice } from "./slices/favoriteSlice";
import { LSMiddleware } from "./middleware/middleware";
import { historySlice } from "./slices/historySlice";

export const store = configureStore({
  reducer: {
    [dataOneApi.reducerPath]: dataOneApi.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [favoriteSlice.reducerPath]: favoriteSlice.reducer,
    [historySlice.reducerPath]: historySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(dataOneApi.middleware)
      .prepend(LSMiddleware.middleware),
});

setupListeners(store.dispatch);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
