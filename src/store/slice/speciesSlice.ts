import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userLoggedOut } from "./auth";
import { CharacterCustom, CharacterCustomElement } from "../../type/character";

interface authState {
    filterRace: string;
    favorites: CharacterCustomElement[];
    data: CharacterCustom | null;
    history: string[];
}
const initialState: authState = {
    data: null,
    filterRace: '',
    favorites: [],
    history: [],
}

export const speciesSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeFilterRace: (state, action: PayloadAction<string>) => {
            state.filterRace = action.payload;
        },
        toggleLike: (state, action: PayloadAction<CharacterCustomElement>) => {
            const index = state.favorites.findIndex(x => x.id === action.payload.id)
            if (index !== -1) state.favorites.splice(index, 1)
            else {
                state.favorites.push({
                    ...action.payload,
                    like: true
                })
            }
        },
        checkLikeStateAndFavorite: (state, action: PayloadAction<CharacterCustom>) => {
            const newData = action.payload.docs.map(el => {
                const index = state.favorites.findIndex(x => x.id === el.id)
                if (index === -1) return el
                return {
                    ...el,
                    like: true
                }
            })
            state.data = {
                docs: newData,
                limit: action.payload.limit,
                page: action.payload.page,
                pages: action.payload.pages
            };
        },
        changeFavorite: (state, action: PayloadAction<CharacterCustomElement[]>) => {
            state.favorites = action.payload;
        },
        changeHistory: (state, action: PayloadAction<string[]>) => {
            state.history = action.payload
        },
        addItemHistory: (state, action: PayloadAction<string>) => {
            state.history.push(action.payload)
        },
        removeItemHistory: (state, action: PayloadAction<number>) => {
            state.history.splice(action.payload, 1)
        },
        clearAllHistory: (state, action: PayloadAction<undefined>) => {
            state.history = []
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userLoggedOut, (state) => {
            state.favorites = [];
            state.history = []
        });
    }

})

export default speciesSlice.reducer;
export const { changeFilterRace, toggleLike, checkLikeStateAndFavorite, changeFavorite, addItemHistory, changeHistory, removeItemHistory, clearAllHistory } = speciesSlice.actions;