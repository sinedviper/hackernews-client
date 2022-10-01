import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getStories } from "../../utils/apis";
import type { AppState } from "../../store";

export const loadPages = createAsyncThunk(
  "@@pages/pages-load",
  async (type: string) => {
    return await getStories(type);
  }
);

interface PagesState {
  status: string;
  error: string | null;
  list: any;
}

const initialState: PagesState = {
  status: "idle",
  error: "",
  list: [],
};

const pagesSlice = createSlice({
  name: "pages",
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
        state.list = action.payload;
      });
  },
});

export const selectPages = (state: AppState) => state.pages;

export const pagesReducer = pagesSlice.reducer;
