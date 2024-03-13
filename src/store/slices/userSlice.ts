import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getParseItemsLS } from "../../utils/saveDataUser";
import { RootState } from "../store";

export interface UserState {
  username?: string;
  email?: string;
  password?: string;
}

export const initialState: UserState = {
  username: "",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    authorizedUser(state, action: PayloadAction<string>) {
      const user = getParseItemsLS(action.payload);
      if (user) {
        state.username = user.username;
        state.email = user.email;
        state.password = user.password;
      }
    },
    removeUser: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const getEmail = (state: RootState) => state.user.email;

export const { addUser, authorizedUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
