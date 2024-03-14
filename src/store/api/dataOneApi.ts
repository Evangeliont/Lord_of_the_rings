import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CharacterApi, CharacterCustom } from "../../types/Characters";
import { transformDataType } from "../../utils/TransformedDataTypes";

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
    getCharacters: builder.query<
      CharacterCustom,
      { page: number; limit: number }
    >({
      query: ({ limit, page }) => ({
        url: "/character",
        params: { limit, page: page },
      }),
      transformResponse: (response: CharacterApi) => {
        const newData = transformDataType(response);

        return {
          docs: newData,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
        };
      },
    }),
    getCharacterId: builder.query<CharacterCustom, string>({
      query: (id: string) => ({
        url: `/character/${id}`,
      }),
      transformResponse: (response: CharacterApi) => {
        const newData = transformDataType(response);

        return {
          docs: newData,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
        };
      },
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterIdQuery } = dataOneApi;
