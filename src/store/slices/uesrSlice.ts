import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    removeUser: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
