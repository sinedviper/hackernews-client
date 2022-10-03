import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getStories } from "../../utils/apis";
import type { AppState } from "../../store";
import { Data } from "../../interfaces/pages-interface";

export const loadPages = createAsyncThunk(
  "@@cards/cards-load",
  async (type: string) => {
    const cards = await getStories(type);
    return cards;
  }
);

interface CardsState {
  status: string;
  error: string | null;
  cards: any;
  card: Data | null;
}

const initialState: CardsState = {
  status: "idle",
  error: "",
  cards: [],
  card: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    actionCardId: (state, action) => {
      state.cards.map((val: Data) => {
        if (val.id == action.payload) {
          state.card = val;
        }
      });
    },
  },
  extraReducers: (build) => {
    build
      .addCase(loadPages.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadPages.rejected, (state, action) => {
        state.status = "rejected";
        state.error = String(action.payload);
      })
      .addCase(loadPages.fulfilled, (state, action) => {
        state.status = "received";
        state.cards = action.payload;
      });
  },
});

export const { actionCardId } = cardsSlice.actions;

export const selectCards = (state: AppState) => state.cards;

export const cardsReducer = cardsSlice.reducer;
