import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterCustomElement } from "../../types/Characters";
import { getFavoriteItemsFromLS } from "../../utils/saveDataUser";
import { RootState } from "../store";

export interface FavoriteState {
  favoriteQqery: CharacterCustomElement[];
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
  favoriteQqery: [],
  email: "",
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialFavoriteState,
  reducers: {
    toggleFavoriteItem: (state, action: PayloadAction<AddFavorite>) => {
      const isFavoriteAlreadyState = state.favoriteQqery.some(
        (item) => (item.id = action.payload.item.id)
      );

      isFavoriteAlreadyState
        ? (state.favoriteQqery = state.favoriteQqery.filter(
            (item) => item.id !== action.payload.item.id
          ))
        : state.favoriteQqery.unshift(action.payload.item);
    },
    getFavoriteItem: (state, action: PayloadAction<FavoriteProps>) => {
      state.favoriteQqery = getFavoriteItemsFromLS(action.payload.email);
    },
    updateFavoriteItems: (state, action: PayloadAction<UpdateFavorite>) => {
      state.favoriteQqery = action.payload.item;
    },
  },
});

export const getFavorite = (state: RootState) => state.favorite.favoriteQqery;

export const { toggleFavoriteItem, getFavoriteItem, updateFavoriteItems } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
