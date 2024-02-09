import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userLoggedOut } from "./userSlice";

interface authState {
  isDropDownSignOut: boolean;
}

const initialState: authState = {
  isDropDownSignOut: false,
};

export const interfaceСhange = createSlice({
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

export default interfaceСhange.reducer;
export const { changeIsDropDownSignOut } = interfaceСhange.actions;
