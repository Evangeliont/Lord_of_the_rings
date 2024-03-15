import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addUser, authorizedUser, removeUser } from "../slices/userSlice";
import { CharacterCustomElement } from "../../types/Characters";
import {
  addUserLS,
  getParseItemsLS,
  logOutLS,
  setParseItemsLS,
  updateUserInfoLS,
} from "../../utils/saveDataUser";
import {
  toggleFavoriteItem,
  updateFavoriteItems,
} from "../slices/favoriteSlice";

export interface LSData {
  email: string;
  favorite: CharacterCustomElement[];
  history: string[];
  password: string;
  username: string;
}

export const LSMiddleware = createListenerMiddleware();

LSMiddleware.startListening({
  actionCreator: addUser,
  effect: (action, listenerApi) => {
    if (action.payload.email) {
      addUserLS(
        action.payload.username,
        action.payload.email,
        action.payload.password
      );
      const parseItems = updateUserInfoLS(action.payload.email);
      if (parseItems) {
        listenerApi.dispatch(
          updateFavoriteItems({
            item: parseItems.favorite,
            email: parseItems.email,
          })
        );
      }
    }
  },
});

LSMiddleware.startListening({
  actionCreator: authorizedUser,
  effect: (action, listenerApi) => {
    const parseItems = updateUserInfoLS(action.payload);
    if (parseItems) {
      listenerApi.dispatch(
        updateFavoriteItems({
          item: parseItems.favorite,
          email: parseItems.email,
        })
      );
    }
  },
});

LSMiddleware.startListening({
  actionCreator: removeUser,
  effect: () => {
    logOutLS();
  },
});

LSMiddleware.startListening({
  actionCreator: toggleFavoriteItem,
  effect: (action) => {
    const parseItems = getParseItemsLS(action.payload.email);
    if (parseItems) {
      const isItemAlreadyAdded = parseItems.favorite.some(
        (item: CharacterCustomElement) => item.id === action.payload.item.id
      );
      isItemAlreadyAdded
        ? (parseItems.favorite = parseItems.favorite.filter(
            (item: CharacterCustomElement) => item.id !== action.payload.item.id
          ))
        : parseItems.favorite.unshift(action.payload.item);
      setParseItemsLS(action.payload.email, parseItems);
    }
  },
});
