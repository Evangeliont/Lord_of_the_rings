import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serializeCharacters, serializeQuotes } from "../util/serialization";
import { CharacterApi, CharacterCustom } from "../interfaces/character";
import { QuoteApi, QuoteCustom } from "../interfaces/quote";
import { MovieApi } from "../interfaces/movie";

export const ringsAPI = createApi({
  reducerPath: "ringsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-one-api.dev/v2",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_REACT_APP_API}`
      );
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["character"],
  endpoints: (build) => ({
    getCharacters: build.query<
      CharacterCustom,
      { page: number; name: string; sort: string; race: string }
    >({
      query: ({ page, name, sort, race }) => ({
        url: "/character",
        params: {
          page,
          limit: 100,
          name: `/${name}/i`,
          sort: `name:${sort}`,
          race,
        },
      }),
      transformResponse: (response: CharacterApi) => ({
        docs: serializeCharacters(response),
        limit: response.limit,
        page: response.page,
        pages: response.pages,
      }),
      providesTags: () => ["character"],
    }),
    getCharacter: build.query<CharacterCustom, string>({
      query: (id) => ({ url: `/character/${id}` }),
      transformResponse: (response: CharacterApi) => ({
        docs: serializeCharacters(response),
        limit: response.limit,
        page: response.page,
        pages: response.pages,
      }),
      providesTags: () => ["character"],
    }),
    getCharacterQuot: build.query<QuoteCustom, string>({
      query: (id) => ({ url: `/character/${id}/quote` }),
      transformResponse: (response: QuoteApi) => ({
        docs: serializeQuotes(response),
      }),
      providesTags: () => ["character"],
    }),
    getMovieId: build.query<MovieApi, string>({
      query: (id) => ({ url: `/movie/${id}` }),
      providesTags: () => ["character"],
    }),
    getCharacterSpecific: build.query<CharacterCustom, void>({
      query: () => ({
        url: "/character",
        params: {
          name: "Frodo Baggins,Aragorn II Elessar,Gandalf,Legolas,Gimli,Sauron,Faramir",
        },
      }),
      transformResponse: (response: CharacterApi) => ({
        docs: serializeCharacters(response),
        limit: response.limit,
        page: response.page,
        pages: response.pages,
      }),
      providesTags: () => ["character"],
    }),
  }),
});
