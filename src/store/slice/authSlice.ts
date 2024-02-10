import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userLoggedOut } from "./userSlice";

interface authState {
  isDropDownSignOut: boolean;
}

const initialState: authState = {
  isDropDownSignOut: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeIsDropDownSignOut: (state, action: PayloadAction<boolean>) => {
      state.isDropDownSignOut = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoggedOut, (state) => {
      state.isDropDownSignOut = false;
    });
  },
});

export default auth.reducer;
export const { changeIsDropDownSignOut } = auth.actions;
