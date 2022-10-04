import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getStory } from "../../utils/apis";
import type { AppState } from "../../store";
import { Data } from "../../interfaces/pages-interface";

export const loadCard = createAsyncThunk(
  "@@card/card-load",
  async (type: number) => {
    const card = await getStory(type);
    return card;
  }
);

interface CardsState {
  status: string;
  error: string | null;
  card: Data | null;
}

const initialState: CardsState = {
  status: "idle",
  error: "",
  card: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    actionClearCard: (state) => (state = initialState),
  },
  extraReducers: (build) => {
    build
      .addCase(loadCard.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCard.rejected, (state, action) => {
        state.status = "rejected";
        state.error = String(action.payload);
      })
      .addCase(loadCard.fulfilled, (state, action) => {
        state.status = "received";
        state.card = action.payload;
      });
  },
});

export const { actionClearCard } = cardSlice.actions;

export const selectCard = (state: AppState) => state.card;

export const cardReducer = cardSlice.reducer;
