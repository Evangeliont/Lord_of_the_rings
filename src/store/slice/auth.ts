import { User } from "../../interfaces/user";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface authState {
  isAuth: boolean;
  user: User;
}

const initialStateUser: User = {
  displayName: "",
  email: "",
  photoURL: "",
  uid: "",
};

const initialState: authState = {
  isAuth: false,
  user: initialStateUser,
};

export const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    changeUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    userLoggedOut: (state) => {
      state.user = initialStateUser;
      state.isAuth = false;
    },
  },
});

export default Auth.reducer;
export const { changeAuth, changeUser, userLoggedOut } = Auth.actions;
