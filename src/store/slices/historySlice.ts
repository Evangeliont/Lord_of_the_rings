import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterCustomElement } from "../../types/Characters";
import { getParseItemsLS } from "../../utils/saveDataUser";
import { RootState } from "../store";

export type searchQuery = string;

interface addHistory {
  search: string;
  email?: string;
}

export interface HistoryState {
  historyQuery: searchQuery[];
  email?: string;
}

const initialHistoryState: HistoryState = {
  historyQuery: [],
  email: "",
};

interface updateSearchQuery {
  historyQuery: searchQuery[];
  email: string;
}

export interface LSData {
  username: string;
  email: string;
  password: string;
  favorite: CharacterCustomElement[];
  history: string[];
}

export const historySlice = createSlice({
  name: "history",
  initialState: initialHistoryState,
  reducers: {
    addHistoryItem(state, action: PayloadAction<addHistory>) {
      state.historyQuery.unshift(action.payload.search);
    },
    deleteHistoryItem(state, action: PayloadAction<addHistory>) {
      state.historyQuery = state.historyQuery.filter(
        (item) => item !== action.payload.search
      );
    },
    updateHistoryItem(state, action: PayloadAction<updateSearchQuery>) {
      state.historyQuery = action.payload.historyQuery;
    },
    getHistoryItem(state, action: PayloadAction<string>) {
      const data = getParseItemsLS(action.payload);
      if (data) {
        state.historyQuery = data.history;
      }
    },
  },
});

export const getHistory = (state: RootState) => state.history.historyQuery;

export const {
  addHistoryItem,
  deleteHistoryItem,
  updateHistoryItem,
  getHistoryItem,
} = historySlice.actions;
export default historySlice.reducer;
