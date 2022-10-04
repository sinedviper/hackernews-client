import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getStories } from "../../utils/apis";
import type { AppState } from "../../store";
import { Data } from "../../interfaces/pages-interface";

export const loadPages = createAsyncThunk(
  "@@cards/cards-load",
  async (type: string) => {
    const cards = await getStories(type);
    return cards as { posts: Data[]; size: number };
  }
);

export const updateCards = createAsyncThunk(
  "@@cards/cards-update",
  async (update: { type: string; num: number }) => {
    const cards = await getStories(update.type, update.num);
    return cards as { posts: Data[]; size: number };
  }
);

interface CardsState {
  status: string;
  error: string | null;
  cards: { posts: Data[]; size: number };
}

const initialState: CardsState = {
  status: "idle",
  error: "",
  cards: { posts: [], size: 0 },
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
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
        state.cards = action.payload as {
          posts: Data[];
          size: number;
        };
      })
      .addCase(updateCards.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateCards.rejected, (state, action) => {
        state.status = "rejected";
        state.error = String(action.payload);
      })
      .addCase(updateCards.fulfilled, (state, action) => {
        state.status = "received";
        if (action.payload)
          state.cards = {
            posts: [...state.cards.posts, ...action.payload.posts],
            size: action.payload.size,
          };
      });
  },
});

export const selectCards = (state: AppState) => state.cards;

export const cardsReducer = cardsSlice.reducer;
