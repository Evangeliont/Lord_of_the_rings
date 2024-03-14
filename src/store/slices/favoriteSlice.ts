import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterCustomElement } from "../../types/Characters";
import {
  getFavoriteItemsFromLS,
  getParseItemsLS,
  setParseItemsLS,
} from "../../utils/saveDataUser";
import { RootState } from "../store";

export interface FavoriteState {
  favoriteQuery: CharacterCustomElement[];
  email?: string;
}

interface FavoriteProps {
  email: string;
}

interface AddFavorite {
  item: CharacterCustomElement;
  email: string;
}

interface UpdateFavorite {
  item: CharacterCustomElement[];
  email: string;
}

const initialFavoriteState: FavoriteState = {
  favoriteQuery: [],
  email: "",
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialFavoriteState,
  reducers: {
    toggleFavoriteItem: (state, action: PayloadAction<AddFavorite>) => {
      const isFavoriteAlreadyState = state.favoriteQuery.some(
        (item) => item.id === action.payload.item.id
      );

      if (isFavoriteAlreadyState) {
        state.favoriteQuery = state.favoriteQuery.filter(
          (item) => item.id !== action.payload.item.id
        );
      } else {
        state.favoriteQuery.unshift(action.payload.item);
      }

      const userData = getParseItemsLS(action.payload.email);
      if (userData) {
        userData.favorite = state.favoriteQuery;
        setParseItemsLS(action.payload.email, userData);
      }
    },
    getFavoriteItem: (state, action: PayloadAction<FavoriteProps>) => {
      state.favoriteQuery = getFavoriteItemsFromLS(action.payload.email);
    },
    updateFavoriteItems: (state, action: PayloadAction<UpdateFavorite>) => {
      state.favoriteQuery = action.payload.item;
    },
  },
});

export const getFavorite = (state: RootState) => state.favorite.favoriteQuery;

export const { toggleFavoriteItem, getFavoriteItem, updateFavoriteItems } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
