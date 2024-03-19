import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CharacterApi, CharacterCustom } from "../../types/DataApiTypes";
import { transformData } from "../../utils/TransformedData";

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
    getCharacters: builder.query<CharacterCustom, string>({
      query: () => ({
        url: "/character",
      }),
      transformResponse: (response: CharacterApi) => {
        return { docs: transformData(response) } as CharacterCustom;
      },
    }),
    getCharacterId: builder.query<CharacterCustom, string>({
      query: (id: string) => ({
        url: `/character/${id}`,
      }),
      transformResponse: (response: CharacterApi) => {
        return { docs: transformData(response) } as CharacterCustom;
      },
    }),
    getCharacterSearch: builder.query<CharacterCustom, string>({
      query: (name: string) => ({
        url: "/character",
        params: { name },
      }),
      transformResponse: (response: CharacterApi) => {
        return { docs: transformData(response) } as CharacterCustom;
      },
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterIdQuery,
  useGetCharacterSearchQuery,
} = dataOneApi;
