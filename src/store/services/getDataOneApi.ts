import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  serializationCharacter,
  serializationQuote,
} from "../../util/serialization";
import { Character, CharacterCustom } from "../../interfaces/character";
import { Quote, QuoteCustom } from "../../interfaces/quote";
import { Movie } from "../../interfaces/movie";

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
    getCharacter: builder.query<CharacterCustom, string>({
      query: () => ({
        url: "/character",
        params: {
          limit: 100,
        },
      }),
      transformResponse: (response: Character) => {
        const newData = serializationCharacter(response);

        return {
          docs: newData,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
        };
      },
      providesTags: () => ["character"],
    }),

    getCharacterId: builder.query<CharacterCustom, string>({
      query: (id: string) => ({
        url: `/character/${id}`,
      }),
      transformResponse: (response: Character) => {
        const newData = serializationCharacter(response);
        return {
          docs: newData,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
        };
      },
      providesTags: () => ["character"],
    }),
    getCharacterQuot: builder.query<QuoteCustom, string>({
      query: (id: string) => ({
        url: `/character/${id}/quote`,
      }),
      transformResponse: (response: Quote) => {
        const newData = serializationQuote(response);
        return {
          docs: newData,
        };
      },
      providesTags: () => ["character"],
    }),
    getMovieId: builder.query<Movie, string>({
      query: (id: string) => ({
        url: `/movie/${id}`,
      }),
      providesTags: () => ["character"],
    }),
    getCharacterSpecific: builder.query<CharacterCustom, void>({
      query: () => ({
        url: "/character",
        params: {
          name: `Frodo Baggins,Aragorn II Elessar,Gandalf,Legolas,Gimli,Sauron,Faramir`,
        },
      }),
      transformResponse: (response: Character) => {
        const newData = serializationCharacter(response);

        return {
          docs: newData,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
        };
      },
      providesTags: () => ["character"],
    }),
  }),
});
