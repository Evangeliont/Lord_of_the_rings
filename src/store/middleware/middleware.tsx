import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addUser, authorizedUser, removeUser } from "../slices/userSlice";
import { CharacterCustomElement } from "../../types/Characters";
import {
  addUserLS,
  logOutLS,
  updateUserInfoLS,
} from "../../utils/saveDataUser";

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
  effect: (action) => {
    if (action.payload.email) {
      addUserLS(
        action.payload.username,
        action.payload.email,
        action.payload.password
      );
      updateUserInfoLS(action.payload.email);
    }
  },
});

LSMiddleware.startListening({
  actionCreator: authorizedUser,
  effect: (action) => {
    updateUserInfoLS(action.payload);
  },
});

LSMiddleware.startListening({
  actionCreator: removeUser,
  effect: () => {
    logOutLS();
  },
});
