import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CharacterApi } from "../../types/Characters";

export const dataOneApi = createApi({
  reducerPath: "dataOneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-one-api.dev/v2",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Bearer " + import.meta.env.VITE_TOKEN);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCahracters: builder.query<CharacterApi, string>({
      query: () => ({
        url: "/character",
        params: { limit: 12 },
      }),
    }),
  }),
});

export const { useGetCahractersQuery } = dataOneApi;
