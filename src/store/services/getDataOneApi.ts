import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "../../interfaces/character";

export const getDataOneApi = createApi({
  reducerPath: "getDataOneApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-one-api.dev/v2",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Bearer " + import.meta.env.VITE_TOKEN);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["character"],
  endpoints: (builder) => ({
    getCharacter: builder.query<Character, string>({
      query: () => `/character`,
    }),
  }),
});

export const { useGetCharacterQuery } = getDataOneApi;
